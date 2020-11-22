export type Action = { type: "LOG_IN"; payload: boolean };

export const logIn = (logIn: boolean): Action => ({
  type: "LOG_IN",
  payload: logIn,
});
