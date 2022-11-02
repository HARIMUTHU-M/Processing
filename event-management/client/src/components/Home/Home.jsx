import React, { useState, useEffect } from "react";
import Account from "../Account/Account";
import Axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/authSlice";

const Home = () => {
  const user = useSelector(selectCurrentUser);
  // eslint-disable-next-line no-unused-vars
  const [event, setEvent] = useState([]);

  // const dispatch = useDispatch();
  useEffect(() => {
    Axios.get("http://localhost:3001/userApi/eve").then(response => {
      setEvent(response.data);
      console.log(response.data);
    });
    console.log(user);
  }, [user]);

  return user ? (
    <div className="bg-[url('clgimg.jpg')] bg-cover font-medium h-screen flex flex-col items-center justify-center">
      <Account/>
    </div>
  ) : (
 <div className="bg-gray-300 h-screen"> 
  <div className="text-black font-bold text-4xl text-center pt-[2rem]">
    <p>Exciting Events!!!</p>
    <p className="pt-[1rem]">Experience the joy of Participation!</p>
  </div>
<div 
  id="carouselExampleIndicators"
  className="carousel slide relative"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    
        {
      event.map((eve,i)=>i===0?(<button 
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={`${i}`}
        className="active bg-white"
        aria-current="true"
        aria-label="Slide 1"
      ></button>):(
        <button
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={`${i}`}
        className="bg-white"
        aria-label="Slide 1"
      ></button>
      ))
    }
    
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
     {
      event.map((eve,i)=>i===0?(<div className="carousel-item active relative float-left w-full">
      <div className="bg-[url('./images/bghom.jpg')] bg-cover mt-[3rem] ml-[28rem] h-[30rem] w-[50rem]  border-2 shadow-2xl ">
      <h5 className="mt-[3rem] text-center m-auto text-4xl font-bold tracking-tight text-gray-300 border-[5px] w-[50%] border-white p-4">
            {eve.name}
          </h5>
          <h5 className="mt-[3rem] text-center text-2xl font-bold tracking-tight text-gray-300">
            {eve.summary}
          </h5>
          <h5 className="mt-[3rem] text-center text-2xl font-bold tracking-tight text-gray-300 ">
            Organized by {eve.org}
          </h5>
      </div>
      </div>):(
        <div className="carousel-item  relative float-left ">
      <div className="bg-[url('./images/bghom.jpg')] bg-cover mt-[3rem] ml-[28rem] h-[30rem] w-[50rem]  border-2 shadow-2xl ">
      <h5 className="mt-[3rem] text-center m-auto text-4xl font-bold tracking-tight text-gray-300 border-[5px] w-[50%] border-white p-4">
            {eve.name}
          </h5>
          <h5 className="mt-[3rem] text-center text-2xl font-bold tracking-tight text-gray-300 ">
            {eve.summary}
          </h5>
          <h5 className="mt-[3rem] text-center text-2xl font-bold tracking-tight text-gray-300 ">
            Organized by {eve.org}
          </h5>
      </div>
      </div>
      ))
    } 
  </div>
  <div className="carousel-dark">
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
  );
};

export default Home;
