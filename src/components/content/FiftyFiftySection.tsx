import chatgptImage1 from "@/assets/ChatGPT Image Jan 8, 2026, 09_35_13 AM.png";
import chatgptImage2 from "@/assets/ChatGPT Image Jan 8, 2026, 09_41_33 AM.png";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/earrings" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={chatgptImage1} 
                alt="Bena collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Curated Essence
            </h3>
            <p className="text-sm font-light text-foreground">
              Thoughtfully selected designs that speak in quiet confidence
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/bracelets" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={chatgptImage2} 
                alt="Bena accessories" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Fluid Connections
            </h3>
            <p className="text-sm font-light text-foreground">
              Seamless forms that move with effortless grace
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;