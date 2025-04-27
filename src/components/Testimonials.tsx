import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Наталья К.",
    avatar: "НК",
    location: "Москва",
    text: "Спасибо огромное за помощь! Благодаря вашему привороту мой муж вернулся в семью, и наши отношения стали даже крепче, чем раньше!",
    rating: 5,
  },
  {
    name: "Сергей Д.",
    avatar: "СД",
    location: "Санкт-Петербург",
    text: "Не верил в магию, пока не оказался в безвыходной ситуации. Гадание оказалось удивительно точным, и благодаря вашим советам я смог преодолеть все трудности.",
    rating: 5,
  },
  {
    name: "Елена В.",
    avatar: "ЕВ",
    location: "Екатеринбург",
    text: "Уже второй год обращаюсь за помощью. Каждое предсказание сбывается с точностью до деталей. Никакого шарлатанства, только настоящий дар!",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-mystic-light/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Отзывы клиентов</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Узнайте, что говорят люди, которым я помогла изменить судьбу и обрести счастье.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-mystic-dark/50 border border-mystic-gold/20">
              <CardHeader className="pb-2 flex items-start gap-4">
                <Avatar className="h-12 w-12 border-2 border-mystic-gold/50">
                  <AvatarImage src={`https://source.unsplash.com/random/100x100?face&${index}`} />
                  <AvatarFallback className="bg-mystic-purple text-white">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                  <p className="text-sm text-mystic-gold">{testimonial.location}</p>
                  <div className="mt-1 text-yellow-400">
                    {"★".repeat(testimonial.rating) + "☆".repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-white/60">
            Более 500 положительных отзывов на независимых площадках
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
