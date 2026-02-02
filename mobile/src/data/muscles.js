export const MUSCLE_GROUPS = {
  chest: {
    id: 'chest',
    name: 'Chest',
    color: '#FF6B6B',
    subgroups: ['upper_chest', 'mid_chest', 'lower_chest']
  },
  back: {
    id: 'back',
    name: 'Back',
    color: '#4ECDC4',
    subgroups: ['lats', 'upper_back', 'lower_back']
  },
  shoulders: {
    id: 'shoulders',
    name: 'Shoulders',
    color: '#45B7D1',
    subgroups: ['front_delt', 'side_delt', 'rear_delt']
  },
  arms: {
    id: 'arms',
    name: 'Arms',
    color: '#96CEB4',
    subgroups: ['biceps', 'triceps', 'forearms']
  },
  legs: {
    id: 'legs',
    name: 'Legs',
    color: '#FFEAA7',
    subgroups: ['quads', 'hamstrings', 'glutes', 'calves']
  },
  core: {
    id: 'core',
    name: 'Core',
    color: '#DDA0DD',
    subgroups: ['abs', 'obliques', 'lower_back']
  }
};

export const MUSCLE_LIST = Object.values(MUSCLE_GROUPS);

export const getMuscleById = (id) => MUSCLE_GROUPS[id];

export const getMuscleColor = (id) => MUSCLE_GROUPS[id]?.color || '#999';
