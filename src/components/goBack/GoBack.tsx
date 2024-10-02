import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {GOBACK} from '../../constants/Images';
import styles from './GoBackStyles';

const GoBack = () => {
  return (
    <TouchableOpacity>
      <Image source={GOBACK} resizeMode="contain" style={styles.imageStyle} />
    </TouchableOpacity>
  );
};

export default GoBack;
