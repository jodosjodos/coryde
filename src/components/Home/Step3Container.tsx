
import CalendarPicker from '../CalendarPicker';

const Step3Container = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 font-mako">
      <h1 className="text-3xl">Step 3: Book the date and Time</h1>
      <div className="container p-5 bg-gray-300 flex flex-col gap-3">
        <p className="text-[#FFA500]">Select Your Booking Appointment Date________</p>
        <p className="font-mako text-2xl">Booking Date</p>
        <div className=" flex   flex-grow-1 rounded-lg">
          <CalendarPicker />
        </div>
      </div>
    </div>
  );
};

export default Step3Container;
