import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useWorkout } from '../context/WorkoutContext';
import { useUser } from '../context/UserContext';
import MuscleHeatmap from '../components/MuscleHeatmap';
import { COLORS } from '../utils/constants';
import { getWeeklySummary } from '../services/storage';

const WeeklySummaryScreen = ({ navigation }) => {
  const { user, streak } = useUser();
  const { weeklySummary, loadHistory } = useWorkout();
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    loadSummary();
  }, []);

  const loadSummary = async () => {
    const data = await getWeeklySummary();
    setSummary(data);
  };

  if (!summary) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  const progressPercent = user?.daysPerWeek
    ? Math.min((summary.workoutsCompleted / user.daysPerWeek) * 100, 100)
    : 0;

  // Get muscles trained as array for heatmap
  const musclesTrained = Object.keys(summary.musclesTrained);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Weekly Summary</Text>
          <Text style={styles.subtitle}>
            {getWeekRange()}
          </Text>
        </View>

        {/* Main Stats */}
        <View style={styles.mainStatsCard}>
          <View style={styles.progressCircle}>
            <View style={styles.progressRing}>
              <Text style={styles.progressValue}>
                {summary.workoutsCompleted}
              </Text>
              <Text style={styles.progressLabel}>
                /{user?.daysPerWeek || 4}
              </Text>
            </View>
            <View style={[
              styles.progressFill,
              {
                height: `${progressPercent}%`,
                backgroundColor: progressPercent >= 100 ? COLORS.success : COLORS.primary,
              }
            ]} />
          </View>
          <View style={styles.mainStatsText}>
            <Text style={styles.mainStatsTitle}>Workouts Completed</Text>
            <Text style={styles.mainStatsSubtitle}>
              {progressPercent >= 100
                ? "Goal achieved! 🎉"
                : `${user?.daysPerWeek - summary.workoutsCompleted} more to hit your goal`
              }
            </Text>
          </View>
        </View>

        {/* Quick Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🔥</Text>
            <Text style={styles.statValue}>{streak}</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>⏱️</Text>
            <Text style={styles.statValue}>{summary.totalDuration}</Text>
            <Text style={styles.statLabel}>Total Minutes</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>💪</Text>
            <Text style={styles.statValue}>{musclesTrained.length}</Text>
            <Text style={styles.statLabel}>Muscles Hit</Text>
          </View>
        </View>

        {/* Muscle Heatmap */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Muscles Trained</Text>
          {musclesTrained.length > 0 ? (
            <MuscleHeatmap
              primaryMuscles={musclesTrained}
              counts={summary.musclesTrained}
              showCounts
            />
          ) : (
            <View style={styles.emptyCard}>
              <Text style={styles.emptyEmoji}>🏋️</Text>
              <Text style={styles.emptyText}>
                No workouts this week yet.{'\n'}Start one to see your progress!
              </Text>
            </View>
          )}
        </View>

        {/* Recent Workouts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Workouts</Text>
          {summary.history.length > 0 ? (
            summary.history.slice(0, 5).map((workout, index) => (
              <View key={workout.id || index} style={styles.historyItem}>
                <View style={styles.historyDot} />
                <View style={styles.historyContent}>
                  <Text style={styles.historyName}>{workout.workoutName}</Text>
                  <Text style={styles.historyMeta}>
                    {formatDate(workout.completedAt)} • {workout.duration} min
                  </Text>
                </View>
                {workout.completed && (
                  <Text style={styles.completedBadge}>✓</Text>
                )}
              </View>
            ))
          ) : (
            <View style={styles.emptyCard}>
              <Text style={styles.emptyText}>No recent workouts</Text>
            </View>
          )}
        </View>

        {/* Encouragement */}
        <View style={styles.motivationCard}>
          <Text style={styles.motivationText}>
            {getMotivationalMessage(summary.workoutsCompleted, user?.daysPerWeek)}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Helpers
const getWeekRange = () => {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - now.getDay());

  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  const format = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return `${format(start)} - ${format(end)}`;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

const getMotivationalMessage = (completed, goal) => {
  if (!goal) return "Keep pushing! Every workout counts.";

  const ratio = completed / goal;

  if (ratio >= 1) return "🏆 You crushed it this week! Goal achieved.";
  if (ratio >= 0.75) return "Almost there! One more push and you've got this.";
  if (ratio >= 0.5) return "Halfway done! Stay consistent.";
  if (ratio > 0) return "Good start! Keep the momentum going.";
  return "New week, fresh start. Let's get moving!";
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 40,
    color: COLORS.textSecondary,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  mainStatsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.border,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  progressRing: {
    flexDirection: 'row',
    alignItems: 'baseline',
    zIndex: 1,
  },
  progressValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.surface,
  },
  progressLabel: {
    fontSize: 14,
    color: COLORS.surface,
    opacity: 0.8,
  },
  progressFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.primary,
  },
  mainStatsText: {
    flex: 1,
  },
  mainStatsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  mainStatsSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  statEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginTop: 4,
    textAlign: 'center',
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
  emptyCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  emptyEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  historyDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    marginRight: 12,
  },
  historyContent: {
    flex: 1,
  },
  historyName: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.text,
  },
  historyMeta: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  completedBadge: {
    fontSize: 16,
    color: COLORS.success,
    fontWeight: 'bold',
  },
  motivationCard: {
    backgroundColor: COLORS.primary + '15',
    borderRadius: 16,
    padding: 20,
  },
  motivationText: {
    fontSize: 16,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default WeeklySummaryScreen;
