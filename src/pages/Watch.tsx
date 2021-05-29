import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import colors from '../styles/colors';

import { GroupContext } from '../context/Group';
import { CountdownContext } from '../context/Countdown';

import { Rest } from './Rest';
import { Focus } from './Focus';

import { Finished } from '../components/Finished';

export function Watch() {
  const { groups } = useContext(GroupContext) as GroupContextType;
  const {
    isFocusTime,
    restTime,
  } = useContext(CountdownContext) as CountdownContextType;

  return (
    <SafeAreaView style={styles.wrapper}>
      {!isFocusTime && restTime > 0
        ? <Rest />
        : <>{ !groups.length ? <Finished /> : <Focus /> }</>
      }
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
