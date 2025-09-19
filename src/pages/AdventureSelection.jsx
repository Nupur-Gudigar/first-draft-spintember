import React from "react";
import "./AdventureSelection.css";
import { Link } from "react-router-dom";

const adventureTypes = [
  { label: "CHAOTIC ADVENTURE", path: "/ChaoticWheel" },
  { label: "COZY ADVENTURE", path: "/CozyWheel" },
  { label: "ACADEMIC ADVENTURE", path: "/AcademicWheel" },
  { label: "CREATIVE ADVENTURE", path: "/CreativeWheel" },
];

const AdventureSelection = () => {
  return (
    <div className="adventure-bg">
      <div className="adventure-overlay" />
      <div className="adventure-content">
        <h1 className="adventure-title">CHOOSE YOUR ADVENTURE TYPE</h1>
        <div className="adventure-buttons">
          {adventureTypes.map((item, idx) => (
            <Link
              key={item.label}
              to={item.path}
              className={`adventure-btn zigzag-${idx % 2 === 0 ? "left" : "right"}`}
            >
              <span className="adventure-label">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdventureSelection;
