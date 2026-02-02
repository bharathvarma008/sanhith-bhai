import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { UserProvider, useUser } from './src/context/UserContext';
import { WorkoutProvider } from './src/context/WorkoutContext';

import OnboardingScreen from './src/screens/OnboardingScreen';
import TodayScreen from './src/screens/TodayScreen';
import WorkoutDetailScreen from './src/screens/WorkoutDetailScreen';
import ActiveWorkoutScreen, { WorkoutCompleteScreen } from './src/screens/ActiveWorkoutScreen';
import WeeklySummaryScreen from './src/screens/WeeklySummaryScreen';
import LibraryScreen from './src/screens/LibraryScreen';

import { COLORS } from './src/utils/constants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for main app
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          tabBarIcon: ({ color }) => <TabIcon icon="🏠" color={color} />,
          tabBarLabel: 'Today',
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ color }) => <TabIcon icon="📚" color={color} />,
          tabBarLabel: 'Library',
        }}
      />
      <Tab.Screen
        name="Progress"
        component={WeeklySummaryScreen}
        options={{
          tabBarIcon: ({ color }) => <TabIcon icon="📊" color={color} />,
          tabBarLabel: 'Progress',
        }}
      />
    </Tab.Navigator>
  );
};

// Simple tab icon component
const TabIcon = ({ icon }) => (
  <Text style={{ fontSize: 20 }}>{icon}</Text>
);

// Main navigation structure
const AppNavigator = () => {
  const { isLoading, hasCompletedOnboarding } = useUser();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {!hasCompletedOnboarding ? (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      ) : (
        <>
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen
            name="WorkoutDetail"
            component={WorkoutDetailScreen}
            options={{ animation: 'slide_from_bottom' }}
          />
          <Stack.Screen
            name="ActiveWorkout"
            component={ActiveWorkoutScreen}
            options={{
              animation: 'slide_from_bottom',
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="WorkoutComplete"
            component={WorkoutCompleteScreen}
            options={{
              animation: 'fade',
              gestureEnabled: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <UserProvider>
      <WorkoutProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <AppNavigator />
        </NavigationContainer>
      </WorkoutProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
});
