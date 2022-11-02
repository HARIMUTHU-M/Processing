import React, { useEffect,useState } from 'react'
import Axios from 'axios'
const Enroll = () => {
    const[event,setevent]=useState([])
   useEffect(()=>{
    Axios.get('http://localhost:3001/admin/eve').then(function (response) {
          setevent(response.data)
          console.log(response.data)
        })
   },[])
  return (
    <div className="bg-[#f0f2f5] relative h-auto">
      <div className="mx-auto container py-20 px-6">
          <div className="grid grid-cols-3 gap-10 ">
          {event.map((eve)=>(
              <div className="rounded ">
                  <div className="w-full h-[20rem] flex flex-col justify-between dark:bg-gray-700 dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4 ">
                      <div>
                          <h4 className=" text-white font-bold text-2xl text-center m-3">{eve.name}</h4>
                      {eve.res1.map((res)=>(
                          <li className=" text-white text-xl mt-1">{res.user}</li>
                          ))}
                      </div>
                      <div>
                      </div>
                  </div>
        </div>
          ))}
        </div>
        </div>
        </div>
    // <div className='relative h-screen'>{
    // event.map((eve)=>{
    //             return(
    //               <div className='font-bold grid grid-cols-2'>
    //                 <h1>{eve.name}</h1>
    //                 {
    //                   eve.res1.map((res)=>(
    //                     <h1 className=''>{res.user}</h1>
    //                   ))
    //                 }
    //               </div>
    //             )
    //           })
    //   }
    // </div>
  )
}

export default Enroll


