import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-row  justify-around   lg:gap-[60em]">
      <div className="flex flex-row items-center gap-3">
        <div className="" onClick={handleLogoClick}>
          <img
            src="/assets/coryde.png"
            alt=""
            className="w-[150px] h-[100px]  object-contain hover:cursor-pointer active:cursor-pointer"
          />
        </div>
        <p
          className="text-[#CC732B] text-2xl font-extrabold ml-[-90px] cursor-pointer"
          onClick={handleLogoClick}
        >
          CoRyde
        </p>
      </div>
      <div className="flex flex-row justify-space items-center gap-24 ">
        <div className="flex flex-row items-center justify-around gap-10">
          {location.pathname === "/login" ? (
            <></>
          ) : (
            <>
              <Link
                className="hover:border-b-4 hover:cursor-pointer    hover:border-[#FFA500] "
                to="/home"
              >
                Home
              </Link>
              <Link
                className="hover:border-b-4 hover:cursor-pointer    hover:border-[#FFA500]"
                to="/about"
              >
                About
              </Link>
              <Link
                className="hover:border-b-4 hover:cursor-pointer    hover:border-[#FFA500]"
                to="/login"
              >
                Book
              </Link>
              <Link
                className="hover:border-b-4 hover:cursor-pointer    hover:border-[#FFA500]"
                to="/services"
              >
                Services
              </Link>
            </>
          )}
        </div>

        <div className="flex flex-row items-center  gap-5   ">
          {
            location.pathname==="/login" ? <></>:<>   <Link
            to="/login"
            className="text-white bg-[#EC9D0C] px-4 py-2 rounded-lg"
          >
            Login
          </Link></>
          }
       
          <img
            src="/assets/ThemeLogo.png"
            alt="theme toggle"
            className="objec-contain w-[15.75px] h-[20px] hover:cursor-pointer active:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
