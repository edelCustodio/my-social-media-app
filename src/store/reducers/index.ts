import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
    post: postReducer
});

