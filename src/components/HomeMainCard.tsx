const HomeMainCard = () => {
  return (
    <div className="relative">
      <div className="flex justify-content  px-3">
        <img
          src="assets/landing.png"
          alt="landing image"
          className="object-cover w-full   brightness-75"
        />
      </div>
      <div className="absolute   left-80  top-[34em] flex  flex-col gap-20">
        <h1
          className="text-4xl text-white flex flex-col
             gap-7"
        >
          <p className="text-[2em]">Cheap and & Trusted</p>
          <p className="text-[2em]"> Taxi Company</p>
        </h1>
        <h1
          className="text-4xl text-white 
             gap-7 flex flex-col justify-center items-center"
        >
          <p className="text-4xl">Enjoy your comfortable  journey with 
         </p>
          <p className="text-4xl"> Coryde company Taxi</p>
        </h1>

       <div className="flex flex-row gap-16">
        <div className="bg-[#FFA500] flex flex-row w-9/12  justify-between p-3">
          <p className="text-white text-3xl">Get Started</p>
          <img src="/assets/arrow.png" alt="arrow "  className="w-10 h-10"/>
        </div>
        <div className="bg-[#FFA500] flex flex-row w-9/12  justify-between p-3">
          <p className="text-white text-3xl">View New Orders</p>
          <img src="/assets/arrow.png" alt="arrow "  className="w-10 h-10"/>
        </div>
       </div>
      </div>
    </div>
  );
};

export default HomeMainCard;
