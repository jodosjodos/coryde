

const Step3Container = () => {
  return (
    <div  className="flex flex-col justify-center items-center gap-10  font-mako">
      <h1 className="text-3xl">Step 3: Book the date and Time</h1>
      <div className=" container p-5 bg-[#D3D2D2] flex flex-col gap-3">
        <p className="text-[#FFA500]">Select Your Booking Appointment Date_______</p>
        <p  className=" font-mako text-2xl">Booking Date</p>
        <div>
            {/* calendar do that using material ui */}
            <p>Calendar with MUI</p>
        </div>
      </div>
    </div>
  )
}

export default Step3Container
