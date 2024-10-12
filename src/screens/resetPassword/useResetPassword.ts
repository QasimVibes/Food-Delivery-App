import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {validateResetPasswordData} from '../../utils/validation';
import {ResetPasswordInput} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {resetPassword} from '../../store/slice/authSlice';

export const useResetPassword = () => {
  const [password, setPassword] = useState<ResetPasswordInput>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);

  const handleChange = (name: string, value: string) => {
    setPassword(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const errors = validateResetPasswordData(password);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err => {
        Toast.show({type: 'error', text1: err});
      });
      return;
    }
    try {
      await dispatch(
        resetPassword({password: password?.confirmPassword}),
      ).unwrap();
      setPassword({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      Toast.show({
        type: 'success',
        text1: 'Password changed successfully',
        text2: 'Please login with your new password',
      });
    } catch (error) {
      Toast.show({type: 'error', text1: error as string});
    }
  };
  return {password, handleChange, handleSubmit, user};
};
