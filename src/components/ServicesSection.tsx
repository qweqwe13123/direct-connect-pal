import { useNavigate } from "react-router-dom";
import serviceIstanbul from "@/assets/service-istanbul.jpg";
import serviceCapsule from "@/assets/wardrobe-capsule-looks.png";
import styleLook1 from "@/assets/style-look-1.jpg";
import styleLook2 from "@/assets/style-look-2.jpg";

type Service = {
  caption?: string;
  title: string;
  script?: string;
  description: string;
  image: string;
  link: string;
  tall?: boolean;
};

const services: Service[] = [
  {
    caption: "Сообщество про стиль Zarifa Collection",
    title: "Шоппинг–тур",
    script: "для тебя",
    description:
      "Полноценный гардероб за несколько дней в Стамбуле: персональный шоппинг-лист, сопровождение и фотолокации.",
    image: serviceIstanbul,
    link: "/istanbul",
  },
  {
    title: "Капсулы по стилю",
    description:
      "Готовая капсула для покрытой женщины: сочетаемые вещи под ваш образ жизни, бюджет и особенности внешности.",
    image: serviceCapsule,
    link: "/wardrobe-pick",
  },
  {
    caption: "Онлайн",
    title: "Персональная работа",
    description:
      "Разбираем ваши образы, покупки, исправляем ошибки или полностью пересобираем гардероб.",
    image: styleLook1,
    link: "/stylist",
  },
  {
    title: "Гардероб и образы",
    description:
      "Подбор образов под ваш бюджет и ритм жизни, поддержка и разбор после работы.",
    image: styleLook2,
    link: "/wardrobe",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service, i) => (
          <button
            key={service.title}
            onClick={() => navigate(service.link)}
            className="reveal group relative block h-[78vh] min-h-[520px] overflow-hidden text-left"
            style={{ transitionDelay: `${(i % 2) * 140}ms` }}
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]"
            />
            <div className="absolute inset-0 bg-primary/30 transition-colors duration-700 group-hover:bg-primary/40" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 px-8 py-14 text-center text-primary-foreground">
              {service.caption && (
                <span className="font-body text-[13px] md:text-sm tracking-[0.02em] text-primary-foreground/90">
                  {service.caption}
                </span>
              )}

              <div>
                <h3 className="editorial-title text-[10vw] md:text-[3.4vw] leading-[0.95]">
                  {service.title}
                </h3>
                {service.script && (
                  <span className="font-script block mt-2 text-5xl md:text-6xl -rotate-6">
                    {service.script}
                  </span>
                )}
              </div>

              <p className="font-body max-w-md text-sm md:text-[15px] leading-relaxed text-primary-foreground/95">
                {service.description}
              </p>

              <span className="btn-outline-light font-body uppercase tracking-[0.12em] text-[11px]">
                Подробнее
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
