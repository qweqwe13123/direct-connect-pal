const MarqueeSection = () => {
  return (
    <section className="bg-background py-24 md:py-40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="editorial-title text-foreground text-[14vw] md:text-[7.5vw] leading-[0.9]">
          <span className="reveal block md:pl-[18%]">услуги</span>
          <span className="reveal block md:pl-[30%]" style={{ transitionDelay: "150ms" }}>
            и продукты
          </span>
        </h2>
      </div>
    </section>
  );
};

export default MarqueeSection;
