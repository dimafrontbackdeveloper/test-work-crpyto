import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authReducer/authReducer';
import { mintReducer } from './reducers/mintReducer/mintReducer';

export const store = configureStore({
  reducer: {
    authReducer,
    mintReducer,
  },
});

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropertiesTypes<T>
>;

export type RootState = ReturnType<typeof store.getState>;
