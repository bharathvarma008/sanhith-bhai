import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  USER_PROFILE: '@atlas_user_profile',
  WORKOUT_HISTORY: '@atlas_workout_history',
  ONBOARDING_COMPLETE: '@atlas_onboarding_complete',
};

// User Profile
export const saveUserProfile = async (profile) => {
  try {
    const data = {
      ...profile,
      id: profile.id || generateId(),
      createdAt: profile.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await AsyncStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const data = await AsyncStorage.getItem(KEYS.USER_PROFILE);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
};

export const updateUserProfile = async (updates) => {
  try {
    const current = await getUserProfile();
    if (!current) throw new Error('No user profile found');

    const updated = {
      ...current,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    await AsyncStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Workout History
export const saveWorkoutHistory = async (entry) => {
  try {
    const history = await getWorkoutHistory();
    const newEntry = {
      id: generateId(),
      ...entry,
      completedAt: new Date().toISOString(),
    };
    history.push(newEntry);
    await AsyncStorage.setItem(KEYS.WORKOUT_HISTORY, JSON.stringify(history));
    return newEntry;
  } catch (error) {
    console.error('Error saving workout history:', error);
    throw error;
  }
};

export const getWorkoutHistory = async (days = null) => {
  try {
    const data = await AsyncStorage.getItem(KEYS.WORKOUT_HISTORY);
    let history = data ? JSON.parse(data) : [];

    if (days) {
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);
      history = history.filter(h => new Date(h.completedAt) >= cutoff);
    }

    return history.sort((a, b) =>
      new Date(b.completedAt) - new Date(a.completedAt)
    );
  } catch (error) {
    console.error('Error getting workout history:', error);
    return [];
  }
};

export const getRecentHistory = async (limit = 10) => {
  const history = await getWorkoutHistory();
  return history.slice(0, limit);
};

// Streak Tracking
export const getStreak = async () => {
  try {
    const history = await getWorkoutHistory(30); // Last 30 days
    if (history.length === 0) return 0;

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Group workouts by date
    const workoutDates = new Set(
      history.map(h => {
        const date = new Date(h.completedAt);
        date.setHours(0, 0, 0, 0);
        return date.getTime();
      })
    );

    // Count consecutive days
    let currentDate = today.getTime();
    const oneDay = 24 * 60 * 60 * 1000;

    // Check if worked out today
    if (!workoutDates.has(currentDate)) {
      // Check if worked out yesterday (streak still valid)
      currentDate -= oneDay;
      if (!workoutDates.has(currentDate)) {
        return 0;
      }
    }

    // Count streak
    while (workoutDates.has(currentDate)) {
      streak++;
      currentDate -= oneDay;
    }

    return streak;
  } catch (error) {
    console.error('Error calculating streak:', error);
    return 0;
  }
};

// Weekly Summary
export const getWeeklySummary = async () => {
  try {
    const history = await getWorkoutHistory(7);
    const musclesTrained = {};

    history.forEach(workout => {
      (workout.musclesTrained || []).forEach(muscle => {
        musclesTrained[muscle] = (musclesTrained[muscle] || 0) + 1;
      });
    });

    return {
      workoutsCompleted: history.length,
      musclesTrained,
      totalDuration: history.reduce((sum, w) => sum + (w.duration || 0), 0),
      history,
    };
  } catch (error) {
    console.error('Error getting weekly summary:', error);
    return {
      workoutsCompleted: 0,
      musclesTrained: {},
      totalDuration: 0,
      history: [],
    };
  }
};

// Onboarding
export const setOnboardingComplete = async (complete = true) => {
  try {
    await AsyncStorage.setItem(KEYS.ONBOARDING_COMPLETE, JSON.stringify(complete));
  } catch (error) {
    console.error('Error setting onboarding status:', error);
  }
};

export const isOnboardingComplete = async () => {
  try {
    const data = await AsyncStorage.getItem(KEYS.ONBOARDING_COMPLETE);
    return data ? JSON.parse(data) : false;
  } catch (error) {
    console.error('Error checking onboarding status:', error);
    return false;
  }
};

// Clear all data (for testing/reset)
export const clearAllData = async () => {
  try {
    await AsyncStorage.multiRemove(Object.values(KEYS));
  } catch (error) {
    console.error('Error clearing data:', error);
  }
};

// Utility
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
