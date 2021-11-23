import { IComment } from "../../models";
import { CommentAction, CommentState, CommentStateInit } from "../types";
import * as types from '../types/actionTypes';


export const commentReducer = (state: CommentState = CommentStateInit, action: CommentAction) => {
    switch (action.type) {
        case types.ADD_COMMENTS: {
            const comments = action.payload as IComment[];
            

            const postId = comments.length > 0 ? comments[0].postId : 0;

            if (postId === 0) {
                return { ...state, comments: [ ...comments ]  }
            }

            const commentsOnStore = state.comments.filter(w => w.postId === postId);

            if (commentsOnStore.length === 0) {
                const newState = { ...state, comments: [ ...state.comments, ...comments ]  };
                return newState;
            }

            return { ...state };
        }

        case types.ADD_COMMENT: {
            const comment = action.payload as IComment;
            return { ...state, comments: [...state.comments, comment] };
        }

        default:
            return { ...state };
    }
}