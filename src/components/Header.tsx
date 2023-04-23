import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { APP_NAME } from "../utils/globals";

const Header = (): JSX.Element => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [location, isLoading]);

  useEffect(() => {
    const handlePopState = () => {
      setIsLoading(true);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <header className="header">
      <Link to="/" onClick={() => setIsLoading(true)}>
        <h1>{APP_NAME}</h1>
      </Link>
      <div className="loader-container">
        {isLoading && <span className="loader" />}
      </div>
    </header>
  );
};

export default Header;
