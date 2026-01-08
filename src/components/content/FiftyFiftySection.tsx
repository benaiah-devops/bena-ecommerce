import earringsCollection from "@/assets/earrings-collection.png";
import linkBracelet from "@/assets/link-bracelet.png";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/earrings" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={earringsCollection} 
                alt="Earrings collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Refined Collections
            </h3>
            <p className="text-sm font-light text-foreground">
              Curated pieces with sophisticated, architectural details
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/bracelets" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={linkBracelet} 
                alt="Chain link bracelet" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Signature Links
            </h3>
            <p className="text-sm font-light text-foreground">
              Elegant connections in premium materials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;