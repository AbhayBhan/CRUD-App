import React, { useState } from "react";
import "../styles/main.css";

export const InpField = ({ handleCallBack }) => {
  const handleSubmit = (e) => {
    handleCallBack(name, age, des);
    setName("");
    setAge("");
    setDes("");
    e.preventDefault();
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [des, setDes] = useState("");

  return (
    <form
      onSubmit={handleSubmit}
      className="container flex flex-col p-6 mb-12 gap-y-5"
    >
      <div>
        <h4 className="text-blue-500 text-sm font-bold">Name: </h4>
        <input
          value={name}
          className="px-1 border-2 border-solid rounded-lg"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Name..."
          required
        />
      </div>
      <div>
        <h4 className="text-blue-500 text-sm font-bold">Age: </h4>
        <input
          value={age}
          className="px-1 border-2 border-solid rounded-lg"
          type="number"
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
          placeholder="Enter Age..."
          required
        />
      </div>
      <div>
        <h4 className="text-blue-500 text-sm font-bold">Designation: </h4>
        <input
          value={des}
          className="px-1 border-2 border-solid rounded-lg"
          type="text"
          onChange={(e) => {
            setDes(e.target.value);
          }}
          placeholder="Enter Designation..."
          required
        />
      </div>
      <button
        type="submit"
        className="bg-slate-400 text-white font-bold self-baseline px-3 py-1 rounded-xl hover:bg-slate-600"
      >
        Submit
      </button>
    </form>
  );
};
