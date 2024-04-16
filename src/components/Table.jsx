"use client"

const Table = () => {
  return (
    <div className="relative overflow-x-auto bg-primary-white mb-24">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="py-5 font-sans text-xl text-left rtl:text-right text-white bg-primary-black dark:text-white dark:bg-gray-800">
                    Videos
                    <p className="mt-1 text-lg font-sans text-white dark:text-gray-400">
                        All random video links I have picked up around the internet.</p>
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
                            React 19 Course
                        </th>
                        <td className="px-6 py-4">
                            <a
                            href="https://www.youtube.com/watch?v=LDB4uaJ87e0&t=1616s"
                            target="_blank">Click Here</a>
                        </td>
                        <td className="px-6 py-4">
                            Coding
                        </td>
                        <td className="px-6 py-4 text-balance">
                            Goes through some of the new updates in React 19 including the compiler and removal of certain hooks.
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Kingdom Hearts Guide
                        </th>
                        <td className="px-6 py-4">
                        <a
                            href="https://www.youtube.com/watch?v=KspEEt7k3G0"
                            target="_blank">Click Here</a>
                        </td>
                        <td className="px-6 py-4">
                            Gaming
                        </td>
                        <td className="px-6 py-4">
                            Guide for the first boss in Traverse town on proud mode I kept getting stuck on.
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Challengers Review
                        </th>
                        <td className="px-6 py-4">
                        <a
                            href="https://www.youtube.com/watch?v=HB_S6Ovunjc&t=1s"
                            target="_blank">Click Here</a>
                        </td>
                        <td className="px-6 py-4">
                            Movie Reviews
                        </td>
                        <td className="px-6 py-4">
                            Was thinking about seeing this film. One of my favorite reviewers is giving his opinion here.
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
