import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";
import About from "./components/About";
import Socials from "./components/Socials";
import DarkModeSwitch from "./components/DarkModeSwitch";
import ScrollToTop from "./components/ScrollToTop";
import Navtools from "./components/Navtools";

import useRefSection from "./hooks/useRefSection";

function App() {
  let [darkMode, setDarkMode] = useState(false);
  const refSection = useRefSection();

  return (
    <div
      className={`overflow-x-hidden scroll-smooth ${darkMode ? "dark" : ""}`}>
      <Navbar
        darkModeComponent={
          <DarkModeSwitch
            isDarkMode={darkMode}
            darkModeHandler={() => setDarkMode(!darkMode)}
          />
        }
      />
      <ScrollToTop />
      <Navtools refSection={refSection} />
      <Socials />
      <main className="">
        <Hero />
        <About useRefSection={refSection.about_me} />
        <Project useRefSection={refSection.project} />
        <Skills useRefSection={refSection.tools} />
        <Contact useRefSection={refSection.contact} />
      </main>
      {/* <div className="fixed bottom-0 left-0 z-50 w-full border-t-[1px] border-t-black bg-red-700 p-2 text-center uppercase text-white">
        This site is still under development!
      </div> */}
    </div>
  );
}

export default App;
