import { IUser } from "../../users/interfaces";
import { HttpClient } from "../../utils/HttpClient"
import { UserAction } from "../types";
import * as types from '../types/actionTypes';
import { ActionCreator } from 'redux';

const httpClient = new HttpClient();

export const getUsers = () => {
    return async (dispatch: any) => {

        const request = async () => {
            const response = await httpClient.get<IUser[]>('/users');

            if(!response) {
                throw new Error(`No Users`);
            }

            return response;
        }

        try {
            const response = await request();

            const users = response.data;

            // dispatch to update store

            dispatch(addUsers(users));

        } catch (e: any) {

        }
    }
}

// Actions

export const addUsers: ActionCreator<UserAction> = (users: IUser[]) => {
    return { type:  types.ADD_USERS, payload: users } as UserAction;
}