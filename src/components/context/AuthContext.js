import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase/Firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };
  const signIn = () => {
    signInWithEmailAndPassword(auth, "test1234@mail.com", "123456").then(
      (userCredentials) => {
        console.log(userCredentials);
      }
    );
  };
  const signUp = async () => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      "test1234@mail.com",
      "123456"
    );
    await updateProfile(user, {
      displayName: "test",
    }).then(console.log(user));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      console.log("user", currUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{ googleSignIn, logOut, user, signIn, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
