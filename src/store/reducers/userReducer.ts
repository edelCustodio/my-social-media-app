import { IUser } from "../../users/interfaces";
import { UserAction, UserInitialState, UserState } from "../types";
import * as types from '../types/actionTypes';

export const userReducer = (state: UserState = UserInitialState, action: UserAction) => {
    switch (action.type) {
        case types.ADD_USERS: {
            return { ...state, users: [ ...action.payload as IUser[] ]  }
        }

        default:
            return { ...state };
    }
}