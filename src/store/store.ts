import {configureStore, combineReducers, PayloadAction} from '@reduxjs/toolkit';
import {authReducer} from './slice/authSlice';

const appReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof appReducer>;

const rootReducer = (
  state: RootState | undefined,
  action: PayloadAction,
): RootState => {
  if (action.type === 'reset/resetStore') {
    state = undefined;
  }
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
