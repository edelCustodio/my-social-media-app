import { AppState } from './app-types';
import { CommentState } from './comment-types';
import { PostState } from './post-types';
import { UserState } from './user-types';

export * from './user-types';
export * from './app-types';
export * from './post-types';
export * from './comment-types';


export type SocialState = {
    user: UserState,
    app: AppState,
    post: PostState,
    comment: CommentState
}