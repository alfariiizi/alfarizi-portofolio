import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="">
        <Hero />
        <div className="bg-[#0b2149] p-4 text-slate-200">Skills</div>
      </main>
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
