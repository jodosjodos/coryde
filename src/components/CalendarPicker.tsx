import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { DateActions } from "../store/reducers/DateSlice";

const CalendarPicker: React.FC = () => {
  const dispatch = useDispatch();
  const initialDate = useSelector((state: RootState) => state.date.date);

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(initialDate)
  );

  const handleDateChange = (date: Date | null) => {
    if (date) {
      console.log(typeof date.toLocaleDateString());

      setSelectedDate(date);
      dispatch(DateActions.changeDate(date.toISOString()));
    }
  };

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
  }: {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
  }) => {
    return (
      <div className="flex flex-row gap-5  h-full justify-center text-2xl bg-[#FFA500] text-white py-2 px-1">
        <button onClick={decreaseMonth}>{"<"}</button>
        <div>
          {date.toLocaleString("default", { month: "long", year: "numeric" })}
        </div>
        <div>
          <button onClick={increaseMonth}>{">"}</button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeIntervals={30}
        dateFormat="dd MMMM yyyy , h:mm aa"
        placeholderText="Select Date and Time"
        renderCustomHeader={renderCustomHeader}
        closeOnSelect
        className="py-2 px-3 font-bold content  w-60 border-[#FFA500] border-2  focus:outline-none text-white bg-[#FFA500] rounded-lg hover:cursor-pointer"
      />
    </div>
  );
};

export default CalendarPicker;
