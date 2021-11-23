import * as types from '../types/actionTypes';
import { ActionCreator } from "redux";
import { AppAction } from '../types';

// Actions

export const changeTitle: ActionCreator<AppAction> = (title: string) => {
    return { type:  types.CHANGE_TITLE, payload: title } as AppAction;
}