// PredictionForm.js
import React, { useState } from "react";
import { TextareaAutosize, Typography } from "@mui/material";
import { PredictionResults } from "./predictionResult"; // Import PredictionResults component
import _ from "lodash";
import { useNavigate } from "react-router-dom";

function PredictionForm() {
  const [text, setText] = useState("");
  const [showResults, setShowResults] = useState(false); // State to manage visibility of PredictionResults
  const [showExplanationButton, setShowExplanationButton] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const navigate = useNavigate();
  const [prediction, setPrediction] = useState("");
  const handleScanClick = () => {
    if (text.trim() === "") {
      alert("Please type your text content first.");
    } else {
      makePrediction(); // Call function to make POST request
      if (showResults) {
        setText("");
        setShowResults(false);
        setWordCount(0);
        setShowExplanationButton(false);
      } else {
        setShowResults(true);
        setShowExplanationButton(true);
      }
    }
  };

  const handleExplanationClick = () => {
    navigate("/tab-view/explanation", { state: { text } });
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    // Use Lodash to count words
    const count = _.words(e.target.value).length;
    setWordCount(count);
  };

  const makePrediction = async () => {
    try {
      const response = await fetch("http://localhost:5000/predict/lstm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) {
      }
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {}
  };

  return (
    <div className="prediction-form-container">
      <div className="col">
        <TextareaAutosize
          className="input-text"
          placeholder="Paste your content here..."
          value={text}
          onChange={handleTextChange}
          rowsMin={5}
          style={{
            width: "100%",
            marginBottom: "10px",
            height: 300,
            resize: "vertical",
            overflow: "auto",
          }}
        />
        <Typography variant="body2" gutterBottom>
          Words: {wordCount}
        </Typography>
        <button className="scanBtn" onClick={handleScanClick}>
          {showResults ? "Re-scan Me" : "Scan Me"}
        </button>
        {showExplanationButton && ( // Render the explanation button conditionally
          <button className="explainBtn" onClick={handleExplanationClick}>
            View Explanations
          </button>
        )}
        {showResults && ( // Render the prediction result if showResults is true
          <div>
            <Typography variant="body2" gutterBottom></Typography>
          </div>
        )}
      </div>
      {showResults && <PredictionResults text={text} />}
    </div>
  );
}

export default PredictionForm;
