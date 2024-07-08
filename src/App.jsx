import { Navbar} from "./components";
import {Home} from "./pages";
import React, { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />  
      <Home />
    </div>
  )
}