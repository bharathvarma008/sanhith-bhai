import { WORKOUTS, filterWorkouts } from '../data/workouts';
import { MUSCLE_GROUPS } from '../data/muscles';

/**
 * Recommendation Engine
 *
 * Generates personalized workout recommendations based on:
 * - User goals and preferences
 * - Recent workout history
 * - Muscle fatigue/recovery
 * - Weekly muscle balance
 */

// Recovery time in hours for each intensity level
const RECOVERY_HOURS = {
  light: 24,
  moderate: 48,
  heavy: 72,
};

// Goal to intensity mapping
const GOAL_INTENSITY_MAP = {
  muscle_gain: ['moderate', 'heavy'],
  fat_loss: ['light', 'moderate'],
  strength: ['heavy'],
  general_fitness: ['light', 'moderate'],
};

// Goal to preferred split types
const GOAL_SPLIT_MAP = {
  muscle_gain: ['push', 'pull', 'legs', 'upper', 'lower'],
  fat_loss: ['full_body', 'upper', 'lower'],
  strength: ['push', 'pull', 'legs', 'full_body'],
  general_fitness: ['full_body', 'upper', 'lower'],
};

/**
 * Calculate muscle fatigue scores (0-100)
 * Higher score = more fatigued = needs more rest
 */
export const calculateMuscleFatigue = (history) => {
  const fatigue = {};
  const now = new Date();

  // Initialize all muscles with 0 fatigue
  Object.keys(MUSCLE_GROUPS).forEach(muscle => {
    fatigue[muscle] = 0;
  });

  // Calculate fatigue based on recent workouts
  history.forEach(workout => {
    const hoursAgo = (now - new Date(workout.completedAt)) / (1000 * 60 * 60);
    const intensity = workout.intensity || 'moderate';
    const recoveryTime = RECOVERY_HOURS[intensity];

    (workout.musclesTrained || []).forEach(muscle => {
      // Fatigue decreases linearly over recovery time
      if (hoursAgo < recoveryTime) {
        const fatigueLevel = Math.round((1 - hoursAgo / recoveryTime) * 100);
        fatigue[muscle] = Math.max(fatigue[muscle], fatigueLevel);
      }
    });
  });

  return fatigue;
};

/**
 * Calculate which muscles have been neglected
 * Returns object with days since each muscle was trained
 */
export const calculateMuscleNeglect = (history) => {
  const lastTrained = {};
  const now = new Date();

  Object.keys(MUSCLE_GROUPS).forEach(muscle => {
    lastTrained[muscle] = Infinity; // Never trained
  });

  history.forEach(workout => {
    const daysAgo = (now - new Date(workout.completedAt)) / (1000 * 60 * 60 * 24);

    (workout.musclesTrained || []).forEach(muscle => {
      lastTrained[muscle] = Math.min(lastTrained[muscle], daysAgo);
    });
  });

  return lastTrained;
};

/**
 * Score a workout based on user profile, fatigue, and goals
 */
