import React from "react";

export default function LabelInput({label, name, value, onChange, type, id }: any) {
  return (
    <div className="mb-4 w-full">
      <label className="block mt-2 w-full text-2xl font-semibold p-3  text-gray-700 text-left">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="form-input w-full mt-2 px-4 py-2 rounded-md border border-blue-400 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
