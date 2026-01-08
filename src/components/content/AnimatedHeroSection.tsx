import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import chatgptHero1 from "@/assets/ChatGPT Image Jan 8, 2026, 09_35_11 AM.png";

const AnimatedHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <section 
      ref={sectionRef}
      className="w-full relative overflow-hidden mb-16"
      style={{ minHeight: "90vh" }}
    >
      {/* Animated Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-out"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          <img 
            src={chatgptHero1} 
            alt="Luxury Collection" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40"></div>

      {/* Animated Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-[90vh] flex flex-col justify-center items-center text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-tight">
            Essence of
          </h2>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight"
            style={{
              animation: isVisible ? "fadeInUp 1s ease-out 0.2s both" : "none",
            }}
          >
            Refinement
          </h2>
        </div>

        <p
          className={`text-sm md:text-base font-light text-white/90 max-w-2xl mb-8 transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          Where subtlety meets sophistication in every carefully considered detail
        </p>

        <Link
          to="/category/shop"
          className={`group flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <span className="text-sm font-light">Explore Collection</span>
          <ArrowRight 
            size={16} 
            className="transition-transform duration-300 group-hover:translate-x-1" 
          />
        </Link>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
        <div 
          className="w-full h-full border border-white/30 rounded-full animate-pulse"
          style={{
            animation: "float 6s ease-in-out infinite",
          }}
        ></div>
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-15">
        <div 
          className="w-full h-full border border-white/30 rounded-full"
          style={{
            animation: "float 8s ease-in-out infinite reverse",
          }}
        ></div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default AnimatedHeroSection;

