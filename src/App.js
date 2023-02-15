import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState } from "react";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";

function App() {
  let [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar
        darkTimesHandler={() => {
          setDarkMode(!darkMode);
        }}
      />
      <main className="">
        <Hero />
        <Project />
        <Skills />
        <Contact />
      </main>
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
