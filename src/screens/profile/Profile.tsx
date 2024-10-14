import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import styles from './ProfileStyles';
import {CAMERA, USER} from '../../constants/Images';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {PROFILE_FIELDS} from '../../constants/InputFields';
import {useProfile, useSelectImage} from './useProfile';
import Loading from '../../components/loading/Loading';

const Profile = () => {
  const {imageUri, selectImage} = useSelectImage();
  const {user, handleChange, handleSubmit, stateUser} = useProfile();
  const inputFields = PROFILE_FIELDS(user);

  return (
    <View style={styles.container}>
      <Header title="My Profile" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container style={{paddingVertical: 20}}>
          <View style={styles.imageContainer}>
            <View>
              <Image
                source={
                  imageUri
                    ? {uri: imageUri}
                    : user?.imageUrl
                    ? {uri: user?.imageUrl}
                    : USER
                }
                style={styles.imageStyle}
              />
              <TouchableOpacity
                style={styles.cameraIconContainer}
                onPress={selectImage}>
                <Image source={CAMERA} style={styles.cameraIcon} />
              </TouchableOpacity>
            </View>
          </View>
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
          <View style={styles.buttonContainer}>
            <Button
              text="Update Profile"
              fontSize={17}
              paddingVertical={8}
              onPress={() => handleSubmit(imageUri)}
            />
          </View>
        </Container>
      </ScrollView>
      <Loading visible={stateUser.status === 'loading'} />
    </View>
  );
};

export default Profile;
