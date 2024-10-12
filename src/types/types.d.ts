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
