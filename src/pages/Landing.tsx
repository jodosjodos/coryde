import { Link } from "react-router-dom";
import ChatBot from "../components/ChatBot";
import PrimarySection from "../components/PrimarySection";
import { useTheme } from "../hooks/ThemeContezt";

const Landing = () => {

  const {darkMode}=useTheme()
  
  return (
    <div className="w-full overflow-x-hidden dark:bg-[#030D27] ">
      <main className="relative">
       <PrimarySection/>
        <div className="pt-10 flex flex-col justify-center items-center gap-10">
          <h4 className="text-[#00000080] dark:text-[#FFFFFF80] text-xl">How It works</h4>
          <p className="dark:text-white text-2xl"> Looking to save more on your rental car ?</p>

          <div className="grid grid-cols-5 grid-rows-3 gap-y-10">
            <div className="col-start-1 col-span-1  justify-self-end  bg-[#ccc]  flex justify-center items-center h-40 w-48 rounded-lg">
              <img
                src="/assets/location.png"
                alt="lcoation logo"
                className=" object-contain w-12 h-12"
              />
            </div>
            <div className="col-start-2 col-span-1">
              <img src="/assets/line1.png" alt="line 1 image" />
            </div>
            <div className="col-start-3 row-start-1 col-span-1 bg-[#ccc]  flex justify-center items-center h-40 w-48 justify-self-center rounded-lg">
              <img
                src="/assets/time.png"
                alt="time logo"
                className="object-contain w-16 h-16"
              />
            </div>
            <div className="col-start-4 col-span-1 ">
              <img src="/assets/line1.png" alt="line 1 image" />
            </div>
            <div className="col-start-5 row-start-1 col-span-1 bg-[#ccc]  flex justify-center items-center h-40 w-48 rounded-lg">
              <img src="/assets/Calendar.png" alt="calendar logo" />
            </div>
            <div className="col-start-1 row-start-2 col-span-1  flex flex-col items-center gap-2">
              <p className="text-[#ccc] text-xl dark:text-[#FFFFFF80]">Location</p>
              <div className="dark:text-white">
                <p>It is the location of the place </p>
                <p>you want to be picked up</p>
              </div>
              <Link to="/login" className="text-white bg-[#EC9D0C] px-4 py-2">
                Get Started
              </Link> 
            </div>
            <div className="col-start-3 row-start-2 col-span-1  flex flex-col items-center gap-2">
              <p className="text-[#ccc] text-xl dark:text-[#FFFFFF80]">Pick Up Time</p>
              <div className="dark:text-white">
                <p>The time you are to be picked</p>
                <p>up at .</p>
              </div>
            </div>
            <div className="col-start-5 row-start-2 col-span-1  flex flex-col items-center gap-2">
              <p className="text-[#ccc] text-xl dark:text-[#FFFFFF80]">Booking</p>
              <div className="dark:text-white">
                <p>After reserving a sit or place </p>
                <p>for you to start your journey</p>
              </div>
              <Link className="text-white bg-[#EC9D0C] px-4 py-2 " to="/login">
                Get Started
              </Link>
            </div>
            <div className="col-start-1 row-start-3 col-span-1  flex  flex-col  items-center gap-2 my-10 dark:text-white">
              <h4 className="text-xl hover:border-b-4 hover:cursor-pointer    hover:border-[#FFA500]">
                Contact us :{" "}
              </h4>
              <p>coryde@gmail.com</p>
              <p>www.coryde.rw</p>
              <p>+2507887234734</p>
            </div>
            <div className="col-start-3 row-start-3 col-span-1  flex  flex-col  items-center gap-2 my-10 dark:text-white">
              <h4 className="text-xl hover:border-b-4 hover:cursor-pointer    hover:border-[#FFA500]">
                Location
              </h4>
              <p>Kigali-Rwanda</p>
              <p>St building Room 34</p>
              <p>KN39DSY</p>
            </div>
            <div className="col-start-5 row-start-3 col-span-1  flex  flex-col  items-center gap-2 my-10 dark:text-white">
              <h4 className="text-xl hover:border-b-4 hover:cursor-pointer    hover:border-[#FFA500]">
                Language
              </h4>
              <div>
                <select
                  id="language-select"
                  className="appearance-none bg-white border border-gray-300 rounded h-8 w-40  px-10 focus:outline-none  dark:bg-[#030D27]"
                >
                  <option value="english">English</option>
                  <option value="french">French</option>
                </select>
              </div>
              <div className="flex  flex-col gap-2 ">
                <h3>Follow us on :</h3>
                <div className="flex flex-row gap-5">
                  <img
                    src={` ${darkMode?"assets/facebookDark.png":"assets/facebook.png"} `}
                    alt=" facebook"
                    className="w-7 h-7 hover:cursor-pointer"
                  />
                  <img
                    src={ ` ${darkMode ? "assets/instagramDark.png":"assets/instagram.png"}`}
                    alt="instagram"
                    className="w-7 h-7 hover:cursor-pointer"
                  />
                  <img src={ ` ${darkMode?"assets/emailDark.png":"assets/email.png"}`} alt="email" className="w-7 h-7 hover:cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[50vw] bottom-0 w-full min-h-fit  ">
          <div >
            <ChatBot />
          </div>
        </div>
      </main>
      <footer className="flex justify-center items-center  border-t-4 border-black pt-5 pb-5 mt-5 dark:text-white dark:border-white">
        <div className="flex flex-row gap-2">
          <div className="w-6 h-6 rounded-full border border-black flex  justify-center items-center font-bold dark:border-white">
            <p>c</p>
          </div>
          <p>by CoRyde2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
