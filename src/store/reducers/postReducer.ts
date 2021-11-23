import { IPost } from "../../models";
import { PostAction, PostState, PostStateInit } from "../types";
import * as types from '../types/actionTypes';


export const postReducer = (state: PostState = PostStateInit, action: PostAction) => {
    switch (action.type) {
        case types.ADD_POSTS: {
            return { ...state, posts: [ ...action.payload as IPost[] ]  }
        }

        default:
            return { ...state };
    }
}