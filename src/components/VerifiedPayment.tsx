import { Link } from "react-router-dom";

const VerifiedPayment = () => {
  return (
    <div className=" flex flex-col gap-3 items-center justify-center">
      <div>
        <img
          src="/assets/verified.png"
          alt=" verified"
          className="object-contain w-16 h-16"
        />
      </div>
      <p className="text-2xl">Your record was successfully</p>
      <p className="text-2xl">recorder we will get to you soon</p>
      <Link to="/about" className="text-white bg-[#EC9D0C] px-28 py-3 my-2 font-bold rounded-md hover:cursor-pointer">Back</Link>
    </div>
  );
};

export default VerifiedPayment;
