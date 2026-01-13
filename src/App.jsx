import { useEffect, useState } from "react";

import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css"; 暫時不引入
import "./assets/all.scss";
import Header from "./components/Header";
import Index from "./pages/Index";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* 其他內容... */}
      <Index />
      <Footer />
    </div>
  );
}

export default App;
