import React from "react";

type ButtonProps = {
  label: string;
  iconURL: string;
};

const Button: React.FC<ButtonProps> = ({ label, iconURL }) => {
  return (
    <button className="flex items-center gap-2 px-7 py-4 leading-none bg-coral-red text-lg text-white rounded-full">
      <span>{label}</span>
      <img
        src={iconURL}
        alt="Button Icon"
        className="w-5 h-5 ml-2 rounded-full"
      />
    </button>
  );
};

export default Button;
