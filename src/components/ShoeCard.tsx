import React from "react";
type Props = {
  imgURL: any;
  changeBigShoeImage: any;
  bigShoeImg: any;
};
const ShoeCard: React.FC<Props> = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}) => {
  function handleClick() {
    if (bigShoeImg !== imgURL.bigShoe) changeBigShoeImage(imgURL.bigShoe);
  }
  return (
    <div
      className={`border-2 rounded-xl  max-sm:flex-1 cursor-pointer
         ${
           bigShoeImg === imgURL.bigShoe
             ? "border-coral-red"
             : "border-transparent"
         }`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="Shoe imag"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
