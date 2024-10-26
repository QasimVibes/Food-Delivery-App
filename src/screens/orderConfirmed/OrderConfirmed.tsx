import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './OrderConfirmedStyles';
import {FACE} from '../../constants/Images';

const OrderConfirmed = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={FACE} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>¡Order Confirmed!</Text>
          <Text style={styles.subTitle}>
            Your order has been placed successfully
          </Text>
          <Text style={styles.subTitle}>Delivery by Thu, 29th, 4:00 PM</Text>
          <TouchableOpacity>
            <Text style={styles.backToHome}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          If you have any questions, please reach out directly to our customer
          support
        </Text>
      </View>
    </ScrollView>
  );
};

export default OrderConfirmed;
