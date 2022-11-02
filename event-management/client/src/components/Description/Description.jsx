import React from "react";
import { useLocation } from "react-router-dom";
import { selectCurrentUser} from "../../features/authSlice";
import { useSelector} from "react-redux";
import axios from "axios"
const Description=()=>{
    const location =useLocation()
    const user = useSelector(selectCurrentUser);
    function Register_eve(id,name,summary,date,org,dept,cate,venu,type,time,cont,desc){
        axios.post('http://localhost:3001/userApi/register-eve',{user:user.regno,id,name,summary,date,org,dept,cate,venu,type,time,cont,desc}).then(function (response) {
            console.log(response.data)
          })
      }
    return(
        // <div classNameName="bg-[#f0f2f5] h-screen flex">
        //     {/* <textarea name="desc" id="desc" cols="30" rows="10" classNameName="bg-black text-white">
        //     </textarea> */}
        //     <div classNameName=" box-border ml-[10rem] h-[1200px] w-[900px] mt-10">{location.eve.desc}</div>
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
                {location.state.eve.name}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Event Date
                </th>
                <td className="py-4 px-6">
                {location.state.eve.date}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Summary
                </th>
                <td className="py-4 px-6">
                {location.state.eve.summary}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Organizer
                </th>
                <td className="py-4 px-6">
                {location.state.eve.org}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Department
                </th>
                <td className="py-4 px-6">
                {location.state.eve.dept}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Event category
                </th>
                <td className="py-4 px-6">
                {location.state.eve.cate}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Venue
                </th>
                <td className="py-4 px-6">
                {location.state.eve.venu}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Event type
                </th>
                <td className="py-4 px-6">
                {location.state.eve.type}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Event Time
                </th>
                <td className="py-4 px-6">
                {location.state.eve.time}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Contact details
                </th>
                <td className="py-4 px-6">
                {location.state.eve.cont}
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Detailed description
                </th>
                <td className="py-4 px-6">
                {location.state.eve.desc}
                </td>
            </tr>
        </tbody>
    </table>
    {location.state.reg!=1?
    <button 
    onClick={()=>{Register_eve(location.state.eve._id,location.state.eve.name,location.state.eve.summary,location.state.eve.date,location.state.eve.org,location.state.eve.dept,location.state.eve.cate,location.state.eve.venu,location.state.eve.type,location.state.eve.time,location.state.eve.cont,location.state.eve.desc)}}
          className="text-lg font-bold relative m-auto mb-[4rem] text-black bg-blue-400 rounded-lg hover:bg-blue-500 h-[2.5rem] w-[6rem]">
          Register
        </button>
    :
    <></>
}
</div>
    )
}
export default Description