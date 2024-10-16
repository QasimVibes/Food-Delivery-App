import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {GO_BACK} from '../../constants/Images';
import styles from './GoBackStyles';
import {useGoBack} from './useGoBack';

const GoBack = () => {
  const {handleBack} = useGoBack();
  return (
    <TouchableOpacity onPress={handleBack}>
      <Image source={GO_BACK} resizeMode="contain" style={styles.imageStyle} />
    </TouchableOpacity>
  );
};

export default GoBack;
