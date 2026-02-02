import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useUser } from '../context/UserContext';
import { useWorkout } from '../context/WorkoutContext';
import WorkoutCard from '../components/WorkoutCard';
import { COLORS, SPLIT_TYPES } from '../utils/constants';
import { shouldRest } from '../services/recommend';

const TodayScreen = ({ navigation }) => {
  const { user, streak, refreshStreak } = useUser();
  const {
    recommendations,
    isLoadingRecommendations,
    loadRecommendations,
    startWorkout,
    history,
  } = useWorkout();

  useEffect(() => {
    if (user) {
      loadRecommendations(user);
      refreshStreak();
    }
  }, [user]);

  const handleStartWorkout = (workout) => {
    startWorkout(workout);
    navigation.navigate('ActiveWorkout');
  };

  const handleViewDetails = (workout) => {
    navigation.navigate('WorkoutDetail', { workout });
  };

  const needsRest = user && shouldRest(history, user.daysPerWeek);

  if (isLoadingRecommendations) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Finding your workout...</Text>
      </SafeAreaView>
    );
  }

  const primaryRecommendation = recommendations[0];
  const alternatives = recommendations.slice(1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              {getGreeting()}, {user?.name || 'Athlete'}
            </Text>
            <Text style={styles.date}>{formatDate(new Date())}</Text>
          </View>
          {streak > 0 && (
            <View style={styles.streakBadge}>
              <Text style={styles.streakEmoji}>🔥</Text>
              <Text style={styles.streakText}>{streak}</Text>
            </View>
          )}
        </View>

        {/* Rest Day Suggestion */}
        {needsRest && (
          <View style={styles.restCard}>
            <Text style={styles.restIcon}>😴</Text>
            <View style={styles.restContent}>
              <Text style={styles.restTitle}>Rest Day Recommended</Text>
              <Text style={styles.restSubtitle}>
                You've been crushing it! A rest day helps muscles recover.
              </Text>
            </View>
          </View>
        )}

        {/* Today's Recommendation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Workout</Text>
          {primaryRecommendation && (
            <WorkoutCard
              workout={primaryRecommendation}
              onPress={() => handleViewDetails(primaryRecommendation)}
              onStart={() => handleStartWorkout(primaryRecommendation)}
              featured
            />
          )}
        </View>

        {/* Alternatives */}
        {alternatives.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Alternatives</Text>
            {alternatives.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                onPress={() => handleViewDetails(workout)}
                onStart={() => handleStartWorkout(workout)}
                compact
              />
            ))}
          </View>
        )}

        {/* Quick Stats */}
        <View style={styles.section}>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>
                {history.filter(h => isThisWeek(h.completedAt)).length}
              </Text>
              <Text style={styles.statLabel}>This Week</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{user?.daysPerWeek || 4}</Text>
              <Text style={styles.statLabel}>Goal</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{streak}</Text>
              <Text style={styles.statLabel}>Streak</Text>
            </View>
          </View>
        </View>

        {/* Browse Library Link */}
        <TouchableOpacity
          style={styles.browseButton}
          onPress={() => navigation.navigate('Library')}
        >
          <Text style={styles.browseText}>Browse All Workouts</Text>
          <Text style={styles.browseArrow}>→</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Helpers
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
};

const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
};

const isThisWeek = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  weekStart.setHours(0, 0, 0, 0);
  return date >= weekStart;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  date: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  streakEmoji: {
    fontSize: 16,
    marginRight: 4,
  },
  streakText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E65100',
  },
  restCard: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  restIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  restContent: {
    flex: 1,
  },
  restTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1565C0',
    marginBottom: 2,
  },
  restSubtitle: {
    fontSize: 14,
    color: '#1565C0',
    opacity: 0.8,
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
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  browseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  browseText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primary,
  },
  browseArrow: {
    fontSize: 18,
    color: COLORS.primary,
    marginLeft: 8,
  },
});

export default TodayScreen;
