// TabViewPage.js
import React from "react";
import { Tab, Tabs, Box } from "@mui/material";
import {
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PredictionForm from "./PredictionTab/predictionForm";
import ExplanationTab from "./ExplanationTab/Explanation";
import "../../styles/tabviewpage.css";

function TabViewPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab = location.pathname.split("/")[2] || "prediction";

  // Function to handle tab change
  const handleTabChange = (event, newValue) => {
    navigate(`/tab-view/${newValue}`);
  };

  return (
    <div className="tabview-container">
      <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          centered
          sx={{
            ".Mui-selected": {
              color: "#ffffff !important",
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#ffffff",
              height: "1px",
            },
          }}
        >
          <Tab
            label="Prediction"
            value="prediction"
            sx={{
              color: "red",
              fontFamily: "Aleo",
            }}
          />
          <Tab
            label="Explanation"
            value="explanation"
            sx={{ color: "red", fontFamily: "Aleo" }}
          />
        </Tabs>
      </Box>
      <div className="tab-content">
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route path="/prediction" element={<PredictionForm />} />
          <Route path="/explanation" element={<ExplanationTab />} />
        </Routes>
      </div>
    </div>
  );
}

export default TabViewPage;
