import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';

import { CountdownContext } from '../context/Countdown';
import { GroupContext } from '../context/Group';

import { FocusGroupCard } from '../components/Focus/FocusGroupCard';
import { Button } from '../components/Button';

export function StartCountdown() {
  const {
    focusTime,
    isTimerActive,
    startCountdown,
    restartCountdown
  } = useContext(CountdownContext) as CountdownContextType;

  const { groups } = useContext(GroupContext) as GroupContextType;

  const minutes = Math.floor(focusTime / 60);
  const seconds = focusTime % 60;

  const formatTime = (t: number) => String(t).padStart(2, '0');

  return (
    <>
      <View style={styles.timeContainer}>
        <Text style={styles.title}>Hora de focar!</Text>
        <Text style={styles.timeRemaing}>
          {formatTime(minutes)}:{formatTime(seconds)}
        </Text>
        {!isTimerActive && (
          <Button
            size={48}
            name="play"
            onClick={startCountdown}
          />
        )}
      </View>
      <FlatList
        data={groups}
        renderItem={({ item }) => <FocusGroupCard group={item} />}
        keyExtractor={item => item.id.toString()}
        style={styles.listContainer}
      />
      { isTimerActive && (
        <TouchableOpacity style={styles.actionContainer} onPress={restartCountdown}>
          <Text style={styles.actionText}>Encerrar ciclo</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
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
  listContainer: {
    width: '100%',
    marginBottom: 10,
  },
  actionContainer: {
    marginVertical: 10,
    padding: 5,
  },
  actionText: {
    color: colors.inactive,
    fontSize: 16,
  },
});
