import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DeliveryAddressStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import {HOME} from '../../constants/Images';

const DeliveryAddress = () => {
  const addresses = Array(3).fill({
    name: 'John Doe',
    address: '123 Main Street, New York Lorem ipsum dolor',
  });

  return (
    <View style={styles.container}>
      <Header title="Delivery Address" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          {addresses?.map((item, index) => (
            <View key={index} style={styles.addressContainer}>
              <Image source={HOME} style={styles.image} />
              <View style={styles.textContainer}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.title}>
                  {item?.name}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.address}>
                  {item?.address}
                </Text>
              </View>
              <TouchableOpacity>
                <View style={styles.outerCheckbox}>
                  <View style={styles.checkbox} />
                </View>
              </TouchableOpacity>
            </View>
          ))}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add New Address</Text>
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default DeliveryAddress;
