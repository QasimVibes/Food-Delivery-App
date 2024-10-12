import {
  ChangePasswordInput,
  LoginUserInput,
  SignUpUserInput,
} from '../types/types';

export const SIGNUP_FIELDS = (data: SignUpUserInput) => {
  const inputFields = [
    {
      placeholder: 'John Doe',
      text: 'Full name',
      value: data.fullname,
      key: 'fullname',
      secureTextEntry: false,
    },
    {
      placeholder: '********',
      text: 'Password',
      value: data.password,
      key: 'password',
      secureTextEntry: true,
    },
    {
      placeholder: 'example@example.com',
      text: 'Email',
      value: data.email,
      key: 'email',
      secureTextEntry: false,
      keyboardType: 'email-address',
    },
    {
      placeholder: '+91 9876543210',
      text: 'Mobile Number',
      value: data.mobileNumber,
      key: 'mobileNumber',
      secureTextEntry: false,
      keyboardType: 'phone-pad',
    },
    {
      placeholder: 'DD/MM/YYYY',
      text: 'Date of Birth',
      value: data.dateOfBirth,
      key: 'dateOfBirth',
      isDatePicker: true,
    },
  ];
  return inputFields;
};

export const LOGIN_FIELDS = (data: LoginUserInput) => {
  const inputFields = [
    {
      placeholder: 'example@example.com',
      text: 'Email or Mobile Number',
      value: data?.identifier,
      key: 'identifier',
      secureTextEntry: false,
      keyboardType: 'email-address',
    },
    {
      placeholder: '********',
      text: 'Password',
      value: data?.password,
      key: 'password',
      secureTextEntry: true,
    },
  ];
  return inputFields;
};

export const CHANGE_PASSWORD_FIELDS = (data: ChangePasswordInput) => {
  const inputFields = [
    {
      placeholder: '********',
      text: 'New Password',
      value: data?.newPassword,
      key: 'newPassword',
      secureTextEntry: true,
    },
    {
      placeholder: '********',
      text: 'Confirm Password',
      value: data?.confirmPassword,
      key: 'confirmPassword',
      secureTextEntry: true,
    },
  ];
  return inputFields;
};
