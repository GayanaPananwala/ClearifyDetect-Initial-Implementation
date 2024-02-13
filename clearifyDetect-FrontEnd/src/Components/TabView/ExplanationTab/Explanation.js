import React from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

function Explanation() {
  const location = useLocation();
  const { state } = location;
  const { text } = state || {};

  return <div className="explanation-container"></div>;
}

export default Explanation;
