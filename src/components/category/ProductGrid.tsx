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
  image2: string;
  isNew?: boolean;
}

// Helper to get images based on product index (0-7)
const getProductImages = (index: number) => {
  const firstImages = [ear1, ear2, ear3];
  const secondImages = [ear11, ear22, ear33];
  const imgIndex = index % 3;
  return {
    image: firstImages[imgIndex],
    image2: secondImages[imgIndex],
  };
};

// Only 8 products for category page
const products: Product[] = [
  {
    id: 1,
    name: "Aurelia",
    category: "Earrings",
    price: "$2,850",
    isNew: true,
    ...getProductImages(0),
  },
  {
    id: 2,
    name: "Serenity",
    category: "Bracelets",
    price: "$3,200",
    ...getProductImages(1),
  },
  {
    id: 3,
    name: "Lumina",
    category: "Earrings",
    price: "$1,950",
    isNew: true,
    ...getProductImages(2),
  },
  {
    id: 4,
    name: "Essence",
    category: "Earrings",
    price: "$1,650",
    ...getProductImages(3),
  },
  {
    id: 5,
    name: "Vesper",
    category: "Earrings",
    price: "$2,250",
    ...getProductImages(4),
  },
  {
    id: 6,
    name: "Zenith",
    category: "Bracelets",
    price: "$3,950",
    ...getProductImages(5),
  },
  {
    id: 7,
    name: "Meridian",
    category: "Earrings",
    price: "$2,450",
    ...getProductImages(6),
  },
  {
    id: 8,
    name: "Vertex",
    category: "Bracelets",
    price: "$2,800",
    ...getProductImages(7),
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
                  <div className="aspect-square mb-3 overflow-hidden bg-muted/10 relative group/image">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover/image:opacity-0"
                    />
                    <img
                      src={product.image2}
                      alt={`${product.name} view 2`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover/image:opacity-100"
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