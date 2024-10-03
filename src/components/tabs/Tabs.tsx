import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './TabsStyles';

const Tabs = ({
  text,
  isActive,
  onPress,
}: {
  text: string;
  isActive?: boolean;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.tab, isActive && styles.tabActive]}
      onPress={onPress}>
      <Text
        style={
          isActive ? [styles.tabText, styles.tabTextActive] : styles.tabText
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Tabs;
