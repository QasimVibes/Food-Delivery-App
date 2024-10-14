export type InputProps = TextInputProps & {
  placeholder: string;
  text: string;
  secureTextEntry?: boolean;
  isDatePicker?: boolean;
};

export type SignUpUserInput = {
  fullname: string;
  email: string;
  password: string;
  mobileNumber: string;
  dateOfBirth: string;
};

export type AuthState = {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type LoginUserInput = {
  identifier: string;
  password: string;
};

export type ChangePasswordInput = {
  newPassword: string;
  confirmPassword: string;
};

export type VerifyOtp = {
  otp: string;
  email: string;
};

export type ChangePassword = {
  email: string;
  otp: string;
  password: string;
};

export type ResetPasswordInput = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type ProfileInput = {
  fullname: string;
  dateOfBirth: string;
  email: string;
  mobileNumber: string;
  imageUrl: string;
  address: string;
};

export type UserState = {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};
