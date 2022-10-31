import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [summary, setsummary] = useState("");
  const [org, setorg] = useState("");
  const [dept, setdept] = useState("");
  const [cate, setcate] = useState("");
  const [venu, setvenu] = useState("");
  const [type, settype] = useState("");
  const [time, settime] = useState("");
  const [cont, setcont] = useState("");
  const [desc, setdesc] = useState("");

  function Submit() {
    axios
      .post("http://localhost:3001/admin/add", {
        name,
        date,
        summary,
        org,
        dept,
        cate,
        venu,
        type,
        time,
        cont,
        desc,
      })
      .then(() => {
        alert("submited");
      });
  }
  return (
    <div className="bg-[#f0f2f5] h-screen flex">
      <div className="p-10 h-[5000px] w-[1200px] rounded-lg bg-white shadow-black shadow-2xl mt-[5rem] ">
        <div className="flex flex-col py-2">
          <label className="text-lg font-bold pt-2 text-black">
            Event Name
          </label>
          <input
            className="border-2 mt-2 border-black p-2 rounded-md"
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
            placeholder="Enter Event Name "
          />
          <label className="text-lg font-bold pt-2 text-black">
            Event Date
          </label>
          <input
            className="border-2 mt-2 border-black p-2 rounded-md"
            type="date"
            onChange={(e) => {
              setdate(e.target.value);
            }}
            placeholder="Enter Event Date "
          />
          <label className="text-lg font-bold pt-2 text-black">Summary</label>
          <input
            className="border-2 mt-2 border-black p-2 rounded-md"
            type="text"
            onChange={(e) => {
              setsummary(e.target.value);
            }}
            placeholder="Enter Event Summary"
          />

          <label className="text-lg font-bold pt-2 text-black">Organiser</label>
          <input
            className="border-2 mt-2 border-black p-2 rounded-md"
            type="text"
            onChange={(e) => {
              setorg(e.target.value);
            }}
            placeholder="Enter Event Summary"
          />

          <label className="text-lg font-bold pt-2 text-black">
            Department
          </label>
          <input
            className="border-2 mt-2 border-black p-2 rounded-md"
            type="text"
            onChange={(e) => {
              setdept(e.target.value);
            }}
            placeholder="Enter Event Summary"
          />

          <label className="text-lg font-bold pt-2 text-black">
            Event Catrgory
          </label>
          <input
            className="border-2 mt-2 border-black p-2 rounded-md"
            type="text"
            onChange={(e) => {
              setcate(e.target.value);
            }}
            placeholder="Enter Event Summary"
          />

          <label className="text-lg font-bold pt-2 text-black">Venue</label>
          <input
            className="border-2 mt-2 border-black p-2 rounded-md"
            type="text"
            onChange={(e) => {
              setvenu(e.target.value);
            }}
            placeholder="Enter Event Summary"
          />

          <label className="text-lg font-bold pt-2 text-black">
            Event Type
          </label>
          <input
            className="border-2 mt-2 border-black p-2 rounded-md"
            type="text"
            onChange={(e) => {
              settype(e.target.value);
            }}
            placeholder="Enter Event Summary"
          />

          <label className="text-lg font-bold pt-2 text-black">Time</label>
          <input
            className="border-2 mt-2 border-black p-2 rounded-md"
            type="text"
            onChange={(e) => {
              settime(e.target.value);
            }}
            placeholder="Enter Event Summary"
          />

          <label className="text-lg font-bold pt-2 text-black">Contact</label>
          <input
            className="border-2 mt-2 border-black p-2 rounded-md"
            type="text"
            onChange={(e) => {
              setcont(e.target.value);
            }}
            placeholder="Enter Event Summary"
          />

          <label className="text-lg font-bold pt-2 text-black">
            Detailed Description
          </label>
          <textarea
            className="border-2 mt-2 border-black p-2 rounded-md"
            type="text"
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            placeholder="Enter Event Summary"
          />
          <button
            className="text-sm font-bold  mt-[3rem] ml-[6.5rem] text-black bg-blue-200 rounded-lg hover:bg-blue-400 h-[2.5rem] w-[4rem]"
            type="submit"
            onClick={Submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
