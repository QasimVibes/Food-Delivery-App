import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import styles from './ProfileStyles';
import {USER} from '../../constants/Images';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header title="My Profile" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container style={{paddingVertical: 20}}>
          <View style={styles.imageContainer}>
            <Image
              source={USER}
              resizeMode="contain"
              style={styles.imageStyle}
            />
          </View>
          <Input placeholder="John Doe" text="Full name" />
          <Input placeholder="DD/MM/YYYY" text="Date of Birth" />
          <Input placeholder="example@example.com" text="Email" />
          <Input placeholder="+91 9876543210" text="Mobile Number" />
          <View style={styles.buttonContainer}>
            <Button text="Update Profile" fontSize={17} paddingVertical={8} />
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default Profile;
