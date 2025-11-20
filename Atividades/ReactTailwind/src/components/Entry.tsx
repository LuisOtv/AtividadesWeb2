import React from "react";

interface EntryProps {
  label: string;
  placeholder: string;
  type: string;
}

const Entry: React.FC<EntryProps> = ({ label, placeholder, type }) => {
  return (
    <div className="bg-white flex flex-col text-left gap-1">
      <h1 className="text-black text-xs">
        <strong>{label}</strong>
      </h1>
      <input type={type} className="text-black" placeholder={placeholder} />
      <div className="bg-slate-300 w-full h-0.5"></div>
    </div>
  );
};

export default Entry;
