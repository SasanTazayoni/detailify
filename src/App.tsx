import CallToAction from "./components/CallToAction";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import "./css/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="landing-page-and-dashboard">
        <Hero />
        <Features />
        <Pricing />
        <CallToAction />
      </div>
    </>
  );
}

export default App;
