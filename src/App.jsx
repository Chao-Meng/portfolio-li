import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";import './App.css'

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    if(theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const setDark = (nextBool) => {setTheme(nextBool ? 'dark' : 'light')};


  return (
    <>
     <BrowserRouter>
      <main className="min-h-screen mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10
                       bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
      <Navbar dark={theme ==="dark"} setDark={setDark} />
      </main>
  </BrowserRouter>
    </>
  )
}

export default App
