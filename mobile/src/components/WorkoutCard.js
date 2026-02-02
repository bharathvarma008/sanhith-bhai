import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPLIT_TYPES, INTENSITY_LEVELS } from '../utils/constants';
import { getMuscleColor } from '../data/muscles';

const WorkoutCard = ({ workout, onPress, onStart, featured, compact }) => {
  const splitInfo = SPLIT_TYPES[workout.splitType];
  const intensityInfo = INTENSITY_LEVELS[workout.intensity];

  if (compact) {
    return (
      <TouchableOpacity style={styles.compactCard} onPress={onPress}>
        <View style={styles.compactContent}>
          <View style={styles.compactHeader}>
            <Text style={styles.compactSplit}>{splitInfo?.name}</Text>
            <View style={styles.compactMeta}>
              <Text style={styles.compactDuration}>{workout.duration}m</Text>
            </View>
          </View>
          <Text style={styles.compactName} numberOfLines={1}>
            {workout.name}
          </Text>
          <View style={styles.muscleChips}>
            {workout.primaryMuscles.slice(0, 3).map((muscle) => (
              <View
                key={muscle}
                style={[styles.muscleChip, { backgroundColor: getMuscleColor(muscle) + '30' }]}
              >
                <Text style={[styles.muscleChipText, { color: getMuscleColor(muscle) }]}>
                  {muscle}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.compactStartButton} onPress={onStart}>
          <Text style={styles.compactStartText}>Start</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.card, featured && styles.featuredCard]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={[styles.splitBadge, featured && styles.featuredSplitBadge]}>
          <Text style={[styles.splitText, featured && styles.featuredSplitText]}>
            {splitInfo?.name}
          </Text>
        </View>
        <View style={[
          styles.intensityBadge,
          { backgroundColor: intensityInfo?.color + '20' }
        ]}>
          <View style={[styles.intensityDot, { backgroundColor: intensityInfo?.color }]} />
          <Text style={[styles.intensityText, { color: intensityInfo?.color }]}>
            {intensityInfo?.name}
          </Text>
        </View>
      </View>

      {/* Title */}
      <Text style={[styles.name, featured && styles.featuredName]}>
        {workout.name}
      </Text>
      <Text style={[styles.description, featured && styles.featuredDescription]} numberOfLines={2}>
        {workout.description}
      </Text>

      {/* Meta */}
      <View style={styles.metaRow}>
        <View style={styles.metaItem}>
          <Text style={styles.metaIcon}>⏱️</Text>
          <Text style={styles.metaText}>{workout.duration} min</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaIcon}>📊</Text>
          <Text style={styles.metaText}>{workout.exercises.length} exercises</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaIcon}>🎯</Text>
          <Text style={styles.metaText}>{workout.difficulty}</Text>
        </View>
      </View>

      {/* Muscles */}
      <View style={styles.muscleRow}>
        {workout.primaryMuscles.map((muscle) => (
          <View
            key={muscle}
            style={[styles.muscleTag, { backgroundColor: getMuscleColor(muscle) + '20' }]}
          >
            <Text style={[styles.muscleTagText, { color: getMuscleColor(muscle) }]}>
              {muscle}
            </Text>
          </View>
        ))}
      </View>

      {/* Start Button */}
      {onStart && (
        <TouchableOpacity
          style={[styles.startButton, featured && styles.featuredStartButton]}
          onPress={onStart}
        >
          <Text style={[styles.startButtonText, featured && styles.featuredStartButtonText]}>
            Start Workout
          </Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  featuredCard: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  splitBadge: {
    backgroundColor: COLORS.primary + '15',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  featuredSplitBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  splitText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
    textTransform: 'uppercase',
  },
  featuredSplitText: {
    color: COLORS.surface,
  },
  intensityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  intensityDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  intensityText: {
    fontSize: 12,
    fontWeight: '500',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 4,
  },
  featuredName: {
    color: COLORS.surface,
  },
  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  featuredDescription: {
    color: 'rgba(255,255,255,0.8)',
  },
  metaRow: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  metaText: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  muscleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  muscleTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  muscleTagText: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  startButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  featuredStartButton: {
    backgroundColor: COLORS.surface,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.surface,
  },
  featuredStartButtonText: {
    color: COLORS.primary,
  },
  // Compact styles
  compactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 8,
  },
  compactContent: {
    flex: 1,
  },
  compactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  compactSplit: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
    textTransform: 'uppercase',
  },
  compactMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  compactDuration: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  compactName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 8,
  },
  muscleChips: {
    flexDirection: 'row',
    gap: 6,
  },
  muscleChip: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  muscleChipText: {
    fontSize: 11,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  compactStartButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 12,
  },
  compactStartText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.surface,
  },
});

export default WorkoutCard;
