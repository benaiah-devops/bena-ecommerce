import founders from "@/assets/founders.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const EditorialSection = () => {
  return <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 max-w-[630px]">
          <h2 className="text-2xl font-normal text-foreground leading-tight md:text-xl">
            Where Silence Speaks Louder Than Decoration
          </h2>
          <p className="text-sm font-light text-foreground leading-relaxed">Since 1989, Bena has quietly redefined what luxury means. We create accessories that don't demand attention but earn it through their quiet presence. In a world of excess, we choose restraint. In an era of loud statements, we prefer whispers. Each piece is an exercise in subtraction — removing everything unnecessary until only essential beauty remains.

        </p>
          <Link to="/about/our-story" className="inline-flex items-center gap-1 text-sm font-light text-foreground hover:text-foreground/80 transition-colors duration-200">
            <span>Read our full story</span>
            <ArrowRight size={12} />
          </Link>
        </div>
        
        <div className="order-first md:order-last">
          <div className="w-full aspect-square overflow-hidden">
            <img src={founders} alt="Bena founders" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default EditorialSection;