import { useDispatch, useSelector } from "react-redux";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import { fetchProducts } from "../slice/product";
import type { AppDispatch, RootState } from "../store";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";


const Product = () => {
     const [limit , setLimit] = useState(0)
     const [skip , setSkip] = useState(0)
     const [total , setTotal] = useState(0)
     const dispatch = useDispatch<AppDispatch>()

     // const {product, loading , error} = useSelector((state :RootState )=> state.product)

     const {product, loading, error } = useSelector((state: RootState) => state.product);

     useEffect(() => {
          dispatch(fetchProducts())
          setTotal(product?.total)
          setSkip(product?.skip)
     }, [])

     const totals : number =  Math.round(total/12);
     return (
          <>
               <div className="bg-[#002147] py-14 px-6">
                    {/* Heading Section */}
                    <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
                         <h3 className="text-white text-3xl font-bold tracking-wide">
                              Featured Products
                         </h3>
                         <p className="text-white mt-3 text-base font-medium leading-relaxed">
                              Discover our most popular products — perfect for everyday use and special moments.
                         </p>
                    </div>

                    {/* Products Section */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                         {product?.products?.map((item) => (
                              <div
                                   key={item.id}
                                   className="group relative w-75 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
                              >
                                   {/* Image */}
                                   <div className="relative h-55 overflow-hidden">
                                        <img
                                             src={item.thumbnail}
                                             alt={item.title}
                                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />

                                        {/* Discount Badge */}
                                        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                                             {item.discountPercentage}% OFF
                                        </span>

                                        {/* Hover Actions */}
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                                             <button
                                                  className="px-4 py-2 bg-[#002147] text-white rounded-lg text-sm hover:bg-blue-700"
                                                  onClick={() => console.log("Add to cart", item)}
                                             >
                                                  🛒 Add to Cart
                                             </button>

                                             <button
                                                  className="px-4 py-2 bg-white text-[#002147] rounded-lg text-sm font-semibold hover:bg-gray-200"
                                                  onClick={() => console.log("View details", item.id)}
                                             >
                                                  👁 View
                                             </button>
                                        </div>
                                   </div>

                                   {/* Content */}
                                   <div className="p-4 text-center">
                                        <h4 className="text-base font-semibold text-gray-800 truncate">
                                             {item.title}
                                        </h4>

                                        <div className="mt-2 flex justify-center items-center gap-2">
                                             <span className="text-lg font-bold text-[#002147]">
                                                  ${item.price}
                                             </span>
                                             <span className="text-sm text-gray-500 line-through">
                                                  ${Math.round(item.discountPercentage)}
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>

                    <div className="mt-8">
                         <Pagination>
                              {total}
                              <PaginationContent>
                                   <PaginationItem>
                                        <PaginationPrevious className="text-white" href="#" />
                                   </PaginationItem>
                                   <PaginationItem>
                                        <PaginationLink href="#" className="text-white">1</PaginationLink>
                                   </PaginationItem>
                                   <PaginationItem>
                                        <PaginationEllipsis />
                                   </PaginationItem>
                                   <PaginationItem>
                                        <PaginationNext className="text-white" href="#" />
                                   </PaginationItem>
                              </PaginationContent>
                         </Pagination>
                    </div>
               </div>
          </>
     );
};

export default Product;
