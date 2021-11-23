import { IPost } from "../../models";


export interface PostState {
    posts: IPost[]
}

export const PostStateInit = {
    posts: [] as IPost[]
}

export type PostStateType = IPost[] | IPost;

export type PostAction = { type: string, payload: PostStateType };

export type DispatchPostType = (args: PostAction) => PostAction;
