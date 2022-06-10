import { Types } from '../../actions/mintActions/mintActionsTypes';
import { AuthReducer } from './mintReducerTypes';

const initialState: AuthReducer = {
  timeToUndesabled: 5,
  maxCountOfClicked: 10,
  countOfClicked: 0,
  isOverTime: false,
};

export const mintReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.PLUS_COUNT_OF_CLICKED:
      return {
        ...state,
        countOfClicked: state.countOfClicked + 1,
      };

    default:
      return state;
  }
};
