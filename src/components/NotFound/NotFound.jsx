import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <section className="not-found">
      <h1 className="not-found__heading">404</h1>
      <p className="not-found__paragraph">Страница не найдена</p>
      <Link to="#" onClick={handleBack} className="return">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
