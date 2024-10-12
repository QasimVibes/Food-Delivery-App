import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Container from '../../components/container/Container';
import styles from './ForgotPasswordStyles';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {COLORS} from '../../constants/Colors';
import {useForgotPassword} from './useForgotPassword';
import Loading from '../../components/loading/Loading';

const ForgotPassword = () => {
  const {email, handleChange, handleSubmit, user} = useForgotPassword();
  return (
    <View style={styles.container}>
      <Header title="Forgot Password" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <Text style={styles.mainText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </Text>
          <Input
            placeholder="Enter Email"
            text="Email"
            value={email}
            onChangeText={handleChange}
            keyboardType="email-address"
            placeholderTextColor={COLORS.lightBlack}
          />
          <View style={styles.buttonContainer}>
            <Button
              text="Send OTP"
              paddingVertical={8}
              fontSize={17}
              width={250}
              onPress={handleSubmit}
            />
          </View>
        </Container>
      </ScrollView>
      <Loading visible={user?.status === 'loading'} />
    </View>
  );
};

export default ForgotPassword;
