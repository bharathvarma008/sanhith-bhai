export const WORKOUTS = [
  // ============================================
  // PUSH WORKOUTS - GYM (10)
  // ============================================
  {
    id: 'push_1',
    name: 'Push Day: Strength Focus',
    description: 'Heavy compound movements for chest, shoulders, and triceps',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 60,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bench_press', sets: 4, reps: '5', restSeconds: 180 },
      { exerciseId: 'overhead_press', sets: 4, reps: '6', restSeconds: 150 },
      { exerciseId: 'incline_dumbbell_press', sets: 3, reps: '8', restSeconds: 90 },
      { exerciseId: 'lateral_raise', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'overhead_tricep_extension', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'push_2',
    name: 'Push Day: Hypertrophy',
    description: 'Moderate weight, higher reps for muscle growth',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 55,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'dumbbell_press', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'incline_bench_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'cable_fly', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'dumbbell_shoulder_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'lateral_raise', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'skull_crusher', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'push_3',
    name: 'Push Day: Beginner',
    description: 'Introduction to push movements with machines and dumbbells',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'gym',
    duration: 40,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'pec_deck', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'dumbbell_press', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'dumbbell_shoulder_press', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'lateral_raise', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'push_4',
    name: 'Chest Focused Push',
    description: 'Extra chest volume with supporting push work',
    splitType: 'push',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['shoulders', 'arms'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bench_press', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'incline_dumbbell_press', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'cable_fly', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'dumbbell_fly', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'push_5',
    name: 'Shoulder Focused Push',
    description: 'Prioritize delts with chest and tricep support',
    splitType: 'push',
    primaryMuscles: ['shoulders'],
    secondaryMuscles: ['chest', 'arms'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'overhead_press', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'arnold_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'lateral_raise', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'front_raise', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'incline_bench_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'push_6',
    name: 'Push Power',
    description: 'Explosive push day focusing on power development',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders'],
    secondaryMuscles: ['arms'],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 45,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'bench_press', sets: 5, reps: '3', restSeconds: 180 },
      { exerciseId: 'overhead_press', sets: 5, reps: '3', restSeconds: 180 },
      { exerciseId: 'chest_dip', sets: 3, reps: '8', restSeconds: 90 },
      { exerciseId: 'close_grip_bench', sets: 3, reps: '8', restSeconds: 90 }
    ]
  },
  {
    id: 'push_7',
    name: 'Quick Push Pump',
    description: 'Fast-paced push workout for time-crunched days',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'dumbbell_press', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'dumbbell_shoulder_press', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'lateral_raise', sets: 3, reps: '15', restSeconds: 30 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '15', restSeconds: 30 }
    ]
  },
  {
    id: 'push_8',
    name: 'Push Finisher',
    description: 'High-rep push session for metabolic stress',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'gym',
    duration: 45,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'cable_fly', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'pec_deck', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'lateral_raise', sets: 4, reps: '20', restSeconds: 30 },
      { exerciseId: 'front_raise', sets: 3, reps: '15', restSeconds: 30 },
      { exerciseId: 'tricep_pushdown', sets: 4, reps: '20', restSeconds: 30 }
    ]
  },
  {
    id: 'push_9',
    name: 'Decline & Dips Push',
    description: 'Lower chest emphasis with dips',
    splitType: 'push',
    primaryMuscles: ['chest', 'arms'],
    secondaryMuscles: ['shoulders'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'decline_bench_press', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'chest_dip', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'cable_fly', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'overhead_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'skull_crusher', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'push_10',
    name: 'Push: Machine Focus',
    description: 'All machine-based push workout for controlled movements',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 45,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'pec_deck', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'cable_fly', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'lateral_raise', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'tricep_pushdown', sets: 4, reps: '15', restSeconds: 45 }
    ]
  },

  // PUSH WORKOUTS - HOME (6)
  {
    id: 'push_home_1',
    name: 'Home Push: Complete',
    description: 'Full push workout using only bodyweight',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 35,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'push_up', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'decline_push_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'pike_push_up', sets: 3, reps: '10', restSeconds: 60 },
      { exerciseId: 'diamond_push_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'tricep_dip', sets: 3, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'push_home_2',
    name: 'Home Push: Beginner',
    description: 'Easy bodyweight push exercises for beginners',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'home',
    duration: 25,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'incline_push_up', sets: 3, reps: '15', restSeconds: 60 },
      { exerciseId: 'push_up', sets: 3, reps: '10', restSeconds: 60 },
      { exerciseId: 'tricep_dip', sets: 3, reps: '12', restSeconds: 45 }
    ]
  },
  {
    id: 'push_home_3',
    name: 'Home Push: Advanced',
    description: 'Challenging bodyweight push workout',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'heavy',
    equipment: 'home',
    duration: 40,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'decline_push_up', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'handstand_push_up', sets: 4, reps: '8', restSeconds: 90 },
      { exerciseId: 'diamond_push_up', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'pike_push_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'tricep_dip', sets: 3, reps: '20', restSeconds: 45 }
    ]
  },
  {
    id: 'push_home_4',
    name: 'Home Chest Blast',
    description: 'Chest-focused home workout',
    splitType: 'push',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['arms', 'shoulders'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'push_up', sets: 4, reps: '20', restSeconds: 60 },
      { exerciseId: 'decline_push_up', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'incline_push_up', sets: 3, reps: '20', restSeconds: 45 },
      { exerciseId: 'diamond_push_up', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'push_home_5',
    name: 'Quick Home Push',
    description: 'Fast 20-minute push workout at home',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'home',
    duration: 20,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'push_up', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'pike_push_up', sets: 3, reps: '10', restSeconds: 45 },
      { exerciseId: 'diamond_push_up', sets: 3, reps: '10', restSeconds: 45 }
    ]
  },
  {
    id: 'push_home_6',
    name: 'Home Push AMRAP',
    description: 'High-intensity home push circuit',
    splitType: 'push',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'heavy',
    equipment: 'home',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'push_up', sets: 5, reps: '20', restSeconds: 30 },
      { exerciseId: 'tricep_dip', sets: 5, reps: '15', restSeconds: 30 },
      { exerciseId: 'pike_push_up', sets: 5, reps: '10', restSeconds: 30 }
    ]
  },

  // ============================================
  // PULL WORKOUTS - GYM (10)
  // ============================================
  {
    id: 'pull_1',
    name: 'Pull Day: Strength Focus',
    description: 'Heavy back and bicep work with compound lifts',
    splitType: 'pull',
    primaryMuscles: ['back', 'arms'],
    secondaryMuscles: [],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 60,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'deadlift', sets: 4, reps: '5', restSeconds: 180 },
      { exerciseId: 'barbell_row', sets: 4, reps: '6', restSeconds: 150 },
      { exerciseId: 'pull_up', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'dumbbell_row', sets: 3, reps: '8', restSeconds: 90 },
      { exerciseId: 'barbell_curl', sets: 3, reps: '10', restSeconds: 60 }
    ]
  },
  {
    id: 'pull_2',
    name: 'Pull Day: Hypertrophy',
    description: 'Moderate weight, higher reps for back development',
    splitType: 'pull',
    primaryMuscles: ['back', 'arms'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 55,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'lat_pulldown', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'seated_cable_row', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'dumbbell_row', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'face_pull', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'dumbbell_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'hammer_curl', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'pull_3',
    name: 'Pull Day: Beginner',
    description: 'Introduction to pulling movements',
    splitType: 'pull',
    primaryMuscles: ['back', 'arms'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'gym',
    duration: 40,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'lat_pulldown', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'seated_cable_row', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'face_pull', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'dumbbell_curl', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'pull_4',
    name: 'Back Width Focus',
    description: 'Emphasize lats for a wider back',
    splitType: 'pull',
    primaryMuscles: ['back'],
    secondaryMuscles: ['arms'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'pull_up', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'lat_pulldown', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'straight_arm_pulldown', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'dumbbell_row', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'dumbbell_curl', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'pull_5',
    name: 'Back Thickness Focus',
    description: 'Row variations for a thicker back',
    splitType: 'pull',
    primaryMuscles: ['back'],
    secondaryMuscles: ['arms'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'barbell_row', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 't_bar_row', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'seated_cable_row', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'face_pull', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'barbell_curl', sets: 3, reps: '10', restSeconds: 60 }
    ]
  },
  {
    id: 'pull_6',
    name: 'Pull Power',
    description: 'Heavy deadlifts and power rows',
    splitType: 'pull',
    primaryMuscles: ['back', 'legs'],
    secondaryMuscles: ['arms'],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 55,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'deadlift', sets: 5, reps: '3', restSeconds: 180 },
      { exerciseId: 'barbell_row', sets: 4, reps: '5', restSeconds: 150 },
      { exerciseId: 'rack_pull', sets: 3, reps: '5', restSeconds: 150 },
      { exerciseId: 'chin_up', sets: 3, reps: '8', restSeconds: 90 }
    ]
  },
  {
    id: 'pull_7',
    name: 'Quick Pull Pump',
    description: 'Fast-paced pull workout',
    splitType: 'pull',
    primaryMuscles: ['back', 'arms'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'lat_pulldown', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'seated_cable_row', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'face_pull', sets: 3, reps: '15', restSeconds: 30 },
      { exerciseId: 'cable_curl', sets: 3, reps: '15', restSeconds: 30 }
    ]
  },
  {
    id: 'pull_8',
    name: 'Bicep Focused Pull',
    description: 'Extra arm work with back support',
    splitType: 'pull',
    primaryMuscles: ['arms'],
    secondaryMuscles: ['back'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'chin_up', sets: 4, reps: '8', restSeconds: 90 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'barbell_curl', sets: 4, reps: '10', restSeconds: 60 },
      { exerciseId: 'preacher_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'hammer_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'concentration_curl', sets: 3, reps: '12', restSeconds: 45 }
    ]
  },
  {
    id: 'pull_9',
    name: 'Pull: High Volume',
    description: 'High rep pull workout for endurance',
    splitType: 'pull',
    primaryMuscles: ['back', 'arms'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'lat_pulldown', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'seated_cable_row', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'face_pull', sets: 4, reps: '20', restSeconds: 30 },
      { exerciseId: 'straight_arm_pulldown', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'cable_curl', sets: 4, reps: '15', restSeconds: 30 }
    ]
  },
  {
    id: 'pull_10',
    name: 'Complete Back Builder',
    description: 'Hit every angle of the back',
    splitType: 'pull',
    primaryMuscles: ['back'],
    secondaryMuscles: ['arms'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 60,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'pull_up', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'barbell_row', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 't_bar_row', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'face_pull', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'reverse_fly', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'dumbbell_curl', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },

  // PULL WORKOUTS - HOME (6)
  {
    id: 'pull_home_1',
    name: 'Home Pull: Complete',
    description: 'Full pull workout with minimal equipment',
    splitType: 'pull',
    primaryMuscles: ['back', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'inverted_row', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'superman', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'reverse_fly', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'bird_dog', sets: 3, reps: '12', restSeconds: 45 }
    ]
  },
  {
    id: 'pull_home_2',
    name: 'Home Pull: Beginner',
    description: 'Easy back exercises for beginners at home',
    splitType: 'pull',
    primaryMuscles: ['back'],
    secondaryMuscles: ['core'],
    intensity: 'light',
    equipment: 'home',
    duration: 20,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'superman', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'bird_dog', sets: 3, reps: '10', restSeconds: 45 },
      { exerciseId: 'inverted_row', sets: 3, reps: '10', restSeconds: 60 }
    ]
  },
  {
    id: 'pull_home_3',
    name: 'Home Pull: With Pull-up Bar',
    description: 'Pull workout using doorway pull-up bar',
    splitType: 'pull',
    primaryMuscles: ['back', 'arms'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'home',
    duration: 35,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'pull_up', sets: 4, reps: '8', restSeconds: 90 },
      { exerciseId: 'chin_up', sets: 3, reps: '8', restSeconds: 90 },
      { exerciseId: 'inverted_row', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'superman', sets: 3, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'pull_home_4',
    name: 'Home Back Endurance',
    description: 'High-rep home back workout',
    splitType: 'pull',
    primaryMuscles: ['back'],
    secondaryMuscles: ['core'],
    intensity: 'light',
    equipment: 'home',
    duration: 25,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'superman', sets: 4, reps: '20', restSeconds: 30 },
      { exerciseId: 'bird_dog', sets: 4, reps: '15', restSeconds: 30 },
      { exerciseId: 'inverted_row', sets: 4, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'pull_home_5',
    name: 'Quick Home Pull',
    description: 'Fast 15-minute pull session',
    splitType: 'pull',
    primaryMuscles: ['back'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 15,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'inverted_row', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'superman', sets: 3, reps: '15', restSeconds: 30 }
    ]
  },
  {
    id: 'pull_home_6',
    name: 'Home Pull: Advanced',
    description: 'Challenging bodyweight pull workout',
    splitType: 'pull',
    primaryMuscles: ['back', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'heavy',
    equipment: 'home',
    duration: 40,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'pull_up', sets: 5, reps: '10', restSeconds: 90 },
      { exerciseId: 'chin_up', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'inverted_row', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'superman', sets: 3, reps: '20', restSeconds: 45 }
    ]
  },

  // ============================================
  // LEG WORKOUTS - GYM (10)
  // ============================================
  {
    id: 'legs_1',
    name: 'Leg Day: Strength Focus',
    description: 'Heavy squats and compound leg movements',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 60,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'squat', sets: 5, reps: '5', restSeconds: 180 },
      { exerciseId: 'romanian_deadlift', sets: 4, reps: '6', restSeconds: 150 },
      { exerciseId: 'leg_press', sets: 3, reps: '8', restSeconds: 120 },
      { exerciseId: 'leg_curl', sets: 3, reps: '10', restSeconds: 60 },
      { exerciseId: 'calf_raise', sets: 4, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'legs_2',
    name: 'Leg Day: Hypertrophy',
    description: 'Moderate weight, higher reps for leg growth',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 55,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'leg_press', sets: 4, reps: '12', restSeconds: 90 },
      { exerciseId: 'hack_squat', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'leg_extension', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'leg_curl', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'hip_thrust', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'calf_raise', sets: 4, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'legs_3',
    name: 'Leg Day: Beginner',
    description: 'Introduction to leg training',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'gym',
    duration: 40,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'leg_press', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'leg_extension', sets: 3, reps: '15', restSeconds: 60 },
      { exerciseId: 'leg_curl', sets: 3, reps: '15', restSeconds: 60 },
      { exerciseId: 'goblet_squat', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'calf_raise', sets: 3, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'legs_4',
    name: 'Quad Focused',
    description: 'Emphasis on quadriceps development',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'front_squat', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'hack_squat', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'leg_extension', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'lunge', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'calf_raise', sets: 3, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'legs_5',
    name: 'Hamstring & Glute Focus',
    description: 'Posterior chain emphasis',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['back'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'romanian_deadlift', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'hip_thrust', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'leg_curl', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'bulgarian_split_squat', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'stiff_leg_deadlift', sets: 3, reps: '10', restSeconds: 90 }
    ]
  },
  {
    id: 'legs_6',
    name: 'Leg Power',
    description: 'Heavy compounds for leg strength',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core', 'back'],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 55,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'squat', sets: 5, reps: '3', restSeconds: 180 },
      { exerciseId: 'deadlift', sets: 5, reps: '3', restSeconds: 180 },
      { exerciseId: 'leg_press', sets: 3, reps: '6', restSeconds: 150 },
      { exerciseId: 'calf_raise', sets: 4, reps: '10', restSeconds: 60 }
    ]
  },
  {
    id: 'legs_7',
    name: 'Quick Leg Pump',
    description: 'Fast leg workout when short on time',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'leg_press', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'leg_extension', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'leg_curl', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'calf_raise', sets: 3, reps: '20', restSeconds: 30 }
    ]
  },
  {
    id: 'legs_8',
    name: 'Leg Burnout',
    description: 'High volume leg session',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'leg_extension', sets: 4, reps: '20', restSeconds: 30 },
      { exerciseId: 'leg_curl', sets: 4, reps: '20', restSeconds: 30 },
      { exerciseId: 'leg_press', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'lunge', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'calf_raise', sets: 4, reps: '25', restSeconds: 30 }
    ]
  },
  {
    id: 'legs_9',
    name: 'Single Leg Focus',
    description: 'Unilateral leg training for balance',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 45,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bulgarian_split_squat', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'lunge', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'reverse_lunge', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'leg_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'calf_raise', sets: 4, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'legs_10',
    name: 'Complete Leg Development',
    description: 'Hit every muscle in the legs',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 65,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'romanian_deadlift', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'leg_press', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'leg_extension', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'leg_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'hip_thrust', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'calf_raise', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'seated_calf_raise', sets: 3, reps: '15', restSeconds: 45 }
    ]
  },

  // LEG WORKOUTS - HOME (6)
  {
    id: 'legs_home_1',
    name: 'Home Legs: Complete',
    description: 'Full leg workout with bodyweight',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 35,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 4, reps: '20', restSeconds: 60 },
      { exerciseId: 'lunge', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'glute_bridge', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'step_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'calf_raise', sets: 4, reps: '20', restSeconds: 30 }
    ]
  },
  {
    id: 'legs_home_2',
    name: 'Home Legs: Beginner',
    description: 'Easy leg exercises for beginners',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'home',
    duration: 25,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 3, reps: '15', restSeconds: 60 },
      { exerciseId: 'glute_bridge', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'lunge', sets: 3, reps: '10', restSeconds: 60 }
    ]
  },
  {
    id: 'legs_home_3',
    name: 'Home Legs: HIIT',
    description: 'High-intensity leg circuit',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'heavy',
    equipment: 'home',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'jump_squat', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'lunge', sets: 4, reps: '12', restSeconds: 45 },
      { exerciseId: 'glute_bridge', sets: 4, reps: '15', restSeconds: 30 },
      { exerciseId: 'bodyweight_squat', sets: 4, reps: '20', restSeconds: 30 }
    ]
  },
  {
    id: 'legs_home_4',
    name: 'Home Glute Focus',
    description: 'Target glutes at home',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 30,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'glute_bridge', sets: 4, reps: '20', restSeconds: 45 },
      { exerciseId: 'lunge', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'step_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'bodyweight_squat', sets: 3, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'legs_home_5',
    name: 'Quick Home Legs',
    description: 'Fast 20-minute leg session',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'home',
    duration: 20,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 3, reps: '20', restSeconds: 45 },
      { exerciseId: 'lunge', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'glute_bridge', sets: 3, reps: '15', restSeconds: 30 }
    ]
  },
  {
    id: 'legs_home_6',
    name: 'Home Legs: Advanced',
    description: 'Challenging bodyweight leg workout',
    splitType: 'legs',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'heavy',
    equipment: 'home',
    duration: 40,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'jump_squat', sets: 5, reps: '15', restSeconds: 60 },
      { exerciseId: 'bulgarian_split_squat', sets: 4, reps: '12', restSeconds: 90 },
      { exerciseId: 'lunge', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'glute_bridge', sets: 4, reps: '20', restSeconds: 45 },
      { exerciseId: 'calf_raise', sets: 4, reps: '25', restSeconds: 30 }
    ]
  },

  // ============================================
  // UPPER BODY WORKOUTS - GYM (10)
  // ============================================
  {
    id: 'upper_1',
    name: 'Upper Body: Strength',
    description: 'Heavy compounds for upper body strength',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 60,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bench_press', sets: 4, reps: '5', restSeconds: 180 },
      { exerciseId: 'barbell_row', sets: 4, reps: '5', restSeconds: 150 },
      { exerciseId: 'overhead_press', sets: 4, reps: '6', restSeconds: 150 },
      { exerciseId: 'pull_up', sets: 3, reps: '8', restSeconds: 90 },
      { exerciseId: 'barbell_curl', sets: 3, reps: '10', restSeconds: 60 },
      { exerciseId: 'skull_crusher', sets: 3, reps: '10', restSeconds: 60 }
    ]
  },
  {
    id: 'upper_2',
    name: 'Upper Body: Hypertrophy',
    description: 'Balanced upper body for muscle growth',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 55,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'dumbbell_press', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'lat_pulldown', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'dumbbell_shoulder_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'seated_cable_row', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'lateral_raise', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'dumbbell_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'upper_3',
    name: 'Upper Body: Beginner',
    description: 'Introduction to upper body training',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'gym',
    duration: 40,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'pec_deck', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'dumbbell_shoulder_press', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'face_pull', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'dumbbell_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'upper_4',
    name: 'Upper Push Focus',
    description: 'Upper body with push emphasis',
    splitType: 'upper',
    primaryMuscles: ['chest', 'shoulders'],
    secondaryMuscles: ['back', 'arms'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bench_press', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'incline_dumbbell_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'overhead_press', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'lateral_raise', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'upper_5',
    name: 'Upper Pull Focus',
    description: 'Upper body with pull emphasis',
    splitType: 'upper',
    primaryMuscles: ['back', 'arms'],
    secondaryMuscles: ['chest', 'shoulders'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'barbell_row', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'pull_up', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'face_pull', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'dumbbell_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'rear_delt_fly', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'barbell_curl', sets: 3, reps: '10', restSeconds: 60 }
    ]
  },
  {
    id: 'upper_6',
    name: 'Upper Power',
    description: 'Heavy upper body power workout',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders'],
    secondaryMuscles: ['arms'],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 55,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'bench_press', sets: 5, reps: '3', restSeconds: 180 },
      { exerciseId: 'barbell_row', sets: 5, reps: '3', restSeconds: 180 },
      { exerciseId: 'overhead_press', sets: 4, reps: '5', restSeconds: 150 },
      { exerciseId: 'chin_up', sets: 3, reps: '8', restSeconds: 90 },
      { exerciseId: 'close_grip_bench', sets: 3, reps: '8', restSeconds: 90 }
    ]
  },
  {
    id: 'upper_7',
    name: 'Quick Upper Pump',
    description: 'Fast-paced upper body workout',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'dumbbell_press', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'dumbbell_shoulder_press', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'cable_curl', sets: 3, reps: '15', restSeconds: 30 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '15', restSeconds: 30 }
    ]
  },
  {
    id: 'upper_8',
    name: 'Upper Arms Focus',
    description: 'Upper body with extra arm work',
    splitType: 'upper',
    primaryMuscles: ['arms'],
    secondaryMuscles: ['chest', 'back', 'shoulders'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 55,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'dumbbell_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'barbell_curl', sets: 4, reps: '10', restSeconds: 60 },
      { exerciseId: 'skull_crusher', sets: 4, reps: '10', restSeconds: 60 },
      { exerciseId: 'hammer_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'overhead_tricep_extension', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'concentration_curl', sets: 3, reps: '12', restSeconds: 45 }
    ]
  },
  {
    id: 'upper_9',
    name: 'Upper High Volume',
    description: 'High rep upper body session',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'cable_fly', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'lat_pulldown', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'lateral_raise', sets: 4, reps: '20', restSeconds: 30 },
      { exerciseId: 'face_pull', sets: 4, reps: '20', restSeconds: 30 },
      { exerciseId: 'cable_curl', sets: 3, reps: '20', restSeconds: 30 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '20', restSeconds: 30 }
    ]
  },
  {
    id: 'upper_10',
    name: 'Complete Upper Builder',
    description: 'Comprehensive upper body development',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 65,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'bench_press', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'barbell_row', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'overhead_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'pull_up', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'incline_dumbbell_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'face_pull', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'dumbbell_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },

  // UPPER BODY WORKOUTS - HOME (6)
  {
    id: 'upper_home_1',
    name: 'Home Upper: Complete',
    description: 'Full upper body with bodyweight',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 35,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'push_up', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'inverted_row', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'pike_push_up', sets: 3, reps: '10', restSeconds: 60 },
      { exerciseId: 'diamond_push_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'tricep_dip', sets: 3, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'upper_home_2',
    name: 'Home Upper: Beginner',
    description: 'Easy upper body exercises at home',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'home',
    duration: 25,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'incline_push_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'superman', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'push_up', sets: 3, reps: '10', restSeconds: 60 },
      { exerciseId: 'tricep_dip', sets: 3, reps: '10', restSeconds: 45 }
    ]
  },
  {
    id: 'upper_home_3',
    name: 'Home Upper: With Pull-up Bar',
    description: 'Upper body using doorway bar',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders', 'arms'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'home',
    duration: 40,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'pull_up', sets: 4, reps: '8', restSeconds: 90 },
      { exerciseId: 'push_up', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'chin_up', sets: 3, reps: '8', restSeconds: 90 },
      { exerciseId: 'pike_push_up', sets: 3, reps: '10', restSeconds: 60 },
      { exerciseId: 'diamond_push_up', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'upper_home_4',
    name: 'Home Upper: Push Emphasis',
    description: 'Push-focused home upper workout',
    splitType: 'upper',
    primaryMuscles: ['chest', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'push_up', sets: 4, reps: '20', restSeconds: 60 },
      { exerciseId: 'decline_push_up', sets: 3, reps: '15', restSeconds: 60 },
      { exerciseId: 'pike_push_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'diamond_push_up', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'upper_home_5',
    name: 'Quick Home Upper',
    description: 'Fast 20-minute upper body',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'home',
    duration: 20,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'push_up', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'inverted_row', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'pike_push_up', sets: 3, reps: '10', restSeconds: 45 }
    ]
  },
  {
    id: 'upper_home_6',
    name: 'Home Upper: Advanced',
    description: 'Challenging home upper body workout',
    splitType: 'upper',
    primaryMuscles: ['chest', 'back', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'heavy',
    equipment: 'home',
    duration: 45,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'pull_up', sets: 5, reps: '10', restSeconds: 90 },
      { exerciseId: 'decline_push_up', sets: 4, reps: '20', restSeconds: 60 },
      { exerciseId: 'handstand_push_up', sets: 4, reps: '8', restSeconds: 90 },
      { exerciseId: 'chin_up', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'diamond_push_up', sets: 4, reps: '15', restSeconds: 60 }
    ]
  },

  // ============================================
  // LOWER BODY WORKOUTS - GYM (8)
  // ============================================
  {
    id: 'lower_1',
    name: 'Lower Body: Strength',
    description: 'Heavy lower body compound movements',
    splitType: 'lower',
    primaryMuscles: ['legs', 'core'],
    secondaryMuscles: ['back'],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 55,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'squat', sets: 5, reps: '5', restSeconds: 180 },
      { exerciseId: 'romanian_deadlift', sets: 4, reps: '6', restSeconds: 150 },
      { exerciseId: 'leg_press', sets: 3, reps: '8', restSeconds: 120 },
      { exerciseId: 'leg_curl', sets: 3, reps: '10', restSeconds: 60 },
      { exerciseId: 'calf_raise', sets: 4, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'lower_2',
    name: 'Lower Body: Hypertrophy',
    description: 'Moderate weight for leg growth',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 55,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'leg_press', sets: 4, reps: '12', restSeconds: 90 },
      { exerciseId: 'hack_squat', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'leg_extension', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'leg_curl', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'hip_thrust', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'calf_raise', sets: 4, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'lower_3',
    name: 'Lower Body: Beginner',
    description: 'Introduction to lower body training',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'gym',
    duration: 40,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'leg_press', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'leg_extension', sets: 3, reps: '15', restSeconds: 60 },
      { exerciseId: 'leg_curl', sets: 3, reps: '15', restSeconds: 60 },
      { exerciseId: 'goblet_squat', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'calf_raise', sets: 3, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'lower_4',
    name: 'Lower: Glute Emphasis',
    description: 'Focus on glute development',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'hip_thrust', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'romanian_deadlift', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'bulgarian_split_squat', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'leg_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'glute_bridge', sets: 3, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'lower_5',
    name: 'Quick Lower',
    description: 'Fast lower body workout',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'leg_press', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'leg_extension', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'leg_curl', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'calf_raise', sets: 3, reps: '20', restSeconds: 30 }
    ]
  },
  {
    id: 'lower_6',
    name: 'Lower Power',
    description: 'Heavy lower body power work',
    splitType: 'lower',
    primaryMuscles: ['legs', 'back'],
    secondaryMuscles: ['core'],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 50,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'squat', sets: 5, reps: '3', restSeconds: 180 },
      { exerciseId: 'deadlift', sets: 5, reps: '3', restSeconds: 180 },
      { exerciseId: 'leg_press', sets: 3, reps: '6', restSeconds: 150 },
      { exerciseId: 'calf_raise', sets: 4, reps: '10', restSeconds: 60 }
    ]
  },
  {
    id: 'lower_7',
    name: 'Lower Unilateral',
    description: 'Single-leg focused workout',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 45,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bulgarian_split_squat', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'lunge', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'reverse_lunge', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'step_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'calf_raise', sets: 4, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'lower_8',
    name: 'Lower Complete',
    description: 'Comprehensive lower body development',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 60,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'romanian_deadlift', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'leg_press', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'leg_extension', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'leg_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'hip_thrust', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'calf_raise', sets: 4, reps: '15', restSeconds: 45 }
    ]
  },

  // LOWER BODY WORKOUTS - HOME (6)
  {
    id: 'lower_home_1',
    name: 'Home Lower: Complete',
    description: 'Full lower body with bodyweight',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 35,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 4, reps: '20', restSeconds: 60 },
      { exerciseId: 'lunge', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'glute_bridge', sets: 4, reps: '15', restSeconds: 45 },
      { exerciseId: 'step_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'calf_raise', sets: 4, reps: '20', restSeconds: 30 }
    ]
  },
  {
    id: 'lower_home_2',
    name: 'Home Lower: Beginner',
    description: 'Easy lower body for beginners',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'home',
    duration: 25,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 3, reps: '15', restSeconds: 60 },
      { exerciseId: 'glute_bridge', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'lunge', sets: 3, reps: '10', restSeconds: 60 }
    ]
  },
  {
    id: 'lower_home_3',
    name: 'Home Lower: HIIT',
    description: 'High-intensity lower body',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'heavy',
    equipment: 'home',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'jump_squat', sets: 5, reps: '15', restSeconds: 45 },
      { exerciseId: 'lunge', sets: 4, reps: '12', restSeconds: 45 },
      { exerciseId: 'glute_bridge', sets: 4, reps: '15', restSeconds: 30 },
      { exerciseId: 'bodyweight_squat', sets: 4, reps: '20', restSeconds: 30 }
    ]
  },
  {
    id: 'lower_home_4',
    name: 'Quick Home Lower',
    description: 'Fast 20-minute lower body',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'home',
    duration: 20,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 3, reps: '20', restSeconds: 45 },
      { exerciseId: 'lunge', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'glute_bridge', sets: 3, reps: '15', restSeconds: 30 }
    ]
  },
  {
    id: 'lower_home_5',
    name: 'Home Lower: Advanced',
    description: 'Challenging home leg workout',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    intensity: 'heavy',
    equipment: 'home',
    duration: 40,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'jump_squat', sets: 5, reps: '15', restSeconds: 60 },
      { exerciseId: 'bulgarian_split_squat', sets: 4, reps: '12', restSeconds: 90 },
      { exerciseId: 'lunge', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'glute_bridge', sets: 4, reps: '20', restSeconds: 45 },
      { exerciseId: 'calf_raise', sets: 4, reps: '25', restSeconds: 30 }
    ]
  },
  {
    id: 'lower_home_6',
    name: 'Home Lower: Glute Focus',
    description: 'Target glutes at home',
    splitType: 'lower',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'home',
    duration: 30,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'glute_bridge', sets: 4, reps: '20', restSeconds: 45 },
      { exerciseId: 'lunge', sets: 4, reps: '12', restSeconds: 60 },
      { exerciseId: 'step_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'bodyweight_squat', sets: 3, reps: '15', restSeconds: 45 }
    ]
  },

  // ============================================
  // FULL BODY WORKOUTS - GYM (12)
  // ============================================
  {
    id: 'full_1',
    name: 'Full Body: Strength',
    description: 'Heavy compounds hitting all muscle groups',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 60,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: '5', restSeconds: 180 },
      { exerciseId: 'bench_press', sets: 4, reps: '5', restSeconds: 150 },
      { exerciseId: 'barbell_row', sets: 4, reps: '5', restSeconds: 150 },
      { exerciseId: 'overhead_press', sets: 3, reps: '8', restSeconds: 120 },
      { exerciseId: 'barbell_curl', sets: 3, reps: '10', restSeconds: 60 }
    ]
  },
  {
    id: 'full_2',
    name: 'Full Body: Hypertrophy',
    description: 'Balanced full body for muscle growth',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 55,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'leg_press', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'dumbbell_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'dumbbell_shoulder_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'leg_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'dumbbell_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'full_3',
    name: 'Full Body: Beginner',
    description: 'Introduction to full body training',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders'],
    secondaryMuscles: ['arms', 'core'],
    intensity: 'light',
    equipment: 'gym',
    duration: 45,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'leg_press', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'pec_deck', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'dumbbell_shoulder_press', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'leg_curl', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'full_4',
    name: 'Full Body: Power',
    description: 'Heavy full body power workout',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs'],
    secondaryMuscles: ['shoulders', 'arms', 'core'],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 55,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'deadlift', sets: 5, reps: '3', restSeconds: 180 },
      { exerciseId: 'bench_press', sets: 5, reps: '3', restSeconds: 180 },
      { exerciseId: 'barbell_row', sets: 4, reps: '5', restSeconds: 150 },
      { exerciseId: 'overhead_press', sets: 4, reps: '5', restSeconds: 150 }
    ]
  },
  {
    id: 'full_5',
    name: 'Full Body: Quick Pump',
    description: 'Fast-paced full body workout',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'goblet_squat', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'dumbbell_press', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'lateral_raise', sets: 3, reps: '15', restSeconds: 30 },
      { exerciseId: 'dumbbell_curl', sets: 2, reps: '12', restSeconds: 30 }
    ]
  },
  {
    id: 'full_6',
    name: 'Full Body: Upper Focus',
    description: 'Full body with upper emphasis',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'shoulders', 'arms'],
    secondaryMuscles: ['legs', 'core'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'squat', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'bench_press', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'barbell_row', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'overhead_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'dumbbell_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'full_7',
    name: 'Full Body: Lower Focus',
    description: 'Full body with lower emphasis',
    splitType: 'full_body',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['chest', 'back', 'shoulders', 'core'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'romanian_deadlift', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'leg_press', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'dumbbell_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'calf_raise', sets: 4, reps: '15', restSeconds: 45 }
    ]
  },
  {
    id: 'full_8',
    name: 'Full Body: High Volume',
    description: 'High rep full body session',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'light',
    equipment: 'gym',
    duration: 50,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'leg_press', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'cable_fly', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'lateral_raise', sets: 3, reps: '20', restSeconds: 30 },
      { exerciseId: 'leg_curl', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'cable_curl', sets: 3, reps: '15', restSeconds: 30 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '15', restSeconds: 30 }
    ]
  },
  {
    id: 'full_9',
    name: 'Full Body: Compound Only',
    description: 'Big lifts only full body',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders'],
    secondaryMuscles: ['arms', 'core'],
    intensity: 'heavy',
    equipment: 'gym',
    duration: 45,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: '6', restSeconds: 150 },
      { exerciseId: 'bench_press', sets: 4, reps: '6', restSeconds: 150 },
      { exerciseId: 'deadlift', sets: 4, reps: '6', restSeconds: 180 },
      { exerciseId: 'overhead_press', sets: 3, reps: '8', restSeconds: 120 }
    ]
  },
  {
    id: 'full_10',
    name: 'Full Body: Dumbbell Only',
    description: 'Full body using only dumbbells',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 45,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'goblet_squat', sets: 4, reps: '12', restSeconds: 90 },
      { exerciseId: 'dumbbell_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'dumbbell_row', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'dumbbell_shoulder_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'lunge', sets: 3, reps: '10', restSeconds: 60 },
      { exerciseId: 'dumbbell_curl', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'full_11',
    name: 'Full Body: Machine Circuit',
    description: 'Full body using machines',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders'],
    secondaryMuscles: ['arms'],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 40,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'leg_press', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'pec_deck', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'lat_pulldown', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'leg_extension', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'leg_curl', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '12', restSeconds: 45 }
    ]
  },
  {
    id: 'full_12',
    name: 'Full Body: Complete',
    description: 'Comprehensive full body workout',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders', 'arms', 'core'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'gym',
    duration: 65,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'bench_press', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'barbell_row', sets: 4, reps: '8', restSeconds: 120 },
      { exerciseId: 'overhead_press', sets: 3, reps: '10', restSeconds: 90 },
      { exerciseId: 'leg_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'dumbbell_curl', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'tricep_pushdown', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'plank', sets: 3, reps: '60', restSeconds: 45 }
    ]
  },

  // FULL BODY WORKOUTS - HOME (10)
  {
    id: 'full_home_1',
    name: 'Home Full Body: Complete',
    description: 'Comprehensive bodyweight workout',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders', 'arms', 'core'],
    secondaryMuscles: [],
    intensity: 'moderate',
    equipment: 'home',
    duration: 40,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 4, reps: '20', restSeconds: 60 },
      { exerciseId: 'push_up', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'inverted_row', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'lunge', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'pike_push_up', sets: 3, reps: '10', restSeconds: 60 },
      { exerciseId: 'plank', sets: 3, reps: '45', restSeconds: 45 }
    ]
  },
  {
    id: 'full_home_2',
    name: 'Home Full Body: Beginner',
    description: 'Easy full body for beginners',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'core'],
    secondaryMuscles: ['shoulders', 'arms'],
    intensity: 'light',
    equipment: 'home',
    duration: 25,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 3, reps: '15', restSeconds: 60 },
      { exerciseId: 'incline_push_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'superman', sets: 3, reps: '12', restSeconds: 45 },
      { exerciseId: 'glute_bridge', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'plank', sets: 3, reps: '30', restSeconds: 45 }
    ]
  },
  {
    id: 'full_home_3',
    name: 'Home Full Body: HIIT',
    description: 'High-intensity full body',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders', 'core'],
    secondaryMuscles: ['arms'],
    intensity: 'heavy',
    equipment: 'home',
    duration: 30,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'jump_squat', sets: 4, reps: '15', restSeconds: 30 },
      { exerciseId: 'push_up', sets: 4, reps: '15', restSeconds: 30 },
      { exerciseId: 'mountain_climber', sets: 4, reps: '20', restSeconds: 30 },
      { exerciseId: 'lunge', sets: 4, reps: '12', restSeconds: 30 },
      { exerciseId: 'plank', sets: 3, reps: '45', restSeconds: 30 }
    ]
  },
  {
    id: 'full_home_4',
    name: 'Home Full Body: With Pull-up Bar',
    description: 'Full body using doorway bar',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders', 'arms'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 45,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'pull_up', sets: 4, reps: '8', restSeconds: 90 },
      { exerciseId: 'push_up', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'bodyweight_squat', sets: 4, reps: '20', restSeconds: 60 },
      { exerciseId: 'chin_up', sets: 3, reps: '8', restSeconds: 90 },
      { exerciseId: 'pike_push_up', sets: 3, reps: '10', restSeconds: 60 },
      { exerciseId: 'lunge', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'full_home_5',
    name: 'Quick Home Full Body',
    description: 'Fast 20-minute full body',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs'],
    secondaryMuscles: ['core'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 20,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 3, reps: '20', restSeconds: 45 },
      { exerciseId: 'push_up', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'superman', sets: 3, reps: '15', restSeconds: 30 },
      { exerciseId: 'plank', sets: 2, reps: '30', restSeconds: 30 }
    ]
  },
  {
    id: 'full_home_6',
    name: 'Home Full Body: Advanced',
    description: 'Challenging home full body',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'shoulders', 'arms', 'core'],
    secondaryMuscles: [],
    intensity: 'heavy',
    equipment: 'home',
    duration: 50,
    difficulty: 'advanced',
    exercises: [
      { exerciseId: 'jump_squat', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'pull_up', sets: 4, reps: '10', restSeconds: 90 },
      { exerciseId: 'decline_push_up', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'bulgarian_split_squat', sets: 3, reps: '12', restSeconds: 90 },
      { exerciseId: 'handstand_push_up', sets: 3, reps: '8', restSeconds: 90 },
      { exerciseId: 'hanging_leg_raise', sets: 3, reps: '12', restSeconds: 60 }
    ]
  },
  {
    id: 'full_home_7',
    name: 'Home Core Focus Full Body',
    description: 'Full body with extra core work',
    splitType: 'full_body',
    primaryMuscles: ['core'],
    secondaryMuscles: ['chest', 'back', 'legs'],
    intensity: 'moderate',
    equipment: 'home',
    duration: 35,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 3, reps: '15', restSeconds: 60 },
      { exerciseId: 'push_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'plank', sets: 4, reps: '45', restSeconds: 30 },
      { exerciseId: 'bicycle_crunch', sets: 3, reps: '20', restSeconds: 30 },
      { exerciseId: 'mountain_climber', sets: 3, reps: '20', restSeconds: 30 },
      { exerciseId: 'dead_bug', sets: 3, reps: '12', restSeconds: 30 },
      { exerciseId: 'russian_twist', sets: 3, reps: '20', restSeconds: 30 }
    ]
  },
  {
    id: 'full_home_8',
    name: 'Home Endurance Full Body',
    description: 'High-rep home workout for endurance',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs'],
    secondaryMuscles: ['core', 'shoulders'],
    intensity: 'light',
    equipment: 'home',
    duration: 40,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 4, reps: '25', restSeconds: 45 },
      { exerciseId: 'push_up', sets: 4, reps: '20', restSeconds: 45 },
      { exerciseId: 'glute_bridge', sets: 4, reps: '20', restSeconds: 30 },
      { exerciseId: 'superman', sets: 4, reps: '15', restSeconds: 30 },
      { exerciseId: 'mountain_climber', sets: 4, reps: '25', restSeconds: 30 }
    ]
  },
  {
    id: 'full_home_9',
    name: 'Morning Wake-Up Full Body',
    description: 'Light full body to start the day',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'core'],
    secondaryMuscles: [],
    intensity: 'light',
    equipment: 'home',
    duration: 20,
    difficulty: 'beginner',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 2, reps: '15', restSeconds: 45 },
      { exerciseId: 'push_up', sets: 2, reps: '10', restSeconds: 45 },
      { exerciseId: 'bird_dog', sets: 2, reps: '10', restSeconds: 30 },
      { exerciseId: 'glute_bridge', sets: 2, reps: '15', restSeconds: 30 },
      { exerciseId: 'plank', sets: 2, reps: '30', restSeconds: 30 }
    ]
  },
  {
    id: 'full_home_10',
    name: 'Home Full Body: No Equipment',
    description: 'Zero equipment full body workout',
    splitType: 'full_body',
    primaryMuscles: ['chest', 'back', 'legs', 'core'],
    secondaryMuscles: ['shoulders', 'arms'],
    intensity: 'moderate',
    equipment: 'none',
    duration: 35,
    difficulty: 'intermediate',
    exercises: [
      { exerciseId: 'bodyweight_squat', sets: 4, reps: '20', restSeconds: 60 },
      { exerciseId: 'push_up', sets: 4, reps: '15', restSeconds: 60 },
      { exerciseId: 'superman', sets: 3, reps: '15', restSeconds: 45 },
      { exerciseId: 'lunge', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'diamond_push_up', sets: 3, reps: '12', restSeconds: 60 },
      { exerciseId: 'plank', sets: 3, reps: '45', restSeconds: 45 },
      { exerciseId: 'crunch', sets: 3, reps: '20', restSeconds: 30 }
    ]
  }
];

// Helper functions
export const getWorkoutById = (id) => WORKOUTS.find(w => w.id === id);

export const getWorkoutsBySplit = (splitType) =>
  WORKOUTS.filter(w => w.splitType === splitType);

export const getWorkoutsByEquipment = (equipment) =>
  WORKOUTS.filter(w => w.equipment === equipment || w.equipment === 'none');

export const getWorkoutsByDifficulty = (difficulty) =>
  WORKOUTS.filter(w => w.difficulty === difficulty);

export const getWorkoutsByMuscle = (muscleId) =>
  WORKOUTS.filter(w => w.primaryMuscles.includes(muscleId));

export const getWorkoutsByDuration = (maxDuration) =>
  WORKOUTS.filter(w => w.duration <= maxDuration);

export const filterWorkouts = ({ equipment, difficulty, duration, splitType, muscle }) => {
  return WORKOUTS.filter(w => {
    if (equipment && w.equipment !== equipment && w.equipment !== 'none') return false;
    if (difficulty && w.difficulty !== difficulty) return false;
    if (duration && w.duration > duration) return false;
    if (splitType && w.splitType !== splitType) return false;
    if (muscle && !w.primaryMuscles.includes(muscle)) return false;
    return true;
  });
};
