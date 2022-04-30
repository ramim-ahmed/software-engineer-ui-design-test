import React from "react";
import Table from "./Table";

const MainContent = ({data}) => {
  return (
    <div className="lg:ml-64 md:ml-20 sm:ml-20 md:mr-5 m-2 md:0 h-full ">
      <p className="py-3 font-semibold text-xl text-neutral_9 ">Inventory</p>
      {/* table */}
      <Table data={data} />
    </div>
  );
};

export default MainContent;
