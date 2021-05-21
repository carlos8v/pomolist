import React, { useContext } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import colors from '../styles/colors';

import { GroupCard } from '../components/GroupCard';
import { NewGroupModal } from '../components/NewGroupModal';

import { Context } from '../context';

export function Home() {
  const { groups } = useContext(Context) as ContextType;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={groups}
        renderItem={({ item }) => <GroupCard
          id={item.id}
          title={item.title}
          category={item.category}
        />}
        keyExtractor={item => item.id.toString()}
        style={styles.listContainer}
      />
      <NewGroupModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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
  }
});
