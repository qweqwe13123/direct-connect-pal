import { useNavigate } from "react-router-dom";
import serviceHijab from "@/assets/wardrobe-capsule-looks.png";
import serviceIstanbul from "@/assets/service-istanbul.jpg";

const services = [
  {
    title: "Шоппинг-тур в Стамбул",
    script: "для тебя",
    description:
      "Полноценный гардероб за несколько дней в Стамбуле: персональный шоппинг-лист, сопровождение и фотолокации.",
    image: serviceIstanbul,
    link: "/istanbul",
  },
  {
    title: "Подбор гардероба",
    script: "капсулы",
    description:
      "Готовая капсула для покрытой женщины: сочетаемые вещи под ваш образ жизни, бюджет и особенности внешности.",
    image: serviceHijab,
    link: "/wardrobe-pick",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service) => (
          <button
            key={service.title}
            onClick={() => navigate(service.link)}
            className="group relative block h-[70vh] min-h-[480px] overflow-hidden text-left"
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/35 transition-colors duration-700 group-hover:bg-primary/45" />

            <div className="relative z-10 h-full flex flex-col items-center justify-between py-12 px-6 text-center text-primary-foreground">
              <div>
                <h3 className="editorial-title text-[9vw] md:text-[3.4vw] leading-none">
                  {service.title.split(" ")[0]}
                </h3>
                <span className="font-script text-4xl md:text-5xl block mt-2">
                  {service.script}
                </span>
              </div>

              <div className="max-w-sm space-y-6">
                <p className="font-body text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block border border-primary-foreground/70 px-8 py-3 font-body text-[11px] tracking-[0.25em] uppercase transition-colors duration-500 group-hover:bg-primary-foreground group-hover:text-primary">
                  Подробнее
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
