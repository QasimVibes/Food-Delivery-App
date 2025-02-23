import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './LoginStyles';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import SignupOptions from '../../components/signupOptions/SignupOptions';
import {useLogin} from './useLogin';
import {LOGIN_FIELDS} from '../../constants/InputFields';
import Loading from '../../components/loading/Loading';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';
import OneSignal from 'react-native-onesignal';

const Login = () => {
  const navigation = useTypeNavigation();
  const {data, handleChange, handleSubmit, user, handleLoginWithGoogle} =
    useLogin();
  const inputFields = LOGIN_FIELDS(data);

  useEffect(() => {
    OneSignal.setAppId('704c77b3-4191-41cf-a741-8b74992d3b68');
    OneSignal.promptForPushNotificationsWithUserResponse();
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('Notification opened:', notification);
    });
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        const notification = notificationReceivedEvent.getNotification();
        console.log('Notification received:', notification);
        notificationReceivedEvent.complete(notification);
      },
    );
  }, []);

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
                onChangeText={(value: string) =>
                  handleChange(field?.key, value)
                }
              />
            ))}
            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPasswordText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <Button text="Login" onPress={handleSubmit} />
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>or sign up with</Text>
            <View style={styles.signUpButtonContainer}>
              <SignupOptions googleLogin={handleLoginWithGoogle} />
            </View>
            <Text style={styles.signUpText}>
              Don’t have an account?{' '}
              <Text
                style={styles.signUpLink}
                onPress={() => navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </Text>
          </View>
        </Container>
      </ScrollView>
      <Loading visible={user?.status === 'loading'} />
    </View>
  );
};

export default Login;
