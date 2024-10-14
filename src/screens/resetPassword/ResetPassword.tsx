import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import styles from './ResetPasswordStyles';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {CHANGE_PASSWORD_FIELDS} from '../../constants/InputFields';
import {useResetPassword} from './useResetPassword';
import Loading from '../../components/loading/Loading';

const ResetPassword = () => {
  const {password, handleChange, handleSubmit, user} = useResetPassword();
  const inputFields = CHANGE_PASSWORD_FIELDS({
    newPassword: password.newPassword,
    confirmPassword: password.confirmPassword,
  });
  return (
    <View style={styles.container}>
      <Header title="Password Setting" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <Input
            placeholder="********"
            text="Current Password"
            secureTextEntry={true}
            value={password.oldPassword}
            onChangeText={(value: string) => handleChange('oldPassword', value)}
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
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
              text="Change Password"
              paddingVertical={8}
              fontSize={17}
              width={200}
              onPress={handleSubmit}
            />
          </View>
        </Container>
      </ScrollView>
      <Loading visible={user?.status === 'loading'} />
    </View>
  );
};

export default ResetPassword;
