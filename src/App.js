import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import About from "./components/About";
import SingleGoal from "./components/SingleGoal";
import ScalMobile from "./components/ScalMobile";
import ClientSatisfaction from "./components/ClientSatisfaction";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import FaqAndContactUs from "./components/FaqAndContactUs";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
import PreLoader from "./components/Preloader";

function App() {
   const [loading, setLoading] = useState(true);
   useEffect(() => {
     setTimeout(() => {
       setLoading(false);
       document.body.classList.remove("fix-screen");
     }, 2400);
   }, []);
  return (
    <>
    {loading && <PreLoader/>}
      <div>
        <Hero />
        <Products />
        <Services />
        <About />
        <SingleGoal />
        <ScalMobile />
        <ClientSatisfaction />
        <Roadmap />
        <FaqAndContactUs />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
