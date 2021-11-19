import { IUser } from "../../users/interfaces";


export interface UserState {
    users: IUser[],
    user: IUser
}

export const UserInitialState = {
    users: [] as IUser[],
    user: { } as IUser
}


export type UserStateType = IUser[] | IUser | number | string | null;

export type UserAction = { type: string, payload: UserStateType };

export type DispatchUserType = (args: UserAction) => UserAction;
