import React from "react";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 text-black/[0.9]">
        <h3 className="text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
