import React from "react";

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      className={`p-4 w-full max-w-[280px] flex flex-col ${
        isFeatured ? "bg-[#374151]" : "bg-[white]"
      }`}
    >
      <div className="px-6 pt-6 pb-4 text-center border-b border-gray-200">
        <h3 className={`text-sm uppercase mb-2 ${
          isFeatured ? "text-white" : "text-gray-600"
        }`}>
          {plan}
        </h3>
        <div className={`text-[42px] font-semibold ${
          isFeatured ? "text-white" : "text-gray-900"
        }`}>
          {price}
        </div>
      </div>
      
      <div className="flex-1">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`py-4 text-center text-sm border-b ${
              isFeatured 
                ? "border-gray-600 text-gray-200" 
                : "border-gray-200 text-gray-600"
            }`}
          >
            {feature}
          </div>
        ))}
      </div>

      <div className="p-6">
        <button
          className={`w-full py-2 text-sm uppercase tracking-wider transition-colors ${
            isFeatured
              ? "bg-white text-gray-800 hover:bg-gray-100"
              : "bg-[#374151] text-white hover:bg-gray-800"
          }`}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
