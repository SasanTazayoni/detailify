function CallToAction() {
  return (
    <section className="p-20">
      <div className="bg-linear-to-r from-[#155DFC] to-[#9810FA] pt-12 pb-6 rounded-[14px]">
        <h2 className="text-center text-white font-normal text-[36px] leading-10 tracking-[0.37px] mb-6">
          Ready to get started?
        </h2>

        <p className="text-center blue-text mb-6 text-xl leading-7 tracking-[-0.45px]">
          Join thousands of teams building with precision and attention to
          detail
        </p>

        <div className="flex justify-center items-end gap-4 h-14">
          <button className="cursor-pointer bg-white text-[#155DFC] font-medium py-2 px-5 rounded-lg flex items-center gap-2">
            Start Free Trial
            <i className="fa-solid fa-arrow-right"></i>
          </button>

          <button className="cursor-pointer bg-transparent border border-white text-white font-medium py-2 px-5 rounded-lg">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
