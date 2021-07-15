import auth from "@react-native-firebase/auth";

import { resolvePromise, rejectPromise } from "../serviceHandlers";

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return resolvePromise(response);
  } catch (error) {
    return rejectPromise(error);
  }
};

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return resolvePromise(response);
  } catch (error) {
    return rejectPromise(error);
  }
};

export const logout = async () => {
  try {
    const response = await auth().signOut();
    return resolvePromise(response); //
  } catch (error) {
    return rejectPromise(error);
  }
};

export const sendPasswordResetEmail = async email => {
  try {
    await auth().sendPasswordResetEmail(email);
  } catch (error) {
    return rejectPromise(error);
  }
};
