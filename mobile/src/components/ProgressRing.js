import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants';

const ProgressRing = ({
  progress = 0,
  size = 120,
  strokeWidth = 8,
  color = COLORS.primary,
  backgroundColor = COLORS.border,
  children,
}) => {
  // Simple implementation using Views (no SVG dependency)
  // For a proper circular progress, you'd use react-native-svg

  const normalizedProgress = Math.min(Math.max(progress, 0), 1);

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Background ring */}
      <View
        style={[
          styles.ring,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: strokeWidth,
            borderColor: backgroundColor,
          },
        ]}
      />

      {/* Progress indicator (simplified - shows as partial ring using clip) */}
      <View
        style={[
          styles.progressContainer,
          { width: size, height: size },
        ]}
      >
        {/* Top half */}
        <View style={[styles.halfContainer, { height: size / 2 }]}>
          <View
            style={[
              styles.halfRing,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: strokeWidth,
                borderColor: color,
                transform: [
                  { rotate: `${-90 + normalizedProgress * 180}deg` },
                ],
                opacity: normalizedProgress > 0 ? 1 : 0,
              },
            ]}
          />
        </View>

        {/* Bottom half */}
        <View style={[styles.halfContainer, { height: size / 2 }]}>
          <View
            style={[
              styles.halfRing,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: strokeWidth,
                borderColor: color,
                transform: [
                  { rotate: `${90 + Math.max(0, normalizedProgress - 0.5) * 180}deg` },
                ],
                opacity: normalizedProgress > 0.5 ? 1 : 0,
              },
            ]}
          />
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    position: 'absolute',
  },
  progressContainer: {
    position: 'absolute',
    overflow: 'hidden',
  },
  halfContainer: {
    overflow: 'hidden',
  },
  halfRing: {
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProgressRing;
