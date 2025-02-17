import React from "react";

import "./image-display.styles.scss";

const ImageDisplay = ({ imageSrc, prediction }) => {
  if (!imageSrc) return null;

  return (
    <div className="image-container">
      <img src={imageSrc} alt="Uploaded Preview" className="uploaded-image" />
      {prediction && <div className="prediction-text">{prediction}</div>}
    </div>
  );
};

export default ImageDisplay;
