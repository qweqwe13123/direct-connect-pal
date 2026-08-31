import stylistPhoto from "@/assets/stylist-photo.jpg";
import look1 from "@/assets/istanbul/p2-guzel.jpg";
import look2 from "@/assets/istanbul/bottom.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-background overflow-hidden py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* floating polaroids */}
        <div className="relative">
          <img
            src={stylistPhoto}
            alt="Стилист"
            loading="lazy"
            className="reveal hidden md:block absolute -top-6 left-[18%] w-[130px] h-[150px] object-cover rotate-[-9deg] shadow-[0_20px_50px_-28px_rgba(0,0,0,.6)]"
          />
          <img
            src={look1}
            alt="Образ"
            loading="lazy"
            className="reveal hidden md:block absolute top-[210px] right-[2%] w-[240px] h-[160px] object-cover rotate-[6deg] shadow-[0_20px_50px_-28px_rgba(0,0,0,.6)]"
            style={{ transitionDelay: "180ms" }}
          />
          <img
            src={look2}
            alt="Образ"
            loading="lazy"
            className="reveal hidden md:block absolute top-[330px] left-0 w-[210px] h-[260px] object-cover rotate-[-4deg] shadow-[0_20px_50px_-28px_rgba(0,0,0,.6)]"
            style={{ transitionDelay: "260ms" }}
          />

          <p className="reveal font-body text-[13px] tracking-[0.06em] uppercase text-foreground/80 md:absolute md:top-[110px] md:left-0 md:max-w-[190px] leading-relaxed">
            Ищу индивидуальность,
            <br />
            не навязываю тренды
          </p>

          <div className="md:pt-24 md:pl-[26%]">
            <h2 className="reveal editorial-title text-foreground text-[11vw] md:text-[5.6vw] leading-[0.95]">
              <span className="block">Помогу</span>
              <span className="block md:-ml-[8%]">тебе стать стильной</span>
            </h2>
            <span className="reveal font-script block text-5xl md:text-7xl text-foreground -rotate-3 mt-1 md:ml-[12%]">
              с легкостью
            </span>
          </div>
        </div>

        <div className="mt-16 md:mt-28 md:pl-[35%] max-w-2xl space-y-6 font-body text-[15px] leading-[1.75] text-foreground/85">
          <p className="reveal">
            Твой гардероб забит вещами, но каждое утро нечего надеть? Ты выходишь из
            магазинов с огромными пакетами, но половина купленного просто пылится
            где-то далеко в шкафу? Ты не понимаешь, как у других девушек получается
            собрать образ из нескольких простых вещей, и тоже мечтаешь этому научиться?
          </p>
          <p className="reveal font-semibold text-foreground">
            Прекрати тратить свою жизнь на страдания в магазинах при выборе образа.
            Я всё сделаю за тебя, а ты просто наслаждайся.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
