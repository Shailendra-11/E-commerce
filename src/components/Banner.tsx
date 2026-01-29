import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Banner = () => {
  const images = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
  ];



  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); 
    // ⏱ 3000ms = 3 seconds
    return () => clearInterval(interval);
  }, []);


  const prevSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? prev - 1 : 0))
  }

  const nextSlide = () => {
    setIndex((prev) => (prev === 0 ? prev + 1 : images.length - 1))
  }

  return (
    <div className="bg-[#002147] min-h-screen p-1">
      <div className="relative overflow-hidden rounded-md">

        {/* Image */}
        <img
          src={images[index]}
          alt="banner"
          className="w-full h-[450px] object-cover transition-all duration-700 ease-in-out"
        />

        {/* Left Button */}
        <div
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronLeft className="text-black text-4xl" />
        </div>

        {/* Right Button */}
        <div
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronRight className="text-white text-4xl" />
        </div>

      </div>
    </div>
  );
};

export default Banner;
