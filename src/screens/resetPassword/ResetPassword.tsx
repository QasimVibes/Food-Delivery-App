import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import styles from './ResetPasswordStyles';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const ResetPassword = () => {
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
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <Input
            placeholder="********"
            text="New Password"
            secureTextEntry={true}
          />
          <Input
            placeholder="********"
            text="Confirm New Password"
            secureTextEntry={true}
          />
          <View style={styles.buttonContainer}>
            <Button
              text="Change Password"
              paddingVertical={8}
              fontSize={17}
              width={200}
            />
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default ResetPassword;
