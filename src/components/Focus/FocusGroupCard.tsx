import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import colors from '../../styles/colors';

import { FocusTaskField } from './FocusTaskField';

export function FocusGroupCard({
  group: {
    title,
    category,
    tasks
  }
}: { group: Group }) {
  return (
    <View style={styles.wrapper}>  
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <Text style={styles.category}>{category}</Text>
        <FlatList
          style={styles.tasksContainer}
          data={tasks}
          renderItem={({ item }) =>
            <FocusTaskField task={item} />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingVertical: 10,
  },
  container: { paddingVertical: 5 },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  category: {
    fontSize: 16,
    color: colors.inactive,
    marginBottom: 5,
  },
  tasksContainer: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.inactive,
  },
});
