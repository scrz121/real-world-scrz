import {
  validatePassword,
  validateEmai,
  validateUsername
} from "../core/validation/user.validation";
import { notifyWarning } from "./toast.helper";

export const validateSignUp = (username, email, password) => {
  let bool = true;
  if (!validateUsername(username)) {
    notifyWarning(`Tên đăng nhập từ 4-8 ký tự!`);
    bool = false;
  }
  if (!validateEmai(email)) {
    notifyWarning(`Email chưa đúng định dạng!`);
    bool = false;
  }
  if (!validatePassword(password)) {
    notifyWarning(
      `Mật khẩu từ 8-10 ký tự, bao gồm chữ thường chữ hoa và chữ số !`
    );
    bool = false;
  }
  return bool;
};

export const validateSignIn = (email, password) => {
  let bool = true;
  if (!validateEmai(email)) {
    notifyWarning(`Email chưa đúng định dạng!`);
    bool = false;
  }
  if (!validatePassword(password)) {
    notifyWarning(
      `Mật khẩu từ 8-10 ký tự, bao gồm chữ thường chữ hoa và chữ số !`
    );
    bool = false;
  }
  return bool;
};
