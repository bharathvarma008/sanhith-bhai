// App Constants
export const APP_NAME = 'Atlas';

// Goals
export const GOALS = [
  {
    id: 'muscle_gain',
    name: 'Build Muscle',
    description: 'Gain size and strength through hypertrophy training',
    icon: '💪',
  },
  {
    id: 'fat_loss',
    name: 'Lose Fat',
    description: 'Burn calories and improve body composition',
    icon: '🔥',
  },
  {
    id: 'strength',
    name: 'Get Stronger',
    description: 'Increase your one-rep max and power',
    icon: '🏋️',
  },
  {
    id: 'general_fitness',
    name: 'General Fitness',
    description: 'Stay active and maintain overall health',
    icon: '❤️',
  },
];

// Experience Levels
export const EXPERIENCE_LEVELS = [
  {
    id: 'beginner',
    name: 'Beginner',
    description: 'New to lifting or less than 1 year',
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    description: '1-3 years of consistent training',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    description: '3+ years of serious training',
  },
];

// Days per Week
export const DAYS_PER_WEEK = [3, 4, 5, 6];

// Equipment Options
export const EQUIPMENT_OPTIONS = [
  {
    id: 'gym',
    name: 'Gym',
    description: 'Full gym with barbells, machines, cables',
  },
  {
    id: 'home',
    name: 'Home',
    description: 'Bodyweight, dumbbells, pull-up bar',
  },
];

// Duration Options (minutes)
export const DURATION_OPTIONS = [20, 30, 45, 60];

// Split Types
export const SPLIT_TYPES = {
  push: { name: 'Push', muscles: ['chest', 'shoulders', 'arms'] },
  pull: { name: 'Pull', muscles: ['back', 'arms'] },
  legs: { name: 'Legs', muscles: ['legs'] },
  upper: { name: 'Upper Body', muscles: ['chest', 'back', 'shoulders', 'arms'] },
  lower: { name: 'Lower Body', muscles: ['legs', 'core'] },
  full_body: { name: 'Full Body', muscles: ['chest', 'back', 'legs', 'shoulders', 'arms', 'core'] },
};

// Intensity Levels
export const INTENSITY_LEVELS = {
  light: { name: 'Light', color: '#4CAF50' },
  moderate: { name: 'Moderate', color: '#FF9800' },
  heavy: { name: 'Heavy', color: '#F44336' },
};

// Colors
export const COLORS = {
  primary: '#6C63FF',
  secondary: '#FF6584',
  background: '#F8F9FA',
  surface: '#FFFFFF',
  text: '#1A1A2E',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',

  // Muscle colors
  chest: '#FF6B6B',
  back: '#4ECDC4',
  shoulders: '#45B7D1',
  arms: '#96CEB4',
  legs: '#FFEAA7',
  core: '#DDA0DD',
};

// Screen Names (for navigation)
export const SCREENS = {
  ONBOARDING: 'Onboarding',
  TODAY: 'Today',
  WORKOUT_DETAIL: 'WorkoutDetail',
  ACTIVE_WORKOUT: 'ActiveWorkout',
  WEEKLY_SUMMARY: 'WeeklySummary',
  LIBRARY: 'Library',
};
