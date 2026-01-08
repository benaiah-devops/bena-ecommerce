import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import chatgptHero1 from "@/assets/ChatGPT Image Jan 8, 2026, 09_35_11 AM.png";
import chatgptHero2 from "@/assets/ChatGPT Image Jan 8, 2026, 09_35_13 AM.png";
import chatgptHero3 from "@/assets/ChatGPT Image Jan 8, 2026, 09_41_33 AM.png";
import chatgptHero4 from "@/assets/ChatGPT Image Jan 8, 2026, 09_43_19 AM.png";

interface CategoryHeaderProps {
  category: string;
}

const CategoryHeader = ({ category }: CategoryHeaderProps) => {
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  // Map categories to hero images
  const categoryImages: Record<string, string> = {
    'rings': chatgptHero1,
    'earrings': chatgptHero2,
    'necklaces': chatgptHero3,
    'bracelets': chatgptHero4,
    'watches': chatgptHero1,
    'shop': chatgptHero2,
    'new-in': chatgptHero3,
  };
  
  const heroImage = categoryImages[category.toLowerCase()] || chatgptHero1;
  
  return (
    <section className="w-full mb-8">
      {/* Large Hero Image Section */}
      <div className="w-full h-[60vh] min-h-[500px] mb-8 overflow-hidden relative">
        <img 
          src={heroImage} 
          alt={`${capitalizedCategory} Collection`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-white/80 hover:text-white">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">{capitalizedCategory}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white">
              {capitalizedCategory}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHeader;