import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, } from "./ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import IconInverter1 from "../assets/products/inverter_1.jpg";
import IconInverter2 from "../assets/products/inverter_2.jpg";
import IconInverter3 from "../assets/products/inverter_3.jpg";
import IconPanel from "../assets/products/panel.jpeg";
const products = [
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
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex flex-col px-5", children: [_jsx("div", { className: "py-4 text-xl", children: "Product" }), _jsx("div", { className: "flex gap-10 overflow-auto  bg-red-500 px-5 py-5", children: products.map((product) => (_jsxs(Card, { className: "w-full shadow-lg", children: [_jsxs(CardContent, { className: "w-[200px] p-5", children: [_jsx("img", { src: product.image, onClick: () => handleImageClick(product), className: "rounded-lg" }), _jsxs(CardDescription, { children: [product.price, "MNT"] })] }), _jsx(CardFooter, { children: product.title })] }))) })] }), isOpen && (_jsx(Dialog, { open: isOpen, onOpenChange: handleClose, children: _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: selectedImage.title }), _jsxs(DialogDescription, { className: "flex", children: [_jsx("img", { src: selectedImage.image, className: "rounded-lg", alt: "Product" }), _jsxs("div", { className: "flex flex-col justify-center gap-10", children: [_jsx("div", { children: selectedImage.price }), _jsx("div", { children: selectedImage.description })] })] })] }), _jsxs(ScrollArea, { children: [_jsx("div", { className: "flex  space-x-4 p-4 bg-red-200", children: selectedImage.gallery.map((product) => (_jsx("figure", { className: "shrink-1", children: _jsx("div", { className: "overflow-hidden rounded-md", children: _jsx("img", { src: product.productImage, alt: `Photo by ${product.productImage}`, 
                                                // className="aspect-[3/4] h-fit w-fit object-cover"
                                                className: "aspect-[3/4] w-[150px] h-fit object-cover" }) }) }, product.productImage))) }), _jsx(ScrollBar, { orientation: "horizontal" })] })] }) }))] }));
};
export default Products;
