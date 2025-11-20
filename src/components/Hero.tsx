import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  { id: 1, title: "Mega Sale Up to 50% Off", subtitle: "On selected products", gradient: "from-pink-200 to-pink-300" },
  { id: 2, title: "New Arrivals for You", subtitle: "Latest trends in fashion", gradient: "from-pink-500 to-pink-300" },
  { id: 3, title: "Exclusive Deals This Week", subtitle: "Don't miss out!", gradient: "from-pink-400 to-fuchsia-300", },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(nextSlide, 4000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="relative w-full px-4 md:px-8 py-6">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="shrink-0 w-full px-2 md:px-4"
            >
              <div className={`relative rounded-lg overflow-hidden bg-linear-to-r ${banner.gradient} w-full h-64 md:h-96`}>
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white p-4">
                  <h2 className="text-2xl md:text-4xl font-bold">{banner.title}</h2>
                  <p className="text-sm md:text-lg mt-2">{banner.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft className="w-6 h-6 text-pink-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronRight className="w-6 h-6 text-pink-700" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-pink-700" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
