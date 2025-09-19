import React, { useState } from "react";
import "./ChaoticWheel.css";

const prompts = [
  "Do a 2-min silly dance",
  "Random 60-sec improv",
  "Send 6 anime emoji phrases",
  "Try a spicy snack & rate it",
  "Record a 1-min snack react meme",
  "Create a chaotic collage from old photos",
  "Swap outfits with a friend",
  "Do an upside-down selfie",
  "Create a choice cam phrase",
  "Random 60-sec doodle",
  "Sing a song backwards",
  "Tell a funny childhood story",
];

const FULL_TURNS = 5;

const ChaoticWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const segment = 360 / prompts.length;

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);

    const idx = Math.floor(Math.random() * prompts.length);

    const current = ((rotation % 360) + 360) % 360;
    const center = idx * segment + segment / 2;

    // ✅ pointer is at 12 o’clock → 0°
    const target = ((center) % 360 + 360) % 360;

    const deltaWithinCircle = ((target - current) % 360 + 360) % 360;
    const delta = FULL_TURNS * 360 + deltaWithinCircle;

    const newRotation = rotation + delta;
    setRotation(newRotation);

    setTimeout(() => {
      setSelectedIndex(idx); // ✅ always matches slice under pointer
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="chaotic-bg">
      <div className="chaotic-overlay" />
      <div className="chaotic-content">
        <h1 className="chaotic-title">CHAOTIC ADVENTURE</h1>

        <div className="chaotic-layout">
          {/* Wheel */}
          <div className="wheel-container">
            <svg
              className="wheel"
              viewBox="0 0 400 400"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? "transform 4s ease-out" : "none",
              }}
            >
              <g transform="translate(200,200)">
                {prompts.map((p, i) => {
                  const start = i * segment;
                  const end = (i + 1) * segment;
                  const largeArc = end - start > 180 ? 1 : 0;

                  const x1 = 200 * Math.cos((Math.PI * start) / 180);
                  const y1 = 200 * Math.sin((Math.PI * start) / 180);
                  const x2 = 200 * Math.cos((Math.PI * end) / 180);
                  const y2 = 200 * Math.sin((Math.PI * end) / 180);

                  const centerAngle = start + segment / 2;

                  return (
                    <g key={i}>
                      <path
                        d={`M0 0 L${x1} ${y1} A200 200 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        fill={i % 2 === 0 ? "#8e44ad" : "#9b59b6"}
                        stroke="#fff"
                        strokeWidth="1"
                      />
                      <text
                        x="120"
                        y="0"
                        transform={`rotate(${centerAngle})`}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fill="white"
                        fontSize="12"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        {p}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
            <div className="wheel-pointer"></div>
            <button
              className="spin-btn"
              onClick={spinWheel}
              disabled={spinning}
            >
              {spinning ? "Spinning..." : "Spin the Wheel!"}
            </button>
          </div>

          {/* Info Box */}
          <div className="chaotic-info">
            <h2>About Chaotic Adventures</h2>
            <p>
              Embrace the unexpected! These challenges will push you out of your
              comfort zone and into exciting new experiences.
            </p>
            <h3>Your Magical Challenge</h3>
            <div className="challenge-box">
              {selectedIndex === null
                ? "Spin the wheel to get your challenge!"
                : prompts[selectedIndex]}
            </div>
            <div className="chaotic-buttons">
              <button
                className="accept-btn"
                onClick={() => alert("Challenge accepted!")}
                disabled={selectedIndex === null}
              >
                Accept Challenge
              </button>
              <button
                className="spin-again-btn"
                onClick={spinWheel}
                disabled={spinning}
              >
                Spin Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChaoticWheel;
