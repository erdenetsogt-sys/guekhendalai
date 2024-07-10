import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import IconInverter from "../assets/products/inverter.png";
import IconInverter1 from "../assets/products/inverter_1.jpg";
import IconInverter2 from "../assets/products/inverter_2.jpg";
import IconInverter3 from "../assets/products/inverter_3.jpg";
import IconPanel from "../assets/products/panel.jpeg";
export interface ProductDetail {
  productImage: string;
}

export interface Product {
  title: string;
  price: string;
  description: string;
  image: string;
  gallery: ProductDetail[];
}
const products: Product[] = [
  {
    title: "Solar Panel",
    price: "50000¥",
    description: "XXXXXXXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXX",
    image: IconPanel,
    gallery: [
      {
        productImage: IconInverter1,
      },
      {
        productImage: IconInverter2,
      },
      {
        productImage: IconInverter3,
      },
    ],
  },
  {
    title: "Battery",
    price: "50000¥",
    description: "XXXXXXXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXX",
    image: IconPanel,
    gallery: [
      {
        productImage: IconInverter1,
      },
      {
        productImage: IconInverter2,
      },
      {
        productImage: IconInverter3,
      },
    ],
  },
  {
    title: "Inverter",
    price: "50000¥",
    description: "XXXXXXXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXX",
    image: IconPanel,
    gallery: [
      {
        productImage: IconInverter1,
      },
      {
        productImage: IconInverter2,
      },
      {
        productImage: IconInverter3,
      },
    ],
  },
  {
    title: "Conducter",
    price: "50000¥",
    description: "XXXXXXXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXX",
    image: IconPanel,
    gallery: [
      {
        productImage: IconInverter1,
      },
      {
        productImage: IconInverter2,
      },
      {
        productImage: IconInverter3,
      },
    ],
  },
  {
    title: "Installation",
    price: "50000¥",
    description: "XXXXXXXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXX",
    image: IconPanel,
    gallery: [
      {
        productImage: IconInverter1,
      },
      {
        productImage: IconInverter2,
      },
      {
        productImage: IconInverter3,
      },
    ],
  },
];

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Product>(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-col px-5">
        <div className="py-4 text-xl">Product</div>
        <div className="flex gap-10 overflow-auto  bg-red-500 px-5 py-5">
          {products.map((product) => (
            <Card className="w-full shadow-lg">
              <CardContent className="w-[200px] p-5">
                <img
                  src={product.image}
                  onClick={() => handleImageClick(product)}
                  className="rounded-lg"
                />
                <CardDescription>{product.price}MNT</CardDescription>
              </CardContent>
              <CardFooter>{product.title}</CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={handleClose}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription className="flex">
                <img
                  src={selectedImage.image}
                  className="rounded-lg"
                  alt="Product"
                />
                <div className="flex flex-col justify-center gap-10">
                  <div>{selectedImage.price}</div>
                  <div>{selectedImage.description}</div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <ScrollArea>
              <div className="flex  space-x-4 p-4 bg-red-200">
                {selectedImage.gallery.map((product) => (
                  <figure key={product.productImage} className="shrink-1">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={product.productImage}
                        alt={`Photo by ${product.productImage}`}
                        // className="aspect-[3/4] h-fit w-fit object-cover"
                        className="aspect-[3/4] w-[150px] h-fit object-cover"
                      />
                    </div>
                    {/* <figcaption className="pt-2 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {product.productImage}
                      </span>
                    </figcaption> */}
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Products;
