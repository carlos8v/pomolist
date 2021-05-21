import React, { useContext, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import colors from '../styles/colors';

import { Context } from '../context';
import { Button } from '../components/Button';

export function Watch() {
  const {
    focusTime,
    isTimerActive,
    startCountdown
  } = useContext(Context) as ContextType;
  
  const minutes = Math.floor(focusTime / 60);
  const seconds = focusTime % 60;

  const formatTime = (t: number) => String(t).padStart(2, '0');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.timeContainer}>
        <Text style={styles.title}>Hora de focar!</Text>
        <Text style={styles.timeRemaing}>{formatTime(minutes)}:{formatTime(seconds)}</Text>
        {!isTimerActive && (
          <Button
            size={48}
            name="play"
            onClick={() => startCountdown()}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 15,
  },
  timeContainer: {
    padding: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.inactive,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  timeRemaing: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.text,
    marginVertical: 15,
  },
});
