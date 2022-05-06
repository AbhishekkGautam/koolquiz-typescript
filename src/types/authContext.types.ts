type User = {
  firstName: string;
  lastName: string;
  email: string;
};

type AuthStateType = {
  loading: boolean;
  isLoggedIn: boolean;
  error: string;
  userId: string;
  userInfo: User | null;
};

type AuthLoadingType = {
  type: "AUTH_LOADING";
};

type SaveAuthDataType = {
  type: "SAVE_AUTH_DATA";
  payload: {
    userId: string;
  };
};

type SaveUserData = {
  type: "SAVE_USER_DATA";
  payload: {
    userInfo: User;
  };
};

type AuthErrorType = {
  type: "AUTH_ERROR";
  payload: {
    error: string;
  };
};

type LogOut = {
  type: "LOG_OUT";
};

type AuthActionType =
  | AuthLoadingType
  | SaveAuthDataType
  | SaveUserData
  | AuthErrorType
  | LogOut;

type AuthContextType = {
  state: AuthStateType;
  dispatch: React.Dispatch<AuthActionType>;
  loginUser: (email: string, password: string) => void;
  signupUser: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => void;
  logoutUser: () => void;
};

export type { AuthStateType, AuthContextType, AuthActionType };
