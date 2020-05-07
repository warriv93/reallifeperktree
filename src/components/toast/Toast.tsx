import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/toast.scss";

// Call it once in your app. At the root of your app is the best place
toast.configure({
  className: "toast-container",
  toastClassName: "rounded-toast",
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  transition: Slide,
});

const Toast = (text) => toast.success(text);

export default Toast;
