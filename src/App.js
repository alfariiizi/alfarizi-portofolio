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
      <div className="fixed bottom-0 left-0 z-50 w-full border-t-[1px] border-t-black bg-red-700 p-2 text-center uppercase text-white">
        This web is still under development!
      </div>
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
