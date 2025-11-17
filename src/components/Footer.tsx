function Footer() {
  return (
    <footer className="mt-[100px] bg-[#101828] text-sm leading-5 tracking-[-0.15px] text-white">
      <div className="navbar-content px-8 pt-24 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="flex items-center gap-2 mb-4 font-semibold text-base tracking-[-0.31px]">
              <div className="logo"></div>
              Detailify
            </h3>
            <p className="space-y-1 footer-text leading-5 tracking-[-0.15px]">
              Building the future of precise, detail-oriented development.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-normal text-base text-white leading-6 tracking-[-0.31px]">
              Product
            </h3>
            <ul className="space-y-2 footer-text leading-5 tracking-[-0.15px]">
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Changelog</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-normal text-base text-white leading-6 tracking-[-0.31px]">
              Company
            </h3>
            <ul className="space-y-2 footer-text leading-5 tracking-[-0.15px]">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-normal text-base text-white leading-6 tracking-[-0.31px]">
              Legal
            </h3>
            <ul className="space-y-2 footer-text leading-5 tracking-[-0.15px]">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>

        <p className="footer-text text-center">
          © 2025 Detailify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
