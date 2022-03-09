import React from "react";
import Images from "./components/Images";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow md:flex-row flex-col w-screen md:h-full md:py-20 justify-evenly ">
        <Images />
        <Info />
      </div>
    </div>
  );
}

export default App;
