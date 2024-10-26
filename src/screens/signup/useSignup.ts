import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {signup} from '../../store/slice/authSlice';
import {SignUpUserInput} from '../../types/types';
import {validateSignUpData} from '../../utils/validation';
import Toast from 'react-native-toast-message';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

export const useSignup = () => {
  const [data, setData] = useState<SignUpUserInput>({
    fullname: '',
    password: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    role: '',
  });
  const navigation = useTypeNavigation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);
  const handleChange = (name: string, value: string) => {
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    const errors = validateSignUpData(data);
    if (Object.keys(errors).length > 0) {
      Object.values(errors)?.forEach(err =>
        Toast.show({type: 'error', text1: err}),
      );
      return;
    }
    data.email = data.email.toLowerCase();
    try {
      await dispatch(signup(data));
      setData({
        fullname: '',
        password: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: '',
        role: '',
      });
      Toast.show({
        type: 'success',
        text1: 'Signup successful',
        text2: 'Please login with your credentials',
      });
      navigation.navigate('Login');
    } catch (error) {
      Toast.show({type: 'error', text1: error as string});
    }
  };
  return {
    data,
    handleChange,
    handleSubmit,
    user,
  };
};
