import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useWorkout } from '../context/WorkoutContext';
import ExerciseItem from '../components/ExerciseItem';
import MuscleHeatmap from '../components/MuscleHeatmap';
import { COLORS, SPLIT_TYPES, INTENSITY_LEVELS } from '../utils/constants';
import { getExerciseById } from '../data/exercises';

const WorkoutDetailScreen = ({ route, navigation }) => {
  const { workout } = route.params;
  const { startWorkout } = useWorkout();

  const handleStartWorkout = () => {
    startWorkout(workout);
    navigation.navigate('ActiveWorkout');
  };

  const splitInfo = SPLIT_TYPES[workout.splitType];
  const intensityInfo = INTENSITY_LEVELS[workout.intensity];

  // Get full exercise details
  const exercises = workout.exercises.map((e) => ({
    ...e,
    ...getExerciseById(e.exerciseId),
  }));

  // Calculate totals
  const totalSets = exercises.reduce((sum, e) => sum + e.sets, 0);
  const avgRest = Math.round(
    exercises.reduce((sum, e) => sum + e.restSeconds, 0) / exercises.length
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.splitType}>{splitInfo?.name || workout.splitType}</Text>
            <Text style={styles.title}>{workout.name}</Text>
          </View>
        </View>

        {/* Meta Info */}
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Text style={styles.metaValue}>{workout.duration}</Text>
            <Text style={styles.metaLabel}>minutes</Text>
          </View>
          <View style={styles.metaDivider} />
          <View style={styles.metaItem}>
            <Text style={styles.metaValue}>{exercises.length}</Text>
            <Text style={styles.metaLabel}>exercises</Text>
          </View>
          <View style={styles.metaDivider} />
          <View style={styles.metaItem}>
            <Text style={styles.metaValue}>{totalSets}</Text>
            <Text style={styles.metaLabel}>sets</Text>
          </View>
        </View>

        {/* Tags */}
        <View style={styles.tagsRow}>
          <View style={[styles.tag, { backgroundColor: intensityInfo?.color + '20' }]}>
            <Text style={[styles.tagText, { color: intensityInfo?.color }]}>
              {intensityInfo?.name}
            </Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{workout.difficulty}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{workout.equipment}</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>{workout.description}</Text>

        {/* Muscle Heatmap */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Muscles Targeted</Text>
          <MuscleHeatmap
            primaryMuscles={workout.primaryMuscles}
            secondaryMuscles={workout.secondaryMuscles}
          />
        </View>

        {/* Exercise List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Exercises</Text>
          {exercises.map((exercise, index) => (
            <ExerciseItem
              key={exercise.exerciseId}
              exercise={exercise}
              index={index + 1}
            />
          ))}
        </View>

        {/* Tips */}
        <View style={styles.tipsCard}>
          <Text style={styles.tipsTitle}>💡 Tips</Text>
          <Text style={styles.tipsText}>
            • Rest {avgRest}s between sets on average
          </Text>
          <Text style={styles.tipsText}>
            • Control the weight on the way down
          </Text>
          <Text style={styles.tipsText}>
            • Stay hydrated throughout
          </Text>
        </View>
      </ScrollView>

      {/* Start Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStartWorkout}
        >
          <Text style={styles.startButtonText}>Start Workout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  backArrow: {
    fontSize: 20,
    color: COLORS.text,
  },
  headerContent: {
    flex: 1,
  },
  splitType: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  metaRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  metaItem: {
    flex: 1,
    alignItems: 'center',
  },
  metaValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  metaLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  metaDivider: {
    width: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: 12,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 22,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 12,
  },
  tipsCard: {
    backgroundColor: '#FFF8E1',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F57F17',
    marginBottom: 8,
  },
  tipsText: {
    fontSize: 14,
    color: '#F57F17',
    marginBottom: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  startButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 28,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.surface,
  },
});

export default WorkoutDetailScreen;
