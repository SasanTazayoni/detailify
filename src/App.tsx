import Navbar from "./components/Navbar";
import "./css/styles.css";

function App() {
  return (
    <div className="landing-page-and-dashboard">
      <Navbar />
      <section className="p-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div>
          <span>New Release v2.0</span>
          <h1>
            Build with precision and <span>attention to detail</span>
          </h1>
          <p>
            The modern platform for teams who care about quality. Every pixel
            matteres, every interaction counts.
          </p>
          <div>
            <button>
              Start Free Trial <span>Icon</span>
            </button>
            <button>Watch Demo</button>
          </div>
          <div>
            <div>
              <div>circle</div>
              <div>circle</div>
              <div>circle</div>
              <div>circle</div>
            </div>
          </div>
          <div>
            <div>
              <div>Trusted by 10,000+ developers</div>
            </div>
            <div>4.9/5 rating</div>
          </div>
        </div>
        <div>
          <img src="/computerscreens.png" alt="A picture of computer screens" />
        </div>
      </section>
    </div>
  );
}

export default App;
