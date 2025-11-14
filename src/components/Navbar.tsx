function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-brand">
          <div className="nav-logo"></div>
          Detailify
        </div>
        <div>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">About</a>
          <a href="/">Dashboard</a>
        </div>
        <div>
          <button>Sign In</button>
          <button>Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
