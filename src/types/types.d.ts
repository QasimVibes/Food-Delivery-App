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
  role: string;
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
  DeliveryAddress: undefined;
  Orders: undefined;
  OrderCancel: undefined;
  OrderCancelled: undefined;
  Details: undefined;
  PlaceOrder: undefined;
  OrderConfirmed: undefined;
  Contact: undefined;
  AddAddress: undefined;
  BestSeller: undefined;
  Faqs: undefined;
  Discounted: undefined;
  Foods: undefined;
  Recommendation: undefined;
  Launch: undefined;
  Home: undefined;
  FoodReview: undefined;
  Payment: undefined;
  Setting: undefined;
};

export type HeaderProps = {
  title: string;
  isShown?: boolean;
  subTitle?: string;
};

export type HomeHeaderProps = {
  greetingShown?: boolean;
};

export type RolesOptions = {
  label: string;
  value: string;
};

export type DropdownProps = {
  options: RolesOptions[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};
