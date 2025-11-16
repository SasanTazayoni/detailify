function Pricing() {
  return (
    <section className="py-20 text-center" aria-labelledby="pricing-heading">
      <header className="mb-16">
        <h2
          id="pricing-heading"
          className="dark-text text-[36px] leading-10 tracking-[0.37px]"
        >
          Simple, transparent pricing
        </h2>
        <p className="dark-grey-text text-xl mt-3 leading-7 tracking-[-0.45px]">
          Choose the plan that's right for your team
        </p>
      </header>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="border border-[rgba(0,0,0,0.1)] rounded-2xl p-6 text-left w-[320px] h-[448px]">
          <header>
            <h3 className="dark-text font-medium tracking-[-0.31px] leading-4 mb-4">
              Starter
            </h3>
            <p className="dark-text mt-1 text-[36px] leading-10 tracking-[0.37px] mb-4">
              $29
              <span className="dark-grey-text tracking-[-0.31px] text-base">
                /month
              </span>
            </p>
            <p className="tracking-[-0.31px] grey-text leading-6 mb-4">
              Perfect for small teams
            </p>
          </header>
          <div>
            <button className="dark-text text-sm font-medium p-2 mb-5 tracking-[-0.15px] rounded-lg border border-[rgba(0,0,0,0.1)] w-full cursor-pointer">
              Get Started
            </button>
            <ul className="dark-text tracking-[-0.31px] leading-6 space-y-3">
              <li>Up to 5 team members</li>
              <li>10GB storage</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
          </div>
        </div>

        <div className="popular-card border-2 border-[#155DFC] scale-[1.05] rounded-2xl p-6 text-left w-[320px] h-[448px]">
          <header>
            <span className="badge text-white font-medium px-2 py-0.5 text-xs leading-4 inline-flex items-center justify-center w-[100px] h-[23px] text-center mb-4">
              Most Popular
            </span>
            <h3 className="dark-text tracking-[-0.31px] leading-4 mb-4">
              Professional
            </h3>
            <p className="dark-text mt-1 text-[36px] leading-10 tracking-[0.37px] mb-4">
              $79
              <span className="dark-grey-text tracking-[-0.31px] text-base">
                /month
              </span>
            </p>
            <p className="tracking-[-0.31px] grey-text leading-6 mb-4">
              For growing businesses
            </p>
          </header>
          <div>
            <button className="text-white text-sm font-medium p-2 mb-5 tracking-[-0.15px] rounded-lg border border-[rgba(0,0,0,0.1)] w-full cursor-pointer">
              Get Started
            </button>
            <ul className="dark-text tracking-[-0.31px] leading-6 space-y-3">
              <li>Up to 20 team members</li>
              <li>100GB storage</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>Custom integrations</li>
            </ul>
          </div>
        </div>

        <div className="border border-[rgba(0,0,0,0.1)] rounded-2xl p-6 text-left w-[320px] h-[448px]">
          <header>
            <h3 className="dark-text font-medium tracking-[-0.31px] leading-4 mb-4">
              Enterprise
            </h3>
            <p className="dark-text mt-1 text-[36px] leading-10 tracking-[0.37px] mb-4">
              Custom
            </p>
            <p className="tracking-[-0.31px] grey-text leading-6 mb-4">
              For large organizations
            </p>
          </header>
          <div>
            <button className="dark-text text-sm font-medium p-2 mb-5 tracking-[-0.15px] rounded-lg border border-[rgba(0,0,0,0.1)] w-full cursor-pointer">
              Contact Sales
            </button>
            <ul className="dark-text tracking-[-0.31px] leading-6 space-y-3">
              <li>Unlimited team members</li>
              <li>Unlimited storage</li>
              <li>Enterprise analytics</li>
              <li>24/7 dedicated support</li>
              <li>Custom SLA</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
