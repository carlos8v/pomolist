import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import RemoveIcon from '../../../assets/RemoveIcon.png';

import colors from '../../styles/colors';

export function TaskField({ task: {
  title,
} }: { task: Task }) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity style={styles.removeTask}>
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
    width: 24,
    height: 24,
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
