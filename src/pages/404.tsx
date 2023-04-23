import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ERROR_MESSAGE_PAGE_NOTFOUND,
  ERROR_MESSAGE_PAGE_NOTFOUND_SUBTITLE,
} from "../utils/globals";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>{ERROR_MESSAGE_PAGE_NOTFOUND}</h1>
      <p>{ERROR_MESSAGE_PAGE_NOTFOUND_SUBTITLE}</p>
    </div>
  );
};

export default NotFound;
