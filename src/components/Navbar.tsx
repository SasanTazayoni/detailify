function Navbar() {
  return (
    <nav className="w-full mt-2">
      <div className="navbar-content flex justify-between items-center py-4 px-8">
        <div className="flex items-center gap-2">
          <div className="logo"></div>
          <span className="font-semibold dark-text tracking-[-0.31px]">
            Detailify
          </span>
        </div>
        <div className="flex gap-8 dark-grey-text tracking-[-0.31px]">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">About</a>
          <a href="/">Dashboard</a>
        </div>
        <div className="flex gap-2 font-medium text-sm leading-5">
          <button className="dark-text py-2 px-4 rounded-lg cursor-pointer tracking-[-0.15px]">
            Sign In
          </button>
          <button className="text-white py-2 px-4 rounded-lg register-btn cursor-pointer tracking-[-0.15px]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
