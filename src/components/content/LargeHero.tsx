import chatgptHero from "@/assets/ChatGPT Image Jan 8, 2026, 09_35_11 AM.png";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="w-full aspect-[16/9] mb-3 overflow-hidden">
        <img 
          src={chatgptHero} 
          alt="Bena luxury accessories" 
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