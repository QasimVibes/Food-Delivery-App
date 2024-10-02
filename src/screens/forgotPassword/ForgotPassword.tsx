import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Container from '../../components/container/Container';
import styles from './ForgotPasswordStyles';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Header title="Set Password" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <Text style={styles.mainText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </Text>
          <Input
            placeholder="********"
            text="Password"
            secureTextEntry={true}
          />
          <Input
            placeholder="********"
            text="Confirm Password "
            secureTextEntry={true}
          />
          <View style={styles.buttonContainer}>
            <Button
              text="Create New Password"
              paddingVertical={8}
              fontSize={17}
              width={250}
            />
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;
