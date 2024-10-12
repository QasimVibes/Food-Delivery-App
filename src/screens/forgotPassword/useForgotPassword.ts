import {useState} from 'react';
import {validateForgotPassword} from '../../utils/validation';
import Toast from 'react-native-toast-message';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {forgotPassword} from '../../store/slice/authSlice';

export const useForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);
  const handleChange = (value: string) => {
    setEmail(value);
  };

  const handleSubmit = async () => {
    const errors = validateForgotPassword(email);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err => {
        Toast.show({type: 'error', text1: err});
      });
      return;
    }
    try {
      await dispatch(forgotPassword(email.toLowerCase())).unwrap();
      setEmail('');
      Toast.show({
        type: 'success',
        text1: 'Email sent successfully',
        text2: 'Please check your email',
      });
    } catch (error) {
      Toast.show({type: 'error', text1: error as string});
    }
  };
  return {
    email,
    handleChange,
    handleSubmit,
    user,
  };
};
