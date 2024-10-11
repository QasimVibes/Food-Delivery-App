import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './SignupStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import SignupOptions from '../../components/signupOptions/SignupOptions';
import {useSignup} from './useSignup';

const Signup = () => {
  const {data, handleChange} = useSignup();
  return (
    <View style={styles.container}>
      <Header title="New Account" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <Input
            placeholder="John Doe"
            text="Full name"
            value={data.name}
            onChangeText={(value: string) => handleChange('name', value)}
          />
          <Input
            placeholder="********"
            text="Password"
            secureTextEntry={true}
            value={data.password}
            onChangeText={(value: string) => handleChange('password', value)}
          />
          <Input
            placeholder="example@example.com"
            text="Email"
            value={data.email}
            onChangeText={(value: string) => handleChange('email', value)}
          />
          <Input
            placeholder="+91 9876543210"
            text="Mobile Number"
            value={data.mobile}
            onChangeText={(value: string) => handleChange('mobile', value)}
          />
          <Input
            placeholder="DD/MM/YYYY"
            text="Date of Birth"
            isDatePicker={true}
            value={data.dob}
            onChangeText={(value: string) => handleChange('dob', value)}
          />

          <View>
            <Text style={styles.termsText}>
              By continuing, you agree to{'\n'}
              <Text style={styles.termsLink}>Terms of Use</Text> and{' '}
              <Text style={styles.termsLink}>Privacy Policy.</Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button text="Sign Up" />
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>or sign up with</Text>
            <View style={styles.signUpButtonContainer}>
              <SignupOptions />
            </View>
            <Text style={styles.signUpText}>
              Already have an account?{' '}
              <Text style={styles.loginLink}>Log in</Text>{' '}
            </Text>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default Signup;
