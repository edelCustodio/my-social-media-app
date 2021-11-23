
export interface AppState {
    titleWindow: string;
}

export const AppStateInit = {
    titleWindow: ''
}

export type AppStateType = string;

export type AppAction = { type: string, payload: AppStateType };

export type DispatchAppType = (args: AppAction) => AppAction;