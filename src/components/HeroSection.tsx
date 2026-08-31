import { useEffect, useState } from "react";
import heroModel from "@/assets/hero-model.jpg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      {/* Full-bleed editorial image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroModel}
          alt="Элегантная исламская мода"
          className={`w-full h-full object-cover transition-transform duration-[2500ms] ease-out ${
            loaded ? "scale-100" : "scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-primary/25" />
      </div>

      {/* Centered title block */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 text-center">
        <h1
          className={`editorial-title text-primary-foreground text-[13vw] md:text-[9vw] leading-[0.88] transition-all duration-[1400ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Zarifa
          <br />
          Collection
        </h1>
        <p
          className={`mt-6 font-body text-primary-foreground text-sm md:text-xl tracking-wide transition-all duration-[1400ms] delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Скромный стиль и персональный шоппинг
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
