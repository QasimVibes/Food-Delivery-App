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
  isLogin: boolean;
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

export type NavigatorTypes = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  VerifyOtp: {email: string};
  ChangePassword: {email: string; otp: string};
  ResetPassword: undefined;
  Profile: undefined;
  DeliveryAdress: undefined;
  Orders: undefined;
  OrderCancel: undefined;
  OrderCancelled: undefined;
  Details: undefined;
  PlaceOrder: undefined;
  OrderConfirmed: undefined;
};

export type HeaderProps = {
  title: string;
  isShown?: boolean;
  subTitle?: string;
};

export type HomeHeaderProps = {
  greetingShown?: boolean;
};
