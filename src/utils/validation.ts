import {SignUpUserInput, LoginUserInput} from '../types/types';

export const validateSignUpData = (data: SignUpUserInput) => {
  const errors: {[key: string]: string} = {};

  if (!data.fullname.trim()) {
    errors.fullname = 'Full name is required';
  } else if (data.fullname.trim().length < 3) {
    errors.fullname = 'Full name must be at least 3 characters long';
  }

  const email = data.email?.trim() || '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Invalid email address';
  }

  if (data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  const mobileNumber = data.mobileNumber?.trim() || '';
  const mobileNumberRegex = /^[0-9]{10}$/;
  if (!mobileNumber) {
    errors.mobileNumber = 'Mobile number is required';
  } else if (!mobileNumberRegex.test(mobileNumber)) {
    errors.mobileNumber = 'Invalid mobile number. It must be 10 digits';
  }

  if (!data.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required';
  }

  return errors;
};

export const validateLoginData = (data: LoginUserInput) => {
  const errors: {[key: string]: string} = {};

  const identifier = data.identifier?.trim() || '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,}$/;

  if (!identifier) {
    errors.identifier = 'Email or phone number is required';
  } else if (!emailRegex.test(identifier) && !phoneRegex.test(identifier)) {
    errors.identifier = 'Invalid email or phone number';
  }

  if (data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return errors;
};
