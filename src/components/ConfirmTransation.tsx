import { useSelector } from "react-redux";
import Payment from "./Payment";
import { RootState } from "../store";
import VerifiedPayment from "./VerifiedPayment";


const ConfirmTransation = () => {
 const isPaid=useSelector((state:RootState)=>state.payment.paid)
   console.log(isPaid);
   

  return (
    <div className="bg-white  py-20 px-6 border-gray-200 border-2 font-mako w-3/12">
     {
        isPaid ? (<><VerifiedPayment/></> ):<>   <Payment/></>
     }
  
    </div>
  );
};

export default ConfirmTransation;
