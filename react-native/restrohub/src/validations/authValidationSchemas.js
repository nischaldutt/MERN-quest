import * as yup from "yup";

import {
  REQUIRED_FIELD,
  INVALID_EMAIL_FORMAT,
  PASSWORD_LENGTH_TOO_SHORT,
  PASSWORD_MISMATCH,
} from "../properties/constants";

export const loginFormSchema = yup.object().shape({
  email: yup.string().email(INVALID_EMAIL_FORMAT).required("Required!").trim(),
  password: yup.string().required(REQUIRED_FIELD).trim(),
});

export const signupFormSchema = yup.object().shape({
  email: yup.string().email(INVALID_EMAIL_FORMAT).required("Required!").trim(),
  password: yup
    .string()
    .required(REQUIRED_FIELD)
    .min(6, PASSWORD_LENGTH_TOO_SHORT)
    .trim(),
  confirmNewPassword: yup
    .string()
    .required(REQUIRED_FIELD)
    .oneOf([yup.ref("password"), null], PASSWORD_MISMATCH),
});

export const forgotPasswordFormSchema = yup.object().shape({
  email: yup.string().email(INVALID_EMAIL_FORMAT).required("Required!").trim(),
});
