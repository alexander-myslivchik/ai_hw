import PricingCard from './PricingCard';

function PricingContainer() {
  return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold text-white text-center mb-16">Pricing</h1>
        <div className="flex flex-col items-center sm:items-start sm:flex-row justify-center gap-0 max-w-5xl mx-auto">
          <div className="sm:w-auto">
            <PricingCard
              plan="Standard"
              price="$100"
              features={[
                "50,000 Requests",
                "4 contributors",
                "Up to 3 GB storage space"
              ]}
            />
          </div>
          
          <div className="relative sm:w-auto sm:z-10 sm:scale-105">
            <PricingCard
              plan="Pro"
              price="$200"
              features={[
                "100,000 Requests",
                "7 contributors",
                "Up to 6 GB storage space"
              ]}
              isFeatured
            />
          </div>
          
          <div className=" sm:w-auto">
            <PricingCard
              plan="Expert"
              price="$500"
              features={[
                "200,000 Requests",
                "11 contributors",
                "Up to 10 GB storage space"
              ]}
            />
          </div>
        </div>
      </div>
  );
}

export default PricingContainer;
