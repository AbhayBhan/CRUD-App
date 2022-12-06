import React, { useState } from 'react';

export const UpdateField = ({updateListener, cName, cAge, cDes}) => {
    const [updateName, setUpdateName] = useState("");
    const [updateAge, setUpdateAge] = useState("");
    const [updateDes, setUpdateDes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(updateName.length === 0){
        //     setUpdateName(cName);
        // }
        // if(updateAge.length === 0){
        //     setUpdateAge(cAge);
        // }
        // if(updateDes.length === 0){
        //     setUpdateDes(cDes);
        // }
        updateListener(updateName, updateAge, updateDes);
    }

  return (
    <form onSubmit={handleSubmit} className="container absolute bg-slate-300 top-[30vh] mx-[25vw] flex space-y-3 shadow-2xl flex-col p-6 w-[260px] md:mx-[43vw]">
      <div>
        <h4 className="text-blue-500 text-sm font-bold">Name: </h4>
        <input
          value={updateName}
          className="px-1 border-2 border-solid rounded-lg"
          type="text"
          placeholder={cName}
          onChange={(e) => {setUpdateName(e.target.value)}}
          required
        />
      </div>
      <div>
        <h4 className="text-blue-500 text-sm font-bold">Age: </h4>
        <input
          value={updateAge}
          className="px-1 border-2 border-solid rounded-lg"
          type="number"
          placeholder={cAge}
          onChange={(e) => {setUpdateAge(Number(e.target.value))}}
          required
        />
      </div>
      <div>
        <h4 className="text-blue-500 text-sm font-bold">Designation: </h4>
        <input
          value={updateDes}
          className="px-1 border-2 border-solid rounded-lg"
          type="text"
          placeholder={cDes}
          onChange={(e) => {setUpdateDes(e.target.value)}}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-slate-400 text-white font-bold self-baseline px-3 py-1 rounded-xl hover:bg-slate-600"
      >
        Update
      </button>
    </form>
  )
}
