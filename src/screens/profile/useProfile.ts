import {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import {validateProfileData} from '../../utils/validation';
import {ProfileInput} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {getUserProfile, updateProfile} from '../../store/slice/userSlice';

export const useSelectImage = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const selectImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 1,
        includeBase64: true,
      });

      if (result.didCancel) {
        Toast.show({type: 'error', text1: 'Image selection cancelled'});
      } else if (result?.assets && result?.assets?.length > 0) {
        const uri = result.assets[0].uri;
        setImageUri(uri as string);
        Toast.show({type: 'success', text1: 'Image selected successfully'});
      } else {
        Toast.show({type: 'error', text1: 'No image selected'});
      }
    } catch (error) {
      Toast.show({type: 'error', text1: 'Image selection failed'});
    }
  };

  return {imageUri, selectImage};
};

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const stateUser = useAppSelector(state => state.user);
  const [localUser, setLocalUser] = useState(stateUser.user);

  useEffect(() => {
    if (!stateUser.user) {
      dispatch(getUserProfile())
        .unwrap()
        .catch(() => {
          Toast.show({type: 'error', text1: 'Failed to load user profile'});
        });
    } else {
      setLocalUser(stateUser.user);
    }
  }, [dispatch, stateUser.user]);

  const handleChange = (name: string, value: string) => {
    setLocalUser((prevUser: ProfileInput) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (imageUri: string | null) => {
    const errors = validateProfileData(localUser);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err => {
        Toast.show({type: 'error', text1: err});
      });
      return;
    }
    try {
      await dispatch(
        updateProfile({userInput: {...localUser, imageUrl: imageUri || ''}}),
      ).unwrap();

      Toast.show({type: 'success', text1: 'Profile updated successfully'});
    } catch (error) {
      Toast.show({type: 'error', text1: error as string});
    }
  };

  return {
    stateUser,
    user: localUser,
    handleChange,
    handleSubmit,
  };
};
