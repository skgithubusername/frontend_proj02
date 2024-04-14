import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiBatteryFull } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

function Page3() {
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
    <div className='flex justify-center items-center flex-col '>
        <div >
           <h1 className='  text-4xl '>Create an account</h1>

        </div>
        <div className='flex justify-center  mx-10 flex-col'>
        {/* <input type="text" placeholder='search' className=' focus:outline-none rounded ' /> */}
        <input type="text" className='mt-6 bg-slate-200  w-80 h-12 rounded-md  focus:outline-none p-4'  placeholder='Full Name '  />
        <input type="text" className='mt-6 bg-slate-200 w-80 h-12 rounded-md  focus:outline-none p-4'  placeholder='Last Name '  />
        <input type="text" className='mt-6 bg-slate-200 w-80 h-12 rounded-md  focus:outline-none p-4'  placeholder='Email '  />
        <input type="text" className='mt-6 bg-slate-200 w-80 h-12 rounded-md  focus:outline-none p-4'  placeholder='Password '  />
          
    </div>
      
      <div className='mx-10  mt-8'>

        <input className='mx-2' type="checkbox" name="" id="" />
        <label >By proceeding, I agree to all <span className=' text-cyan-300'>T&C</span> and  <span className=' text-cyan-300'>Privacy Policy</span></label>
      </div>
     <Link to='/page5' > <button to='/page5'  className=' mx-10 mt-8 bg-gradient-to-br from-cyan-100 to-blue-700 w-80 h-12 rounded-md'>Create an account</button></Link>
      <div className='flex mt-5 justify-center items-center  '>

<hr  className='  border-gray-400  w-36' />
<h1 className='p-4'>or</h1>
<hr  className=' border-gray-400 w-36' />

      </div>

      <div className='flex mb-6 mt-5 justify-center items-center  '>

<FaGoogle className=" rounded border-2 mx-2 border-black p-2 w-12  h-12" />
<FaFacebookF  className=" rounded border-2 mx-2 border-black p-2 w-12  h-12"/>
</div>
<p>Already have an account?  <Link to='/page4'><span className=" text-cyan-300 border-b-2 border-cyan-300 ">Login</span> </Link> </p>
    </div>
    </>
  )
}

export default Page3
