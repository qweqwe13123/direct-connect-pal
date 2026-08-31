import { useEffect, useState } from "react";
import heroModel from "@/assets/hero-model.jpg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-primary">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroModel}
          alt="Zarifa Collection — персональный стилист"
          className={`w-full h-full object-cover transition-all duration-[2600ms] ease-[cubic-bezier(.16,1,.3,1)] ${
            loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-primary/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 text-center">
        <h1 className="editorial-title text-primary-foreground text-[15vw] md:text-[9.5vw] leading-[0.86] tracking-[0.01em]">
          <span
            className={`block transition-all duration-[1600ms] ease-[cubic-bezier(.16,1,.3,1)] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Zarifa
          </span>
          <span
            className={`block transition-all duration-[1600ms] delay-200 ease-[cubic-bezier(.16,1,.3,1)] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Collection
          </span>
        </h1>
        <p
          className={`mt-7 font-body text-primary-foreground text-base md:text-2xl font-medium tracking-[0.01em] transition-all duration-[1600ms] delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Персональный стилист и шоппинг-сопровождение
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
