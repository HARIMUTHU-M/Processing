import React from "react";
import { useLocation } from "react-router-dom";
const Description=()=>{
    const location =useLocation()
    return(
        // <div classNameName="bg-[#f0f2f5] h-screen flex">
        //     {/* <textarea name="desc" id="desc" cols="30" rows="10" classNameName="bg-black text-white">
        //     </textarea> */}
        //     <div classNameName=" box-border ml-[10rem] h-[1200px] w-[900px] mt-10">{location.state.desc}</div>
        // </div>

        <div className="bg-[#f0f2f5] flex flex-col">
    <table className="w-[70%] my-[5rem] m-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-5 px-10">
                    Event
                </th>
                <th scope="col" className="py-5 px-10">
                    Details
                </th>
                
            </tr>
        </thead>
        <tbody className="text-lg">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Event Name
                </th>
                <td className="py-4 px-6">
                {location.state.name}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Event Date
                </th>
                <td className="py-4 px-6">
                {location.state.date}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Summary
                </th>
                <td className="py-4 px-6">
                {location.state.summary}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Organizer
                </th>
                <td className="py-4 px-6">
                {location.state.org}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Department
                </th>
                <td className="py-4 px-6">
                {location.state.dept}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Event category
                </th>
                <td className="py-4 px-6">
                {location.state.cate}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Venue
                </th>
                <td className="py-4 px-6">
                {location.state.venu}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Event type
                </th>
                <td className="py-4 px-6">
                {location.state.type}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Event Time
                </th>
                <td className="py-4 px-6">
                {location.state.time}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Contact details
                </th>
                <td className="py-4 px-6">
                {location.state.cont}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Detailed description
                </th>
                <td className="py-4 px-6">
                {location.state.desc}
                </td>
            </tr>
        </tbody>
    </table>
    <button 
          className="text-lg font-bold relative m-auto mb-[4rem] text-black bg-blue-400 rounded-lg hover:bg-blue-500 h-[2.5rem] w-[6rem]">
          Register
        </button>
</div>
    )
}
export default Description