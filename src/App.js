import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Kundenrezensionen from "./components/Kundenrezensionen";
import Karriere from "./components/Karriere";
import BackToTop from "./components/BackToTop";
import PreLoader from "./components/Preloader";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("fix-screen");
      // document.body.classList.add("overflow_x_hidden");
    }, 2400);
  }, []);
  AOS.init({
    once: true,
    // disable: "mobile",
  });
  return (
    <>
      {loading && <PreLoader />}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Kundenrezensionen" element={<Kundenrezensionen />} />
          <Route path="/Karriere" element={<Karriere />} />
        </Routes>
        <BackToTop />
      </div>
    </>
  );
}

export default App;
