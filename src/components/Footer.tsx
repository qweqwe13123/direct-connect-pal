import { useNavigate } from "react-router-dom";
import { Instagram, Mail, Send } from "lucide-react";

const links = [
  { label: "Шоппинг-тур в Стамбул", to: "/istanbul" },
  { label: "Подбор гардероба", to: "/wardrobe-pick" },
  { label: "Капсульный гардероб", to: "/wardrobe-capsule" },
  { label: "Персональная работа", to: "/stylist" },
  { label: "О нас", to: "/about" },
  { label: "Контакты", to: "/contacts" },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-primary-foreground font-body">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 md:py-28 text-center">
        <div className="reveal flex items-center justify-center gap-4">
          <a
            href="https://t.me/senorita_chilli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-[104px] h-[92px] border border-primary-foreground/25 flex items-center justify-center transition-colors duration-500 hover:bg-primary-foreground hover:text-primary"
          >
            <Send size={26} />
          </a>
          <a
            href="https://www.instagram.com/senorita.chili_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-[104px] h-[92px] border border-primary-foreground/25 flex items-center justify-center transition-colors duration-500 hover:bg-primary-foreground hover:text-primary"
          >
            <Instagram size={26} />
          </a>
          <a
            href="mailto:mega.zafira@mail.ru"
            aria-label="Email"
            className="w-[104px] h-[92px] border border-primary-foreground/25 flex items-center justify-center font-body text-[11px] uppercase tracking-[0.12em] leading-tight px-3 transition-colors duration-500 hover:bg-primary-foreground hover:text-primary"
          >
            Написать
            <Mail size={0} />
          </a>
        </div>

        <p className="reveal mt-10 text-sm text-primary-foreground/60">
          {"\n"}
        </p>

        <nav className="reveal mt-10 flex flex-col gap-5">
          {links.map((link) => (
            <button
              key={link.to}
              onClick={() => navigate(link.to)}
              className="nav-link mx-auto text-[15px] text-primary-foreground/85 hover:text-primary-foreground transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="reveal mt-14 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-primary-foreground/60">
          <button onClick={() => navigate("/contacts")} className="nav-link">
            Публичная оферта на оказание услуг
          </button>
          <button onClick={() => navigate("/contacts")} className="nav-link">
            Политика конфиденциальности
          </button>
          <button onClick={() => navigate("/contacts")} className="nav-link">
            Согласие на обработку персональных данных
          </button>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] uppercase tracking-[0.08em] text-primary-foreground/55">
          <p>Zarifa Collection · Email: mega.zafira@mail.ru</p>
          <p>© {new Date().getFullYear()} Все права защищены. Материалы запрещено копировать</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
