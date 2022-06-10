import { Actions, Types } from './mintActionsTypes';

export const actions: Actions = {
  plusCountOfClicked: () => {
    return {
      type: Types.PLUS_COUNT_OF_CLICKED,
    };
  },
};
