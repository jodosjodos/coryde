const Population = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 py-5">
      <h1 className="text-4xl">Our Population</h1>
    <div className="flex flex-row items-center justify-center sm:flex-col md:flex-row lg:flex-row  lg:gap-40 md:gap-8">
      <div className="bg-[#D9D9D9] flex items-center justify-center flex-col p-5 gap-3 rounded-md">
        <p>Our total population of the</p>
        <p> total users today is tend</p>
        <p> to be:</p>
        <p className="text-[#EC9D0C] text-2xl">1789+</p>
      </div>
      <div className="bg-[#D9D9D9] flex items-center justify-center flex-col p-5 gap-3 rounded-md">
        <p>With the continuation of</p>
        <p> the project we except to</p>
        <p> gain more than:</p>
        <p className="text-[#EC9D0C] text-2xl">5000+</p>
      </div>
      <div className="bg-[#D9D9D9] flex items-center justify-center flex-col p-5 gap-3 rounded-md">
        <p>With the project we except</p>
        <p> to profit more than :</p>
        <p className="text-[#EC9D0C] text-2xl"> 3000+ people</p>
        <p> So to gain more than :</p>
        <p className="text-[#EC9D0C] text-2xl"> 1 Million+ RWF </p>
      </div>
    </div>
    </div>

  );
};

export default Population;
