import React from "react";
import TableFooter from "./TableFooter";

const Table = ({ data }) => {
  const TableContents = data.map(
    ({ date, title, details, status, quantity, unit_price, amount }) => (
      <tr className="bg-white border-b hover:bg-gray-50">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="checkbox"
            />
            <label for="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <td className="px-6 py-4 text-neutral_9 ">{date}</td>
        <td className="px-6 py-4 text-neutral_9 ">{title}</td>
        <td className="px-6 py-4 text-neutral_9 ">{details}</td>
        <td className="px-6 py-4 text-neutral_9 ">{status}</td>
        <td className="px-6 py-4 text-neutral_9 ">{quantity}</td>
        <td className="px-6 py-4 text-neutral_9 ">${unit_price}</td>
        <td className="px-6 py-4 text-neutral_9 ">${amount}</td>
      </tr>
    )
  );

  return (
    <div className="w-full bg-white rounded-md">
      <div className="relative overflow-x-auto sm:rounded-lg">
        {/* table search section */}
        <div className="p-4">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-80 pl-10 p-2.5 "
              placeholder="Search"
            />
          </div>
        </div>
        {/* table section */}
        <table className="w-full text-sm text-left bg-white text-neutral_9">
          <thead className="text-xs bg-warning_1">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="checkbox"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Date Updated
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Unit Price
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {TableContents}
          </tbody>
        </table>
      </div>
      <TableFooter />
    </div>
  );
};

export default Table;
