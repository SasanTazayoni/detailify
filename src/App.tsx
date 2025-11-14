import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./css/styles.css";

function App() {
  return (
    <>
      <div className="landing-page-and-dashboard">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
