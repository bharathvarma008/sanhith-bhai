import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Vibration,
} from 'react-native';
import { useWorkout } from '../context/WorkoutContext';
import { useUser } from '../context/UserContext';
import Timer from '../components/Timer';
import ProgressRing from '../components/ProgressRing';
import { COLORS } from '../utils/constants';
import { getExerciseById } from '../data/exercises';

const ActiveWorkoutScreen = ({ navigation }) => {
  const {
    activeWorkout,
    currentExerciseIndex,
    currentSet,
    getCurrentExercise,
    completeSet,
    skipExercise,
    finishWorkout,
    cancelWorkout,
    isWorkoutComplete,
    getProgress,
  } = useWorkout();
  const { refreshStreak } = useUser();

  const [isResting, setIsResting] = useState(false);
  const [restTimeLeft, setRestTimeLeft] = useState(0);
  const timerRef = useRef(null);

  const currentExercise = getCurrentExercise();

  useEffect(() => {
    if (isResting && restTimeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setRestTimeLeft(restTimeLeft - 1);
      }, 1000);
    } else if (isResting && restTimeLeft === 0) {
      // Rest complete
      Vibration.vibrate(500);
      setIsResting(false);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isResting, restTimeLeft]);

  if (!activeWorkout || !currentExercise) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>No active workout</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const handleCompleteSet = () => {
    if (isWorkoutComplete()) {
      handleFinishWorkout();
    } else {
      // Start rest timer
      setIsResting(true);
      setRestTimeLeft(currentExercise.restSeconds);
      completeSet();
    }
  };

  const handleSkipRest = () => {
    setIsResting(false);
    setRestTimeLeft(0);
  };

  const handleSkipExercise = () => {
    Alert.alert(
      'Skip Exercise',
      'Are you sure you want to skip this exercise?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Skip', onPress: skipExercise, style: 'destructive' },
      ]
    );
  };

  const handleFinishWorkout = async () => {
    await finishWorkout(true);
    await refreshStreak();
    navigation.replace('WorkoutComplete');
  };

  const handleEndEarly = () => {
    Alert.alert(
      'End Workout',
      'Are you sure you want to end this workout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'End & Save',
          onPress: async () => {
            await finishWorkout(false);
            navigation.goBack();
          },
        },
        {
          text: 'Discard',
          onPress: () => {
            cancelWorkout();
            navigation.goBack();
          },
          style: 'destructive',
        },
      ]
    );
  };

  const progress = getProgress();
  const exerciseDetails = getExerciseById(currentExercise.exerciseId);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleEndEarly}>
          <Text style={styles.endText}>End</Text>
        </TouchableOpacity>
        <View style={styles.progressInfo}>
          <Text style={styles.workoutName}>{activeWorkout.name}</Text>
          <Text style={styles.exerciseCount}>
            {currentExerciseIndex + 1} of {activeWorkout.exercises.length}
          </Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {isResting ? (
          // Rest Screen
          <View style={styles.restContainer}>
            <Text style={styles.restLabel}>Rest</Text>
            <ProgressRing
              progress={1 - restTimeLeft / currentExercise.restSeconds}
              size={200}
              strokeWidth={12}
              color={COLORS.primary}
            >
              <Text style={styles.timerText}>{restTimeLeft}</Text>
              <Text style={styles.timerLabel}>seconds</Text>
            </ProgressRing>

            <Text style={styles.upNextLabel}>Up Next</Text>
            <Text style={styles.upNextExercise}>
              {currentExercise.name}
            </Text>
            <Text style={styles.upNextSets}>
              Set {currentSet} of {currentExercise.sets}
            </Text>

            <TouchableOpacity
              style={styles.skipRestButton}
              onPress={handleSkipRest}
            >
              <Text style={styles.skipRestText}>Skip Rest</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // Exercise Screen
          <View style={styles.exerciseContainer}>
            <View style={styles.setIndicator}>
              <Text style={styles.setLabel}>SET</Text>
              <Text style={styles.setNumber}>
                {currentSet}/{currentExercise.sets}
              </Text>
            </View>

            <Text style={styles.exerciseName}>{currentExercise.name}</Text>
            <Text style={styles.repsText}>{currentExercise.reps} reps</Text>

            {exerciseDetails?.instructions && (
              <View style={styles.instructionsCard}>
                <Text style={styles.instructionsText}>
                  {exerciseDetails.instructions}
                </Text>
              </View>
            )}

            <View style={styles.musclesTrained}>
              {currentExercise.primaryMuscles?.map((muscle) => (
                <View key={muscle} style={styles.muscleTag}>
                  <Text style={styles.muscleText}>{muscle}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>

      {/* Footer Actions */}
      {!isResting && (
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={handleSkipExercise}
          >
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.completeButton}
            onPress={handleCompleteSet}
          >
            <Text style={styles.completeButtonText}>
              {isWorkoutComplete() ? 'Finish' : 'Complete Set'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

// Workout Complete Screen (simple version - could be a separate file)
const WorkoutCompleteScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container, styles.completeContainer]}>
      <Text style={styles.completeEmoji}>💪</Text>
      <Text style={styles.completeTitle}>Workout Complete!</Text>
      <Text style={styles.completeSubtitle}>Great job! Keep up the consistency.</Text>

      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.navigate('Today')}
      >
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export { WorkoutCompleteScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  endText: {
    fontSize: 16,
    color: COLORS.error,
    fontWeight: '600',
  },
  progressInfo: {
    alignItems: 'center',
  },
  workoutName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  exerciseCount: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  progressBar: {
    height: 4,
    backgroundColor: COLORS.border,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  restContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restLabel: {
    fontSize: 18,
    color: COLORS.textSecondary,
    marginBottom: 20,
  },
  timerText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  timerLabel: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  upNextLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 40,
  },
  upNextExercise: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 8,
  },
  upNextSets: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  skipRestButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  skipRestText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '500',
  },
  exerciseContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  setIndicator: {
    backgroundColor: COLORS.primary + '20',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 30,
  },
  setLabel: {
    fontSize: 12,
    color: COLORS.primary,
    textAlign: 'center',
  },
  setNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
  },
  exerciseName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  repsText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 30,
  },
  instructionsCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    width: '100%',
  },
  instructionsText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 22,
    textAlign: 'center',
  },
  musclesTrained: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  muscleTag: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  muscleText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textTransform: 'capitalize',
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  skipButton: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  skipButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  completeButton: {
    flex: 2,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.surface,
  },
  errorText: {
    fontSize: 18,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 40,
  },
  backButton: {
    marginTop: 20,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  backButtonText: {
    color: COLORS.surface,
    fontWeight: '600',
  },
  // Complete screen styles
  completeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  completeEmoji: {
    fontSize: 80,
    marginBottom: 24,
  },
  completeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  completeSubtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 40,
  },
  doneButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 28,
  },
  doneButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.surface,
  },
});

export default ActiveWorkoutScreen;
