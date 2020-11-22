import { Action } from "./actions";

export interface LogInState {
  logIn: boolean;
}

const initialState = {
  logIn: false,
};

export const logInReducer = (
  state: LogInState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "LOG_IN": {
      return { ...state, logIn: !state.logIn };
    }
    default:
      return state;
  }
};
