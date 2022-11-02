import React, { useEffect, useState } from "react";
import Axios from "axios";

const Enroll = () => {
  const [event, setevent] = useState([]);

  const registeredPhonenumber = [];

  useEffect(() => {
    Axios.get("http://localhost:3001/admin/eve").then((response) => {
      setevent(response.data);
      console.log(response.data);
    });
  }, []);

  const Notify = (eventname) => {
    Axios.post("http://localhost:3001/admin/notify", {
      notify: true,
      phonenos: registeredPhonenumber,
      eventname
    }).then(() => alert("Notified"));
  };

  return (
    <div className="bg-[#f0f2f5] relative h-auto">
      <div className="mx-auto container py-20 px-6">
        <div className="grid grid-cols-3 gap-10 ">
          {event.map((eve) => (
            <div className="rounded ">
              <div className="w-full h-[20rem] flex flex-col justify-between bg-gray-700 border border-gray-700 rounded-lg  mb-6 py-5 px-4 ">
                <div>
                  <h4 className=" text-white font-bold text-2xl text-center m-3">
                    {eve.name}
                  </h4>
                  {eve.res1.map((res) => {
                    registeredPhonenumber.push(res.userphonenumber)
                    return (
                      <li key={res.id} className=" text-white text-xl mt-1">
                        {res.user}
                      </li>
                    );
                  })}
                  <button
                    onClick={() => {
                      Notify(eve.name);
                    }}
                    className="p-2 border-2 items-end border-black rounded-md font-bold hover:bg-black hover:text-white"
                  >
                    Notify All
                  </button>
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
  );
};

export default Enroll;
