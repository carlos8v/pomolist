import React, { useContext } from 'react';
import { View, Text, TouchableWithoutFeedback ,StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

import colors from '../../styles/colors';

import { GroupContext } from '../../context/Group';
import { CountdownContext } from '../../context/Countdown';

export function FocusTaskField({ task: {
  id,
  title,
  finished,
} }: { task: Task }) {
  const { isTimerActive } = useContext(CountdownContext) as CountdownContextType;
  const { finishTask } = useContext(GroupContext) as GroupContextType;
  
  const styles = getStyles(finished, isTimerActive);

  function handleSetFinished() {
    if (!isTimerActive) return;
    finishTask(id);
  }

  return (
    <TouchableWithoutFeedback onPress={handleSetFinished}>
      <View style={styles.taskContainer}>
          <Checkbox
            disabled
            value={finished}
            style={styles.taskCheckbox}
            color={colors.text}
          />
          <Text style={styles.taskTitle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const getStyles = (active: boolean, isTimerActive: boolean) => StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: isTimerActive ? 1 : 0.5,
  },
  taskCheckbox: {
    padding: 0,
    margin: 0,
  },
  taskTitle: {
    color: colors.text,
    textDecorationColor: colors.text,
    textDecorationLine: active ? 'line-through' : 'none',
  },
});
