import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdventureSelection from "./pages/AdventureSelection";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AdventureSelection" element={<AdventureSelection />} />
        {/* more routes coming later, like AdventurePage, RoulettePage, SuccessPage */}
      </Routes>
    </Router>
  );
}

export default App;
