import React from "react";

interface TitleProps {
  label: string;
  sub: string;
}

const Title: React.FC<TitleProps> = ({ label, sub }) => {
  return (
    <div className="bg-white flex flex-col">
      <h1 className="text-black">
        {" "}
        <strong>{label}</strong>
      </h1>
      <p className="text-black">{sub}</p>
    </div>
  );
};

export default Title;
