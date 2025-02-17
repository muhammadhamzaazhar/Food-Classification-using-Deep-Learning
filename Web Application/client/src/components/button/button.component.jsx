import React from "react";
import "./button.styles.scss";

const Button = ({ onClick, loading }) => {
  return (
    <button className="custom-button" onClick={onClick} disabled={loading}>
      {loading ? "Processing..." : "Predict"}
    </button>
  );
};

export default Button;
