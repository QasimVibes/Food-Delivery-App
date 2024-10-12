import {
  SignUpUserInput,
  LoginUserInput,
  ChangePasswordInput,
  ResetPasswordInput,
} from '../types/types';

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
  const mobileNumberRegex = /^[0-9]{10,}$/;
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

export const validateForgotPassword = (email: string) => {
  const errors: {[key: string]: string} = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export const validateOtp = (otp: string) => {
  const errors: {[key: string]: string} = {};

  if (!otp) {
    errors.otp = 'OTP is required';
  } else if (otp.length !== 4) {
    errors.otp = 'Invalid OTP. It must be 4 digits';
  }

  return errors;
};

export const validateChangePassword = (data: ChangePasswordInput) => {
  const errors: {[key: string]: string} = {};

  if (data.newPassword.length < 6 || data.confirmPassword.length < 6) {
    errors.newPassword = 'Password must be at least 6 characters long';
  } else if (data.newPassword !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
};

export const validateResetPasswordData = (data: ResetPasswordInput) => {
  const errors: {[key: string]: string} = {};
  if (!data.oldPassword || !data.newPassword || !data.confirmPassword) {
    errors.emptyFields = 'All password fields are required';
    return errors;
  }
  if (data.oldPassword.length < 6) {
    errors.oldPassword = 'Password must be at least 6 characters long';
  }
  if (data.newPassword.length < 6) {
    errors.newPassword = 'Password must be at least 6 characters long';
  }

  if (data.confirmPassword.length < 6) {
    errors.confirmPassword = 'Password must be at least 6 characters long';
  }
  if (data.newPassword !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  if (data.newPassword === data.oldPassword) {
    errors.newPassword = 'New password must be different from the old one';
    errors.confirmPassword = 'New password must be different from the old one';
  }

  return errors;
};
