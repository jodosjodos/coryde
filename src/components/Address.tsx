import { useTheme } from "../hooks/ThemeContezt";

const Address = () => {
  const {darkMode}=useTheme()
  console.log(darkMode);
  
  return (
    <div>
      <div className="flex flex-row  items-center justify-evenly text-xl py-20 dark:text-white">
        <div className=" flex  flex-col  items-center gap-2">
          <h4 className="text-xl hover:border-b-4 hover:cursor-pointer    hover:border-[#FFA500]">
            Contact us :{" "}
          </h4>
          <p>coryde@gmail.com</p>
          <p>www.coryde.rw</p>
          <p>+2507887234734</p>
        </div>
        <div className=" flex  flex-col  items-center gap-2">
          <h4 className="text-xl hover:border-b-4 hover:cursor-pointer    hover:border-[#FFA500]">
            Location
          </h4>
          <p>Kigali-Rwanda</p>
          <p>St building Room 34</p>
          <p>KN39DSY</p>
        </div>
        <div className=" flex  flex-col  items-center gap-2">
          <h4 className="text-xl hover:border-b-4 hover:cursor-pointer    hover:border-[#FFA500]">
            Language
          </h4>
          <div>
            <select
              id="language-select"
              className="appearance-none bg-white dark:bg-[#030D27] border border-gray-300 rounded h-8 w-40  px-10 focus:outline-none "
            >
              <option value="english">English</option>
              <option value="french">French</option>
            </select>
          </div>
          <div className="flex  flex-col gap-2">
            <h3>Follow us on :</h3>
            <div className="flex flex-row gap-5">
              <img
                 src={` ${darkMode?"assets/facebookDark.png":"assets/facebook.png"} `}
                alt=" facebook"
                className="w-7 h-7 hover:cursor-pointer"
              />
              <img
                src={`${darkMode?"assets/instagramDark.png":"assets/instagram.png"} `}
                alt="instagram"
                className="w-7 h-7 hover:cursor-pointer"
              />
              <img src={`${darkMode?"assets/emailDark.png":"assets/email.png"}`} alt="email" className="w-7 h-7 hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center items-center  border-t-4 border-black dark:border-white py-7 pb-9 mt-10">
        <div className="flex flex-row gap-2">
          <div className="w-6 h-6 rounded-full border border-black dark:border-white flex  justify-center items-center font-bold">
            <p>c</p>
          </div>
          <p>by CoRyde2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Address;
