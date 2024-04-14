import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiBatteryFull } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

function Page4() {
  return (
    <>
     <div className='flex justify-between  mb-10 '>
        <h1 className='px-8 font-semibold'>9:41</h1>
        
        <div className='flex  '>
        <p className='p-1'><FaSignal /></p>
        <p className='p-1'><FaWifi /></p>
        <p className='p-1'><CiBatteryFull /></p>
        </div>
      </div>
    <div className="flex justify-center items-center flex-col ">
      <div className="flex justify-center  mx-10 flex-col">
        <input
          type="text"
          className="mt-6 bg-slate-200 w-80 h-12 rounded-md  focus:outline-none p-4"
          placeholder="Email "
        />
        <input
          type="text"
          className="mt-6 bg-slate-200 w-80 h-12 rounded-md  focus:outline-none p-4"
          placeholder="Password "
        />

        <p className=" mt-4    w-44 text-gray-400 border-b-2  border-gray-400">
          Forget your password ?
        </p>
      </div>

      <Link to="/page6">
        <button className="  mx-10  mt-44 bg-gradient-to-br from-cyan-100 to-blue-700 w-80 h-12 rounded-md">
          Sign In
        </button>
      </Link>
      <div className="flex mt-5 justify-center items-center  ">
        <hr className="  border-gray-400  w-36" />
        <h1 className="p-4">or</h1>
        <hr className=" border-gray-400 w-36" />
      </div>

      <div className="flex mt-5 mb-6 justify-center items-center  ">
        <FaGoogle className=" rounded border-2 mx-2 border-black p-2 w-12  h-12" />
        <FaFacebookF className=" rounded border-2 mx-2 border-black p-2 w-12  h-12" />
      </div>
      <p>
        Don't have an account yet?
        <Link to="/page3">
          <span className=" text-cyan-300 border-b-2 border-cyan-300 ">
            Create an account
          </span>
        </Link>
      </p>
    </div>
    </>
  );
}

export default Page4;
