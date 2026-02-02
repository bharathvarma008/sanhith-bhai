export const EXERCISES = [
  // CHEST EXERCISES (12)
  {
    id: 'bench_press',
    name: 'Barbell Bench Press',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['shoulders', 'arms'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Lie on bench, grip bar slightly wider than shoulders, lower to chest, press up.'
  },
  {
    id: 'incline_bench_press',
    name: 'Incline Bench Press',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['shoulders', 'arms'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Set bench to 30-45 degrees, press barbell from upper chest.'
  },
  {
    id: 'decline_bench_press',
    name: 'Decline Bench Press',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Lie on decline bench, lower bar to lower chest, press up.'
  },
  {
    id: 'dumbbell_press',
    name: 'Dumbbell Chest Press',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['shoulders', 'arms'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Lie on bench with dumbbells, press up and together.'
  },
  {
    id: 'incline_dumbbell_press',
    name: 'Incline Dumbbell Press',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['shoulders', 'arms'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'On incline bench, press dumbbells up from shoulder level.'
  },
  {
    id: 'cable_fly',
    name: 'Cable Fly',
    primaryMuscles: ['chest'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Stand between cables, bring handles together in hugging motion.'
  },
  {
    id: 'dumbbell_fly',
    name: 'Dumbbell Fly',
    primaryMuscles: ['chest'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Lie on bench, lower dumbbells out to sides with slight bend in elbows.'
  },
  {
    id: 'push_up',
    name: 'Push-Up',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['shoulders', 'arms', 'core'],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'Hands shoulder-width, lower chest to ground, push up.'
  },
  {
    id: 'incline_push_up',
    name: 'Incline Push-Up',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['shoulders', 'arms'],
    equipment: 'home',
    difficulty: 'beginner',
    instructions: 'Hands on elevated surface, perform push-up. Easier variation.'
  },
  {
    id: 'decline_push_up',
    name: 'Decline Push-Up',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['shoulders', 'arms'],
    equipment: 'home',
    difficulty: 'intermediate',
    instructions: 'Feet elevated on surface, hands on floor, perform push-up.'
  },
  {
    id: 'chest_dip',
    name: 'Chest Dip',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['arms', 'shoulders'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'On parallel bars, lean forward, lower body and press up.'
  },
  {
    id: 'pec_deck',
    name: 'Pec Deck Machine',
    primaryMuscles: ['chest'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Sit at machine, bring handles together in front of chest.'
  },

  // BACK EXERCISES (14)
  {
    id: 'pull_up',
    name: 'Pull-Up',
    primaryMuscles: ['back'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Hang from bar, pull chin above bar, lower with control.'
  },
  {
    id: 'chin_up',
    name: 'Chin-Up',
    primaryMuscles: ['back'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Hang with underhand grip, pull chin above bar.'
  },
  {
    id: 'lat_pulldown',
    name: 'Lat Pulldown',
    primaryMuscles: ['back'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Sit at machine, pull bar down to upper chest, squeeze lats.'
  },
  {
    id: 'barbell_row',
    name: 'Barbell Row',
    primaryMuscles: ['back'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Hinge at hips, pull barbell to lower chest, squeeze back.'
  },
  {
    id: 'dumbbell_row',
    name: 'Dumbbell Row',
    primaryMuscles: ['back'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'One knee on bench, row dumbbell to hip, squeeze lat.'
  },
  {
    id: 'seated_cable_row',
    name: 'Seated Cable Row',
    primaryMuscles: ['back'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Sit at cable machine, pull handle to torso, squeeze shoulder blades.'
  },
  {
    id: 't_bar_row',
    name: 'T-Bar Row',
    primaryMuscles: ['back'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Straddle bar, hinge forward, row to chest.'
  },
  {
    id: 'face_pull',
    name: 'Face Pull',
    primaryMuscles: ['back'],
    secondaryMuscles: ['shoulders'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Pull rope attachment to face, externally rotate shoulders.'
  },
  {
    id: 'straight_arm_pulldown',
    name: 'Straight Arm Pulldown',
    primaryMuscles: ['back'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Keep arms straight, pull bar down in arc to thighs.'
  },
  {
    id: 'deadlift',
    name: 'Deadlift',
    primaryMuscles: ['back', 'legs'],
    secondaryMuscles: ['core'],
    equipment: 'gym',
    difficulty: 'advanced',
    instructions: 'Stand close to bar, hinge and grip, drive through heels to stand.'
  },
  {
    id: 'rack_pull',
    name: 'Rack Pull',
    primaryMuscles: ['back'],
    secondaryMuscles: ['legs'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Deadlift from elevated position, focuses on upper pull.'
  },
  {
    id: 'inverted_row',
    name: 'Inverted Row',
    primaryMuscles: ['back'],
    secondaryMuscles: ['arms'],
    equipment: 'home',
    difficulty: 'beginner',
    instructions: 'Hang under bar or table, pull chest to bar.'
  },
  {
    id: 'superman',
    name: 'Superman',
    primaryMuscles: ['back'],
    secondaryMuscles: ['core'],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'Lie face down, lift arms and legs off ground, hold.'
  },
  {
    id: 'reverse_fly',
    name: 'Reverse Fly',
    primaryMuscles: ['back'],
    secondaryMuscles: ['shoulders'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Bend forward, raise dumbbells out to sides, squeeze rear delts.'
  },

  // SHOULDER EXERCISES (10)
  {
    id: 'overhead_press',
    name: 'Overhead Press',
    primaryMuscles: ['shoulders'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Press barbell from shoulders to overhead, lock out.'
  },
  {
    id: 'dumbbell_shoulder_press',
    name: 'Dumbbell Shoulder Press',
    primaryMuscles: ['shoulders'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Press dumbbells from shoulders overhead.'
  },
  {
    id: 'arnold_press',
    name: 'Arnold Press',
    primaryMuscles: ['shoulders'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Start with palms facing you, rotate and press overhead.'
  },
  {
    id: 'lateral_raise',
    name: 'Lateral Raise',
    primaryMuscles: ['shoulders'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Raise dumbbells out to sides until parallel with ground.'
  },
  {
    id: 'front_raise',
    name: 'Front Raise',
    primaryMuscles: ['shoulders'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Raise dumbbells in front to shoulder height.'
  },
  {
    id: 'rear_delt_fly',
    name: 'Rear Delt Fly',
    primaryMuscles: ['shoulders'],
    secondaryMuscles: ['back'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Bend forward, raise dumbbells to sides, squeeze rear delts.'
  },
  {
    id: 'upright_row',
    name: 'Upright Row',
    primaryMuscles: ['shoulders'],
    secondaryMuscles: ['arms'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Pull barbell up along body to chin level, elbows high.'
  },
  {
    id: 'shrug',
    name: 'Barbell Shrug',
    primaryMuscles: ['shoulders'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Hold barbell at thighs, shrug shoulders up to ears.'
  },
  {
    id: 'pike_push_up',
    name: 'Pike Push-Up',
    primaryMuscles: ['shoulders'],
    secondaryMuscles: ['arms', 'chest'],
    equipment: 'none',
    difficulty: 'intermediate',
    instructions: 'Hips high in inverted V, lower head toward ground, push up.'
  },
  {
    id: 'handstand_push_up',
    name: 'Wall Handstand Push-Up',
    primaryMuscles: ['shoulders'],
    secondaryMuscles: ['arms'],
    equipment: 'home',
    difficulty: 'advanced',
    instructions: 'Handstand against wall, lower head to ground, press up.'
  },

  // ARM EXERCISES (12)
  {
    id: 'barbell_curl',
    name: 'Barbell Curl',
    primaryMuscles: ['arms'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Curl barbell from thighs to shoulders, squeeze biceps.'
  },
  {
    id: 'dumbbell_curl',
    name: 'Dumbbell Curl',
    primaryMuscles: ['arms'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Curl dumbbells alternating or together, control the motion.'
  },
  {
    id: 'hammer_curl',
    name: 'Hammer Curl',
    primaryMuscles: ['arms'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Curl with neutral grip (palms facing each other).'
  },
  {
    id: 'preacher_curl',
    name: 'Preacher Curl',
    primaryMuscles: ['arms'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Rest arms on preacher bench, curl weight up.'
  },
  {
    id: 'concentration_curl',
    name: 'Concentration Curl',
    primaryMuscles: ['arms'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Sit, elbow on inner thigh, curl dumbbell with focus.'
  },
  {
    id: 'cable_curl',
    name: 'Cable Curl',
    primaryMuscles: ['arms'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Curl cable attachment from low position.'
  },
  {
    id: 'tricep_pushdown',
    name: 'Tricep Pushdown',
    primaryMuscles: ['arms'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Push cable down, keeping elbows at sides, squeeze triceps.'
  },
  {
    id: 'skull_crusher',
    name: 'Skull Crusher',
    primaryMuscles: ['arms'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Lie on bench, lower bar to forehead, extend arms.'
  },
  {
    id: 'overhead_tricep_extension',
    name: 'Overhead Tricep Extension',
    primaryMuscles: ['arms'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Hold dumbbell overhead, lower behind head, extend.'
  },
  {
    id: 'tricep_dip',
    name: 'Tricep Dip',
    primaryMuscles: ['arms'],
    secondaryMuscles: ['chest'],
    equipment: 'home',
    difficulty: 'beginner',
    instructions: 'Hands on bench behind you, lower body, push up.'
  },
  {
    id: 'close_grip_bench',
    name: 'Close Grip Bench Press',
    primaryMuscles: ['arms'],
    secondaryMuscles: ['chest'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Bench press with narrow grip to target triceps.'
  },
  {
    id: 'diamond_push_up',
    name: 'Diamond Push-Up',
    primaryMuscles: ['arms'],
    secondaryMuscles: ['chest'],
    equipment: 'none',
    difficulty: 'intermediate',
    instructions: 'Push-up with hands forming diamond shape under chest.'
  },

  // LEG EXERCISES (20)
  {
    id: 'squat',
    name: 'Barbell Squat',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Bar on upper back, squat down until thighs parallel, stand up.'
  },
  {
    id: 'front_squat',
    name: 'Front Squat',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    equipment: 'gym',
    difficulty: 'advanced',
    instructions: 'Bar on front shoulders, squat down keeping torso upright.'
  },
  {
    id: 'goblet_squat',
    name: 'Goblet Squat',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Hold dumbbell at chest, squat down between legs.'
  },
  {
    id: 'leg_press',
    name: 'Leg Press',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Sit in machine, press platform away, control the descent.'
  },
  {
    id: 'hack_squat',
    name: 'Hack Squat',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Back against pad, squat down and press up.'
  },
  {
    id: 'lunge',
    name: 'Walking Lunge',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Step forward into lunge, push off to next step.'
  },
  {
    id: 'reverse_lunge',
    name: 'Reverse Lunge',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Step backward into lunge, return to standing.'
  },
  {
    id: 'bulgarian_split_squat',
    name: 'Bulgarian Split Squat',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Rear foot elevated, lower into single-leg squat.'
  },
  {
    id: 'leg_extension',
    name: 'Leg Extension',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Sit in machine, extend legs until straight, squeeze quads.'
  },
  {
    id: 'leg_curl',
    name: 'Lying Leg Curl',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Lie face down, curl pad toward glutes, squeeze hamstrings.'
  },
  {
    id: 'seated_leg_curl',
    name: 'Seated Leg Curl',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Sit in machine, curl legs under seat.'
  },
  {
    id: 'romanian_deadlift',
    name: 'Romanian Deadlift',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['back'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Hinge at hips, lower bar along legs, feel hamstring stretch.'
  },
  {
    id: 'stiff_leg_deadlift',
    name: 'Stiff Leg Deadlift',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['back'],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Similar to RDL but with straighter legs, max hamstring stretch.'
  },
  {
    id: 'hip_thrust',
    name: 'Hip Thrust',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Upper back on bench, bar on hips, drive hips up, squeeze glutes.'
  },
  {
    id: 'glute_bridge',
    name: 'Glute Bridge',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'Lie on back, feet flat, drive hips up, squeeze glutes.'
  },
  {
    id: 'calf_raise',
    name: 'Standing Calf Raise',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Stand on platform, raise heels as high as possible.'
  },
  {
    id: 'seated_calf_raise',
    name: 'Seated Calf Raise',
    primaryMuscles: ['legs'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'beginner',
    instructions: 'Sit with weight on knees, raise heels.'
  },
  {
    id: 'bodyweight_squat',
    name: 'Bodyweight Squat',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'Squat down with arms forward for balance, stand up.'
  },
  {
    id: 'jump_squat',
    name: 'Jump Squat',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    equipment: 'none',
    difficulty: 'intermediate',
    instructions: 'Squat down, explode up into jump, land softly.'
  },
  {
    id: 'step_up',
    name: 'Step Up',
    primaryMuscles: ['legs'],
    secondaryMuscles: ['core'],
    equipment: 'home',
    difficulty: 'beginner',
    instructions: 'Step onto platform, drive through front leg, step down.'
  },

  // CORE EXERCISES (12)
  {
    id: 'plank',
    name: 'Plank',
    primaryMuscles: ['core'],
    secondaryMuscles: [],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'Forearms and toes on ground, body straight, hold position.'
  },
  {
    id: 'side_plank',
    name: 'Side Plank',
    primaryMuscles: ['core'],
    secondaryMuscles: [],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'On side, forearm and feet stacked, hold hips up.'
  },
  {
    id: 'crunch',
    name: 'Crunch',
    primaryMuscles: ['core'],
    secondaryMuscles: [],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'Lie on back, curl shoulders toward hips, squeeze abs.'
  },
  {
    id: 'bicycle_crunch',
    name: 'Bicycle Crunch',
    primaryMuscles: ['core'],
    secondaryMuscles: [],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'Lie on back, alternate elbow to opposite knee in cycling motion.'
  },
  {
    id: 'leg_raise',
    name: 'Lying Leg Raise',
    primaryMuscles: ['core'],
    secondaryMuscles: [],
    equipment: 'none',
    difficulty: 'intermediate',
    instructions: 'Lie on back, raise straight legs to vertical, lower with control.'
  },
  {
    id: 'hanging_leg_raise',
    name: 'Hanging Leg Raise',
    primaryMuscles: ['core'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'advanced',
    instructions: 'Hang from bar, raise legs to horizontal or higher.'
  },
  {
    id: 'russian_twist',
    name: 'Russian Twist',
    primaryMuscles: ['core'],
    secondaryMuscles: [],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'Sit with feet elevated, rotate torso side to side.'
  },
  {
    id: 'mountain_climber',
    name: 'Mountain Climber',
    primaryMuscles: ['core'],
    secondaryMuscles: ['legs'],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'Plank position, alternate driving knees to chest quickly.'
  },
  {
    id: 'dead_bug',
    name: 'Dead Bug',
    primaryMuscles: ['core'],
    secondaryMuscles: [],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'Lie on back, extend opposite arm and leg, alternate.'
  },
  {
    id: 'bird_dog',
    name: 'Bird Dog',
    primaryMuscles: ['core'],
    secondaryMuscles: ['back'],
    equipment: 'none',
    difficulty: 'beginner',
    instructions: 'On all fours, extend opposite arm and leg, hold, alternate.'
  },
  {
    id: 'cable_woodchop',
    name: 'Cable Woodchop',
    primaryMuscles: ['core'],
    secondaryMuscles: [],
    equipment: 'gym',
    difficulty: 'intermediate',
    instructions: 'Pull cable diagonally across body in chopping motion.'
  },
  {
    id: 'ab_wheel',
    name: 'Ab Wheel Rollout',
    primaryMuscles: ['core'],
    secondaryMuscles: ['shoulders'],
    equipment: 'gym',
    difficulty: 'advanced',
    instructions: 'Kneel with ab wheel, roll forward extending body, roll back.'
  }
];

export const getExerciseById = (id) => EXERCISES.find(e => e.id === id);

export const getExercisesByMuscle = (muscleId) =>
  EXERCISES.filter(e => e.primaryMuscles.includes(muscleId));

export const getExercisesByEquipment = (equipment) =>
  EXERCISES.filter(e => e.equipment === equipment || e.equipment === 'none');

export const getExercisesByDifficulty = (difficulty) =>
  EXERCISES.filter(e => e.difficulty === difficulty);
