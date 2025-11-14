function Navbar() {
  return (
    <nav className="px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="nav-logo"></div>
          Detailify
        </div>
        <div className="flex gap-8">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">About</a>
          <a href="/">Dashboard</a>
        </div>
        <div className="flex gap-3">
          <button>Sign In</button>
          <button>Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
