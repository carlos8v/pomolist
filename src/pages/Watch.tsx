import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import colors from '../styles/colors';

import { GroupContext } from '../context/Group';

import { StartCountdown } from '../components/StartCountdown';
import { Finished } from '../components/Finished';

export function Watch() {
  const { groups } = useContext(GroupContext) as GroupContextType;

  return (
    <SafeAreaView style={styles.wrapper}>
      { !groups.length ? <Finished /> : <StartCountdown /> }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 15,
  },
});
