function Features() {
  return (
    <section
      className="p-6 mt-48 mb-8 text-center tracking-[-0.31px]"
      aria-labelledby="features-heading"
    >
      <header className="mb-20">
        <h2
          id="features-heading"
          className="dark-text text-[36px] leading-10 tracking-[0.37px]"
        >
          Built for the detail-oriented
        </h2>
        <p className="dark-grey-text leading-7 text-xl mt-4 max-w-3xl px-8 mx-auto tracking-[-0.45px]">
          Every feature designed with precision and care. Experience the
          difference quality makes.
        </p>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
        <li className="border-2 border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          <div className="w-12 h-12 bg-[#DBEAFE] rounded-[10px] flex items-center justify-center">
            <img
              src="/icons/bolt.png"
              alt="Lightning Fast icon"
              className="w-6 h-6"
            />
          </div>
          <h3 className="dark-text leading-4 mt-6">Lightning Fast</h3>
          <p className="grey-text leading-6 mt-2">
            Optimized performance with sub-100ms response times
          </p>
        </li>

        <li className="border-2 border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          <div className="w-12 h-12 bg-[#F3E8FF] rounded-[10px] flex items-center justify-center">
            <img
              src="/icons/shield.png"
              alt="Secure by Default icon"
              className="w-6 h-6"
            />
          </div>
          <h3 className="dark-text leading-4 mt-6">Secure by Default</h3>
          <p className="grey-text leading-6 mt-2">
            Enterprise-grade security with end-to-end encryption
          </p>
        </li>

        <li className="border-2 border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          <div className="w-12 h-12 bg-[#DCFCE7] rounded-[10px] flex items-center justify-center">
            <img
              src="/icons/charts.png"
              alt="Advanced Analytics icon"
              className="w-6 h-6"
            />
          </div>
          <h3 className="dark-text leading-4 mt-6">Advanced Analytics</h3>
          <p className="grey-text leading-6 mt-2">
            Real-time insights with customizable dashboards
          </p>
        </li>

        <li className="border-2 border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          <div className="w-12 h-12 bg-[#FFEDD4] rounded-[10px] flex items-center justify-center">
            <img
              src="/icons/users.png"
              alt="Team Collaboration icon"
              className="w-6 h-6"
            />
          </div>
          <h3 className="dark-text leading-4 mt-6">Team Collaboration</h3>
          <p className="grey-text leading-6 mt-2">
            Built for teams with real-time collaboration tools
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Features;
