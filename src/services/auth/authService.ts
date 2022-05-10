import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth, addDoc, db, collection } from "../../firebase/firebase.config";

const loginService = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const signupService = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res?.user;
  if (user) {
    await addDoc(collection(db, "users"), {
      _id: user.uid,
      firstName,
      lastName,
      email,
    });
  }
  return res;
};

const logoutService = () => {
  signOut(auth);
};

export { loginService, signupService, logoutService };
