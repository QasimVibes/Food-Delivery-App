import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Container from '../../components/container/Container';
import styles from './ChangePasswordStyles';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {CHANGE_PASSWORD_FIELDS} from '../../constants/InputFields';
import {useChangePassword} from './useChangePassword';
import Loading from '../../components/loading/Loading';
import {useRoute} from '@react-navigation/native';

const ChangePassword = () => {
  const route = useRoute();
  const {email, otp} = route.params as {email: string; otp: string};
  const {password, handleChange, handleSubmit, user} = useChangePassword();
  const inputFields = CHANGE_PASSWORD_FIELDS(password);
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
          {inputFields?.map(field => (
            <Input
              key={field?.key}
              placeholder={field?.placeholder}
              text={field?.text}
              value={field?.value}
              secureTextEntry={field?.secureTextEntry}
              onChangeText={(value: string) => handleChange(field?.key, value)}
            />
          ))}
          <View style={styles.buttonContainer}>
            <Button
              text="Create New Password"
              paddingVertical={8}
              fontSize={17}
              width={250}
              onPress={() => handleSubmit(email, otp)}
            />
          </View>
        </Container>
      </ScrollView>
      <Loading visible={user?.status === 'loading'} />
    </View>
  );
};

export default ChangePassword;
