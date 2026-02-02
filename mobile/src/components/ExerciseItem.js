import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants';

const ExerciseItem = ({ exercise, index, compact }) => {
  if (compact) {
    return (
      <View style={styles.compactContainer}>
        <Text style={styles.compactIndex}>{index}</Text>
        <Text style={styles.compactName}>{exercise.name}</Text>
        <Text style={styles.compactSets}>
          {exercise.sets}×{exercise.reps}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{exercise.name}</Text>
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Sets</Text>
            <Text style={styles.metaValue}>{exercise.sets}</Text>
          </View>
          <View style={styles.metaDivider} />
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Reps</Text>
            <Text style={styles.metaValue}>{exercise.reps}</Text>
          </View>
          <View style={styles.metaDivider} />
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Rest</Text>
            <Text style={styles.metaValue}>{exercise.restSeconds}s</Text>
          </View>
        </View>
        {exercise.primaryMuscles && (
          <View style={styles.muscleRow}>
            {exercise.primaryMuscles.map((muscle) => (
              <View key={muscle} style={styles.muscleTag}>
                <Text style={styles.muscleText}>{muscle}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  indexContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  index: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metaItem: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  metaLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  metaValue: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  metaDivider: {
    width: 1,
    height: 24,
    backgroundColor: COLORS.border,
  },
  muscleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  muscleTag: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  muscleText: {
    fontSize: 11,
    color: COLORS.textSecondary,
    textTransform: 'capitalize',
  },
  // Compact styles
  compactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  compactIndex: {
    width: 24,
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  compactName: {
    flex: 1,
    fontSize: 15,
    color: COLORS.text,
  },
  compactSets: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
});

export default ExerciseItem;
