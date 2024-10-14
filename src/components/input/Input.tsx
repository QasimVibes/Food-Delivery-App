import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './InputStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {InputProps} from '../../types/types';
import {useInput} from './useInput';
import {COLORS} from '../../constants/Colors';

const Input: React.FC<InputProps> = ({
  placeholder,
  text,
  secureTextEntry = false,
  isDatePicker = false,
  onChangeText,
  value,
  ...props
}) => {
  const {date, show, showDatepicker, handleDateChange} = useInput(onChangeText);

  return (
    <View style={styles.inputField}>
      <Text style={styles.inputText}>{text}</Text>

      {isDatePicker ? (
        <TouchableOpacity onPress={showDatepicker} style={styles.input}>
          <Text>{date ? date.toDateString() : placeholder}</Text>
        </TouchableOpacity>
      ) : (
        <TextInput
          style={[styles.input, props.multiline && styles.textArea]}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.lightBlack}
          {...props}
        />
      )}

      {show && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
          maximumDate={new Date()}
          themeVariant="light"
        />
      )}
    </View>
  );
};

export default Input;
