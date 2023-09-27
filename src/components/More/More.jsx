import React from "react";
import "./More.css";

const More = ({ showMore }) => {
  return (
    <section className="more">
      <button className="more__button button-hover" onClick={showMore}>
        Ещё
      </button>
    </section>
  );
};

export default More;
