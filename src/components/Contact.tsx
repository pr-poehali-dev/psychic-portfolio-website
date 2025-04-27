import { Button } from "@/components/ui/button";
import { Phone, Send, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-mystic">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Связаться со мной</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Готова помочь в решении любых жизненных проблем. Выберите удобный способ связи.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-mystic-dark/70 p-8 rounded-xl border border-mystic-gold/20">
            <h3 className="text-2xl font-semibold mb-6 text-mystic-gold">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-mystic-gold/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-mystic-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Телефон для связи</p>
                  <p className="text-white text-lg">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-mystic-gold/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-mystic-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Мессенджеры</p>
                  <p className="text-white text-lg">WhatsApp, Telegram, Viber</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-mystic-gold/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-mystic-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Часы работы</p>
                  <p className="text-white text-lg">Ежедневно с 10:00 до 22:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-white/80 italic">
                "Ваша судьба в ваших руках, я лишь помогу вам найти правильный путь."
              </p>
            </div>
          </div>
          
          <div className="bg-mystic-dark/70 p-8 rounded-xl border border-mystic-gold/20">
            <h3 className="text-2xl font-semibold mb-6 text-mystic-gold">Отправить сообщение</h3>
            
            <form className="space-y-4">
              <div>
                <label className="text-white/80 block mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  className="w-full bg-mystic/30 border border-mystic-gold/30 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-mystic-gold/50"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label className="text-white/80 block mb-2">Номер телефона</label>
                <input 
                  type="tel" 
                  className="w-full bg-mystic/30 border border-mystic-gold/30 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-mystic-gold/50"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              
              <div>
                <label className="text-white/80 block mb-2">Ваш вопрос</label>
                <textarea 
                  className="w-full bg-mystic/30 border border-mystic-gold/30 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-mystic-gold/50 min-h-[120px]"
                  placeholder="Опишите вашу ситуацию..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-mystic-gold hover:bg-mystic-gold/80 text-mystic-dark py-6 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Отправить сообщение
              </Button>
              
              <p className="text-white/60 text-sm text-center">
                Конфиденциальность гарантирована. Ваши данные не будут переданы третьим лицам.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
