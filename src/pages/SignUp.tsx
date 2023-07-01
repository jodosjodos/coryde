import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl">Ryde your dream with CoRdye</h1>
        <button className=" border border-black flex flex-row gap-32  justify-evenly items-center p-2">
          <img src="/assets/badext.png" alt="user" />
          <div>
            <h3>Sign in as Batete</h3>
            <p className="text-[#808080E5]">bateteangenadette@gmail.com</p>
          </div>
          <img
            src="/assets/google.png"
            alt="google icon"
            className="w-10 h-10"
          />
        </button>

        <div>
          <form className="flex flex-col gap-5">
            <div className="flex flex-row justify-center items-center gap-2">
              <input
                type="text"
                placeholder="Fist name"
                className="w-6/12 bg-[#D3D2D2] border-2  h-16  px-5 placeholder:text-black border-black focus:outline-none"
                name="firstName"
                id="firstName"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-6/12 bg-[#D3D2D2] border-2  h-16  px-5  placeholder:text-black border-black focus:outline-none"
                name="lastName"
                id="lastName"
              />
            </div>
            <input
              type="text"
              placeholder="Email or Username"
              className="w-12/12 bg-[#D3D2D2] border-2  h-16  px-5 w-[600px] placeholder:text-black border-black focus:outline-none"
              name="email"
              id="email"
            />
            <input
              type="password"
              placeholder="password"
              className="w-12/12 bg-[#D3D2D2] border-2  h-16  px-5 w-[600px] placeholder:text-black border-black focus:outline-none"
              name="password"
              id="password"
            />
            <div className="flex flex-row  gap-38 my-3">
              <ul className="flex flex-col gap-2 w-6/12 list-disc list-inside">
                <li>A minimum of 10 characters</li>
                <li>At least one Lowercase letter</li>
              </ul>
              <ul className="flex flex-col gap-2 w-6/12 list-disc">
                <li>At least one number</li>
                <li>At least on uppercase letter</li>
              </ul>
            </div>
            <button className="bg-[#CC732B] h-16 text-xl text-white mb-5">
              Crate Account
            </button>
          </form>
          <div>
            <p className="text-[#808080]">
              Signing up for a CoRyde account means you agree to the 
           
            
            </p>
            <p className="text-[#808080] mb-5 underline hover:cursor-pointer"> Privacy  Policy and Terms of Service.</p>
            <p className="flex gap-2">
              <span className="text-[#808080]">Don't have an account ?</span>{" "}
              <Link
                to="/signUp"
                className=" hover:border-b-4 hover:border-[#EC9D0C] hover:text-xl hover:cursor-pointer"
              >
                Login!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
