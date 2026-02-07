import { Button } from "../components/ui/button"

const Product = () => {
  return (
    <>
      <div className="bg-[#002147] w-full h-200 ">
        <div className="bg-white -mt-4 py-16 flex justify-center">
          <div className="w-[90%] md:w-[70%] text-center flex flex-col items-center gap-4">

            {/* Gradient Badge */}
            <span className="px-5 py-1 rounded-full text-sm font-medium
      bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              Shop New Collection
            </span>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Premium Developer Clothing Collection
            </h1>

            {/* Description */}
            <p className="text-gray-600 max-w-2xl">
              Discover high-quality T-shirts and hoodies designed for developers.
              Comfortable, stylish, and perfect for everyday wear.
            </p>

            {/* CTA Button */}
            <button className="mt-4 px-8 py-3 rounded-lg text-white font-medium
      bg-gradient-to-r from-indigo-600 to-purple-600
      hover:from-indigo-700 hover:to-purple-700 transition">
              Shop Now
            </button>

          </div>
        </div>



      </div>

    </>
  )
}

export default Product