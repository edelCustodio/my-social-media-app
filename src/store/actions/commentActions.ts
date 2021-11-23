import { ActionCreator } from "redux";
import { IComment } from "../../models";
import { HttpClient } from "../../utils/HttpClient";
import { CommentAction } from "../types";
import * as types from '../types/actionTypes';


const httpClient = new HttpClient();

export const getComments = (postId: number = 0) => {
    return async (dispatch: any) => {

        const request = async () => {
            const url = postId === 0 ? `/comments` : `/comments?postId=${postId}`;
            const response = await httpClient.get<IComment[]>(url);

            if(!response) {
                throw new Error(`No Comments`);
            }

            return response;
        }

        try {
            const response = await request();
            const comments = response.data;

            // dispatch to update store
            dispatch(addComments(comments));

        } catch (e: any) {

        }
    }
}

export const saveComment = (comment: IComment) => {
    return async (dispatch: any) => {

        const request = async () => {
            const response = await httpClient.post<IComment>(`/comments`, comment);

            if(!response) {
                throw new Error(`Not able to save the comment`);
            }

            return response;
        }

        try {
            const response = await request();
            const comment = response.data;

            // dispatch to update store
            dispatch(addComment(comment));

        } catch (e: any) {

        }
    }
}

// Actions

export const addComments: ActionCreator<CommentAction> = (comments: IComment[]) => {
    return { type:  types.ADD_COMMENTS, payload: comments } as CommentAction;
}

export const addComment: ActionCreator<CommentAction> = (comment: IComment) => {
    return { type:  types.ADD_COMMENT, payload: comment } as CommentAction;
}