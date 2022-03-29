import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./List";

const BirthDay = () => {
  const [lists, setLists] = useState([]);
  const fetchData = async () => {
    let { data } = await axios.get("http://localhost:8000/birthday");
    setLists(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(lists);
  return (
    <div className="w-full h-screen bg-pink-300 pt-2">
      <div className="w-1/2 shadow-lg bg-white rounded-lg p-12 mx-auto my-40 ">
        <h2 className="font-semibold text-xl">
          {" "}
          {lists.length} Birthdays Today
        </h2>
        <div className="content ">
          {lists.map((list) => (
            <List item={list} key={list.id} />
          ))}
        </div>
        <button
          className="text-center w-full bg-pink-400 text-white font-semibold font-[Poppins] mt-10 p-3 rounded-lg shadow-lg"
          onClick={() => setLists([])}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default BirthDay;
