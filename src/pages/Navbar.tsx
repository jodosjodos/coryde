import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/ThemeContezt";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const navigate = useNavigate();

  const location = useLocation();
  const pathname = location.pathname;


   const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };


  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-row  justify-around   lg:gap-[60em]  dark:text-white  dark:bg-[#030D27] ">
      <div className="flex flex-row items-center gap-3">
        <div className="" onClick={handleLogoClick}>
          <img
            src="/assets/coryde.png"
            alt=""
            className="w-[200px] h-[200px]  object-contain hover:cursor-pointer active:cursor-pointer"
          />
        </div>
        <p
          className="text-[#CC732B] text-4xl font-extrabold ml-[-100px] cursor-pointer"
          onClick={handleLogoClick}
        >
          CoRyde
        </p>
      </div>
      <div className="flex flex-row justify-space items-center gap-24 ">
        <div className="flex flex-row items-center justify-around gap-10">
          {location.pathname === "/login" || location.pathname==="/signUp"   || location.pathname==="/home" ? (
            <></>
          ) : (
            <>
              <Link
                className={` ${
                  pathname === "/home" ? "border-b-4 border-[#FFA500]" : ""
                } hover:cursor-pointer   text-2xl     `}
                to="/home"
              >
                Home
              </Link>
              <Link
                className={` ${
                  pathname === "/about" ? "border-b-4 border-[#FFA500]" : ""
                } hover:cursor-pointer   text-2xl     `}
                to="/about"
              >
                About
              </Link>
              <Link
                className={` ${
                  pathname === "/login" ? "border-b-4 border-[#FFA500]" : ""
                } hover:cursor-pointer   text-2xl     `}
                to="/login"
              >
                Book
              </Link>
              <Link
                className={` ${
                  pathname === "/services" ? "border-b-4 border-[#FFA500]" : ""
                } hover:cursor-pointer   text-2xl     `}
                to="/services"
              >
                Services
              </Link>
            </>
          )}
        </div>

        <div className="flex flex-row items-center  gap-5   ">
          {location.pathname === "/login"  || location.pathname==="/signUp"  || location.pathname==="/home" ? (
            <></>
          ) : (
            <>
              {" "}
              <Link
                to="/login"
                className="text-white bg-[#EC9D0C] px-4 py-2 rounded-lg"
              >
                Login
              </Link>
            </>
          )}
         <div onClick={toggleTheme}>
         <img
            src={`${darkMode?"/assets/lightMode.png":"/assets/ThemeLogo.png"}`}
            alt="theme toggle"
            className="objec-contain w-[15.75px] h-[20px] hover:cursor-pointer active:cursor-pointer toggleMode"
          />
         </div>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
