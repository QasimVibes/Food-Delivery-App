import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './SignupStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import SignupOptions from '../../components/signupOptions/SignupOptions';
import {useSignup} from './useSignup';
import {SIGNUP_FIELDS} from '../../constants/InputFields';
import Loading from '../../components/loading/Loading';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';
import Dropdown from '../../components/dropdown/Dropdown';
import {ROLES_OPTIONS} from '../../constants/Constants';

const Signup = () => {
  const navigation = useTypeNavigation();
  const {data, handleChange, handleSubmit, handleLoginWithGoogle, user} =
    useSignup();
  const inputFields = SIGNUP_FIELDS(data);

  return (
    <View style={styles.container}>
      <Header title="New Account" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          {inputFields?.map(field => (
            <Input
              key={field?.key}
              placeholder={field?.placeholder}
              text={field?.text}
              value={field?.value}
              secureTextEntry={field?.secureTextEntry}
              isDatePicker={field?.isDatePicker}
              keyboardType={field?.keyboardType}
              onChangeText={(value: string) => handleChange(field?.key, value)}
            />
          ))}
          <Dropdown
            options={ROLES_OPTIONS}
            selectedValue={data?.role}
            onValueChange={(value: string) => handleChange('role', value)}
          />
          <View>
            <Text style={styles.termsText}>
              By continuing, you agree to{'\n'}
              <Text style={styles.termsLink}>Terms of Use</Text> and{' '}
              <Text style={styles.termsLink}>Privacy Policy.</Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button text="Sign Up" onPress={handleSubmit} />
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>or sign up with</Text>
            <View style={styles.signUpButtonContainer}>
              <SignupOptions googleLogin={handleLoginWithGoogle} />
            </View>
            <Text style={styles.signUpText}>
              Already have an account?{' '}
              <Text
                style={styles.loginLink}
                onPress={() => navigation.navigate('Login')}>
                Log in
              </Text>{' '}
            </Text>
          </View>
        </Container>
      </ScrollView>
      <Loading visible={user?.status === 'loading'} />
    </View>
  );
};

export default Signup;
