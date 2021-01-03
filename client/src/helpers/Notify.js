import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export  const notify = ({ error, msg }) => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      toast.success(msg || "Action success !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };