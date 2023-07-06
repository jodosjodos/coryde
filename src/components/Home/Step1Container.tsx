import { useState } from "react";

type  CarType ="taxi" | "micro-bus" | "mini-bus" | "van"


const Step1Container = () => {
  const [selected, setSelected] = useState<CarType | null>(null);

  const handleBgColor = (value:CarType | null) => {
    setSelected(value);
  };
  console.log(selected);
  

  return (
    <div className="flex flex-col justify-center items-center gap-10  font-mako">
      <h1 className="text-3xl">Step 1: Select Car Type</h1>
      <div className="container p-5 bg-[#D3D2D2] flex flex-col gap-3">
        <p className="text-[#FFA500">Choose Car______</p>
        <p className="font-mako text-2xl">Select Vehicle Type</p>
        <div className="flex flex-row gap-2">
          <div
            className={`${
              selected === "taxi" ? "bg-[#030D27]" : "bg-white"
            } flex flex-col justify-center items-center px-10 w-4/12`}
            onClick={() => handleBgColor("taxi")}
          >
            <div>
              <img
                src={`/assets/${selected === "taxi" ? "carWhite.png" : "microBus.png"}`}
                alt="taxi"
                className="object-contain h-14 w-14"
              />
            </div>
            <p className={`${selected === "taxi" ? "text-white" : "text-[#030D27]"}`}>
              Taxi
            </p>
          </div>
          <div
            className={`${
              selected === "micro-bus" ? "bg-[#030D27]" : "bg-white"
            } flex flex-col justify-center items-center px-10 w-4/12`}
            onClick={() => handleBgColor("micro-bus")}
          >
            <div>
              <img
                src={`/assets/${selected === "micro-bus" ? "carWhite.png" : "microBus.png"}`}
                alt="micro bus"
                className="object-contain h-14 w-14"
              />
            </div>
            <p className={`${selected === "micro-bus" ? "text-white" : "text-[#030D27]"}`}>
              Micro-Bus
            </p>
          </div>
          <div
            className={`${
              selected === "mini-bus" ? "bg-[#030D27]" : "bg-white"
            } flex flex-col justify-center items-center px-10 w-4/12`}
            onClick={() => handleBgColor("mini-bus")}
          >
            <div>
              <img
                src={`/assets/${selected === "mini-bus" ? "carWhite.png" : "microBus.png"}`}
                alt="mini bus"
                className="object-contain h-14 w-14"
              />
            </div>
            <p className={`${selected === "mini-bus" ? "text-white" : "text-[#030D27]"}`}>
              Mini-Bus
            </p>
          </div>
          <div
            className={`${
              selected === "van" ? "bg-[#030D27]" : "bg-white"
            } flex flex-col justify-center items-center px-10 w-4/12`}
            onClick={() => handleBgColor("van")}
          >
            <div>
              <img
                src={`/assets/${selected === "van" ? "carWhite.png" : "microBus.png"}`}
                alt="Van bus"
                className="object-contain h-14 w-14"
              />
            </div>
            <p className={`${selected === "van" ? "text-white" : "text-[#030D27]"}`}>
              Van
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1Container;