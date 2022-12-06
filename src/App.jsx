import { useEffect, useState } from "react";
import { InpField } from "./components/InpField";
import { db } from "./firebaseCfg";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import personIcon from "./images/PersonIcon.png";
import delIcon from "./images/delicon.png";
import "./styles/main.css";

function App() {
  const [items, setItems] = useState([]);
  const [uName, setUName] = useState("");
  const [uAge, setUAge] = useState(0);
  const [uDes, setUDes] = useState("");
  const [updateFacilitator, setUpdateFacilitator] = useState(false);
  const databaseRef = collection(db, "users");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(databaseRef);
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, [updateFacilitator]);

  useEffect(() => {
    if (uName !== "" && uAge !== 0 && uDes !== "") {
      addEmp();
    }
  }, [uDes]);

  const addEmp = async () => {
    await addDoc(databaseRef, { name: uName, age: uAge, designation: uDes });
    setUpdateFacilitator(!updateFacilitator);
  };

  const deleteData = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    setUpdateFacilitator(!updateFacilitator);
  };

  const handleCallBack = (name, age, des) => {
    setUName(name);
    setUAge(age);
    setUDes(des);
  };

  return (
    <div className="">
      <InpField handleCallBack={handleCallBack} />
      <div className="flex flex-col flex-wrap mx-auto justify-center gap-10 items-center md:flex-row">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col w-[200px] justify-center relative mt-6 drop-shadow-2xl transition-all hover:drop-shadow-3xl"
            >
              <img
                src={personIcon}
                className="absolute ml-14 mb-[195px]"
                width="80px"
              ></img>
              <div className="container mt-6 mb-1 flex flex-col p-6 rounded-3xl items-center bg-cyan-600">
                <h3 className="text-2xl text-white font-bold">{item.name}</h3>
                <h3 className="font-semibold text-white">{item.age}</h3>
                <h3 className="font-semibold">{item.designation}</h3>
                <button onClick={() => deleteData(item.id)}>
                  <img
                    src={delIcon}
                    width="20px"
                    className="mt-2 hover: drop-shadow-lg"
                  ></img>
                </button>
              </div>
              <button className="bg-slate-400 text-white font-semibold px-2 py-1 mx-auto self-baseline rounded-full mt-1 hover:bg-slate-600">update</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
