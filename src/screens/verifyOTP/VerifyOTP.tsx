import {View, Text, ScrollView, TextInput} from 'react-native';
import React from 'react';
import styles from './VerifyOtpStyles';
import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import {useVerifyOtp} from './useVerifyOtp';
import Loading from '../../components/loading/Loading';
import {useRoute} from '@react-navigation/native';

export default function VerifyOtp() {
  const route = useRoute();
  const {email} = route.params as {email: string};
  const {otp, handleOtpChange, handleKeyPress, inputRefs, handleSubmit, user} =
    useVerifyOtp();
  return (
    <View style={styles.container}>
      <Header title="Verify OTP" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <Text style={styles.mainText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <View style={styles.otpContainer}>
            {otp?.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (inputRefs.current[index] = ref!)}
                placeholder="0"
                value={digit}
                onChangeText={text => handleOtpChange(text, index)}
                onKeyPress={e => handleKeyPress(e, index)}
                maxLength={1}
                keyboardType="numeric"
                style={styles.otpInput}
              />
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <Button
              text="Verify OTP"
              paddingVertical={8}
              fontSize={17}
              width={250}
              onPress={() => handleSubmit(email)}
            />
          </View>
        </Container>
      </ScrollView>
      <Loading visible={user?.status === 'loading'} />
    </View>
  );
}
