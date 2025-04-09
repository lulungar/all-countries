import { HashRouter as Router } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <>
      <Router>
        <Navbar setDarkMode={setDarkMode} />
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
