import React from "react";
import "./input.styles.scss";

const Input = ({ onChange }) => {
  return (
    <div className="input-container">
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="input-file"
      />
    </div>
  );
};

export default Input;
