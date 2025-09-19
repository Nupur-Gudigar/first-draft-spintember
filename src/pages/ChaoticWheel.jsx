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
  "Create choice cam phrase",
  "Random 60-sec doodle",
  "Sing a song backwards",
  "Tell a funny childhood story",
];

const ChaoticWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);

    const segmentAngle = 360 / prompts.length;
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const chosenPrompt = prompts[randomIndex];

    // pick a random spin with extra rotations
    const randomSpin = 360 * 5 + randomIndex * segmentAngle + segmentAngle / 2;
    setRotation(rotation + randomSpin);

    setTimeout(() => {
      setSelectedPrompt(chosenPrompt);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="chaotic-bg">
      <div className="chaotic-overlay" />

      <div className="chaotic-content">
        <h1 className="chaotic-title">CHAOTIC ADVENTURE</h1>

        <div className="chaotic-layout">
          {/* Wheel Section */}
          <div className="wheel-container">
            <div
              className="wheel"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? "transform 4s ease-out" : "none",
              }}
            >
              {prompts.map((p, i) => (
                <div
                  key={i}
                  className={`wheel-segment segment-${i % 2}`}
                  style={{
                    transform: `rotate(${i * (360 / prompts.length)}deg) skewY(-${
                      90 - 360 / prompts.length
                    }deg)`,
                  }}
                >
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div className="wheel-pointer">▼</div>
            <button className="spin-btn" onClick={spinWheel} disabled={spinning}>
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
              {selectedPrompt
                ? selectedPrompt
                : "Spin the wheel to get your challenge!"}
            </div>

            <div className="chaotic-buttons">
              <button
                className="accept-btn"
                onClick={() => alert("Challenge accepted!")}
                disabled={!selectedPrompt}
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
