import { UserState } from "../Store";
import { UserActions } from "../actions/UserActions";

const INITIAL_STATE: UserState = {
  username: undefined
}

export function userReducer(state: UserState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case UserActions.SET_USERNAME:
      return { ...state, username: action.payload }
    default:
      return state;
  }
}
