import {useState} from 'react';

export const useDropdown = (onValueChange: (value: string) => void) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSelect = (value: string) => {
    onValueChange(value);
    setModalVisible(false);
  };

  return {
    isModalVisible,
    handleSelect,
    setModalVisible,
  };
};
