// p,ul,h1-h6 預設margin要清掉

import { useEffect, useState } from "react";

import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css"; 暫時不引入
import "./assets/all.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./pages/Index";

function App() {
  return (
    <div>
      <Header />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
