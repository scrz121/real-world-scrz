import { toast } from 'react-toastify';

export const notifyError = (error) => {
  if (error.message) {
    const { message } = error;
    toast.error(message);
  } else {
    toast.error(error);
  }
};

export const notifySuccess = (message) => {
  toast.success(message);
};

export const notifyWarning = (message) => {
  toast.warning(message);
};
