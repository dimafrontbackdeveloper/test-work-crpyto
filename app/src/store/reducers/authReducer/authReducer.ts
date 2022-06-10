import { AuthReducer } from './authReducerTypes';

const initialState: AuthReducer = {
  isAuth: false,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        isAuth: action.bool,
      };
    default:
      return state;
  }
};
