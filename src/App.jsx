import { Navbar, Home } from "./components";
import React, {useState, useEffect} from "react";

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div className="min-h-screen">
      <Navbar toggleTheme = {toggleTheme} theme={theme}/>
      <Home/>
    </div>
  )
}