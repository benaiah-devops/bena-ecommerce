import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import ear1 from "@/assets/ear1.png";
import ear2 from "@/assets/ear2.png";
import ear3 from "@/assets/ear3.png";
import ear11 from "@/assets/ear11.png";
import ear22 from "@/assets/ear22.png";
import ear33 from "@/assets/ear33.png";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
}

// Extended product list for category page
const products: Product[] = [
  {
    id: 1,
    name: "Pantheon",
    category: "Earrings",
    price: "$2,850",
    image: ear1,
    isNew: true,
  },
  {
    id: 2,
    name: "Eclipse",
    category: "Bracelets",
    price: "$3,200",
    image: ear2,
  },
  {
    id: 3,
    name: "Halo",
    category: "Earrings",
    price: "$1,950",
    image: ear3,
    isNew: true,
  },
  {
    id: 4,
    name: "Oblique",
    category: "Earrings",
    price: "$1,650",
    image: ear11,
  },
  {
    id: 5,
    name: "Lintel",
    category: "Earrings",
    price: "$2,250",
    image: ear22,
  },
  {
    id: 6,
    name: "Shadowline",
    category: "Bracelets",
    price: "$3,950",
    image: ear33,
  },
  {
    id: 7,
    name: "Meridian",
    category: "Earrings",
    price: "$2,450",
    image: ear1,
  },
  {
    id: 8,
    name: "Vertex",
    category: "Bracelets",
    price: "$2,800",
    image: ear2,
  },
  {
    id: 9,
    name: "Apex",
    category: "Earrings",
    price: "$1,550",
    image: ear3,
  },
  {
    id: 10,
    name: "Zenith",
    category: "Earrings",
    price: "$1,850",
    image: ear11,
  },
  {
    id: 11,
    name: "Prism",
    category: "Earrings",
    price: "$2,050",
    image: ear22,
  },
  {
    id: 12,
    name: "Radiant",
    category: "Bracelets",
    price: "$3,650",
    image: ear33,
  },
  {
    id: 13,
    name: "Stellar",
    category: "Earrings",
    price: "$2,150",
    image: ear1,
  },
  {
    id: 14,
    name: "Cosmos",
    category: "Bracelets",
    price: "$2,950",
    image: ear2,
  },
  {
    id: 15,
    name: "Aurora",
    category: "Earrings",
    price: "$1,750",
    image: ear3,
  },
  {
    id: 16,
    name: "Nebula",
    category: "Earrings",
    price: "$1,850",
    image: ear11,
  },
  {
    id: 17,
    name: "Orbit",
    category: "Earrings",
    price: "$2,350",
    image: ear22,
  },
  {
    id: 18,
    name: "Galaxy",
    category: "Bracelets",
    price: "$3,450",
    image: ear33,
  },
  {
    id: 19,
    name: "Lunar",
    category: "Earrings",
    price: "$2,050",
    image: ear1,
  },
  {
    id: 20,
    name: "Solar",
    category: "Bracelets",
    price: "$3,150",
    image: ear2,
  },
  {
    id: 21,
    name: "Astral",
    category: "Earrings",
    price: "$1,650",
    image: ear3,
  },
  {
    id: 22,
    name: "Cosmic",
    category: "Earrings",
    price: "$1,950",
    image: ear11,
  },
  {
    id: 23,
    name: "Celestial",
    category: "Earrings",
    price: "$2,250",
    image: ear22,
  },
  {
    id: 24,
    name: "Ethereal",
    category: "Bracelets",
    price: "$3,750",
    image: ear33,
  },
];

const ProductGrid = () => {
  return (
    <section className="w-full px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card 
                className="border-none shadow-none bg-transparent group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="aspect-square mb-3 overflow-hidden bg-muted/10 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
                    />
                    <img
                      src={product.image}
                      alt={`${product.name} lifestyle`}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-300 opacity-0 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/[0.03]"></div>
                    {product.isNew && (
                      <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium text-black">
                        NEW
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light text-foreground">
                      {product.category}
                    </p>
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-sm font-light text-foreground">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      
      <Pagination />
    </section>
  );
};

export default ProductGrid;