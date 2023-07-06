const Step4Container = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10  font-mako">
      <h1 className="text-3xl">Step 4:Fill in extra details</h1>
      <div className=" container p-5 bg-[#D3D2D2] flex flex-col gap-4">
        <p className="text-[#FFA500]">Select All your Details________ </p>
        <p className=" font-mako text-2xl">Extra-Details</p>
        <div className="bg-[#BCBCBC] flex flex-row items-center justify-between rounded-md px-7 py-3">
          <span>With Goods</span>
          <input
            type="number"
            placeholder="Quantity"
            className=" bg-[#BCBCBC] focus:outline-none placeholder:text-black "
            name="quantity"
          />
          <button className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm ">
            Select Now
          </button>
        </div>
        <div className="bg-[#BCBCBC] flex flex-row items-center justify-between rounded-md px-7 py-3">
          <span>With Sick Person</span>
          <input
            type="number"
            placeholder="How many"
            className=" bg-[#BCBCBC] focus:outline-none placeholder:text-black "
            name="quantity"
          />
          <button className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm ">
            Select Now
          </button>
        </div>
        <div className="bg-[#BCBCBC] flex flex-row items-center justify-between rounded-md px-7 py-3">
          <span>With Old person </span>
          <div className="flex flex-row gap-6">
            {/* styling radios how to remove those rouded cycles */}
            <input
              type="radio"
              className=" bg-[#BCBCBC] focus:outline-none placeholder:text-black "
              name="disability"
              value="No"
            />
            No <br />
            <input
              type="radio"
              placeholder="Yes  No"
              className=" bg-[#BCBCBC] focus:outline-none placeholder:text-black hover:cursor-pointer   "
              name="oldPerson"
              value="Yes"
            />{" "}
            yes <br />
          </div>
          <button className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm ">
            Select Now
          </button>
        </div>
        <div className="bg-[#BCBCBC] flex flex-row items-center justify-between rounded-md px-7 py-3">
          <span>With Any disability </span>
          <div className="flex flex-row gap-6">
            {/* styling radios how to remove those rouded cycles */}
            <input
              type="radio"
              className=" bg-[#BCBCBC] focus:outline-none placeholder:text-black "
              name="disability"
              value="No"
            />
            No <br />
            <input
              type="radio"
              placeholder="Yes  No"
              className=" bg-[#BCBCBC] focus:outline-none placeholder:text-black hover:cursor-pointer   "
              name="disability"
              value="Yes"
            />{" "}
            yes <br />
          </div>

          <button className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm ">
            Select Now
          </button>
        </div>
        <div className="bg-[#BCBCBC] flex flex-row items-center justify-between rounded-md px-7 py-3">
          <span> With National Identity Card </span>
          <div className="flex flex-row gap-6 ">
            {/* styling radios how to remove those rouded cycles */}
            <input
              type="radio"
              className=" bg-[#BCBCBC] focus:outline-none placeholder:text-black "
              name="disability"
              value="No"
            />
            No <br />
            <input
              type="radio"
              placeholder="Yes  No"
              className=" bg-[#BCBCBC] focus:outline-none placeholder:text-black hover:cursor-pointer   "
              name="NIC"
              value="Yes"
            />{" "}
            yes <br />
          </div>
          <button className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm ">
            Select Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4Container;
