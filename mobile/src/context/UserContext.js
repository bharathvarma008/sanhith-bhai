import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getUserProfile,
  saveUserProfile,
  updateUserProfile,
  isOnboardingComplete,
  setOnboardingComplete,
  getStreak,
} from '../services/storage';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [streak, setStreak] = useState(0);

  // Load user data on mount
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      setIsLoading(true);
      const [profile, onboarded, currentStreak] = await Promise.all([
        getUserProfile(),
        isOnboardingComplete(),
        getStreak(),
      ]);

      setUser(profile);
      setHasCompletedOnboarding(onboarded);
      setStreak(currentStreak);
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createUser = async (profileData) => {
    try {
      const newProfile = await saveUserProfile(profileData);
      await setOnboardingComplete(true);
      setUser(newProfile);
      setHasCompletedOnboarding(true);
      return newProfile;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };

  const updateUser = async (updates) => {
    try {
      const updated = await updateUserProfile(updates);
      setUser(updated);
      return updated;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  };

  const refreshStreak = async () => {
    const currentStreak = await getStreak();
    setStreak(currentStreak);
  };

  const value = {
    user,
    isLoading,
    hasCompletedOnboarding,
    streak,
    createUser,
    updateUser,
    refreshStreak,
    reload: loadUserData,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
