import React, { useState, useEffect } from "react";
import { Navbar} from "./components";
import {About, Contact, Home, Service, Skills} from "./pages";

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
      <About/>
      <Service/>
      <Skills/>
      <Contact/>
    </div>
  )
}