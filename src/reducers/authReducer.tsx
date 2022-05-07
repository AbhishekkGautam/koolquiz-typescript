import {
  AUTH_LOADING,
  SAVE_AUTH_DATA,
  SAVE_USER_DATA,
  AUTH_ERROR,
  LOG_OUT,
} from "./actions";
import { AuthStateType, AuthActionType } from "../types/authContext.types";

export const authReducer = (state: AuthStateType, action: AuthActionType) => {
  switch (action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true, error: "" };
    case SAVE_AUTH_DATA:
      return {
        ...state,
        loading: false,
        userId: action.payload.userId,
        isLoggedIn: true,
        error: "",
      };
    case SAVE_USER_DATA:
      return { ...state, userInfo: action.payload.userInfo };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload.error,
        userId: "",
        isLoggedIn: false,
        userInfo: null,
      };
    case LOG_OUT:
      return {
        ...state,
        userId: "",
        isLoggedIn: false,
        userInfo: null,
        error: "",
      };
    default:
      return state;
  }
};
