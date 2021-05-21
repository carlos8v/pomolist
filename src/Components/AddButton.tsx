import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../styles/colors';

interface AddButtonProps {
  onClickFn(): any;
  size?: number;
  primary?: boolean;
  position?: any;
}

interface StylesProps {
  size: number;
  primary: boolean;
  position: any;
}

export function AddButton({
  onClickFn,
  size = 28,
  primary = false,
  position = {}
}: AddButtonProps) {
  const styles = getStyles({ size, primary, position });

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onClickFn()}
      style={styles.button}
    >
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
}

const getStyles = ({ size, primary, position }: StylesProps) => StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primary ? colors.primary: 'transparent',
    borderRadius: 50,
    width: size,
    height: size,
    margin: 0,
    padding: 0,
    ...position
  },
  buttonText: {
    lineHeight: size,
    fontSize: size / 2 + (size / 3),
    fontWeight: 'bold',
    color: primary ? colors.background : colors.text,
  }
});
