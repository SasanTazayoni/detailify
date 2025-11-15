function Features() {
  return (
    <section className="p-6 mt-36 text-center">
      <h2 className="dark-text text-[36px] leading-10">
        Built for the detail-oriented
      </h2>
      <p className="dark-grey-text leading-7 text-xl mt-4 max-w-3xl px-8 mx-auto">
        Every feature designed with precision and care. Experience the
        difference quality makes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <div className="border-2 border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          Card 1
        </div>
        <div className="border-2 border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          Card 2
        </div>
        <div className="border-2 border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          Card 3
        </div>
        <div className="border-2 border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
          Card 4
        </div>
      </div>
    </section>
  );
}

export default Features;
