import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import colors from '../styles/colors';

import { AddButton } from '../Components/AddButton';
import { GroupCard } from '../Components/GroupCard';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          { title: 'Grupo 1', category: 'Programação' },
          { title: 'Grupo 2', category: 'Estudos' },
        ]}
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
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    zIndex: 5,
  }
});
