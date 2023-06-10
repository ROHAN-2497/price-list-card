import { list } from "postcss";
import React from "react";
import Feature from "../Feature/Feature";

const PriceCart = ({ price }) => {
  return (
    <div className="mt-4 p-4 rounded-xl bg-indigo-400 flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl text-purple-700 font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl font-bold text-white">/mon</span>
      </h2>
      <h5 className="text-2xl font-bold text-center my-4">{price.name}</h5>
      <p className="font-bold underline text-white text-2xl">Features:</p>
      {
        price.features.map((feature ,idx) => <Feature
           key={idx}
           feature={feature}
        ></Feature> )
      }
      <button className="mt-auto  bg-white rounded-md text-green-600 font-bold hover:bg-red-600 p-1">Buy Now</button>
    </div>
  );
};

export default PriceCart;
