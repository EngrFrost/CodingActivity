import { FC } from "react";
import toast, { ToastOptions } from "react-hot-toast";

type ToastType = "success" | "error" | "loading" | "custom";

interface ToastProps {
  type?: ToastType;
  message: string;
  duration?: number;
  position?: ToastOptions["position"];
}

const Toast: FC<ToastProps> = ({
  type = "custom",
  message,
  duration = 3000,
  position = "top-right",
}) => {
  switch (type) {
    case "success":
      toast.success(message, { duration, position });
      break;
    case "error":
      toast.error(message, { duration, position });
      break;
    case "loading":
      toast.loading(message, { duration, position });
      break;
    default:
      toast(message, { duration, position });
  }
  return null;
};

export const useToast = () => {
  return {
    success: (message: string) =>
      toast.success(message, { duration: 3000, position: "top-right" }),
    error: (message: string) =>
      toast.error(message, { duration: 3000, position: "top-right" }),
    loading: (message: string) =>
      toast.loading(message, { duration: 3000, position: "top-right" }),
    custom: (message: string) =>
      toast(message, { duration: 3000, position: "top-right" }),
    dismiss: toast.dismiss,
  };
};

export { Toast };
