import { Actions, Types } from './authActionsTypes';

export const actions: Actions = {
  setAuth: (bool: boolean) => {
    return {
      type: Types.SET_AUTH,
      bool,
    };
  },
};
