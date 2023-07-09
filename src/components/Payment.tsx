import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup"
import { PaymentActions } from "../store/reducers/PaymentSlice";
interface DataType{
    phoneNumber:string
    cardNumber:string
    date:string
    code:string
}
const Payment = () => {
  const dispatch=useDispatch()
    const schema=yup.object().shape({
        phoneNumber:yup.string().required(),
        cardNumber:yup.string().required(),
        date:yup.string().required(),
        code:yup.string().required()
       
      })
  
      const {register,handleSubmit,reset,formState:{errors},clearErrors} =useForm({
       resolver:yupResolver(schema)
      })
  
  
      const handleSubmission=(data:DataType)=>{
          console.log(data);
          dispatch(PaymentActions.changeState())
          reset()
          clearErrors()  
      }
      if(errors){
          console.log(errors);
          
      }
  return (
  <div>
    <h1 className="text-3xl">Card information</h1>
      <div className="mb-3">
        <p className="text-[#FFA500]">
          Indicate details of the card from which
        </p>
        <p className="text-[#FFA500]">money will be debited</p>
      </div>
      <div className="bg-[#D3D2D2]  p-10 ">
        <form onSubmit={handleSubmit(handleSubmission)} className="flex flex-col gap-7 justify-start">
          <div className="flex flex-col gap-2">
            <label htmlFor="cardNumber" className="text-[#808080]">
              Card number
            </label>
            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              id="cardNumber"
              className="bg-[#D3D2D2] focus:outline-none border-b-2 border-[#CCC]"
              {...register("cardNumber")}
            />
          </div>

          <input
            type="text"
            placeholder="Phone Number"
            className="bg-[#D3D2D2] focus:outline-none border-b-2 border-[#CCC]"
            {...register("phoneNumber")}
          />
          <div className="flex flex-row gap-48">
            <input
              type="date"
              placeholder="Month and year"
              className="bg-[#D3D2D2] focus:outline-none border-b-2 border-[#CCC]"
              {...register("date")}
            />
            <input
              type="text"
              placeholder="CVV/ code"
              className="bg-[#D3D2D2] focus:outline-none border-b-2 border-[#CCC]"
              {...register("code")}
            />
          </div>
          <div className="flex  justify-center items-center">
            <input
              type="submit"
              value={"Pay Now"}
              className="text-white bg-[#EC9D0C] px-10 py-3 my-2 font-bold rounded-md hover:cursor-pointer"
            />
          </div>
        </form>
      </div>
  </div>
  )
}

export default Payment