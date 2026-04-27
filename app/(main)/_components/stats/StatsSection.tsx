"use client";

const StatsSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description: "A 60-min call to map your goals, constraints, and the highest-impact use cases.",
    },
    {
      number: "02",
      title: "Design",
      description: "We architect a focused 30-day plan with clear deliverables and success metrics.",
    },
    {
      number: "03",
      title: "Deploy",
      description: "Working AI in production. Documented, observable, owned by your team.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 items-start">
          
          {/* Left Side: Header */}
          <div className="lg:w-5/12 sticky top-24" data-aos="fade-right">
            <div className="flex flex-col gap-4 max-w-md">
              <span className="text-[#2F8BDD] text-[12px] md:text-[14px] font-bold uppercase tracking-widest">
                PROCESS
              </span>
              <h2 className="text-[#05183D] text-[36px] md:text-[44px] font-bold leading-tight">
                Three steps. Thirty <span className="text-[#2F8BDD]">days.</span>
              </h2>
              <p className="text-[#64748B] text-[16px] md:text-[18px] font-medium leading-relaxed mt-2">
                We compressed the typical AI adoption cycle without cutting corners.
              </p>
            </div>
          </div>

          {/* Right Side: Steps */}
          <div className="lg:w-7/12 flex flex-col gap-4 w-full">
            {processSteps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 100}
                className="bg-white rounded-[16px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 p-8 flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Number */}
                <div className="text-[#2F8BDD] text-[24px] md:text-[28px] font-bold flex-shrink-0 leading-none">
                  {step.number}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-[#05183D] text-[18px] font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#64748B] text-[14px] md:text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
