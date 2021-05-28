import React, { useContext, useState } from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet } from 'react-native';

import colors from '../styles/colors';

import { GroupCard } from '../components/List/GroupCard';
import { NewGroupModal } from '../components/NewGroupModal';
import { NewTaskModal } from '../components/NewTaskModal';

import { GroupContext } from '../context/Group';

export function List() {
  const [selectedGroup, setSelectedGroup] = useState(0);
  const { groups } = useContext(GroupContext) as GroupContextType;

  function changeSelectedGroup(groupId: number) { setSelectedGroup(groupId) }

  return (
    <SafeAreaView style={styles.wrapper}>
      { !groups.length
        ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              {`Você não tem nenhuma\ntarefa salva no momento`}
            </Text>
          </View>
        )
        : (
          <>
            <FlatList
              data={groups}
              renderItem={({ item}) => <GroupCard
                group={item}
                selected={item.id === selectedGroup}
                onSelect={changeSelectedGroup}
              />}
              keyExtractor={item => item.id.toString()}
              style={styles.listContainer}
            />
            <NewTaskModal groupId={selectedGroup} />
          </>
        )
      }
      <NewGroupModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  listContainer: {
    width: '100%',
    marginBottom: 15,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    zIndex: 5,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: colors.text,
  }
});
