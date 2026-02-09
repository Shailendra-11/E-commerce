import { useDispatch, useSelector } from "react-redux"
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { useEffect, useState } from "react"
import { fetchCategory } from "../slice/product"
import type { AppDispatch, RootState } from "../store"
import { Input } from "../components/ui/input"

const Product = () => {
  const [limit, setLimit] = useState<Number>(0)
  const [total, setTotal] = useState<Number>(0)
  const [categorys, setCategory] = useState<String>("")
  const [filter, setFilter] = useState<String>("")
  const dispatch = useDispatch<AppDispatch>()
  const { category, loading, error, } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchCategory())
  }, [])

  console.log(category, "category")

  return (
    <>
      <div className="bg-[#002147] w-full">
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




      <div className="bg-[#002147] h-150">
        <div className="flex flex-row justify-between gap-4 mr-1.5">

          <div className="mt-2.5 ml-2">
            <Input className="
    w-64
    bg-[#0b2c4d] !important
    text-white
    border border-white/20
    placeholder:text-gray-300
    focus:ring-2 focus:ring-blue-500
  "  placeholder="Searching a product" />
          </div>


          <Select>
            <SelectTrigger
              className="
      w-[180px] mt-2.5 ml-2 bg-amber-50
      bg-[#022344]
      text-white
      border border-white/20
      rounded-xl
      focus:ring-2 focus:ring-blue-500
    "
            >
              <SelectValue  placeholder="Selected Category" />
            </SelectTrigger>

            <SelectContent className="bg-[#2a6bab] border border-white/20">
              <SelectGroup>
                {category?.map((res) => (
                  <SelectItem
                    value={`${res.slug}`}
                    className=" text-shadow-white
                    cursor-pointer
                    data-[state=checked]:bg-blue-600
                    data-[state=checked]:text-white
                    focus:bg-blue-500
                    focus:text-white
                    "
                    key={res?.slug}>
                    {res?.name}
                  </SelectItem>
                ))}

              </SelectGroup>
            </SelectContent>
          </Select>


          <Select>
            <SelectTrigger
              className="
      w-[180px] mt-2.5 ml-2 bg-amber-50
      bg-[#0b2c4d]
      text-white
      border border-white/20
      rounded-xl
      focus:ring-2 focus:ring-blue-500
    "
            >
              <SelectValue placeholder="Selected By Sort" />
            </SelectTrigger>

            <SelectContent className="bg-[#2a6bab] border border-white/20">
              <SelectGroup>
                <SelectItem
                  value="asc"
                  className="
          cursor-pointer
          data-[state=checked]:bg-blue-600
          data-[state=checked]:text-white
          focus:bg-blue-500
          focus:text-white
        "
                >
                  Ascending
                </SelectItem>

                <SelectItem
                  value="desc"
                  className="
          cursor-pointer
          data-[state=checked]:bg-blue-600
          data-[state=checked]:text-white
          focus:bg-blue-500
          focus:text-white
        "
                >
                  Descending
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center ">
          <div
            className="group relative w-75 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-55 overflow-hidden">
              <img
                src="/3.webp"
                alt="image"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                10 % OFF
              </span>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                <button
                  className="px-4 py-2 bg-[#002147] text-white rounded-lg text-sm hover:bg-blue-700"
                >
                  🛒 Add to Cart
                </button>

                <button
                  className="px-4 py-2 bg-white text-[#002147] rounded-lg text-sm font-semibold hover:bg-gray-200"
                >
                  👁 View
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 text-center">
              <h4 className="text-base font-semibold text-gray-800 truncate">
                itemtitle
              </h4>

              <div className="mt-2 flex justify-center items-center gap-2">
                <span className="text-lg font-bold text-[#002147]">
                  item.price
                </span>
                <span className="text-sm text-gray-500 line-through">
                  20
                </span>
              </div>
            </div>
          </div>
        </div>


      </div>


    </>
  )
}

export default Product