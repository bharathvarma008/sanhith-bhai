import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useUser } from '../context/UserContext';
import {
  GOALS,
  EXPERIENCE_LEVELS,
  DAYS_PER_WEEK,
  EQUIPMENT_OPTIONS,
  DURATION_OPTIONS,
  COLORS,
} from '../utils/constants';

const OnboardingScreen = ({ navigation }) => {
  const { createUser } = useUser();
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    goal: null,
    experienceLevel: null,
    daysPerWeek: 4,
    equipment: null,
    timePerWorkout: 45,
    musclePriorities: [],
  });

  const handleNext = async () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete onboarding
      try {
        await createUser(profile);
        navigation.replace('Main');
      } catch (error) {
        console.error('Error completing onboarding:', error);
      }
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return profile.goal !== null;
      case 2:
        return profile.experienceLevel !== null;
      case 3:
        return profile.equipment !== null;
      default:
        return false;
    }
  };

  const renderStep1 = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>What's your main goal?</Text>
      <Text style={styles.stepSubtitle}>This helps us recommend the right workouts</Text>

      <View style={styles.optionsGrid}>
        {GOALS.map((goal) => (
          <TouchableOpacity
            key={goal.id}
            style={[
              styles.goalCard,
              profile.goal === goal.id && styles.selectedCard,
            ]}
            onPress={() => setProfile({ ...profile, goal: goal.id })}
          >
            <Text style={styles.goalIcon}>{goal.icon}</Text>
            <Text style={[
              styles.goalName,
              profile.goal === goal.id && styles.selectedText,
            ]}>
              {goal.name}
            </Text>
            <Text style={[
              styles.goalDescription,
              profile.goal === goal.id && styles.selectedSubtext,
            ]}>
              {goal.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Your experience level?</Text>
      <Text style={styles.stepSubtitle}>We'll match workout difficulty to your level</Text>

      {EXPERIENCE_LEVELS.map((level) => (
        <TouchableOpacity
          key={level.id}
          style={[
            styles.optionRow,
            profile.experienceLevel === level.id && styles.selectedRow,
          ]}
          onPress={() => setProfile({ ...profile, experienceLevel: level.id })}
        >
          <View style={styles.optionContent}>
            <Text style={[
              styles.optionName,
              profile.experienceLevel === level.id && styles.selectedText,
            ]}>
              {level.name}
            </Text>
            <Text style={[
              styles.optionDescription,
              profile.experienceLevel === level.id && styles.selectedSubtext,
            ]}>
              {level.description}
            </Text>
          </View>
          <View style={[
            styles.radioOuter,
            profile.experienceLevel === level.id && styles.radioSelected,
          ]}>
            {profile.experienceLevel === level.id && (
              <View style={styles.radioInner} />
            )}
          </View>
        </TouchableOpacity>
      ))}

      <Text style={[styles.stepTitle, { marginTop: 30 }]}>Days per week?</Text>
      <View style={styles.daysRow}>
        {DAYS_PER_WEEK.map((days) => (
          <TouchableOpacity
            key={days}
            style={[
              styles.dayButton,
              profile.daysPerWeek === days && styles.selectedDayButton,
            ]}
            onPress={() => setProfile({ ...profile, daysPerWeek: days })}
          >
            <Text style={[
              styles.dayText,
              profile.daysPerWeek === days && styles.selectedDayText,
            ]}>
              {days}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderStep3 = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Where do you work out?</Text>
      <Text style={styles.stepSubtitle}>We'll filter workouts by available equipment</Text>

      {EQUIPMENT_OPTIONS.map((equipment) => (
        <TouchableOpacity
          key={equipment.id}
          style={[
            styles.optionRow,
            profile.equipment === equipment.id && styles.selectedRow,
          ]}
          onPress={() => setProfile({ ...profile, equipment: equipment.id })}
        >
          <View style={styles.optionContent}>
            <Text style={[
              styles.optionName,
              profile.equipment === equipment.id && styles.selectedText,
            ]}>
              {equipment.name}
            </Text>
            <Text style={[
              styles.optionDescription,
              profile.equipment === equipment.id && styles.selectedSubtext,
            ]}>
              {equipment.description}
            </Text>
          </View>
          <View style={[
            styles.radioOuter,
            profile.equipment === equipment.id && styles.radioSelected,
          ]}>
            {profile.equipment === equipment.id && (
              <View style={styles.radioInner} />
            )}
          </View>
        </TouchableOpacity>
      ))}

      <Text style={[styles.stepTitle, { marginTop: 30 }]}>Time per workout?</Text>
      <View style={styles.daysRow}>
        {DURATION_OPTIONS.map((duration) => (
          <TouchableOpacity
            key={duration}
            style={[
              styles.durationButton,
              profile.timePerWorkout === duration && styles.selectedDayButton,
            ]}
            onPress={() => setProfile({ ...profile, timePerWorkout: duration })}
          >
            <Text style={[
              styles.dayText,
              profile.timePerWorkout === duration && styles.selectedDayText,
            ]}>
              {duration}m
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Progress indicator */}
      <View style={styles.progressContainer}>
        {[1, 2, 3].map((s) => (
          <View
            key={s}
            style={[
              styles.progressDot,
              s === step && styles.progressDotActive,
              s < step && styles.progressDotComplete,
            ]}
          />
        ))}
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </ScrollView>

      {/* Navigation buttons */}
      <View style={styles.footer}>
        {step > 1 && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setStep(step - 1)}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[
            styles.nextButton,
            !canProceed() && styles.nextButtonDisabled,
            step === 1 && { flex: 1 },
          ]}
          onPress={handleNext}
          disabled={!canProceed()}
        >
          <Text style={styles.nextButtonText}>
            {step === 3 ? "Let's Go" : 'Next'}
          </Text>
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
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 8,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.border,
  },
  progressDotActive: {
    backgroundColor: COLORS.primary,
    width: 30,
  },
  progressDotComplete: {
    backgroundColor: COLORS.primary,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  stepContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  stepSubtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 24,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  goalCard: {
    width: '47%',
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  selectedCard: {
    borderColor: COLORS.primary,
    backgroundColor: '#F0EFFF',
  },
  goalIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  goalName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  goalDescription: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 16,
  },
  selectedText: {
    color: COLORS.primary,
  },
  selectedSubtext: {
    color: COLORS.primary,
    opacity: 0.8,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  selectedRow: {
    borderColor: COLORS.primary,
    backgroundColor: '#F0EFFF',
  },
  optionContent: {
    flex: 1,
  },
  optionName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 2,
  },
  optionDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: COLORS.primary,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
  },
  daysRow: {
    flexDirection: 'row',
    gap: 12,
  },
  dayButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  durationButton: {
    paddingHorizontal: 20,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  selectedDayButton: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
  dayText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
  },
  selectedDayText: {
    color: COLORS.surface,
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  backButton: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  nextButton: {
    flex: 2,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: COLORS.border,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.surface,
  },
});

export default OnboardingScreen;
