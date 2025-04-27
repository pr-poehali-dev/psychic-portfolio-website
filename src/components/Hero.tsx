import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10 z-0" 
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1507181080368-cc2195abcde1?q=80&w=2940&auto=format&fit=crop')",
                  backgroundSize: "cover", 
                  backgroundPosition: "center",
                  filter: "brightness(0.3)"}}>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Раскройте тайны <span className="text-mystic-gold">своей судьбы</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-xl">
              Потомственная ясновидящая с даром предвидения и многолетним опытом поможет решить любые жизненные проблемы, вернуть любимого человека и открыть завесу будущего.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-mystic-gold hover:bg-mystic-gold/80 text-mystic-dark text-lg py-6">
                Записаться на консультацию
              </Button>
              <Button variant="outline" className="border-mystic-gold text-mystic-gold hover:bg-mystic-gold/10 text-lg py-6">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full crystal-ball animate-float 
                           border-4 border-mystic-gold/20 
                           flex items-center justify-center">
              <span className="text-8xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