export const scoreWorkout = (workout, userProfile, fatigue, neglect) => {
  let score = 50; // Base score

  // 1. Goal alignment (+/- 30 points)
  const preferredIntensities = GOAL_INTENSITY_MAP[userProfile.goal] || [];
  if (preferredIntensities.includes(workout.intensity)) {
    score += 20;
  }

  const preferredSplits = GOAL_SPLIT_MAP[userProfile.goal] || [];
  if (preferredSplits.includes(workout.splitType)) {
    score += 10;
  }

  // 2. Recovery score (-50 to 0 points)
  let maxFatigue = 0;
  workout.primaryMuscles.forEach(muscle => {
    maxFatigue = Math.max(maxFatigue, fatigue[muscle] || 0);
  });

  // Penalize if muscles are still fatigued
  if (maxFatigue > 70) {
    score -= 50; // Heavily fatigued, don't recommend
  } else if (maxFatigue > 40) {
    score -= 25; // Somewhat fatigued
  } else if (maxFatigue > 20) {
    score -= 10; // Slightly fatigued
  }

  // 3. Weekly balance (+20 points for neglected muscles)
  let neglectBonus = 0;
  workout.primaryMuscles.forEach(muscle => {
    const daysNeglected = neglect[muscle] || 0;
    if (daysNeglected >= 5) {
      neglectBonus += 20; // Very neglected
    } else if (daysNeglected >= 3) {
      neglectBonus += 10; // Moderately neglected
    }
  });
  score += Math.min(neglectBonus, 30); // Cap at 30

  // 4. Priority muscle bonus (+10 points)
  if (userProfile.musclePriorities && userProfile.musclePriorities.length > 0) {
    const hasPriority = workout.primaryMuscles.some(m =>
      userProfile.musclePriorities.includes(m)
    );
    if (hasPriority) {
      score += 10;
    }
  }

  // 5. Duration match (+/- 10 points)
  const targetDuration = userProfile.timePerWorkout || 45;
  const durationDiff = Math.abs(workout.duration - targetDuration);

  if (durationDiff <= 5) {
    score += 10; // Perfect match
  } else if (durationDiff <= 15) {
    score += 5; // Close match
  } else if (durationDiff > 30) {
    score -= 10; // Too different
  }

  // 6. Experience level match (+/- 10 points)
  if (workout.difficulty === userProfile.experienceLevel) {
    score += 10;
  } else if (
    (workout.difficulty === 'beginner' && userProfile.experienceLevel === 'advanced') ||
    (workout.difficulty === 'advanced' && userProfile.experienceLevel === 'beginner')
  ) {
    score -= 10;
  }

  return Math.max(0, Math.min(100, score));
};

/**
 * Get workout recommendation for today
 * Returns top 3 recommended workouts
 */
export const getRecommendation = (userProfile, history, workouts = WORKOUTS) => {
  // Filter workouts by user constraints
  const availableWorkouts = filterWorkouts({
    equipment: userProfile.equipment,
    difficulty: userProfile.experienceLevel,
    duration: (userProfile.timePerWorkout || 45) + 15, // Allow 15 min buffer
  });

  if (availableWorkouts.length === 0) {
    // Fallback: less strict filtering
    const fallbackWorkouts = filterWorkouts({
      equipment: userProfile.equipment,
    });
    if (fallbackWorkouts.length === 0) {
      return workouts.slice(0, 3);
    }
    return fallbackWorkouts.slice(0, 3);
  }

  // Calculate fatigue and neglect
  const fatigue = calculateMuscleFatigue(history);
  const neglect = calculateMuscleNeglect(history);

  // Score each workout
  const scored = availableWorkouts.map(workout => ({
    ...workout,
    score: scoreWorkout(workout, userProfile, fatigue, neglect),
  }));

  // Sort by score (highest first) and return top 3
  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, 3);
};

/**
 * Get a smart split suggestion based on recent history
 */
export const getSuggestedSplit = (history) => {
  const recentSplits = history.slice(0, 3).map(h => h.splitType);

  // If did push yesterday, suggest pull today
  if (recentSplits[0] === 'push') return 'pull';
  if (recentSplits[0] === 'pull') return 'legs';
  if (recentSplits[0] === 'legs') return 'push';
  if (recentSplits[0] === 'upper') return 'lower';
  if (recentSplits[0] === 'lower') return 'upper';

  // Default to full body if no history
  return 'full_body';
};

/**
 * Check if user should take a rest day
 */
export const shouldRest = (history, daysPerWeek) => {
  // Get workouts in last 7 days
  const weekHistory = history.filter(h => {
    const daysAgo = (new Date() - new Date(h.completedAt)) / (1000 * 60 * 60 * 24);
    return daysAgo <= 7;
  });

  // If already hit weekly goal, suggest rest
  if (weekHistory.length >= daysPerWeek) {
    return true;
  }

  // If worked out 3+ days in a row, suggest rest
  const recentDays = new Set();
  history.slice(0, 5).forEach(h => {
    const date = new Date(h.completedAt).toDateString();
    recentDays.add(date);
  });

  const today = new Date();
  let consecutiveDays = 0;

  for (let i = 0; i < 4; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(checkDate.getDate() - i);
    if (recentDays.has(checkDate.toDateString())) {
      consecutiveDays++;
    } else {
      break;
    }
  }

  return consecutiveDays >= 3;
};
