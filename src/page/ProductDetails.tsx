import React, { useState } from "react";

const ProductDetails = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-6 grid md:grid-cols-2 gap-8">

        {/* Image */}
        <div>
          <img
            src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
            alt="title"
            className="w-full rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="space-y-4">

          <h1 className="text-3xl font-bold">"product.title"</h1>

          <p className="text-gray-600">"product.description"</p>

          <p className="text-yellow-500">
            ⭐4
          </p>

          <p className="text-2xl font-semibold text-green-600">
            $5
          </p>

          <p className="text-sm text-gray-500">
            Stock: 4
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