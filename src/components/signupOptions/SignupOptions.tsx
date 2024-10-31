import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {FACEBOOK, GMAIL} from '../../constants/Images';
import styles from './SignupOptionsStyles';

const SignupOptions = ({googleLogin}: {googleLogin: () => void}) => {
  return (
    <>
      <TouchableOpacity style={styles.imageContainer} onPress={googleLogin}>
        <Image source={GMAIL} resizeMode="contain" style={styles.imageStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={FACEBOOK}
          resizeMode="contain"
          style={[styles.imageStyle, {width: 22, height: 22}]}
        />
      </TouchableOpacity>
    </>
  );
};

export default SignupOptions;
