import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import PlayIcon from '../../assets/PlayIcon.png';
import AddIcon from '../../assets/AddIcon.png';

type ButtonProps = {
  onClick(): any,
  name?: string,
  size?: number,
  style?: any,
}

export function Button({
  onClick,
  name = 'add',
  size = 28,
  style = {}
}: ButtonProps) {
  const buttonStyles = {
    width: size,
    height: size,
    ...style
  }

  function renderIcon() {
    switch(name) {
      case 'play':
        return PlayIcon;
      default:
        return AddIcon;
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onClick()}
    >
      <Image source={renderIcon()} style={buttonStyles} />
    </TouchableOpacity>
  );
}
