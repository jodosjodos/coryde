import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { handleGoogleSubmition } from "../hooks/handleGoogleSubmittion";
import { useTheme } from "../hooks/ThemeContezt";

const Schema = yup.object().shape({
  firstName: yup
    .string()
    .required("first name is required")
    .min(4, "please provide name with atleast 4 character"),
  lastName: yup
    .string()
    .required("last name is required")
    .min(4, "please provide name with atleast 4 character"),
  password: yup
    .string()
    .required("passsword is requied")
    .min(10, "please provide strong password"),
  email: yup.string().email().required("email is required"),
});

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const handleSubmiting = (data: object) => {
    console.log(data);
  };
  if (errors) {
    console.log(errors);
  }

  const handleOnChange = () => {
    clearErrors("email");
    clearErrors("firstName");
    clearErrors("lastName");
    clearErrors("password");
  };

  const { darkMode } = useTheme();

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 pb-10 dark:bg-[#030D27] dark:text-[#C0BCBC]">
        <h1 className="text-4xl dark:text-[#C0BCBC]">
          Ryde your dream with CoRdye
        </h1>
        <button
          className=" border border-black dark:border-white  flex flex-row gap-32  justify-evenly items-center p-2"
          onClick={handleGoogleSubmition}
        >
          <p className="text-[#ccc] font-extrabold dark:text-[#808080]">
            Continue with your google account
          </p>

          <img
            src={`${darkMode ? "assets/googleDark.png" : "assets/google.png"}`}
            alt="google icon"
            className="w-10 h-10"
          />
        </button>
        <div className="font-bold text-[#CC732B] flex  justify-start flex-col mb-2">
          {errors?.firstName && <p>{errors?.firstName?.message}</p>}
          {errors?.lastName && <p>{errors?.lastName?.message}</p>}
          {errors?.email && <p>{errors?.email?.message}</p>}
          {errors?.password && <p>{errors?.password?.message}</p>}
        </div>
        <div>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(handleSubmiting)}
          >
            <div className="flex flex-row justify-center items-center gap-2">
              <input
                type="text"
                placeholder="Fist name"
                className={`${
                  errors?.firstName
                    ? " border-red-400 placeholder:text-red-400"
                    : ""
                } w-6/12 bg-[#D3D2D2] border-2  h-16  px-5 placeholder:text-black placeholder:dark:text-[#808080] dark:bg-[#041134] dark:border-white  border-black focus:outline-none`}
                {...register("firstName")}
                id="firstName"
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="Last name"
                className={`${
                  errors?.lastName
                    ? " border-red-400 placeholder:text-red-400"
                    : ""
                } w-6/12 bg-[#D3D2D2] border-2  h-16  px-5  placeholder:text-black border-black focus:outline-none placeholder:dark:text-[#808080] dark:bg-[#041134] dark:border-white `}
                {...register("lastName")}
                id="lastName"
              />
            </div>
            <input
              type="text"
              placeholder="Email"
              className={` ${
                errors?.email ? " border-red-400 placeholder:text-red-400" : ""
              } w-12/12 bg-[#D3D2D2] border-2  h-16  px-5 w-[600px] placeholder:text-black border-black focus:outline-none placeholder:dark:text-[#808080] dark:bg-[#041134] dark:border-white `}
              {...register("email")}
              id="email"
              onChange={handleOnChange}
            />
            <input
              type="password"
              placeholder="password"
              className={` ${
                errors?.password
                  ? " border-red-400 placeholder:text-red-400"
                  : ""
              } w-12/12 bg-[#D3D2D2] border-2  h-16  px-5 w-[600px] placeholder:text-black border-black focus:outline-none placeholder:dark:text-[#808080] dark:bg-[#041134] dark:border-white `}
              {...register("password")}
              id="password"
              onChange={handleOnChange}
            />
            <div className="flex flex-row  gap-38 my-3 dark:text-[#808080]">
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
            <Link to="/services" className="text-[#808080] mb-5 underline hover:cursor-pointer">
              {" "}
              Privacy Policy and Terms of Service.
            </Link>
            <p className="flex gap-2">
              <span className="text-[#808080] dark:text-white">Have an account?</span>{" "}
              <Link
                to="/login"
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
