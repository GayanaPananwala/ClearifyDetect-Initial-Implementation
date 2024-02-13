import React from "react";
import { Typography, CircularProgress } from "@mui/material";

export function PredictionResults({
  text,
  aiGeneratedPercentage,
  humanWrittenBalancePercentage,
}) {
  // Here you can perform your prediction based on the text provided
  // This is just a placeholder component

  return (
    <div id="prediction-result-container" className="col">
      <h2>Prediction Results:</h2>

      <div style={{ position: "relative", width: 100, height: 100 }}>
        <CircularProgress
          variant="determinate"
          value={80} // Pass the AI generated percentage
          size="270px"
          thickness={5}
          style={{ position: "absolute", top: 0, left: 120 }}
        />
        <Typography
          variant="body2"
          style={{
            position: "absolute",
            top: 130,
            left: 260,
            transform: "translate(-50%, -50%)",
            fontSize: "18px",
            fontFamily: "Aleo",
          }}
        >
          AI Detection Score
        </Typography>
      </div>

      <div style={{ marginTop: 170 }}>
        <Typography style={{ fontFamily: "Aleo" }}>AI: {80}%</Typography>
        <Typography style={{ fontFamily: "Aleo" }}>Original: {20}%</Typography>
      </div>
    </div>
  );
}
