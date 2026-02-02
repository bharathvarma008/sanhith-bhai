import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getWorkoutHistory,
  saveWorkoutHistory,
  getWeeklySummary,
} from '../services/storage';
import { getRecommendation } from '../services/recommend';
import { getWorkoutById, WORKOUTS } from '../data/workouts';
import { getExerciseById } from '../data/exercises';

const WorkoutContext = createContext(null);

export const WorkoutProvider = ({ children }) => {
  // Recommendation state
  const [recommendations, setRecommendations] = useState([]);
  const [isLoadingRecommendations, setIsLoadingRecommendations] = useState(true);

  // Active workout state
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [workoutStartTime, setWorkoutStartTime] = useState(null);
  const [completedExercises, setCompletedExercises] = useState([]);

  // History state
  const [history, setHistory] = useState([]);
  const [weeklySummary, setWeeklySummary] = useState(null);

  // Load history on mount
  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const [recentHistory, summary] = await Promise.all([
        getWorkoutHistory(7),
        getWeeklySummary(),
      ]);
      setHistory(recentHistory);
      setWeeklySummary(summary);
    } catch (error) {
      console.error('Error loading history:', error);
    }
  };

  // Get recommendations for user
  const loadRecommendations = async (userProfile) => {
    try {
      setIsLoadingRecommendations(true);
      const recentHistory = await getWorkoutHistory(7);

      // Map history to include workout details
      const historyWithDetails = recentHistory.map(h => ({
        ...h,
        ...getWorkoutById(h.workoutId),
      }));

      const recs = getRecommendation(userProfile, historyWithDetails, WORKOUTS);
      setRecommendations(recs);
      setHistory(recentHistory);
    } catch (error) {
      console.error('Error loading recommendations:', error);
      // Fallback to first 3 workouts
      setRecommendations(WORKOUTS.slice(0, 3));
    } finally {
      setIsLoadingRecommendations(false);
    }
  };

  // Start a workout
  const startWorkout = (workout) => {
    setActiveWorkout(workout);
    setCurrentExerciseIndex(0);
    setCurrentSet(1);
    setWorkoutStartTime(new Date());
    setCompletedExercises([]);
  };

  // Get current exercise with full details
  const getCurrentExercise = () => {
    if (!activeWorkout) return null;
    const exerciseEntry = activeWorkout.exercises[currentExerciseIndex];
    if (!exerciseEntry) return null;

    const exercise = getExerciseById(exerciseEntry.exerciseId);
    return {
      ...exercise,
      ...exerciseEntry,
      index: currentExerciseIndex,
      totalExercises: activeWorkout.exercises.length,
    };
  };

  // Complete current set
  const completeSet = () => {
    const exercise = activeWorkout.exercises[currentExerciseIndex];
    if (currentSet < exercise.sets) {
      setCurrentSet(currentSet + 1);
    } else {
      // Move to next exercise
      completeExercise();
    }
  };

  // Complete current exercise
  const completeExercise = () => {
    const exercise = activeWorkout.exercises[currentExerciseIndex];
    setCompletedExercises([...completedExercises, exercise.exerciseId]);

    if (currentExerciseIndex < activeWorkout.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setCurrentSet(1);
    } else {
      // Workout complete - handled by caller
    }
  };

  // Skip current exercise
  const skipExercise = () => {
    if (currentExerciseIndex < activeWorkout.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setCurrentSet(1);
    }
  };

  // Complete and save workout
  const finishWorkout = async (completed = true) => {
    if (!activeWorkout) return;

    const duration = workoutStartTime
      ? Math.round((new Date() - workoutStartTime) / 1000 / 60)
      : activeWorkout.duration;

    const historyEntry = {
      workoutId: activeWorkout.id,
      workoutName: activeWorkout.name,
      splitType: activeWorkout.splitType,
      musclesTrained: activeWorkout.primaryMuscles,
      intensity: activeWorkout.intensity,
      duration,
      completed,
      exercisesCompleted: completedExercises.length,
      totalExercises: activeWorkout.exercises.length,
    };

    try {
      await saveWorkoutHistory(historyEntry);
      await loadHistory();
    } catch (error) {
      console.error('Error saving workout:', error);
    }

    // Reset active workout state
    setActiveWorkout(null);
    setCurrentExerciseIndex(0);
    setCurrentSet(1);
    setWorkoutStartTime(null);
    setCompletedExercises([]);
  };

  // Cancel workout without saving
  const cancelWorkout = () => {
    setActiveWorkout(null);
    setCurrentExerciseIndex(0);
    setCurrentSet(1);
    setWorkoutStartTime(null);
    setCompletedExercises([]);
  };

  // Check if workout is complete
  const isWorkoutComplete = () => {
    if (!activeWorkout) return false;
    return currentExerciseIndex >= activeWorkout.exercises.length - 1 &&
           currentSet >= activeWorkout.exercises[currentExerciseIndex]?.sets;
  };

  // Get workout progress (0-1)
  const getProgress = () => {
    if (!activeWorkout) return 0;
    const totalExercises = activeWorkout.exercises.length;
    return (currentExerciseIndex + (currentSet - 1) / activeWorkout.exercises[currentExerciseIndex]?.sets) / totalExercises;
  };

  const value = {
    // Recommendations
    recommendations,
    isLoadingRecommendations,
    loadRecommendations,

    // Active workout
    activeWorkout,
    currentExerciseIndex,
    currentSet,
    workoutStartTime,
    completedExercises,
    getCurrentExercise,
    startWorkout,
    completeSet,
    completeExercise,
    skipExercise,
    finishWorkout,
    cancelWorkout,
    isWorkoutComplete,
    getProgress,

    // History
    history,
    weeklySummary,
    loadHistory,
  };

  return (
    <WorkoutContext.Provider value={value}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
};

export default WorkoutContext;
