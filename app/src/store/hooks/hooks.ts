import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import type { RootState } from './../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
