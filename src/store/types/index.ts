import { AppState } from './app-types';
import { PostState } from './post-types';
import { UserState } from './user-types';

export * from './user-types';
export * from './app-types';
export * from './post-types';


export type SocialState = {
    user: UserState,
    app: AppState,
    post: PostState
}