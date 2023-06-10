import React, { useEffect, useState } from "react";
import PriceCart from "../PriceCart/PriceCart";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl bg-purple-400 text-center p-4 text-purple-950 font-bold ">
        Awesome affordable Price
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {prices.map((price) => (
          <PriceCart key={price.id} price={price}></PriceCart>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
