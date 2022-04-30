import React from 'react';

const TableRow = ({row}) => {
    const {date, title, details, status, quantity, unit_price, amount} = row;
  return (
    <tr className="bg-white border-b ">
            <td className="w-4 p-4 checkBox ">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label for="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap date "
            >
                {date}
            </th>
            <td className="px-6 py-4">{title}</td>
            <td className="px-6 py-4 details ">
              {details}
            </td>
            <td className="px-6 py-4 flex items-center">
                <span className='hidden md:block md:mr-3 '>{status}</span> <span className={` w-1.5 h-1.5 rounded-full ${status === 'Alright' ? 'bg-primary':'bg-primary'} ${status === 'In Progress' ? ' bg-warning':'bg-primary'} ${status === 'Out Of Stock' ? 'bg-error':'bg-primary'} `} ></span>
            </td>
            <td className="px-6 py-4 font-semibold ">{quantity}</td>
            <td className="px-6 py-4 unit-price ">${unit_price}</td>
            <td className="px-6 py-4">${amount}</td>
          </tr>
  )
}

export default TableRow
