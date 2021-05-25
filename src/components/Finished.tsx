import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import colors from '../styles/colors';

import FinishedIcon from '../../assets/FinishedIcon.png';

export function Finished() {
  return (
    <View style={styles.container}>
      <Image source={FinishedIcon} style={styles.image}/>
      <Text style={styles.text}>{`Você completou todas\nas atividades de hoje!`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.text,
  }
});
