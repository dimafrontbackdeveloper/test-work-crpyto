export enum Types {
  PLUS_COUNT_OF_CLICKED = 'PLUS_COUNT_OF_CLICKED',
}

interface PlusCountOfClicked {
  type: Types.PLUS_COUNT_OF_CLICKED;
}

export interface Actions {
  plusCountOfClicked: () => PlusCountOfClicked;
}
