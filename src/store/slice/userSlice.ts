import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {GET_CURRENT_USER, USER_PROFILE} from '../../graphql/queries/queries';
import client from '../../graphql/client';
import {ProfileInput, UserState} from '../../types/types';
import {uploadToCloudinary} from '../../utils/cloudinary';

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async ({userInput}: {userInput: ProfileInput}, {rejectWithValue}) => {
    try {
      let imageUrl = userInput?.imageUrl;
      if (userInput?.imageUrl) {
        const cloudinaryResponse = await uploadToCloudinary(
          userInput?.imageUrl,
        );
        imageUrl = cloudinaryResponse?.url;
      }
      const response = await client.mutate({
        mutation: USER_PROFILE,
        variables: {
          dateOfBirth: userInput?.dateOfBirth,
          email: userInput?.email,
          fullname: userInput?.fullname,
          mobileNumber: userInput?.mobileNumber,
          imageUrl: imageUrl || '',
          address: userInput?.address,
        },
      });
      return response.data.updateUser;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Update profile failed');
    }
  },
);

export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async (_, {rejectWithValue}) => {
    try {
      const response = await client.query({
        query: GET_CURRENT_USER,
      });
      return response.data.getCurrentUser;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Get user profile failed');
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateProfile.pending, state => {
        state.status = 'loading';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      })
      .addCase(getUserProfile.pending, state => {
        state.status = 'loading';
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      });
  },
});

export const userReducer = userSlice.reducer;
