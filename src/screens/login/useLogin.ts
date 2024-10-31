import {useState} from 'react';
import {LoginUserInput} from '../../types/types';
import {validateLoginData} from '../../utils/validation';
import Toast from 'react-native-toast-message';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {login} from '../../store/slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useGoogleLogin from '../../hooks/useGoogleLogin';

export const useLogin = () => {
  const [data, setData] = useState<LoginUserInput>({
    identifier: '',
    password: '',
  });
  const {signIn} = useGoogleLogin();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);
  const handleChange = (name: string, value: string) => {
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const errors = validateLoginData(data);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err => {
        Toast.show({type: 'error', text1: err});
      });
      return;
    }
    data.identifier = data.identifier.trim().toLowerCase();
    try {
      const authToken = await dispatch(login(data)).unwrap();
      if (typeof authToken === 'string') {
        await AsyncStorage.setItem('authToken', authToken);
      } else {
        Toast.show({type: 'error', text1: 'Failed to retrieve token.'});
      }
      setData({
        identifier: '',
        password: '',
      });
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
      });
    } catch (error) {
      Toast.show({type: 'error', text1: error as string});
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const userInfo = await signIn();
      console.log(userInfo);
    } catch (error) {
      Toast.show({type: 'error', text1: error as string});
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    handleLoginWithGoogle,
    user,
  };
};
