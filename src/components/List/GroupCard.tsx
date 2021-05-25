import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';

import colors from '../../styles/colors';

import { GroupContext } from '../../context/Group';

import { TaskField } from './TaskField';

type GroupCardProps = {
  group: Group,
  selected: boolean,
  onSelect: (groupId: number) => any,
};

export function GroupCard({
  group: { id, title, category, tasks },
  selected,
  onSelect
}: GroupCardProps) {
  const { removeGroup } = useContext(GroupContext) as GroupContextType;

  const styles = getStyles(selected);

  function handleSelected() {
    if (selected) onSelect(-1);
    else onSelect(id);
  }

  return (
    <View style={styles.wrapper}>  
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.header}
        onPress={handleSelected}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {selected && (
          <>
            <Text style={styles.category}>{category}</Text>
            <FlatList
              style={styles.tasksContainer}
              data={tasks}
              renderItem={({ item }) =>
                <TaskField task={item} />
              }
              keyExtractor={item => item.id.toString()}
            />
            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.action} onPress={() => removeGroup(id)}>
                <Text style={styles.actionText}>Deletar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Text style={styles.actionText}>Novo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Text style={styles.saveAction}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const getStyles = (selected: boolean) => StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: selected ? colors.header : 'rgba(0, 0, 0, 0)',
  },
  container: {
    borderBottomWidth: selected ? 0 : 1,
    borderBottomColor: colors.inactive,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingBottom: 10,
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
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  action: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingRight: 15,
    marginRight: 15,
  },
  saveAction: {
    color: colors.primary,
  },
  actionText: {
    color: colors.text,
  },
});
