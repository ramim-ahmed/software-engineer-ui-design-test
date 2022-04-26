import React from "react";

const TableFooter = () => {
  return (
    <div className="flex justify-between px-3 py-5">
      <div>
      <select
        id="countries"
        className="select-element"
      >
        <option selected>10 Items per page</option>
        <option value="10">10 Items per page</option>
        <option value="6">6 Items per page</option>
        <option value="4">4 Items per page</option>
        <option value="2">2 Items per page</option>
      </select>
      </div>
      <div className="flex">
      <select
        id="countries"
        class="select-element"
      >
        <option selected>Page 1 of 5</option>
        <option value="1">Page 1 of 5</option>
        <option value="2">Page 2 of 5</option>
        <option value="3">Page 3 of 5</option>
        <option value="4">Page 4 of 5</option>
      </select>
      <div className="flex space-x-5 ml-5 mr-1">
          <button>Prev</button>
          <button>Next</button>
      </div>
      </div>
    </div>
  );
};

export default TableFooter;
