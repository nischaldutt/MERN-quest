import { SIGNED_IN, SIGNED_OUT } from "./types";

export const signIn = () => {
  return {
    type: SIGNED_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGNED_OUT,
  };
};
