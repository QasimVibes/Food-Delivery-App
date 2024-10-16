import {useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {verifyOtp} from '../../store/slice/authSlice';
import Toast from 'react-native-toast-message';
import {validateOtp} from '../../utils/validation';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

export const useVerifyOtp = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<TextInput[]>([]);
  const navigation = useTypeNavigation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);
  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    setOtp(newOtp);
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (email: string) => {
    const errors = validateOtp(otp.join(''));
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err => {
        Toast.show({type: 'error', text1: err});
      });
      return;
    }
    if (!email) {
      Toast.show({type: 'error', text1: 'Email is required'});
      return;
    }
    try {
      await dispatch(verifyOtp({otp: otp.join(''), email: email})).unwrap();
      setOtp(['', '', '', '']);
      inputRefs.current[0]?.focus();
      Toast.show({type: 'success', text1: 'OTP Verified successfully'});
      navigation.navigate('ChangePassword', {email: email, otp: otp.join('')});
    } catch (error) {
      Toast.show({type: 'error', text1: error as string});
    }
  };

  return {
    otp,
    inputRefs,
    handleOtpChange,
    handleKeyPress,
    handleSubmit,
    user,
  };
};
