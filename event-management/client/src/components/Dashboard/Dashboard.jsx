import React from "react";
import Upcoming from "./Upcoming/upcoming";
import Welcome from "./Welcome/Welcome";
import Calendar from "./Calender/calendar";
import Search from "./Search/search";
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'

function App() {
  return (
    <div className="bg-[#f0f2f5] h-screen">
      <div className="flex flex-row justify-around">
        <div className="flex flex-col ">
          <div className="box-border mt-[5rem] h-[170px] w-[370px]  border-2 bg-white shadow-2xl">
            <Welcome />
          </div>
          <div className="h-[300px] w-[350px] mt-[6rem] shadow-2xl">
            <Calendar />
          </div>
        </div>
        <div>
          <div className="ml-[60px]">
            <Search />
          </div>
          <h1 className="marquee font-bold ">Upcoming...</h1>
          <div className="overflow-y-scroll h-[520px] w-[500px]">
            <Upcoming />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="box-border mt-[5rem] h-[170px] w-[370px]  border-2 bg-white shadow-2xl">
            <div className="text-center mt-3 text-2xl font-bold">Rating</div>
            <div className="flex ml-[8rem] mt-3">
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            <div className="flex mt-5">
              <AiFillGithub size={30} className="ml-[3rem]"></AiFillGithub>
              <AiFillLinkedin size={30} className="ml-7"></AiFillLinkedin>
              <AiFillTwitterCircle size={30} className="ml-7"></AiFillTwitterCircle>
              <AiFillFacebook size={30} className="ml-7"></AiFillFacebook>
              <RiWhatsappFill size={30} className="ml-7"></RiWhatsappFill>
            </div>
          </div>
          <div className="box-border mt-[6rem] h-[310px] w-[370px]  border-2 bg-white shadow-2xl">
            <div className="text-center mt-3 text-2xl font-bold">
              Recent Avtivities
            </div>
            <div className="text-lg mt-5 ml-10 ">
              <p >Participated in Smart Hackathon</p>
              <p className="mt-2">Participated in IEEE Seminar</p>
              <p className="mt-2">Participated in Music Club</p>
              <p className="mt-2">Participated in C Star contest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
