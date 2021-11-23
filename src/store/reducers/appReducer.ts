import { AppAction, AppState, AppStateInit } from "../types";
import * as types from '../types/actionTypes';

export const appReducer = (state: AppState = AppStateInit, action: AppAction) => {
    switch (action.type) {
        case types.CHANGE_TITLE: {
            return { ...state, titleWindow: action.payload as string  }
        }

        default:
            return { ...state };
    }
}