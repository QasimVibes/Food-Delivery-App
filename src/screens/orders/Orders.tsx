import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './OrdersStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Tabs from '../../components/tabs/Tabs';
import {ORDERS, SHAKE} from '../../constants/Images';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('active');
  return (
    <View style={styles.container}>
      <Header title="My Orders" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.buttonContainer}>
            <Tabs
              text="Active"
              isActive={activeTab === 'active'}
              onPress={() => setActiveTab('active')}
            />
            <Tabs
              text="Completed"
              isActive={activeTab === 'completed'}
              onPress={() => setActiveTab('completed')}
            />
            <Tabs
              text="Cancelled"
              isActive={activeTab === 'cancelled'}
              onPress={() => setActiveTab('cancelled')}
            />
          </View>
          {/* No Orders */}
          {/* <View style={styles.noOrderContainer}>
            <Image
              source={ORDERS}
              style={styles.imageStyle}
              resizeMode="contain"
            />
            <Text style={styles.noOrdersText}>
              You don't have any {activeTab} orders at this time
            </Text>
          </View> */}

          {/* Orders */}
          <View style={styles.orderContainer}>
            <View style={styles.orderCard}>
              <Image
                source={SHAKE}
                style={styles.orderImageStyle}
                resizeMode="contain"
              />
              <View style={styles.orderTextContainer}>
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
                  <TouchableOpacity style={styles.trackButton}>
                    <Text style={styles.trackText}>Track Driver</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default Orders;
