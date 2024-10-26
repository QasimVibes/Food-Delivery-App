import React from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import styles from './DropdownStyles';
import {useDropdown} from './useDropdown';
import {DropdownProps} from '../../types/types';

const Dropdown = ({options, selectedValue, onValueChange}: DropdownProps) => {
  const {isModalVisible, setModalVisible, handleSelect} =
    useDropdown(onValueChange);

  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.label}>Role</Text>
      <TouchableOpacity
        style={styles.inputField}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.inputText}>
          {selectedValue || 'Select your role'}
        </Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        />
        <View style={styles.modalContent}>
          <FlatList
            data={options}
            keyExtractor={item => item?.value}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelect(item?.value)}>
                <Text style={styles.optionText}>{item?.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Dropdown;
