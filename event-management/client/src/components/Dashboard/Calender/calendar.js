import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const RCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="md:block imageContainer rounded-l-2xl items-center ">
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
    </div>
  );
};

export default RCalendar;
