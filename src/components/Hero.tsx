function Hero() {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
      <div>
        <span className="badge inline-block text-white font-medium px-2 py-1 text-xs leading-4">
          New Release v2.0
        </span>
        <h1 className="text-[60px] leading-[60px] dark-text mt-1 mb-12">
          Build with precision and{" "}
          <span className="text-[48px] font-bold bg-linear-to-br from-[#155dfc] to-[#9810fa] bg-clip-text text-transparent">
            attention to detail
          </span>
        </h1>
        <p className="text-[20px] leading-7 dark-grey-text">
          The modern platform for teams who care about quality. Every pixel
          matteres, every interaction counts.
        </p>
        <div className="flex gap-4 mt-6 font-medium text-sm leading-5">
          <button className="h-10 rounded-lg px-4 flex items-center gap-4 free-trial-btn text-white cursor-pointer">
            Start Free Trial
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button className="h-10 rounded-lg watch-demo-btn px-6 cursor-pointer dark-text">
            Watch Demo
          </button>
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
  );
}

export default Hero;
