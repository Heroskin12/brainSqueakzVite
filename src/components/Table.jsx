"use client"

import { useEffect, useState } from "react";
import EditForm from "./Forms/EditForm";
import Modal from './Modal'

const Table = (props) => {
    const table = props.table;
    const columns = table.columnDetails;
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [formToggle, setFormToggle] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null)

    useEffect(() => {
        const fetchValues = async() => {
            try {
                const res = await fetch(`http://localhost:5000/${table.tableName}`);
                const result = await res.json();
                setData(result);
            } catch(err) {
                console.log('Error fetching data', err)
            } finally {
                setLoading(false);
            }
        }
        fetchValues();
    }, []);

    const handleClick = (row) => {
        console.log('In click handler')
        setFormToggle(true);
        setSelectedRow(row);
    }

    return (
    <div className="relative overflow-x-auto bg-primary-white mb-24">
        <Modal open={formToggle} onClose={() => setFormToggle(false)}>
                {selectedRow && <EditForm rowDetails={selectedRow} tableName={table.tableName} />}
        </Modal>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="py-5 font-sans text-xl text-left rtl:text-right text-white bg-primary-black dark:text-white dark:bg-gray-800">
                {table.tableName}
                <p className="mt-1 text-lg font-sans text-white dark:text-gray-400">
                    {table.caption && table.caption}</p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 shadow-md sm:rounded-lg">
                <tr>
                    {columns.map(column => {
                        return (
                                <th scope="col" key={column.columnName} className="px-6 py-3">
                                    {column.columnName}
                                </th>                                    
                        )
                    })}
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>                                
                </tr>
            </thead>
            <tbody>
                    {data && data.map(row => {
                        return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={row.resourceName}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                                    {row.resourceName}
                                </th>
                                <td className="px-6 py-4">
                                    <a
                                    href={row.url}
                                    target="_blank">Click Here</a>
                                </td>
                                <td className="px-6 py-4">
                                    {row.category}
                                </td>
                                <td className="px-6 py-4 text-balance">
                                    {row.comments}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleClick(row)}>Edit</a>
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    </div>
  )
};

export default Table;
