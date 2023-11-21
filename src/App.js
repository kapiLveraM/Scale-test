import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import About from "./components/About";
import SingleGoal from "./components/SingleGoal";
import ScalMobile from "./components/ScalMobile";
import ClientSatisfaction from "./components/ClientSatisfaction";
import Roadmap from "./components/Roadmap";
// import Faqs from "./components/Faqs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import FaqAndContactUs from "./components/FaqAndContactUs";
function App() {
  return (
    <>
      <Hero />
      <Products/>
      <Services/>
      <About/>
      <SingleGoal/>
      <ScalMobile/>
      <ClientSatisfaction/>
    <Roadmap/>
 <FaqAndContactUs/>
   <Footer/>
    </>
  );
}

export default App;
