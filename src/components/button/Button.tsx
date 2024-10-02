import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ButtonStyles';

const Button = ({
  text,
  paddingVertical = 14,
  fontSize = 22,
  width = 200,
}: {
  text: string;
  paddingVertical?: number;
  fontSize?: number;
  width?: number;
}) => {
  return (
    <TouchableOpacity style={[styles.button, {paddingVertical}, {width}]}>
      <Text style={[styles.buttonText, {fontSize}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
