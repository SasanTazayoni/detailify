import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./css/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="landing-page-and-dashboard">
        <Hero />
      </div>
    </>
  );
}

export default App;
