import React from "react";

import "./prediction-table.styles.scss";

const PredictionTable = ({ predictions }) => {
  return (
    <div className="prediction-table-container">
      <h3>Top Predictions</h3>
      <table className="prediction-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Probability</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((pred, index) => (
            <tr key={index}>
              <td>{pred.class}</td>
              <td>{(pred.probability * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PredictionTable;
