import React, { useState, useEffect, useContext } from "react";
import ReactDom from "react-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import LeftSide from "./Components/LeftSide";
import Center from "./Components/Center";
import RightSide from "./Components/RightSide";
import Footer from "./Components/Footer";
import useWS from "./Hooks/useWS";

import "./assets/main.css";
import "regenerator-runtime/runtime"; // to avoid async ans await error

interface Props {
  message?: string;
  user?: string;
}
const App: React.FC<Props> = (props) => {
  const ws = useWS();

  return (
    <>
      <div className="max-w-screen-xl mx-auto mb-10">
        <Navbar />
      </div>
      <div className="content flex h-auto max-w-screen-xl m-auto">
        <LeftSide />
        <Center />
        <RightSide />
      </div>
      <Footer />
    </>
  );
};

export default App;

ReactDom.render(
  <React.StrictMode>
    <App message="hihi~" user="testetest" />
  </React.StrictMode>,
  document.querySelector("#root")
);
