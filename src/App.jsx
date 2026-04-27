import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Home from "./pages/Home";
import TempleDetail from "./pages/TempleDetail";
import Culture from "./pages/Culture";
import Tourism from "./pages/Tourism"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temples" element={<Gallery />} />
        
        {/* Dynamic route - ek route sab ke liye */}
        <Route path="/:templeName" element={<TempleDetail />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/tourism" element={<Tourism />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;