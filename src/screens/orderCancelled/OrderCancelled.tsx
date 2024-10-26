import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './OrderCancelledStyles';
import {FACE} from '../../constants/Images';

const OrderCancelled = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={FACE} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>¡Order Cancelled!</Text>
          <Text style={styles.subTitle}>
            Your order has been successfully cancelled
          </Text>
          <TouchableOpacity>
            <Text style={styles.backToHome}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          If you have any questions, reach directly to our customer support
        </Text>
      </View>
    </ScrollView>
  );
};

export default OrderCancelled;
