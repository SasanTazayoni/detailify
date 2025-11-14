function Navbar() {
  return (
    <nav className="px-8 mt-2">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <div className="nav-logo"></div>
          <span className="font-semibold dark-text">Detailify</span>
        </div>
        <div className="flex gap-8 dark-grey-text">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">About</a>
          <a href="/">Dashboard</a>
        </div>
        <div className="flex gap-2 font-medium text-sm leading-5">
          <button className="dark-text py-2 px-4 rounded-lg cursor-pointer">
            Sign In
          </button>
          <button className="text-white py-2 px-4 rounded-lg register-btn cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
