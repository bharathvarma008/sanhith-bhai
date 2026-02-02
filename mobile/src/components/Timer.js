import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../utils/constants';

const Timer = ({
  initialSeconds,
  onComplete,
  autoStart = false,
  countDown = true,
  size = 'medium',
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(autoStart);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          const next = countDown ? prev - 1 : prev + 1;

          if (countDown && next <= 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            onComplete?.();
            return 0;
          }

          return next;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, countDown, onComplete]);

  useEffect(() => {
    setSeconds(initialSeconds);
    if (autoStart) {
      setIsRunning(true);
    }
  }, [initialSeconds, autoStart]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setSeconds(initialSeconds);
    setIsRunning(false);
  };

  const sizeStyles = {
    small: { time: 24, label: 12, container: 80 },
    medium: { time: 48, label: 14, container: 120 },
    large: { time: 72, label: 16, container: 180 },
  };

  const sizes = sizeStyles[size];

  return (
    <View style={[styles.container, { width: sizes.container, height: sizes.container }]}>
      <TouchableOpacity
        style={styles.timerCircle}
        onPress={handleToggle}
        onLongPress={handleReset}
      >
        <Text style={[styles.timeText, { fontSize: sizes.time }]}>
          {formatTime(seconds)}
        </Text>
        <Text style={[styles.label, { fontSize: sizes.label }]}>
          {isRunning ? 'tap to pause' : 'tap to start'}
        </Text>
      </TouchableOpacity>

      {/* Progress ring (visual only) */}
      {countDown && initialSeconds > 0 && (
        <View style={styles.progressContainer}>
          <View
            style={[
              styles.progressFill,
              {
                height: `${(seconds / initialSeconds) * 100}%`,
              },
            ]}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  timerCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 999,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: COLORS.primary,
    zIndex: 1,
  },
  timeText: {
    fontWeight: 'bold',
    color: COLORS.text,
    fontVariant: ['tabular-nums'],
  },
  label: {
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  progressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: COLORS.border,
    zIndex: 0,
  },
  progressFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.primary + '30',
  },
});

export default Timer;
