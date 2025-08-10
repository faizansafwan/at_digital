import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
