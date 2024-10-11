import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {LOGIN_USER, SIGNUP_USER} from '../../graphql/queries/queries';
import client from '../../graphql/client';
import {AuthState, LoginUserInput, SignUpUserInput} from '../../types/types';

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
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
      return rejectWithValue(error.message || 'Signup failed');
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
      return rejectWithValue(error.message || 'Login failed');
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
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const authReducer = authSlice.reducer;
