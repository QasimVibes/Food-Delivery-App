import {View, Text} from 'react-native';
import React from 'react';
import GoBack from '../goBack/GoBack';
import styles from './HeaderStyles';
import {HeaderProps} from '../../types/types';

const Header = ({title, isShown, subTitle}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <GoBack />
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
      {isShown && (
        <Text style={styles.subTitle} numberOfLines={1} ellipsizeMode="tail">
          {subTitle || ''}
        </Text>
      )}
    </View>
  );
};

export default Header;
