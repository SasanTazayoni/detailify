function Pricing() {
  return (
    <section className="py-20 text-center" aria-labelledby="pricing-heading">
      <header className="mb-12">
        <h2 id="pricing-heading" className="dark-text text-[36px] leading-10">
          Simple, transparent pricing
        </h2>
        <p className="dark-grey-text text-xl mt-3">
          Choose the plan that's right for your team
        </p>
      </header>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="border border-[rgba(0,0,0,0.1)] rounded-2xl p-8 text-left w-[320px] h-[448px]">
          <header>
            <h3 className="dark-text text-xl font-semibold">Starter</h3>
            <p className="dark-grey-text mt-1">$29/month</p>
            <p>Perfect for small teams</p>
          </header>
          <div>
            <button>Get Started</button>
            <ul>
              <li>Up to 5 team members</li>
              <li>10GB storage</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
          </div>
        </div>

        <div className="border border-[rgba(0,0,0,0.1)] rounded-2xl p-8 text-left w-[320px] h-[448px]">
          <header>
            <span className="badge inline-block text-white font-medium px-2 py-1 text-xs leading-4">
              Most Popular
            </span>
            <h3 className="dark-text text-xl font-semibold">Professional</h3>
            <p className="dark-grey-text mt-1">$79/month</p>
            <p>For growing businesses</p>
          </header>
          <div>
            <button>Get Started</button>
            <ul>
              <li>Up to 20 team members</li>
              <li>100GB storage</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>Custom integrations</li>
            </ul>
          </div>
        </div>

        <div className="border border-[rgba(0,0,0,0.1)] rounded-2xl p-8 text-left w-[320px] h-[448px]">
          <header>
            <h3 className="dark-text text-xl font-semibold">Enterprise</h3>
            <p className="dark-grey-text mt-1">Custom</p>
            <p>For large organizations</p>
          </header>
          <div>
            <button>Contact Sales</button>
            <ul>
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
