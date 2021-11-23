import { ActionCreator } from "redux";
import { IPost } from "../../models";
import { HttpClient } from "../../utils/HttpClient";
import { PostAction } from "../types";
import * as types from '../types/actionTypes';

const httpClient = new HttpClient();

export const getPosts = () => {
    return async (dispatch: any) => {

        const request = async () => {
            const response = await httpClient.get<IPost[]>('/posts');

            if(!response) {
                throw new Error(`No Posts`);
            }

            return response;
        }

        try {
            const response = await request();
            const posts = response.data;

            // dispatch to update store
            dispatch(addPosts(posts));

        } catch (e: any) {

        }
    }
}

// Actions

export const addPosts: ActionCreator<PostAction> = (users: IPost[]) => {
    return { type:  types.ADD_POSTS, payload: users } as PostAction;
}