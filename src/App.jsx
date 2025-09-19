import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdventureSelection from "./pages/AdventureSelection";
import ChaoticWheel from "./pages/ChaoticWheel";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AdventureSelection" element={<AdventureSelection />} />
        <Route path="/ChaoticWheel" element={<ChaoticWheel />} />

        {/* more routes coming later, like AdventurePage, RoulettePage, SuccessPage */}
      </Routes>
    </Router>
  );
}

export default App;
