import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './LoginStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import SignupOptions from '../../components/signupOptions/SignupOptions';
import {useLogin} from './useLogin';
import {LOGIN_FIELDS} from '../../constants/InputFields';
import Loading from '../../components/loading/Loading';
import {COLORS} from '../../constants/Colors';

const Login = () => {
  const {data, handleChange, handleSubmit, user} = useLogin();
  const inputFields = LOGIN_FIELDS(data);
  return (
    <View style={styles.container}>
      <Header title="Login" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Welcome</Text>
            <Text style={styles.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            {inputFields?.map(field => (
              <Input
                key={field?.key}
                placeholder={field?.placeholder}
                text={field?.text}
                value={field?.value}
                secureTextEntry={field?.secureTextEntry}
                keyboardType={field?.keyboardType}
                placeholderTextColor={COLORS.lightBlack}
                onChangeText={(value: string) =>
                  handleChange(field?.key, value)
                }
              />
            ))}
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <Button text="Login" onPress={handleSubmit} />
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>or sign up with</Text>
            <View style={styles.signUpButtonContainer}>
              <SignupOptions />
            </View>
            <Text style={styles.signUpText}>
              Don’t have an account?{' '}
              <Text style={styles.signUpLink}>Sign Up</Text>{' '}
            </Text>
          </View>
        </Container>
      </ScrollView>
      <Loading visible={user?.status === 'loading'} />
    </View>
  );
};

export default Login;
