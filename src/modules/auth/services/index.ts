import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../../firebase";

import { setDoc, doc } from "firebase/firestore";
import { IAuthModel, IUser } from "../models";
export const registerUser = async (request: IUser) => {
  try {
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      request.email,
      request.password
    );
    const userId = createdUser.user.uid;
    console.log(userId);

    // TODO  : Implement BCRYPT for password hashing, d not leave password in clear.
    const userDocumnetRef = await setDoc(doc(db, "users", userId), request);
    return userId;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (user: IAuthModel): Promise<string> => {
  try {
    const createdUser = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    // push the token into the localstorage
    const token = await createdUser.user.getIdToken();
    if (!token) {
      console.error("Failed to retrieve token");
      throw new Error("Failed to retrieve token");
    }
    console.log("Token retrieved:", token);

    return token;
  } catch (error) {
    console.error("Error logging in:", error);
    console.error("Error logging in:", error);
    throw error;
  }
};

export const getAuthenticatedUser = () => {
  try {
  } catch (error) {}
};

export const getUser = (email: string) => {};
export const logout = () => {};
