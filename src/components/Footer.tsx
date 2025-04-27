import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-mystic-dark text-white/70 py-12 border-t border-mystic-gold/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-mystic-gold text-2xl font-semibold tracking-wider block mb-4">
              Дар Судьбы
            </Link>
            <p className="mb-4">
              Потомственная ясновидящая с многолетним опытом. Помощь в решении любых жизненных проблем.
            </p>
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Дар Судьбы. Все права защищены.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-mystic-gold transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-mystic-gold transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-mystic-gold transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-mystic-gold transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Контакты</h3>
            <p className="mb-2">Телефон: +7 (999) 123-45-67</p>
            <p className="mb-2">WhatsApp / Telegram / Viber</p>
            <p className="mb-2">Часы работы: 10:00 - 22:00 (ежедневно)</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-mystic-gold hover:text-mystic-gold/80">
                <span className="sr-only">WhatsApp</span>
                <span className="text-2xl">📱</span>
              </a>
              <a href="#" className="text-mystic-gold hover:text-mystic-gold/80">
                <span className="sr-only">Telegram</span>
                <span className="text-2xl">✈️</span>
              </a>
              <a href="#" className="text-mystic-gold hover:text-mystic-gold/80">
                <span className="sr-only">Viber</span>
                <span className="text-2xl">📞</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-mystic-gold/10 text-center text-white/40 text-sm">
          <p>
            Внимание: Все услуги имеют развлекательный характер и не являются заменой профессиональной медицинской, юридической или психологической помощи.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
