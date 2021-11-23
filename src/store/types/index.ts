import { AppState } from './app-types';
import { UserState } from './user-types';

export * from './user-types';
export * from './app-types';


export type SocialState = {
    user: UserState,
    app: AppState
}