import { Link } from "react-router-dom";
import { CiBatteryFull } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

function Page5() {
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
    <div className='flex justify-center items-center flex-col my-8'>
      <div>
        <h1 className=' text-2xl mb-10'>What are your goals?</h1>
      </div>

      <div>

        <div className=' pt-2  mt-6 bg-slate-200 w-80 h-12 rounded-md  focus:outline-none p-4"'>
          <label className=' p-7  mt-6'  >Weight Loss</label>
          <input className=' float-end m-2 w-6 h-6 ' type="checkbox" name="" id="" />
        </div>

        <div className=' pt-2  mt-6 bg-slate-200 w-80 h-12 rounded-md  focus:outline-none p-4"'>
          <label className=' p-7  mt-6'  >Muscle Gain</label>
          <input className=' float-end m-2 w-6 h-6 ' type="checkbox" name="" id="" />
        </div>

        <div className=' pt-2  mt-6 bg-slate-200 w-80 h-12 rounded-md  focus:outline-none p-4"'>
          <label className=' p-7  mt-6'  >Flexibility and Mobility</label>
          <input className=' float-end m-2 w-6 h-6 ' type="checkbox" name="" id="" />
        </div>

        <div className=' pt-2  mt-6 bg-slate-200 w-80 h-12 rounded-md  focus:outline-none p-4"'>
          <label className=' p-7  mt-6'  >General Fitness</label>
          <input className=' float-end m-2 w-6 h-6 ' type="checkbox" name="" id="" />
        </div>

        <div className=' pt-2  mt-6 bg-slate-200 w-80 h-12 rounded-md  focus:outline-none p-4"'>
          <label className=' p-7  mt-6'  >Event-specific trainig</label>
          <input className=' float-end m-2 w-6 h-6 ' type="checkbox" name="" id="" />
        </div>

        <div className=' pt-2  mt-6 bg-slate-200 w-80 h-12 rounded-md  focus:outline-none p-4"'>
          <label className=' p-7  mt-6'  >Mindfulness and mental Helth</label>
          <input className=' float-end m-2 w-6 h-6 ' type="checkbox" name="" id="" />
        </div>
      </div>

      <Link to="/page6">
        <button className="  mx-10  mt-32 bg-gradient-to-br from-cyan-100 to-blue-700 w-80 h-12 rounded-md">
          Conform
        </button>
      </Link>
    </div>
      
    </>
  )
}

export default Page5
