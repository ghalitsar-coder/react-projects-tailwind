import axios from "axios";
import React, { useState } from "react";

const BirthDay = () => {
  const [lists, setLists] = useState([]);
  const fetchData = async () => {
    let { data } = await axios.get("http://localhost:8000/birthday");
    setLists(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(list);
  return (
    <div className="w-1/3 shadow-lg rounded-lg p-12 mx-auto my-52 ">
      <h2 className="font-semibold text-xl"> 5 Birthdays Today</h2>
    </div>
  );
};

export default BirthDay;
