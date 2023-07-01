const PrimarySection = () => {
  return (
    <div className="relative">
      <div className="flex justify-content  px-3">
        <img
          src="assets/landing.png"
          alt="landing image"
          className="object-cover w-full opacity-75"
        />
      </div>
      <div className="absolute   left-80  top-[34em] flex  flex-col gap-20">
        <h1
          className="text-4xl text-white flex flex-col
             gap-7"
        >
          <p className="text-[2em]">Premium Car Book</p>
          <p className="text-[2em]">Sit In Rwanda</p>
        </h1>

        <div className=" h-[5em]  w-64 rounded-lg p-1 flex flex-row ">
          <p className="text-white w-6/12 flex justify-center items-center bg-[#FFA500] rounded-l-lg border-4 border-[#FFA500]">
            Cars
          </p>
          <p className="text-black w-6/12 flex justify-center items-center bg-white rounded-r-lg border-4 border-[#FFA500]">
            Vans
          </p>
        </div>
        <div className="bg-[#ccc] p-10 h-24 text-2xl border-1 rounded-lg flex  items-center flex-row gap-10 justify-evenly ml-6">
          <p className="border-r-2  flex flex-row gap-2 pr-5 border-gray-400">
            <span>
              <img src="assets/location.png" alt="" className="w-8 h-8" />
            </span>{" "}
            <span>Pick up</span>
          </p>
          <p className="border-r-2  pr-4 border-gray-400 flex flex-row gap-3">
            <span>
              <img src="assets/home.png" alt="" className="w-8 h-8" />
            </span>{" "}
            <span>Pick Down</span>
          </p>
          <p className="border-r-2  pr-4 border-gray-400 flex flex-row gap-3">
            <span>
              <img
                src="/assets/Calendar.png"
                alt="calendar logo"
                className="w-8 h-8"
              />
            </span>{" "}
            <span>Pick Date/Time</span>
          </p>
          <button className="text-white bg-[#EC9D0C] px-7 py-3 rounded-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimarySection;
