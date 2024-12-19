import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Vocals from "./components/Vocals";
import Guitar from "./components/Guitar";
import Bass from "./components/Bass";
import Drums from "./components/Drums";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", backgroundColor: "#000", color: "#fff", height: "100vh" }}>
        {/* Header */}
        <header>
          <h1 style={{ padding: "20px",color:"red" }}>THE CRAZZZY SQUAD</h1>
          {/* Navigation Menu */}
          <nav style={{ marginBottom: "20px" }}>
            <Link to="/vocals" style={linkStyle}>VOCALS</Link>
            <Link to="/guitar" style={linkStyle}>GUITAR</Link>
            <Link to="/bass" style={linkStyle}>BASS</Link>
            <Link to="/drums" style={linkStyle}>DRUMS</Link>
          </nav>
        </header>

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/vocals" element={<Vocals />} />
            <Route path="/guitar" element={<Guitar />} />
            <Route path="/bass" element={<Bass />} />
            <Route path="/drums" element={<Drums />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Link styles
const linkStyle = {
  margin: "0 15px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
};

export default App;
