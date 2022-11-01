import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {ar} from "../../Dashboard/Upcoming/upcoming";
const RCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  console.log(ar[0]);
  return (
    <div className="md:block imageContainer rounded-l-2xl items-center ">
      <Calendar onChange={onChange} value={new Date()}/>
    </div>
  );
};

export default RCalendar;
