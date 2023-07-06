import { useState } from "react";

const Step1Container = () => {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);

  console.log(selected1);

  const handleBgColor1 = () => {
    setSelected1((prev) => !prev);
    setSelected2(false);
    setSelected3(false);
    setSelected4(false);
  };

  const handleBgColor2 = () => {
    setSelected2((prev) => !prev);
    setSelected1(false);
    setSelected3(false);
    setSelected4(false);
  };

  const handleBgColor3 = () => {
    setSelected3((prev) => !prev);
    setSelected1(false);
    setSelected2(false);
    setSelected4(false);
  };

  const handleBgColor4 = () => {
    setSelected4((prev) => !prev);
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10  font-mako">
      <h1 className="text-3xl">Step 1 : Select Car Type</h1>
      <div className=" container p-5 bg-[#D3D2D2] flex flex-col gap-3">
        <p className="text-[#FFA500]">Choose Car______</p>
        <p className=" font-mako text-2xl">Select Vehicle Type</p>
        <div className="flex flex-row gap-2">
          <div
            className={` ${
              selected1 ? "bg-[#030D27]" : "bg-white"
            } flex flex-col  justify-center items-center   px-10   w-4/12`}
            onClick={handleBgColor1}
          >
            <div>
              <img
                src={`/assets/${selected1 ? "carWhite.png" : "microBus.png"}`}
                alt="  taxi "
                className={`object-contain h-14 w-14`}
              />
            </div>
            <p className={`${selected1 ? "text-white" : "text-[#030D27]"}`}>
              Taxi
            </p>
          </div>
          <div
            className={` ${
              selected2 ? "bg-[#030D27]" : "bg-white"
            } flex flex-col  justify-center items-center   px-10   w-4/12`}
            onClick={handleBgColor2}
          >
            <div>
              <img
                src={`/assets/${selected2 ? "carWhite.png" : "microBus.png"}`}
                alt=" micro bus"
                className="object-contain h-14 w-14"
              />
            </div>
            <p className={`${selected2 ? "text-white" : "text-[#030D27]"}`}>
              Micro-Bus
            </p>
          </div>
          <div
            className={` ${
              selected3 ? "bg-[#030D27]" : "bg-white"
            } flex flex-col  justify-center items-center   px-10   w-4/12`}
            onClick={handleBgColor3}
          >
            <div>
              <img
                src={`/assets/${selected3 ? "carWhite.png" : "microBus.png"}`}
                alt=" min bus"
                className="object-contain h-14 w-14"
              />
            </div>
            <p className={`${selected3 ? "text-white" : "text-[#030D27]"}`}>
              Mini-Bus
            </p>
          </div>
          <div
            className={` ${
              selected4 ? "bg-[#030D27]" : "bg-white"
            } flex flex-col  justify-center items-center   px-10   w-4/12`}
            onClick={handleBgColor4}
          >
            <div>
              <img
                src={`/assets/${selected4 ? "carWhite.png" : "microBus.png"}`}
                alt=" Van bus"
                className="object-contain h-14 w-14"
              />
            </div>
            <p className={`${selected4 ? "text-white" : "text-[#030D27]"}`}>
              Van
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1Container;
