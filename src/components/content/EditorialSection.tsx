import founders from "@/assets/founders.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const EditorialSection = () => {
  return <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 max-w-[630px]">
          <h2 className="text-2xl font-normal text-foreground leading-tight md:text-xl">
            Accessories Defined by Precision and Form
          </h2>
          <p className="text-sm font-light text-foreground leading-relaxed">Bena was established in 1989 with a vision to create luxury accessories that transcend trends. Our founders believed that true luxury lies in the perfect balance of form, function, and craftsmanship — where every detail is considered and every piece tells a story of refined elegance.

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