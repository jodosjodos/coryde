import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ExtraDetailsActions } from "../../store/reducers/ExtraDetailsSlice";

const Step4Container = () => {
  const dispatch=useDispatch()
  const initialValues=useSelector((state:RootState)=>state.extraDetails)
  // console.log(initialValues);
  
  
  const [withGoodsQuantity, setWithGoodsQuantity] = useState(initialValues.goods);
  const [withSickPersonCount, setWithSickPersonCount] = useState(initialValues.sickPeople);
  const [withOldPerson, setWithOldPerson] = useState(initialValues.oldPeople);
  const [withAnyDisability, setWithAnyDisability] = useState(initialValues.disability);
  const [withNIC, setWithNIC] = useState(initialValues.NIC);

  const handleWithGoodsQuantityChange = (event:ChangeEvent<HTMLInputElement>) => {
    setWithGoodsQuantity(Number(event.target.value));
   dispatch(ExtraDetailsActions.changeDetails({...initialValues,goods:event.target.value}))
    
    
  };

  const handleWithSickPersonCountChange = (event :ChangeEvent<HTMLInputElement>) => {
    setWithSickPersonCount( Number(event.target.value));
    dispatch(ExtraDetailsActions.changeDetails({...initialValues,sickPeople:event.target.value}))
  };

  const handleWithOldPersonChange = (event :ChangeEvent<HTMLInputElement>) => {
    setWithOldPerson(event.target.value);
    dispatch(ExtraDetailsActions.changeDetails({...initialValues,oldPeople:event.target.value}))
  };

  const handleWithAnyDisabilityChange = (event :ChangeEvent<HTMLInputElement>) => {
    setWithAnyDisability(event.target.value);
    dispatch(ExtraDetailsActions.changeDetails({...initialValues,disability:event.target.value}))
  };

  const handleWithNICChange = (event :ChangeEvent<HTMLInputElement>) => {
    setWithNIC(event.target.value);
    dispatch(ExtraDetailsActions.changeDetails({...initialValues,NIC:event.target.value}))
  };

  const handleSelectNow = () => {
    console.log("With Goods Quantity:", withGoodsQuantity);
    console.log("With Sick Person Count:", withSickPersonCount);
    console.log("With Old Person:", withOldPerson);
    console.log("With Any Disability:", withAnyDisability);
    console.log("With NIC:", withNIC);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 font-mako">
      <h1 className="text-3xl  dark:text-white">Step 4: Fill in extra details</h1>
      <div className="container p-5 bg-[#D3D2D2] dark:bg-white flex flex-col gap-4">
        <p className="text-[#FFA500]">Select All your Details________</p>
        <p className="font-mako text-2xl">Extra-Details</p>
        <div className="bg-[#BCBCBC]  dark:bg-[#F0F8FF]  flex flex-row items-center justify-between rounded-md px-7 py-3">
          <span>With Goods</span>
          <input
            type="number"
            placeholder="Quantity"
            className="bg-[#BCBCBC] dark:bg-[#F0F8FF] focus:outline-none placeholder:text-black hover:cursor-pointer"
            name="quantity"
            value={withGoodsQuantity}
            onChange={handleWithGoodsQuantityChange}
          />
            <button
          className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm"
          onClick={handleSelectNow}
        >
          Select Now
        </button>
        </div>
        <div className="bg-[#BCBCBC] dark:bg-[#F0F8FF] flex flex-row items-center justify-between rounded-md px-7 py-3">
          <span>With Sick Person</span>
          <input
            type="number"
            placeholder="How many"
            className="bg-[#BCBCBC] dark:bg-[#F0F8FF] focus:outline-none placeholder:text-black hover:cursor-pointer"
            name="quantity"
            value={withSickPersonCount}
            onChange={handleWithSickPersonCountChange}
          />
            <button
          className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm"
          onClick={handleSelectNow}
        >
          Select Now
        </button>
        </div>
        <div className="bg-[#BCBCBC] dark:bg-[#F0F8FF] flex flex-row items-center justify-between rounded-md px-7 py-3">
          <span>With Old Person</span>
          <div className="flex flex-row gap-6">
            <input
              type="radio"
              checked={withOldPerson === "No"}
              onChange={handleWithOldPersonChange}
              value="No"
              className="sr-only hover:cursor-pointer"
              id="oldPersonNo"
            />
            <label htmlFor="oldPersonNo" className={`${withOldPerson === "No" ?"text-[#FFA500] font-bold":""}`}>No</label>
            <input
              type="radio"
              checked={withOldPerson === "Yes"}
              onChange={handleWithOldPersonChange}
              value="Yes"
              className="sr-only hover:cursor-pointer"
              id="oldPersonYes"
            />
            <label htmlFor="oldPersonYes" className={`${withOldPerson === "Yes" ?"text-[#FFA500] font-bold":""}`}>Yes</label>
          </div>
          <button
          className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm"
          onClick={handleSelectNow}
        >
          Select Now
        </button>
        </div>
        <div className="bg-[#BCBCBC] dark:bg-[#F0F8FF] flex flex-row items-center justify-between rounded-md px-7 py-3">
          <span>With Any disability</span>
          <div className="flex flex-row gap-6">
            <input
              type="radio"
              checked={withAnyDisability === "No"}
              onChange={handleWithAnyDisabilityChange}
              value="No"
              className="sr-only hover:cursor-pointer"
              id="disabilityNo"
            />
            <label htmlFor="disabilityNo" className={`${withAnyDisability === "No" ?"text-[#FFA500] font-bold":""}`}>No</label>
            <input
              type="radio"
              checked={withAnyDisability === "Yes"}
              onChange={handleWithAnyDisabilityChange}
              value="Yes"
              className="sr-only hover:cursor-pointer"
              id="disabilityYes"
            />
            <label htmlFor="disabilityYes" className={`${withAnyDisability === "Yes" ?"text-[#FFA500] font-bold":""}`}>Yes</label>
          </div>
          <button
          className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm"
          onClick={handleSelectNow}
        >
          Select Now
        </button>
        </div>
        <div className="bg-[#BCBCBC] dark:bg-[#F0F8FF] flex flex-row items-center justify-between rounded-md px-7 py-3">
          <span>With National Identity Card</span>
          <div className="flex flex-row gap-6">
            <input
              type="radio"
              checked={withNIC === "No"}
              onChange={handleWithNICChange}
              value="No"
              className="sr-only hover:cursor-pointer"
              id="nicNo"
            />
            <label htmlFor="nicNo" className={`${withNIC === "No" ?"text-[#FFA500] font-bold":""}`}>No</label>
            <input
              type="radio"
              checked={withNIC === "Yes"}
              onChange={handleWithNICChange}
              value="Yes"
              className="sr-only hover:cursor-pointer"
              id="nicYes"
            />
            <label htmlFor="nicYes" className={`${withNIC === "Yes" ?"text-[#FFA500]  font-bold ":""}`}>Yes</label>
          </div>
          <button
          className="text-white bg-[#EC9D0C] px-7 py-2 rounded-sm"
          onClick={handleSelectNow}
        >
          Select Now
        </button>
        </div>
       
      </div>
    </div>
  )
}
export default Step4Container    