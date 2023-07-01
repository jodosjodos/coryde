import { Link } from "react-router-dom";
import Address from "../components/Address";

const Services = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-xl">
        <p className="mb-2">Best Services</p>
        <h1 className="text-4xl">Why Choose Us?</h1>
        <p>
          Today, money is more and more valuable over time. For that reason we
          are the best
        </p>
        <p>
          opportunity that came to save the world. If you want ans wish to save
          for your future
        </p>
        <p>
          we are here for you. Therefore choose us to for your future profit and
          also for your precious time.
        </p>
        <p>Choose us also for:</p>
      </div>
      <div className="flex flex-row items-center s justify-evenly">
        <div className="ml-40 md:ml-10 w-6/10">
          <img
            src="/assets/car.png"
            alt="car image"
            className="object-contain "
          />
        </div>
        {/* besides section */}
        <div className="flex flex-col gap-20">
          {/* eache */}
          <div className="flex flex-row gap-5 items-center">
            <div className="bg-[#D9D9D9] w-16 h-16 rounded-lg flex justify-center items-center">
              <img src="/assets/phone.png" alt="phone" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl">Customer Support</h3>
              <p>We are mostly patinate to our customers by</p>
              <p>providing a good customer care</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <div className="bg-[#D9D9D9] w-16 h-16 rounded-lg flex justify-center items-center">
              <img src="/assets/phone.png" alt="support " className="w-8 h-8" />
            </div>
            <div>
              <h3 className=" text-2xl">Best Price Guaranted</h3>
              <p>Not like mostly today’s scam we provide a good and a</p>
              <p>chievable price</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <div className="bg-[#D9D9D9] w-16 h-16 rounded-lg flex justify-center items-center">
              <img
                src="/assets/location.png"
                alt="location"
                className="w-8 h-8"
              />
            </div>
            <div>
              <h3 className="text-2xl">Many Locations</h3>
              <p>We are build and structured in a way that we are found</p>
              <p>in many locations of the country</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <div className="bg-[#D9D9D9] w-16 h-16 rounded-lg flex justify-center items-center">
              <img
                src="/assets/requirement.png"
                alt="requirements"
                className="w-8 h-8"
              />
            </div>
            <div>
              <h3 className="text-2xl">Meet your requirements</h3>

              <p>We are here to meet all your requirements and all you</p>
              <p>can ask for.</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="flex flex-row justify-center items-center text-5xl">
        Hear From Our Community
      </h1>

      {/* community */}
      <div className="flex lg:flex-row  justify-evenly m-8 gap-60 sm:flex-col sm:gap-20 md:justify-center md:items-center">
        <div className="border border-1 rounded-3xl  w-72 p-5 text-lg">
          <span className="text-[#FFA500] font-extrabold mr-2 flex">"</span>
          At my first time after using
          <p>this site as the product of</p>
          <p>the project I was and very </p>
          <p>thankful for the idea and am</p>
          <p>grateful that this idea got </p>
          <p className="mb-5">
            to be implemented and got to work{" "}
            <span className="text-[#FFA500] font-extrabold    float-right  mt-2">
              "
            </span>
          </p>
          <div className="flex flex-row gap-2 items-center  justify-center">
            <img
              src="/assets/user.jpeg"
              alt="user"
              className="user object-cover rounded-full w-12 h-12"
            />
            <p className="text-xl">by peter</p>
          </div>
        </div>
        <div className="border border-1 rounded-3xl   w-72 p-5 text-lg">
          <span className="text-[#FFA500] font-extrabold mr-2 flex">"</span>
          <p>As among the very first </p>
          <p>users of the project i was</p>
          <p>am grateful for the</p>
          <p>implementation because</p>
          <p>not for only individuals </p>
          <p>can use the project but </p>
          <p className="mb-5">
            also all people{" "}
            <span className="text-[#FFA500] font-extrabold    float-right  mt-2">
              "
            </span>
          </p>

          <div className="flex flex-row gap-2 items-center  justify-center">
            <img
              src="/assets/user.jpeg"
              alt="user"
              className="user object-cover rounded-full w-12 h-12"
            />
            <p className="text-xl">by b06</p>
          </div>
        </div>
        <div className="border border-1 rounded-3xl   w-72 p-5 text-lg">
          <span className="text-[#FFA500] font-extrabold mr-2 flex">"</span>
          <p>This project is profitable to</p>
          <p>the population work with us </p>
          <p>and grow and expand your</p>
          <p className="mb-5">
            daily and daily movement daily.{" "}
            <span className="text-[#FFA500] font-extrabold    float-right  mt-2">
              "
            </span>
          </p>
          <div className="flex flex-row gap-2 items-center  justify-center">
            <img
              src="/assets/user.jpeg"
              alt="user"
              className="user object-cover rounded-full w-12 h-12"
            />
            <p className="text-xl">by jodos</p>
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="flex flex-row mt-10 gap-2 justify-center items-center">
        <div className="flex flex-row">
          <img src="/assets/lin3.png" alt="lines"  className="h-2 w-3/12"/>
          <img src="/assets/lin4.png" alt="lines" className="h-2 w-8/12"/>
        </div>

        <div className="flex  gap-4">
          <p className="h-10 bg-[#030D27] text-white w-10 flex justify-center items-center text-4xl  border-4 border-[#FFA500] hover:cursor-pointer">&lt;</p>
          <p className="h-10 bg-[#030D27] text-white w-10 flex justify-center items-center text-4xl  border-4 border-[#FFA500] hover:cursor-pointer">&gt;</p>
        </div>
      </div>
      <div className="flex justify-center items-center my-7">
      <div className="serviceBackground flex flex-col items-center   text-1xl py-16 px-5">
        <p>Enjoy the beauty of working with us today and meet</p>
        <p>our vision and goal throught booking registering and </p>
        <p>with us today</p>
        <p className="text-[#D9D9D9] font-bold text-2xl">Reserve Today and Save Money with your time</p>
        <Link className="bg-[#808080] flex justify-center items-center  rounded-lg w-6/12 text-white  my-5 py-5 " to="#">Book Your Seat</Link>
      </div>
      </div>
      <Address/>
   
    </div>
  );
};

export default Services;
