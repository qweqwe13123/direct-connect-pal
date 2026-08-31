const facts = [
  "Персональный подбор гардероба для покрытых женщин",
  "Шоппинг-сопровождение в Стамбуле и онлайн",
  "Капсулы, которые собираются между собой без ошибок",
  "Разбор гардероба и работа над ошибками покупок",
  "Подбор образов под ваш бюджет и образ жизни",
  "Консультации и поддержка после работы",
];

const CollabSection = () => {
  return (
    <section className="bg-background pb-24 md:pb-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <h2 className="reveal editorial-title text-foreground text-[8vw] md:text-[2.6vw] leading-[1.15]">
          Сотрудничаю
          <br />
          с брендами, сми
          <br />
          и стилистами
          <br />
          по всему миру
        </h2>

        <ul className="md:pt-2">
          {facts.map((fact, i) => (
            <li
              key={fact}
              className="reveal hairline py-6 font-body text-[15px] md:text-base text-foreground/85 first:border-t first:border-foreground/[0.14] transition-colors duration-500 hover:text-foreground"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CollabSection;
