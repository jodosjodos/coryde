import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import { combinedSelector } from "../../hooks/allData";
import { convertTime } from "../../hooks/formatDate";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { RootState } from "../../store";
import { formActions } from "../../store/reducers/FormSubmissionSlice";

const Step5container = () => {
  const dispatch = useDispatch();
  const iniTialValue = useSelector(
    (state: RootState) => state.formSubmission.submitted
  );
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    email: yup.string().email().required("email is required"),
    phoneNumber: yup.string().required(),
    NIC: yup.string().notRequired(),
    currectDestination: yup.string().required(),
    finalDestination: yup.string().required(),
    extraDetails: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,

    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (errors) {
    console.log(errors);
  }
  const handleSubmission = (datas: object) => {
    console.log(datas);
    dispatch(formActions.changeState());
    reset();
    clearErrors();
  };

  const data = useSelector(combinedSelector);

  return (
    <div className="flex flex-col justify-center items-center gap-10  font-mako mb-16 text-xl">
      <h1 className="text-3xl dark:text-white">Step 5: Fill Car & Personal Details</h1>
      <div className=" container p-5 bg-[#D3D2D2] dark:bg-white flex flex-col gap-4">
        <p className="text-[#FFA500]">Enter Your Details __________</p>
        <p className=" font-mako text-2xl">Booking Details</p>
        <form onSubmit={handleSubmit(handleSubmission)}>
          <div className="grid  grid-cols-3  grid-rows-5 gap-x-16 px-5 gap-y-20 ">
            <div className="bg-white flex flex-row gap-20 items-center justify-center w-full h-32 py-7 px-16 hover:cursor-pointer dark:border-2  dark:border-[#ccc]">
              <div className="flex flex-col gap-1">
                <p>Vehicle Type</p>
                <p className="text-[#FFA500]">{data.carType}</p>
              </div>
              <div>
                <img
                  src="/assets/microBus.png"
                  alt=" bus type that is selected"
                  className=" object-contain w-16"
                />
              </div>
            </div>
            <div className="bg-white flex flex-row gap-20 items-center justify-center w-full h-32 py-7 px-16 dark:border-2  dark:border-[#ccc]">
              <div className="flex flex-col gap-1">
                <p>Pricing Plan</p>
                <p className="text-[#FFA500]">{data.pricePlan}</p>
              </div>
              <div>
                <img
                  src="/assets/plan.png"
                  alt="  plan selected"
                  className=" object-contain w-14"
                />
              </div>
            </div>
            <div className="bg-white flex flex-row gap-20 items-center justify-center w-full h-32 py-7 px-16 dark:border-2  dark:border-[#ccc]">
              <div className="flex flex-col gap-1">
                <p>Extra Features</p>
                <p className="text-[#FFA500]">No Extra Feature Selected</p>
              </div>
              <div>
                <img
                  src="/assets/add.png"
                  alt=" extra features selected"
                  className=" object-contain w-14"
                />
              </div>
            </div>
            <div className="bg-white flex flex-row gap-10 items-center justify-center w-full h-32 py-7 px-5 dark:border-2  dark:border-[#ccc]">
              <div className="flex flex-col gap-1">
                <p>Booking Date</p>
                <p className="text-[#FFA500]">{convertTime(data.date)}</p>
              </div>
              <div>
                <img
                  src="/assets/Calendar.png"
                  alt="  date selected"
                  className=" object-contain w-10"
                />
              </div>
            </div>
            <div className="bg-white flex flex-row gap-10 items-center justify-center w-full h-32 py-7 px-5 dark:border-2  dark:border-[#ccc]">
              <div className="flex flex-col gap-1">
                <p>Extra Details</p>
                <p className="text-[#FFA500]">Goods, Sick Person</p>
              </div>
              <div>
                <img
                  src="/assets/extraDetailes.png"
                  alt=" extra Details selected"
                  className=" object-contain w-10"
                />
              </div>
            </div>
            <div className="bg-white flex flex-row gap-10 items-center justify-center w-full h-32 py-7 px-5 dark:border-2  dark:border-[#ccc]">
              <div className="flex flex-col gap-1">
                <p>Total Amount</p>
                <p className="text-[#FFA500]">$0.00</p>
              </div>
              <div>
                <img
                  src="/assets/saved.png"
                  alt=" total amount"
                  className=" object-contain w-12"
                />
              </div>
            </div>

            <div className="w-full h-20   p-2 ">
              <input
                type="text"
                placeholder="First Name *"
                {...register("firstName")}
                className={` dark:bg-[#D0E4F6] w-full h-full bg-[#BCBCBC] border-none focus:outline-none placeholder:text-xl px-7 font-semibold ${
                  errors?.firstName ? " placeholder:text-[#FFA500]" : ""
                }`}
              />
              <p className="text-[#FFA500] font-bold">
                {errors?.firstName?.message}
              </p>
            </div>
            <div className="w-full h-20 ">
              <input
                type="text"
                placeholder="Email *"
                {...register("email")}
                className={` w-full h-full bg-[#BCBCBC] dark:bg-[#D0E4F6] border-none focus:outline-none  placeholder:text-xl  px-7  font-semibold 
                ${errors?.email ? " placeholder:text-[#FFA500]" : ""}`}
              />
              <p className="text-[#FFA500] font-bold">
                {errors?.email?.message}
              </p>
            </div>
            <div className="w-full h-20">
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber")}
                className={`${
                  errors?.phoneNumber ? " placeholder:text-[#FFA500]" : ""
                } w-full h-full bg-[#BCBCBC] border-none focus:outline-none  placeholder:text-xl  px-7  font-semibold dark:bg-[#D0E4F6]`}
                required
              />
              <p className="text-[#FFA500] font-bold">
                {errors?.phoneNumber?.message}
              </p>
            </div>
            <div className="w-full h-20 ">
              <input
                type="text"
                placeholder="National Identity Card Number *"
                {...register("NIC")}
                className={`${
                  errors?.phoneNumber ? " placeholder:text-[#FFA500]" : ""
                }  w-full h-full bg-[#BCBCBC] dark:bg-[#D0E4F6] border-none focus:outline-none  placeholder:text-xl  px-7  font-semibold`}
              />
            </div>
            <div className="w-full h-20 ">
              <input
                type="text"
                placeholder="Current Destination"
                {...register("currectDestination")}
                className={` ${
                  errors?.currectDestination
                    ? " placeholder:text-[#FFA500]"
                    : ""
                }  w-full h-full bg-[#BCBCBC] dark:bg-[#D0E4F6] border-none focus:outline-none  placeholder:text-xl  px-7  font-semibold`}
              />
              <p className="text-[#FFA500] font-bold">
                {errors?.currectDestination?.message}
              </p>
            </div>
            <div className="w-full h-20 ">
              <input
                type="text"
                placeholder="Final Destination"
                {...register("finalDestination")}
                className={`${
                  errors?.finalDestination ? " placeholder:text-[#FFA500]" : ""
                }  w-full h-full bg-[#BCBCBC] dark:bg-[#D0E4F6] border-none focus:outline-none  placeholder:text-xl  px-7  font-semibold`}
                required
              />
              <p className="text-[#FFA500] font-bold">
                {errors?.finalDestination?.message}
              </p>
            </div>
            <div className=" col-start-1 col-span-3  h-20 ">
              {/* how to style that being entered */}
              <textarea
                {...register("extraDetails")}
                id="extraDetails"
                className={`${
                  errors?.extraDetails ? " placeholder:text-[#FFA500]" : ""
                }  w-full h-full p-2  bg-[#BCBCBC] dark:bg-[#D0E4F6] focus:outline-none placeholder:p-2 text-semibold text-xl`}
                placeholder="extra Details "
              ></textarea>
              <p className="text-[#FFA500] font-bold">
                {errors?.extraDetails?.message}
              </p>
            </div>
            <input
              className="text-white bg-[#EC9D0C]   rounded-md  w-8/12  h-16 hover:cursor-pointer"
              type="submit"
              value="confirm Booking"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step5container;
