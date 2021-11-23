import { IComment } from "../../models";

export interface CommentState {
    comments: IComment[]
}

export const CommentStateInit = {
    comments: [] as IComment[]
}


export type CommentStateType = IComment[];

export type CommentAction = { type: string, payload: CommentStateType };

export type DispatchCommentType = (args: CommentAction) => CommentAction;