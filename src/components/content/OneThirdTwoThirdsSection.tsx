import chatgptImage3 from "@/assets/ChatGPT Image Jan 8, 2026, 09_43_19 AM.png";
import chatgptImage4 from "@/assets/ChatGPT Image Jan 8, 2026, 09_35_11 AM.png";
import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to="/category/rings" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src={chatgptImage3} 
                alt="Bena artisan crafted" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Artisan Legacy
            </h3>
            <p className="text-sm font-light text-foreground">
              Each creation bears the mark of dedicated hands and discerning eyes
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Link to="/category/necklaces" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src={chatgptImage4} 
                alt="Bena collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Pure Contours
            </h3>
            <p className="text-sm font-light text-foreground">
              Clean lines that define space with intentional restraint
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;