import {View, Text} from 'react-native';
import React from 'react';
import GoBack from '../goBack/GoBack';
import styles from './HeaderStyles';

const Header = ({title}: {title: string}) => {
  return (
    <View style={styles.header}>
      <GoBack />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
