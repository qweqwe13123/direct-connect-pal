const facts = [
  "Персональный подбор гардероба для покрытых женщин",
  "Шоппинг-сопровождение в Стамбуле и онлайн",
  "Капсулы, которые собираются между собой без ошибок",
  "Разбор гардероба и работа над ошибками покупок",
  "Подбор образов под ваш бюджет и образ жизни",
  "Консультации и поддержка после работы",
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <h2 className="editorial-title text-foreground text-[9vw] md:text-[3.2vw]">
            Ищу индивидуальность,
            <br />
            не навязываю
            <br />
            тренды
          </h2>
          <p className="font-script text-4xl md:text-5xl text-terra mt-8">
            с любовью к деталям
          </p>
        </div>

        <ul>
          {facts.map((fact) => (
            <li
              key={fact}
              className="hairline py-6 font-body text-sm md:text-base text-foreground/80 first:border-t first:border-foreground/[0.14]"
            >
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
