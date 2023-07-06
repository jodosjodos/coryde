import { useState } from "react";

 type ValueType=number

const Step2Container = () => {
const [selectedValue,setSelectedValue]=useState<ValueType | null>(null)
console.log(selectedValue);

const handleValueSelected=(value :ValueType)=>{
  setSelectedValue(value)
}

  return (
    <div className="flex flex-col justify-center items-center gap-10  font-mako">
      <h1 className="text-3xl">Step 2:Select Your Pay Plan </h1>
      <div className=" container p-5 bg-[#D3D2D2] flex flex-col gap-3">
        <p className="text-[#FFA500]">Choose plan ____</p>
        <p className=" font-mako text-2xl">Select pricing plan</p>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col items-center justify-center py-3  w-4/12   bg-[#BCBCBC] px-10 gap-2">
            <h4 className="text-[#030D2780]">Basic Book</h4>
            <p className={`${selectedValue === 3000 ?"text-[#FFA500]":""}`}>3000 FRW</p>
            <div className="flex flex-row bg-[#022A58] gap-3 p-1 text-white">
              <img
                src="/assets/time.png"
                alt=" time loogo"
                className="object-contain w-6 h-6 "
              />
              <p>A day</p>
            </div>
            <div className="flex flex-col bg-white justify-center items-center px-6 ">
              <ul className=" list-inside   my-2 list-decimal">
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
              <button className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm my-4" onClick={()=>handleValueSelected(3000)}>
                Select Now
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-3    w-4/12  bg-[#BCBCBC] px-10 gap-2">
            <h4 className="text-[#030D2780]">Basic Book</h4>
            <p className={`${selectedValue === 4000 ?"text-[#FFA500]":""}`}>4000 FRW</p>
            <div className="flex flex-row bg-[#022A58] gap-3 p-1 text-white">
              <img
                src="/assets/time.png"
                alt=" time loogo"
                className="object-contain w-6 h-6 "
              />
              <p>A day</p>
            </div>
            <div className="flex flex-col bg-white justify-center items-center px-6 ">
              <ul className=" list-inside   my-2 list-decimal">
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
              <button className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm my-4" onClick={()=>handleValueSelected(4000)}>
                Select Now
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-3   w-4/12   bg-[#BCBCBC] px-10 gap-2">
            <h4 className="text-[#030D2780]">Basic Book</h4>
            <p className={`${selectedValue === 5000 ?"text-[#FFA500]":""}`}>5000 FRW</p>
            <div className="flex flex-row bg-[#022A58] gap-3 p-1 text-white">
              <img
                src="/assets/time.png"
                alt=" time loogo"
                className="object-contain w-6 h-6 "
              />
              <p>A day</p>
            </div>
            <div className="flex flex-col bg-white justify-center items-center px-6 ">
              <ul className=" list-inside   my-2 list-decimal">
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
              <button className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm my-4" onClick={()=>handleValueSelected(5000)}>
                Select Now
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-3    w-4/12  bg-[#BCBCBC] px-10 gap-2">
            <h4 className="text-[#030D2780]">Basic Book</h4>
            <p className={`${selectedValue === 6000 ?"text-[#FFA500]":""}`}> 6000 FRW</p>
            <div className="flex flex-row bg-[#022A58] gap-3 p-1 text-white">
              <img
                src="/assets/time.png"
                alt=" time loogo"
                className="object-contain w-6 h-6 "
              />
              <p>A day</p>
            </div>
            <div className="flex flex-col bg-white justify-center items-center px-6 ">
              <ul className=" list-inside   my-2 list-decimal">
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
              <button className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm my-4" onClick={()=>handleValueSelected(6000)}>
                Select Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2Container;
