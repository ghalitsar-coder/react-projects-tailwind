import React from "react";

const List = ({ item }) => {
  return (
    <div className="flex items-center  my-5 font-[Poppins] ">
      <img
        src={item.imgUrl}
        alt=""
        className="rounded-full w-[70px] h-[70px] shadow-md "
      />
      <div className="detail ml-5">
        <h3 className="font-semibold text-xl "> {item.name} </h3>
        <span className="font-normal text-md text-slate-500">
          {" "}
          {item.age} years{" "}
        </span>
      </div>
    </div>
  );
};

export default List;
