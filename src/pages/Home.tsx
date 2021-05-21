import React, { useContext } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import colors from '../styles/colors';

import { AddButton } from '../components/AddButton';
import { GroupCard } from '../components/GroupCard';

import { Context } from '../context';

export function Home() {
  const { groups } = useContext(Context) as ContextType;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={groups}
        renderItem={({ item }) => <GroupCard
          title={item.title}
          category={item.category}
        />}
        style={styles.listContainer}
      />
      <AddButton
        primary
        onClickFn={() => {}}
        size={42}
        position={{ bottom: 15 }}
      />
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
