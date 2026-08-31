const stats = [
  { value: "1 000+", label: "Оффлайн клиентов", rotate: "-6deg", dark: false, offset: "md:mt-16" },
  { value: "8 лет", label: "Практики", rotate: "5deg", dark: true, offset: "md:-mt-4" },
  { value: "60 000+", label: "Онлайн клиентов", rotate: "-3deg", dark: false, offset: "md:mt-24" },
  { value: "250 000+", label: "Подписчиков", rotate: "7deg", dark: false, offset: "md:mt-2" },
];

const StatsSection = () => {
  return (
    <section className="bg-background py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-start">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`reveal ${stat.offset}`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div
              className={`polaroid ${stat.dark ? "polaroid-dark" : ""} transition-transform duration-700 hover:rotate-0`}
              style={{ transform: `rotate(${stat.rotate})` }}
            >
              <div
                className={`aspect-[4/5] flex items-center justify-center ${
                  stat.dark ? "bg-[#e8e4dc]" : "bg-[#f6f4ef]"
                }`}
              >
                <span className="editorial-title text-[#111] text-[7vw] md:text-[2.6vw] leading-none">
                  {stat.value}
                </span>
              </div>
              <p
                className={`mt-4 text-center font-body text-sm md:text-base ${
                  stat.dark ? "text-white" : "text-[#111]"
                }`}
              >
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
