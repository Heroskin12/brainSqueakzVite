"use client"

const Table = (props) => {
    const rows = props.rows;
    console.log('These are the rows ', rows);

    return (
    <div className="relative overflow-x-auto bg-primary-white mb-24">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="py-5 font-sans text-xl text-left rtl:text-right text-white bg-primary-black dark:text-white dark:bg-gray-800">
                    {rows[0].tableName}
                    <p className="mt-1 text-lg font-sans text-white dark:text-gray-400">
                        {rows[1].caption}</p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 shadow-md sm:rounded-lg">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Video Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            URL
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Comments
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {rows[2].row1.resourceName}
                        </th>
                        <td className="px-6 py-4">
                            <a
                            href={rows[2].row1.url}
                            target="_blank">Click Here</a>
                        </td>
                        <td className="px-6 py-4">
                            {rows[2].row1.category}
                        </td>
                        <td className="px-6 py-4 text-balance">
                            {rows[2].row1.comments}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {rows[3].row2.resourceName}
                        </th>
                        <td className="px-6 py-4">
                            <a
                            href={rows[3].row2.url}
                            target="_blank">Click Here</a>
                        </td>
                        <td className="px-6 py-4">
                            {rows[3].row2.category}
                        </td>
                        <td className="px-6 py-4 text-balance">
                            {rows[3].row2.comments}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {rows[4].row3.resourceName}
                        </th>
                        <td className="px-6 py-4">
                            <a
                            href={rows[4].row3.url}
                            target="_blank">Click Here</a>
                        </td>
                        <td className="px-6 py-4">
                            {rows[4].row3.category}
                        </td>
                        <td className="px-6 py-4 text-balance">
                            {rows[4].row3.comments}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
};

export default Table;
