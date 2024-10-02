import React from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';
import styles from './InputStyles';

interface InputProps extends TextInputProps {
  placeholder: string;
  text: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  text,
  secureTextEntry = false,
  ...props
}) => {
  return (
    <View style={styles.inputField}>
      <Text style={styles.inputText}>{text}</Text>
      <TextInput
        style={[styles.input, props.multiline && styles.textArea]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
};

export default Input;
