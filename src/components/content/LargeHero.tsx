import heroImage from "@/assets/hero-image.png";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="w-full aspect-[16/9] mb-3 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Modern jewelry collection" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <h2 className="text-sm font-normal text-foreground mb-1">
          Essence of Refinement
        </h2>
        <p className="text-sm font-light text-foreground">
          Where subtlety meets sophistication in every carefully considered detail
        </p>
      </div>
    </section>
  );
};

export default LargeHero;