import React, { useState } from "react";

import Input from "./components/input/input.component";
import Button from "./components/button/button.component";
import ImageDisplay from "./components/image-display/image-display.component";
import PredictionTable from "./components/prediction-table/prediction-table.component";

import "./App.css";

const App = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Generate preview URL
      setPredictions([]);
      setError(null);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    setLoading(true);
    setPredictions([]);
    setError(null);

    const formData = new FormData();
    formData.append("file", image);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/predict`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setPredictions(data.predictions);
      } else {
        setError("Something went wrong.");
      }
    } catch (error) {
      setError("Failed to connect to the server.");
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>Food Classification</h1>
      <p className="description">
        The Model is trained on the Food Vision 101 dataset to classify food
        items.
      </p>

      <div className="content-container">
        <div className="left-container">
          <div className="input-button-container">
            <Input onChange={handleImageChange} />
            <Button onClick={handleSubmit} loading={loading} />
          </div>

          {imagePreview && (
            <ImageDisplay
              imageSrc={imagePreview}
              prediction={predictions.length > 0 ? predictions[0].class : null}
            />
          )}
        </div>

        <div className="right-container">
          {predictions.length > 0 && (
            <PredictionTable predictions={predictions} />
          )}
        </div>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
