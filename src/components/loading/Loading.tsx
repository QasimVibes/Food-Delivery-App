import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import {COLORS} from '../../constants/Colors';
import styles from './LoadingStyles';

const Loading = ({visible}: {visible: boolean}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="none"
      onRequestClose={() => {}}>
      <View style={styles.overlay}>
        <View>
          <ActivityIndicator size="large" color={COLORS.blue} />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;
