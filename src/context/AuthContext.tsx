import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../reducers";
import { AUTH_ERROR, LOG_OUT, SAVE_AUTH_DATA } from "../reducers/actions";
import { loginService, signupService } from "../services";
import { AuthContextType } from "../types/authContext.types";

const initialState = {
  loading: false,
  userId: "",
  userInfo: null,
  isLoggedIn: false,
  error: "",
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  const handleAuthStateChange = useCallback(
    (currentUser: User | null) => {
      if (currentUser) {
        dispatch({
          type: SAVE_AUTH_DATA,
          payload: {
            userId: currentUser.uid,
          },
        });
      } else {
        dispatch({
          type: LOG_OUT,
        });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      handleAuthStateChange(currentUser);
    });
  }, [handleAuthStateChange]);

  const loginUser = async (email: string, password: string) => {
    const toastId = toast.loading("Logging in...");
    if (email && password !== "") {
      try {
        const res = await loginService(email, password);
        const user: any = res?.user;
        if (user) {
          toast.success(`Hello, Welcome back!`, {
            id: toastId,
            icon: "👋",
          });

          dispatch({
            type: SAVE_AUTH_DATA,
            payload: {
              userId: user.uid,
            },
          });
          navigate(-1);
        }
      } catch (error: any) {
        const msg = error.message
          .match(/\/(\S+)[)]./i)[1]
          .replace(/-/g, " ")
          .toUpperCase();
        toast.error(`${msg}`, {
          id: toastId,
        });
        dispatch({ type: AUTH_ERROR, payload: { error: msg } });
      }
    }
  };

  const signupUser = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    const toastId = toast.loading("Creating your account...");
    try {
      const res = await signupService(firstName, lastName, email, password);
      const user: any = res?.user;
      if (user) {
        toast.success("Account created successfully!", {
          id: toastId,
        });
        navigate("/login", { replace: true });
      }
    } catch (error: any) {
      const msg = error.message
        .match(/\/(\S+)[)]./i)[1]
        .replace(/-/g, " ")
        .toUpperCase();
      toast.error(`${msg}`, {
        id: toastId,
      });
      dispatch({ type: AUTH_ERROR, payload: { error: msg } });
    }
  };

  const logoutUser = () => {
    dispatch({ type: LOG_OUT });
  };

  return (
    <AuthContext.Provider
      value={{ state, dispatch, loginUser, signupUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
