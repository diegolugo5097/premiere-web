import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VisitUs from "./pages/VisitUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visitUs" element={<VisitUs />} />
      </Routes>
    </Router>
  );
}

export default App;
