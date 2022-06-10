export enum Types {
  SET_AUTH = 'SET_AUTH',
}

interface SetAuth {
  type: Types.SET_AUTH;
  bool: boolean;
}

export interface Actions {
  setAuth: (bool: boolean) => SetAuth;
}
