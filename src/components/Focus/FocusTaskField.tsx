import React, { useState, useContext } from 'react';
import { View, Text, TouchableWithoutFeedback ,StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

import colors from '../../styles/colors';

import { CountdownContext } from '../../context/Countdown';

export function FocusTaskField({ task: {
  title,
  finished,
} }: { task: Task }) {
  const [isChecked, setIsChecked] = useState(finished);  
  const { isTimerActive } = useContext(CountdownContext) as CountdownContextType;
  
  const styles = getStyles(isChecked, isTimerActive);

  function handleSetFinished() {
    if (!isTimerActive) return;
    setIsChecked(prev => !prev)
  }

  return (
    <TouchableWithoutFeedback onPress={handleSetFinished}>
      <View style={styles.taskContainer}>
          <Checkbox
            disabled
            value={isChecked}
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
