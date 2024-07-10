import { EmissionGraph } from "./EmissionGraph";
import { PriceGraph } from "./PriceGraph";

const WhyUsOne = () => {
  return (
    <div className="bg-red-200 w-full  flex gap-10 flex-col px-5 py-5">
      <div className="grid">
        <span className="text-3xl font-bold">Why Us</span>
        <span>Generator Comparison</span>
      </div>
      <div className="md:flex-row flex flex-col gap-10 justify-center">
        <PriceGraph />
        <EmissionGraph />
      </div>
    </div>
  );
};

export default WhyUsOne;
