import { useEffect } from "react";
import "./Preloader.css";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
