import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../components/container/Container';
import Header from '../../components/header/Header';
import {CARD, DELETE, EDIT, MINUS, PLUS, SHAKE} from '../../constants/Images';
import styles from './PaymentStyles';

const Payment = () => {
  return (
    <View style={styles.container}>
      <Header title="Payment" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.addressContainer}>
            <View style={styles.shippingAddressContainer}>
              <Text style={styles.shippingAddress}>Shipping Address</Text>
              <Image
                source={EDIT}
                resizeMode="contain"
                style={styles.editIcon}
              />
            </View>
            <View style={styles.addressSection}>
              <Text
                style={styles.address}
                numberOfLines={1}
                ellipsizeMode="tail">
                778 Locust View Drive Oaklanda, CA
              </Text>
            </View>
          </View>
          <View style={styles.order}>
            <View style={styles.orderSummaryContainer}>
              <Text style={styles.orderSummary}>Order Summary</Text>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.itemsContainer}>
              <View style={styles.itemsWrapper}>
                <View style={styles.items}>
                  <Text style={styles.itemName}>Strawberry Shake</Text>
                  <Text style={styles.itemQuantity}>2 items</Text>
                </View>
                <View style={styles.items}>
                  <Text style={styles.itemName}>Broccoli Lasagna</Text>
                  <Text style={styles.itemQuantity}>1 items</Text>
                </View>
              </View>
              <Text style={styles.total}>$40.00</Text>
            </View>
            <View style={styles.paymentContainer}>
              <View style={styles.orderSummaryContainer}>
                <Text style={styles.orderSummary}>Payment Method</Text>
                <TouchableOpacity style={styles.editButton}>
                  <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.paymentSection}>
                <View style={styles.paymentMethod}>
                  <Image source={CARD} style={styles.paymentImage} />
                  <Text style={styles.paymentText}>Credit Card</Text>
                </View>
                <View style={styles.paymentAddress}>
                  <Text
                    style={styles.paymentText}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    *** *** *** 43 /00 /000
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.deliveryContainer}>
              <Text style={styles.orderSummary}>Delivery Time</Text>
              <View style={styles.paymentSection}>
                <Text style={styles.paymentText}>Estimated Delivery</Text>
                <Text style={styles.timeText}>25 mins</Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default Payment;
