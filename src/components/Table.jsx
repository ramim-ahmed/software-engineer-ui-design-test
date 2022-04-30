import React from "react";
import TableFooter from "./TableFooter";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <div className="relative overflow-x-auto bg-white table-wrapper">
      <div className="p-4">
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className=" bg-neutral_2 focus:outline-none text-neutral_8 text-sm rounded-lg block w-80 pl-10 p-2.5 "
            placeholder="Search"
          />
        </div>
      </div>
      {/* table section */}
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-neutral_9 bg-warning_1 w-full ">
          <tr className="">
            <th scope="col" className="p-4 checkBox ">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label for="checkbox-all-search" className="sr-only ">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 date ">
              Date Updated
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3 details">
              Details
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3 unit-price ">
              Unite Price
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className=" text-neutral_9">
          {data.map((row) => (
            <TableRow row={row} />
          ))}
        </tbody>
      </table>

      <TableFooter />
    </div>
  );
};

export default Table;
