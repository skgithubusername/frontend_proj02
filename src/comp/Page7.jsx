import { ReactComponent as Logo } from "../logo.svg";
import { FaLessThan } from "react-icons/fa6";
import { CiBatteryFull } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";
import { RiHome2Line } from "react-icons/ri";
import { FaObjectGroup } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function Page7() {
  return (
    <>
      <div className="flex justify-between  mb-10 ">
        <h1 className="px-8 font-semibold">9:41</h1>

        <div className="flex  ">
          <p className="p-1">
            <FaSignal />
          </p>
          <p className="p-1">
            <FaWifi />
          </p>
          <p className="p-1">
            <CiBatteryFull />
          </p>
        </div>
      </div>
      <div className=" flex ">
        <p className=" mx-14 mt-1 bg-slate-100 rounded p-1">
          <FaLessThan />
        </p>
        <h1 className=" text-2xl font-semibold ml-28 pl-10 md:ml-96 md:pl-36 ">
          Workout Tracker
        </h1>

      </div>
    
     <p className="flex justify-center items-center p-4 "> <FaLessThan className="mx-2" /> Feb 2024 <FaGreaterThan className="mx-2" /></p>
     
     <div className="flex  justify-center items-center">

        <div className=" m-10 ">
            <h1>Sun</h1>
            <h1 className=" text-4xl font-semibold">5</h1>
        </div>

        <div className=" m-4  bg-gradient-to-br from-cyan-100 to-blue-500 rounded w-20 text-center  h-24 ">
            <h1>Sun</h1>
            <h1 className=" text-4xl font-semibold">6</h1>
        </div>
        <div className=" m-10 ">
            <h1>Sun</h1>
            <h1 className=" text-4xl font-semibold">7</h1>
        </div>
        <div className=" m-10 ">
            <h1>Sun</h1>
            <h1 className=" text-4xl font-semibold">8</h1>
        </div>
        <div className=" m-10 ">
            <h1>Sun</h1>
            <h1 className=" text-4xl font-semibold">9</h1>
        </div>
       
     </div>

  <div>
  <p className=" font-semibold mb-4" >06:00 AM</p>
     <hr  className='  border-gray-400  w-full' />
  </div>
  <div>
  <p className=" font-semibold " >06:00 AM</p>
  <div className='flex  justify-center items-center  '>

<hr  className='  border-gray-400  w-full' />
<div><h1 className=' w-44  h-10 text-center  bg-gradient-to-br from-pink-100  to-purple-400  rounded-full'>Ab Workout, 7:30am</h1></div>
<hr  className=' border-gray-400 w-full' />

      </div>
  </div>
  <div>
  <p className=" font-semibold mb-4" >06:00 AM</p>
     <hr  className='  border-gray-400  w-full' />
  </div>
  <div>
  <p className=" font-semibold mb-4" >06:00 AM</p>
     <hr  className='  border-gray-400  w-full' />
  </div>
  <div>
  <p className=" font-semibold mb-4" >06:00 AM</p>
     <hr  className='  border-gray-400  w-full' />
<div><h1 className='ml-96 w-44  h-10 text-center  bg-gradient-to-br from-pink-100  to-gray-400  rounded-full'>Ab Workout, 7:30am</h1></div>

  </div>
  <div>
  <p className=" font-semibold mb-4" >06:00 AM</p>
     <hr  className='  border-gray-400  w-full' />
  </div>
  <div>
  <p className=" font-semibold mb-4" >06:00 AM</p>
     <hr  className='  border-gray-400  w-full' />
  </div>
  <div>
  <p className=" font-semibold mb-4" >06:00 AM</p>
     <hr  className='  border-gray-400  w-full' />
  </div>
  <div>
  <p className=" font-semibold mb-4" >06:00 AM</p>
     <hr  className='  border-gray-400  w-full' />
    
  </div>
  <div>
  <p className=" font-semibold mb-4" >06:00 AM</p>
     <hr  className='  border-gray-400  w-full' />
  </div>
  <div>
  <p className=" font-semibold mb-4" >06:00 AM</p>
     <hr  className='  border-gray-400  w-full' />
  </div>

  <div className="flex justify-around items-center  ">
          <RiHome2Line size={30} className="  text-gray-400  md:mr-40"  />
          <FaObjectGroup size={30} className=" text-gray-400 md:mr-40" />

          <a
            className="float-end  rounded-full   m-7 p-8  bg-gradient-to-br from-cyan-100 to-blue-700 "
            href="/page7"
          >
            <CiSearch size={20} className=" text-white text-center" />
          </a>

          <CiCamera size={30} className=" text-gray-400 md:ml-40" />
          <MdOutlinePeopleAlt size={30} className="text-gray-400 md:ml-40" />
        </div>

    </>
  )
}

export default Page7
