import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import styles from './ContainerStyles';

const Container = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Container;
