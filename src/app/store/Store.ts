import { combineReducers } from "redux";
import { userReducer } from "./reducers/UserReducer";

export class UserState {
  username?: string;
}

export class AppState {
  user?: UserState
}

export const rootReducer = combineReducers<AppState>({
  user: userReducer,
})
