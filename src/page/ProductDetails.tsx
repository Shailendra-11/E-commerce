import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProductDetails } from "../slice/product";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const Id: Number = Number(id);

  const { details, loading, error } = useSelector((state: RootState) => state.product);


  useEffect(() => {
    dispatch(fetchProductDetails({ Id }));
  }, [Id]);


  console.log("det", details)





  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-6 grid md:grid-cols-2 gap-8">

        {/* Image */}
        <div>
          <img
            src={details?.thumbnail}
            alt={details?.title}
            className="w-full rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="space-y-4">

          <h1 className="text-3xl font-bold">{details?.title}</h1>

          <p className="text-gray-600">{details?.description}</p>

          <p className="text-gray-600">
           <span className="font-bold">Brand :</span> {details?.brand || "Unknown"}
          </p>

          <p className="text-yellow-500">
            ⭐{details?.rating}
          </p>

          <p className="text-2xl font-semibold text-green-600">
            ${details?.price}
          </p>

          <p className="text-sm text-gray-500">
            Stock: {details?.stock}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4">

            <span>Quantity</span>

            <div className="flex border rounded">

              <button
                // onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-4 py-2 bg-gray-200"
              >
                -
              </button>

              <span className="px-6 py-2">5</span>

              <button
                // onClick={() => setQty(qty + 1)}
                className="px-4 py-2 bg-gray-200"
              >
                +
              </button>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            <button className="bg-blue-600 text-white px-6 py-2 rounded">
              Add To Cart
            </button>

            <button className="bg-green-600 text-white px-6 py-2 rounded">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;