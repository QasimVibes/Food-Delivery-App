import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './PlaceOrderStyles';
import Container from '../../components/container/Container';
import Header from '../../components/header/Header';
import {DELETE, EDIT, MINUS, PLUS, SHAKE} from '../../constants/Images';
import Button from '../../components/button/Button';

const PlaceOrder = () => {
  return (
    <View style={styles.container}>
      <Header title="Confirm Order" />
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
              <Text style={styles.address}>
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
            <View style={styles.orderContainer}>
              <View style={styles.orderCard}>
                <Image
                  source={SHAKE}
                  style={styles.orderImageStyle}
                  resizeMode="contain"
                />
                <View style={styles.orderTextContainer}>
                  <View style={styles.deleteIconContainer}>
                    <Image
                      source={DELETE}
                      style={styles.deleteIcon}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.orderNameContainer}>
                    <Text style={styles.orderName}>Strawberry</Text>
                    <Text style={styles.orderPrice}>$ 5.00</Text>
                  </View>

                  <View style={styles.orderDetailsContainer}>
                    <Text style={styles.orderDetails}>29 Nov, 01:20 pm</Text>
                    <Text style={styles.orderDetails}>2 items</Text>
                  </View>
                  <View style={styles.orderButtonContainer}>
                    <TouchableOpacity style={styles.cancelButton}>
                      <Text style={styles.cancelText}>Cancel Order</Text>
                    </TouchableOpacity>
                    <View style={styles.quantityContainer}>
                      <Image source={EDIT} style={styles.editIcon} />
                      <View style={styles.quantity}>
                        <TouchableOpacity style={styles.quantityButton}>
                          <Image
                            source={MINUS}
                            style={styles.quantityIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>2</Text>
                        <TouchableOpacity style={styles.quantityButton}>
                          <Image
                            source={PLUS}
                            style={styles.quantityIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.orderCard}>
                <Image
                  source={SHAKE}
                  style={styles.orderImageStyle}
                  resizeMode="contain"
                />
                <View style={styles.orderTextContainer}>
                  <View style={styles.deleteIconContainer}>
                    <Image
                      source={DELETE}
                      style={styles.deleteIcon}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.orderNameContainer}>
                    <Text style={styles.orderName}>Strawberry</Text>
                    <Text style={styles.orderPrice}>$ 5.00</Text>
                  </View>

                  <View style={styles.orderDetailsContainer}>
                    <Text style={styles.orderDetails}>29 Nov, 01:20 pm</Text>
                    <Text style={styles.orderDetails}>2 items</Text>
                  </View>
                  <View style={styles.orderButtonContainer}>
                    <TouchableOpacity style={styles.cancelButton}>
                      <Text style={styles.cancelText}>Cancel Order</Text>
                    </TouchableOpacity>
                    <View style={styles.quantityContainer}>
                      <Image source={EDIT} style={styles.editIcon} />
                      <View style={styles.quantity}>
                        <TouchableOpacity style={styles.quantityButton}>
                          <Image
                            source={MINUS}
                            style={styles.quantityIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>2</Text>
                        <TouchableOpacity style={styles.quantityButton}>
                          <Image
                            source={PLUS}
                            style={styles.quantityIcon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.totalAmount}>
              <View style={styles.totalContainer}>
                <Text style={styles.total}>Subtotal</Text>
                <Text style={styles.total}>$32.00</Text>
              </View>
              <View style={styles.totalContainer}>
                <Text style={styles.total}>Tax and Fees</Text>
                <Text style={styles.total}>$5.00</Text>
              </View>
              <View style={styles.totalContainer}>
                <Text style={styles.total}>Delivery</Text>
                <Text style={styles.total}>$3.00</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.totalContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>$40.00</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button text="Place Order" fontSize={23} paddingVertical={8} />
              </View>
            </View>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default PlaceOrder;
