import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants';
import { MUSCLE_GROUPS, getMuscleColor } from '../data/muscles';

const MuscleHeatmap = ({ primaryMuscles = [], secondaryMuscles = [], counts, showCounts }) => {
  const muscles = Object.values(MUSCLE_GROUPS);

  const getMuscleIntensity = (muscleId) => {
    if (primaryMuscles.includes(muscleId)) return 'primary';
    if (secondaryMuscles.includes(muscleId)) return 'secondary';
    return 'inactive';
  };

  const getCount = (muscleId) => {
    if (!counts) return 0;
    return counts[muscleId] || 0;
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {muscles.map((muscle) => {
          const intensity = getMuscleIntensity(muscle.id);
          const count = getCount(muscle.id);
          const isActive = intensity !== 'inactive' || count > 0;

          return (
            <View
              key={muscle.id}
              style={[
                styles.muscleCard,
                isActive && styles.activeMuscleCard,
                intensity === 'primary' && { borderColor: muscle.color, borderWidth: 2 },
              ]}
            >
              <View
                style={[
                  styles.muscleIndicator,
                  {
                    backgroundColor: isActive ? muscle.color : COLORS.border,
                    opacity: intensity === 'secondary' ? 0.5 : 1,
                  },
                ]}
              />
              <Text
                style={[
                  styles.muscleName,
                  isActive && { color: COLORS.text },
                ]}
              >
                {muscle.name}
              </Text>
              {showCounts && count > 0 && (
                <View style={[styles.countBadge, { backgroundColor: muscle.color }]}>
                  <Text style={styles.countText}>{count}×</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>

      {/* Legend */}
      {!showCounts && (primaryMuscles.length > 0 || secondaryMuscles.length > 0) && (
        <View style={styles.legend}>
          {primaryMuscles.length > 0 && (
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: COLORS.primary }]} />
              <Text style={styles.legendText}>Primary</Text>
            </View>
          )}
          {secondaryMuscles.length > 0 && (
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: COLORS.textSecondary }]} />
              <Text style={styles.legendText}>Secondary</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  muscleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  activeMuscleCard: {
    backgroundColor: COLORS.surface,
  },
  muscleIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  muscleName: {
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  countBadge: {
    marginLeft: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  countText: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.surface,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  legendText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
});

export default MuscleHeatmap;
