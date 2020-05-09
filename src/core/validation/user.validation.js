import {
  passWordRegex,
  emailRegex,
  usernameRegex
} from "../../constant/regex.constant";

export const validatePassword = password => {
  return passWordRegex.test(password);
};

export const validateUsername = username => {
  return usernameRegex.test(username);
};

export const validateEmai = email => {
  return emailRegex.test(email);
};
