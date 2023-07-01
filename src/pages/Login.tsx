import { Link} from "react-router-dom"

const Login = () => {

  
  
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-24">
        <h1  className="text-4xl">Log into  my account</h1>
         <button className=" border border-black flex flex-row gap-32  justify-evenly items-center p-2"> 
          <img src="/assets/badext.png" alt="user" />
          <div>
            <h3>Sign in as Batete</h3>
            <p className="text-[#808080E5]">bateteangenadette@gmail.com</p>
          </div>
          <img src="/assets/google.png" alt="google icon" className="w-10 h-10"/>
         </button>

         <div>
          <form  className="flex flex-col gap-16">
            <input type="text" placeholder="Email or Username" className="w-12/12 bg-[#D3D2D2] border-2  h-16  px-5 w-[600px] placeholder:text-black border-black focus:outline-none" name="email" id="email" />
            <input type="password" placeholder="password" className="w-12/12 bg-[#D3D2D2] border-2  h-16  px-5 w-[600px] placeholder:text-black border-black focus:outline-none" name="password" id="password" />
            <button className="bg-[#CC732B] h-16 text-xl text-white mb-5">Login</button>
          </form>
          <div>
            <p className="flex flex-row justify-between items-center gap-5"><span className="text-[#808080]">Don't have an account ?</span> <Link to="/signUp" className=" hover:border-b-4 hover:border-[#EC9D0C] hover:text-xl hover:cursor-pointer">Signup</Link> <span className="hover:border-b-4 hover:border-[#EC9D0C] hover:text-lg hover:cursor-pointer">Forgot Password ?</span> </p>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Login