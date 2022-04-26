import React from "react";
import Table from "./Table";

const Contents = ({data}) => {
  return (
    <div className="w-5/6">
      
      <p className="text-[-20px] py-5 pl-2 font-semibold">Inventory</p>
      <div className="border-b border-gray-500 border-opacity-10"></div>
      <div className="m-2 mt-5 mb-5">
        <Table data={data} />
      </div>
    </div>
  );
};

export default Contents;
