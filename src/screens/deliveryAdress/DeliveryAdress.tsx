import {View, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './DeliveryAdressStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import {HOME} from '../../constants/Images';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const DeliveryAdress = () => {
  return (
    <View style={styles.container}>
      <Header title="Add New Address" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.imageContainer}>
            <Image
              source={HOME}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </View>
          <Input placeholder="John Doe" text="Name" />
          <Input
            placeholder="123 Main Street, New York"
            text="Address"
            multiline={true}
            numberOfLines={3}
          />
          <View style={styles.buttonContainer}>
            <Button
              text="Apply"
              width={150}
              paddingVertical={6}
              fontSize={17}
            />
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default DeliveryAdress;
