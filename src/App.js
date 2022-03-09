import React from "react";
import Images from "./components/Images";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow w-screen h-full py-20 justify-evenly ">
        <Images />
        <Info />
      </div>
    </div>
  );
}

export default App;
