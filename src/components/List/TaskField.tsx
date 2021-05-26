import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import RemoveIcon from '../../../assets/RemoveIcon.png';

import { GroupContext } from '../../context/Group';

import colors from '../../styles/colors';

export function TaskField({ task: {
  id,
  title,
} }: { task: Task }) {
  const { removeTask } = useContext(GroupContext) as GroupContextType;

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={styles.removeTask}
        onPress={() => removeTask(id)}
      >
        <Image source={RemoveIcon} style={styles.removeIcon} />
      </TouchableOpacity>
      <Text style={styles.taskTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  removeTask: {
    width: 26,
    height: 26,
  },
  removeIcon: {
    width: '100%',
    height: '100%',
  },
  taskTitle: {
    marginLeft: 5,
    color: colors.text,
    textDecorationColor: colors.text,
  },
});
