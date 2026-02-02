import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useWorkout } from '../context/WorkoutContext';
import { useUser } from '../context/UserContext';
import WorkoutCard from '../components/WorkoutCard';
import { COLORS, SPLIT_TYPES } from '../utils/constants';
import { WORKOUTS, filterWorkouts } from '../data/workouts';
import { MUSCLE_GROUPS } from '../data/muscles';

const FILTER_OPTIONS = {
  split: [
    { id: 'all', name: 'All' },
    { id: 'push', name: 'Push' },
    { id: 'pull', name: 'Pull' },
    { id: 'legs', name: 'Legs' },
    { id: 'upper', name: 'Upper' },
    { id: 'lower', name: 'Lower' },
    { id: 'full_body', name: 'Full Body' },
  ],
  muscle: [
    { id: 'all', name: 'All' },
    ...Object.values(MUSCLE_GROUPS).map(m => ({ id: m.id, name: m.name })),
  ],
  duration: [
    { id: 'all', name: 'Any' },
    { id: '30', name: '≤30m' },
    { id: '45', name: '≤45m' },
    { id: '60', name: '≤60m' },
  ],
};

const LibraryScreen = ({ navigation }) => {
  const { user } = useUser();
  const { startWorkout } = useWorkout();

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    split: 'all',
    muscle: 'all',
    duration: 'all',
  });
  const [activeFilterCategory, setActiveFilterCategory] = useState('split');

  const filteredWorkouts = useMemo(() => {
    let result = WORKOUTS;

    // Filter by equipment (always apply based on user preference)
    if (user?.equipment) {
      result = result.filter(w =>
        w.equipment === user.equipment || w.equipment === 'none'
      );
    }

    // Filter by split type
    if (filters.split !== 'all') {
      result = result.filter(w => w.splitType === filters.split);
    }

    // Filter by muscle
    if (filters.muscle !== 'all') {
      result = result.filter(w =>
        w.primaryMuscles.includes(filters.muscle)
      );
    }

    // Filter by duration
    if (filters.duration !== 'all') {
      const maxDuration = parseInt(filters.duration);
      result = result.filter(w => w.duration <= maxDuration);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(w =>
        w.name.toLowerCase().includes(query) ||
        w.description.toLowerCase().includes(query) ||
        w.splitType.toLowerCase().includes(query)
      );
    }

    return result;
  }, [filters, searchQuery, user?.equipment]);

  const handleStartWorkout = (workout) => {
    startWorkout(workout);
    navigation.navigate('ActiveWorkout');
  };

  const handleViewDetails = (workout) => {
    navigation.navigate('WorkoutDetail', { workout });
  };

  const setFilter = (category, value) => {
    setFilters({ ...filters, [category]: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Workout Library</Text>
        <Text style={styles.subtitle}>
          {filteredWorkouts.length} workouts available
        </Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search workouts..."
          placeholderTextColor={COLORS.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Text style={styles.clearButton}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Filter Categories */}
      <View style={styles.filterCategories}>
        {['split', 'muscle', 'duration'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterCategory,
              activeFilterCategory === category && styles.activeFilterCategory,
            ]}
            onPress={() => setActiveFilterCategory(category)}
          >
            <Text style={[
              styles.filterCategoryText,
              activeFilterCategory === category && styles.activeFilterCategoryText,
            ]}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Filter Options */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterOptionsScroll}
        contentContainerStyle={styles.filterOptionsContent}
      >
        {FILTER_OPTIONS[activeFilterCategory].map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.filterOption,
              filters[activeFilterCategory] === option.id && styles.activeFilterOption,
            ]}
            onPress={() => setFilter(activeFilterCategory, option.id)}
          >
            <Text style={[
              styles.filterOptionText,
              filters[activeFilterCategory] === option.id && styles.activeFilterOptionText,
            ]}>
              {option.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Workouts List */}
      <ScrollView
        style={styles.workoutsList}
        contentContainerStyle={styles.workoutsContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredWorkouts.length > 0 ? (
          filteredWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              onPress={() => handleViewDetails(workout)}
              onStart={() => handleStartWorkout(workout)}
              compact
            />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🔍</Text>
            <Text style={styles.emptyTitle}>No workouts found</Text>
            <Text style={styles.emptySubtitle}>
              Try adjusting your filters or search query
            </Text>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => {
                setFilters({ split: 'all', muscle: 'all', duration: 'all' });
                setSearchQuery('');
              }}
            >
              <Text style={styles.resetButtonText}>Reset Filters</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    marginHorizontal: 20,
    marginVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    height: 48,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
  },
  clearButton: {
    fontSize: 16,
    color: COLORS.textSecondary,
    padding: 4,
  },
  filterCategories: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 8,
  },
  filterCategory: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
  },
  activeFilterCategory: {
    backgroundColor: COLORS.primary,
  },
  filterCategoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  activeFilterCategoryText: {
    color: COLORS.surface,
  },
  filterOptionsScroll: {
    maxHeight: 44,
    marginBottom: 8,
  },
  filterOptionsContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  filterOption: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  activeFilterOption: {
    backgroundColor: COLORS.primary + '20',
    borderColor: COLORS.primary,
  },
  filterOptionText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  activeFilterOptionText: {
    color: COLORS.primary,
    fontWeight: '500',
  },
  workoutsList: {
    flex: 1,
  },
  workoutsContent: {
    padding: 20,
    paddingTop: 8,
    paddingBottom: 40,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  resetButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  resetButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.surface,
  },
});

export default LibraryScreen;
