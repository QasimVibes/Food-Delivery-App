import {useState} from 'react';
import {ChangePasswordInput} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import Toast from 'react-native-toast-message';
import {changePassword} from '../../store/slice/authSlice';
import {validateChangePassword} from '../../utils/validation';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

export const useChangePassword = () => {
  const [password, setPassword] = useState<ChangePasswordInput>({
    newPassword: '',
    confirmPassword: '',
  });
  const navigation = useTypeNavigation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);

  const handleChange = (name: string, value: string) => {
    setPassword(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (email: string, otp: string) => {
    const errors = validateChangePassword(password);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err => {
        Toast.show({type: 'error', text1: err});
      });
      return;
    }
    if (!email || !otp) {
      Toast.show({type: 'error', text1: 'Email and OTP are required'});
      return;
    }
    try {
      await dispatch(
        changePassword({
          password: password.confirmPassword,
          email: email,
          otp: otp,
        }),
      ).unwrap();
      setPassword({newPassword: '', confirmPassword: ''});
      Toast.show({
        type: 'success',
        text1: 'Password changed successfully',
        text2: 'Please login with your new password',
      });
      navigation.navigate('Login');
    } catch (error) {
      Toast.show({type: 'error', text1: error as string});
    }
  };

  return {
    password,
    handleChange,
    handleSubmit,
    user,
  };
};
