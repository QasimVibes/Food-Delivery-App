import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  CHANGE_PASSWORD,
  FORGOT_PASSWORD,
  LOGIN_USER,
  RESET_PASSWORD,
  SIGNUP_USER,
  VERIFY_OTP,
} from '../../graphql/queries/queries';
import client from '../../graphql/client';
import {
  AuthState,
  ChangePassword,
  LoginUserInput,
  SignUpUserInput,
  VerifyOtp,
} from '../../types/types';

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
  isLogin: false,
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (signupInput: SignUpUserInput, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: SIGNUP_USER,
        variables: signupInput,
      });
      return response.data.signup;
    } catch (error: any) {
      return rejectWithValue(
        error.networkError.result.errors[0].message || 'Signup failed',
      );
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (loginInput: LoginUserInput, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: LOGIN_USER,
        variables: loginInput,
      });
      return response.data.login;
    } catch (error: any) {
      return rejectWithValue(
        error.networkError.result.errors[0].message || 'Login failed',
      );
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: FORGOT_PASSWORD,
        variables: {email},
      });
      return response.data.forgotPassword;
    } catch (error: any) {
      return rejectWithValue(
        error.networkError.result.errors[0].message || 'Forgot password failed',
      );
    }
  },
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async (data: VerifyOtp, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: VERIFY_OTP,
        variables: data,
      });
      return response.data.verifyOtp;
    } catch (error: any) {
      return rejectWithValue(
        error.networkError.result.errors[0].message || 'Verify otp failed',
      );
    }
  },
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (data: ChangePassword, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: CHANGE_PASSWORD,
        variables: data,
      });
      return response.data.changePassword;
    } catch (error: any) {
      return rejectWithValue(
        error.networkError.result.errors[0].message || 'Change password failed',
      );
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({password}: {password: string}, {rejectWithValue}) => {
    try {
      const response = await client.mutate({
        mutation: RESET_PASSWORD,
        variables: {password},
      });
      return response.data.resetPassword;
    } catch (error: any) {
      return rejectWithValue(
        error.networkError.result.errors[0].message || 'Reset password failed',
      );
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(login.pending, state => {
        state.status = 'loading';
        state.error = null;
        state.isLogin = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.isLogin = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
        state.isLogin = false;
      })
      .addCase(forgotPassword.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(verifyOtp.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(changePassword.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(resetPassword.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const authReducer = authSlice.reducer;
