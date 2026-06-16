<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Input from "./pages/Input";
import Capture from "./pages/Capture";
import HtmlReplica from "./pages/HtmlReplica";
import "./styles/global.css";
import Evaluation from "./pages/Evaluation";
import Report from "./pages/Report";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/input" />} />
        <Route path="/input" element={<Input />} />
        <Route path="/capture" element={<Capture />} />
        <Route path="/html" element={<HtmlReplica />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Analysis from "./pages/Analysis";
import Preview from "./pages/Preview";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> ed3ee1def73026f26502dae1b6733b6107c5c555
