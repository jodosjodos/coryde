import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface DataTypes {
  email: string;
  password: string;
}

const Login = () => {
  const Schema = yup.object().shape({
    email: yup.string().email().required("email is required"),
    password: yup
      .string()
      .min(10, "please provide  strong password")
      .required("password is required")
      .uppercase("your password must include uppercase letter")
      .lowercase("your  password must include lowercase letter"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    clearErrors("email");
    clearErrors("password");
  };

  const onSubmiting = (data: DataTypes) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-24">
        <h1 className="text-4xl">Log into my account</h1>
        <button className=" border border-black flex flex-row gap-32  justify-evenly items-center p-2">
          <p className="text-[#ccc] font-extrabold">
            continue with your google account
          </p>
          <img
            src="/assets/google.png"
            alt="google icon"
            className="w-10 h-10"
          />
        </button>

        <div>
          <div className="font-bold text-[#CC732B] flex justify-center flex-col mb-2">
            {errors?.email && <p>{errors?.email?.message}</p>}
            {errors?.password && <p>{errors?.password?.message}</p>}
          </div>

          <form
            className="flex flex-col gap-16"
            onSubmit={handleSubmit(onSubmiting)}
          >
            <input
              type="text"
              placeholder="Email"
              className={`w-12/12 bg-[#D3D2D2] border-2  h-16  px-5 w-[600px] placeholder:text-black border-black focus:outline-none ${
                errors?.email ? " border-red-400 placeholder:text-red-400" : ""
              }`}
              id="email"
              {...register("email")}
              onChange={handleChanges}
            />
            <input
              type="password"
              placeholder="password"
              className={`w-12/12 bg-[#D3D2D2] border-2 h-16 px-5 w-[600px] placeholder:text-black border-black focus:outline-none ${
                errors?.email ? "border-red-400 placeholder:text-red-400" : ""
              }`}
              id="password"
              {...register("password")}
              onChange={handleChanges}
            />
            <button className="bg-[#CC732B] h-16 text-xl text-white mb-5">
              Login
            </button>
          </form>
          <div>
            <p className="flex flex-row justify-between items-center gap-5">
              <p>
                <span className="text-[#808080]">Don't have an account ?</span>{" "}
                <Link
                  to="/signUp"
                  className=" hover:border-b-4 hover:border-[#EC9D0C] hover:text-xl hover:cursor-pointer"
                >
                  Signup
                </Link>
              </p>{" "}
              <span className="hover:border-b-4 hover:border-[#EC9D0C] hover:text-lg hover:cursor-pointer">
                Forgot Password ?
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
