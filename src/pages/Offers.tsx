import React from "react";
import { Percent, Gift, TicketPercent } from "lucide-react";

const offersList = [
  {
    id: 1,
    title: "Flat 50% OFF",
    subtitle: "End of Season Sale",
    icon: <Percent size={48} />,
    gradient: "from-purple-400 to-purple-300",
  },
  {
    id: 2,
    title: "Buy 1 Get 1",
    subtitle: "Exclusive Fashion Offer",
    icon: <Gift size={48} />,
    gradient: "from-violet-400 to-purple-300",
  },
  {
    id: 3,
    title: "Extra 20% OFF",
    subtitle: "Use Coupon: PURPLE20",
    icon: <TicketPercent size={48} />,
    gradient: "from-fuchsia-400 to-fuchsia-300",
  },
];

const Offers: React.FC = () => {
  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-700">
        Hot Deals & Offers
      </h2>

      <div className="flex flex-col gap-8 px-6">
        {offersList.map((offer) => (
          <div
            key={offer.id}
            className={`relative overflow-hidden h-full md:h-78 rounded-xl shadow-lg bg-linear-to-r ${offer.gradient} text-white flex flex-col md:flex-row items-center justify-between p-6 cursor-pointer`}
          >
            {/* Icon */}
            <div className="shrink-0 mb-4 md:mb-0 md:mr-6 flex justify-center">
              {offer.icon}
            </div>

            {/* Text */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-3xl font-extrabold mb-2">
                {offer.title}
              </h3>
              <p className="text-lg opacity-90">{offer.subtitle}</p>
            </div>

            {/* Button */}
            <button className="mt-4 md:mt-0 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition shadow-md">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
