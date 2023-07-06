const Step5container = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10  font-mako mb-16">
      <h1 className="text-3xl">Step 5: Fill Car & Personal Details</h1>
      <div className=" container p-5 bg-[#D3D2D2] flex flex-col gap-4">
        <p className="text-[#FFA500]">Enter Your Details __________</p>
        <p className=" font-mako text-2xl">Booking Details</p>
        <div className="grid  grid-cols-3  grid-rows-5 gap-x-16 px-5 gap-y-20 ">
          <div className="bg-white flex flex-row gap-20 items-center justify-center w-full h-32 py-7 px-16 hover:cursor-pointer">
            <div className="flex flex-col gap-1">
              <p>Vehicle Type</p>
              <p className="text-[#FFA500]">Microbus</p>
            </div>
            <div>
              <img
                src="/assets/microBus.png"
                alt=" bus type that is selected"
                className=" object-contain w-16"
              />
            </div>
          </div>
          <div className="bg-white flex flex-row gap-20 items-center justify-center w-full h-32 py-7 px-16">
            <div className="flex flex-col gap-1">
              <p>Pricing Plan</p>
              <p className="text-[#FFA500]">No Plan Selected</p>
            </div>
            <div>
              <img
                src="/assets/plan.png"
                alt="  plan selected"
                className=" object-contain w-14"
              />
            </div>
          </div>
          <div className="bg-white flex flex-row gap-20 items-center justify-center w-full h-32 py-7 px-16">
            <div className="flex flex-col gap-1">
              <p>Extra Features</p>
              <p className="text-[#FFA500]">No Extra Feature Selected</p>
            </div>
            <div>
              <img
                src="/assets/add.png"
                alt=" extra features selected"
                className=" object-contain w-14"
              />
            </div>
          </div>
          <div className="bg-white flex flex-row gap-10 items-center justify-center w-full h-32 py-7 px-5">
            <div className="flex flex-col gap-1">
              <p>Booking Date</p>
              <p className="text-[#FFA500]">No Date Selected</p>
            </div>
            <div>
              <img
                src="/assets/Calendar.png"
                alt="  date selected"
                className=" object-contain w-10"
              />
            </div>
          </div>
          <div className="bg-white flex flex-row gap-10 items-center justify-center w-full h-32 py-7 px-5">
            <div className="flex flex-col gap-1">
              <p>Extra Details</p>
              <p className="text-[#FFA500]">Goods, Sick Person</p>
            </div>
            <div>
              <img
                src="/assets/extraDetailes.png"
                alt=" extra Details selected"
                className=" object-contain w-10"
              />
            </div>
          </div>
          <div className="bg-white flex flex-row gap-10 items-center justify-center w-full h-32 py-7 px-5">
            <div className="flex flex-col gap-1">
              <p>Total Amount</p>
              <p className="text-[#FFA500]">$0.00</p>
            </div>
            <div>
              <img
                src="/assets/saved.png"
                alt=" total amount"
                className=" object-contain w-12"
              />
            </div>
          </div>
          <div className="w-full h-16 ">
            <input
              type="text"
              placeholder="First Name *"
              name="firstName"
              className=" w-full h-full bg-[#BCBCBC] border-none focus:outline-none  placeholder:text-xl  px-7  font-semibold"
            />
          </div>
          <div className="w-full h-16 ">
            <input
              type="text"
              placeholder="Email *"
              name="email"
              className=" w-full h-full bg-[#BCBCBC] border-none focus:outline-none  placeholder:text-xl  px-7  font-semibold"
            />
          </div>
          <div className="w-full h-16 ">
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              className=" w-full h-full bg-[#BCBCBC] border-none focus:outline-none  placeholder:text-xl  px-7  font-semibold"
            />
          </div>
          <div className="w-full h-16 ">
            <input
              type="text"
              placeholder="National Identity Card 
Number *"
              name="NIC"
              className=" w-full h-full bg-[#BCBCBC] border-none focus:outline-none  placeholder:text-xl  px-7  font-semibold"
            />
          </div>
          <div className="w-full h-16 ">
            <input
              type="text"
              placeholder="Current Destination"
              name="currentDestination"
              className=" w-full h-full bg-[#BCBCBC] border-none focus:outline-none  placeholder:text-xl  px-7  font-semibold"
            />
          </div>
          <div className="w-full h-16 ">
            <input
              type="text"
              placeholder="Final Destination"
              name="finalDestination"
              className=" w-full h-full bg-[#BCBCBC] border-none focus:outline-none  placeholder:text-xl  px-7  font-semibold"
            />
          </div>
          <div className=" col-start-1 col-span-3  h-16 ">
            {/* how to style that being entered */}
            <textarea
              name="extraDetails"
              id="extraDetails"
              className=" w-full h-full p-2  bg-[#BCBCBC] focus:outline-none placeholder:p-2 text-semibold text-xl"
              placeholder="extra Details "
            ></textarea>
          </div>
        <button className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm  w-7/12  h-16">Confirm Booking</button>
        </div>
      </div>
    </div>
  );
};

export default Step5container;
