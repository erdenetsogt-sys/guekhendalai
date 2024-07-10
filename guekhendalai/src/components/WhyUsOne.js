import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EmissionGraph } from "./EmissionGraph";
import { PriceGraph } from "./PriceGraph";
const WhyUsOne = () => {
    return (_jsxs("div", { className: "bg-red-200 w-full  flex gap-10 flex-col px-5 py-5", children: [_jsxs("div", { className: "grid", children: [_jsx("span", { className: "text-3xl font-bold", children: "Why Us" }), _jsx("span", { children: "Generator Comparison" })] }), _jsxs("div", { className: "md:flex-row flex flex-col gap-10 justify-center", children: [_jsx(PriceGraph, {}), _jsx(EmissionGraph, {})] })] }));
};
export default WhyUsOne;
