import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './LaunchStyles';
import {LOGO} from '../../constants/Images';
import {COLORS} from '../../constants/Colors';

const Launch = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={LOGO} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: COLORS.secondary}]}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Launch;
