import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';

import { CountdownContext } from '../context/Countdown';
import { GroupContext } from '../context/Group';

export function Rest() {
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  const { restTime } = useContext(CountdownContext) as CountdownContextType;
  const { groups, completeTasks } = useContext(GroupContext) as GroupContextType;

  const minutes = Math.floor(restTime / 60);
  const seconds = restTime % 60;

  const formatTime = (t: number) => String(t).padStart(2, '0');

  useEffect(() => {
    setTotalTasks(groups.reduce((acc, cur) => acc + cur.tasks.length, 0));
    setCompletedTasks(groups
      .reduce((acc, cur) => acc + cur.tasks
        .filter(({ finished }) => finished).length
      , 0)
    );
    completeTasks();
  }, []);

  return (
    <>
      <View style={styles.timeContainer}>
        <Text style={styles.title}>Hora de descançar!</Text>
        <Text style={styles.timeRemaing}>
          {formatTime(minutes)}:{formatTime(seconds)}
        </Text>
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.tasksText}>Você completou</Text>
        <Text style={styles.tasksCompleted}>
          {`${completedTasks}/${totalTasks}`}
        </Text>
        <Text style={styles.tasksText}>Tarefas</Text>
      </View>
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
  tasksContainer: {
    width: '100%',
    padding: 30,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksText: {
    color: colors.text,
    fontSize: 16,
  },
  tasksCompleted: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.text,
    marginVertical: 15,
  },
});
