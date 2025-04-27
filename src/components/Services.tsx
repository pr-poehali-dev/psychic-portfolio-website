import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "🔮",
    title: "Гадание на Таро",
    description: "Раскрытие тайн прошлого, настоящего и будущего через древние карты Таро. Точные и подробные предсказания.",
  },
  {
    icon: "❤️",
    title: "Приворот любимого",
    description: "Возвращение любимого человека, восстановление отношений и устранение преград в любви.",
  },
  {
    icon: "⚡",
    title: "Отворот от соперницы",
    description: "Устранение соперниц, избавление от негативного влияния и восстановление гармонии в отношениях.",
  },
  {
    icon: "👁️",
    title: "Ясновидение",
    description: "Прямой контакт с энергетическим полем человека, предсказание важных событий и судьбоносных встреч.",
  },
  {
    icon: "🔗",
    title: "Снятие порчи",
    description: "Очищение ауры от негативных воздействий, снятие сглаза, порчи и проклятий любой сложности.",
  },
  {
    icon: "✨",
    title: "Энергетическая защита",
    description: "Создание мощного оберега, который защитит от негативных влияний и злых намерений окружающих.",
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-mystic-dark to-mystic">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Мои услуги</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Я предлагаю широкий спектр магических и эзотерических услуг, которые помогут вам найти путь к счастью, любви и благополучию.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card bg-mystic-dark/50 border border-mystic-gold/20 overflow-hidden">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle className="text-xl text-mystic-gold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
