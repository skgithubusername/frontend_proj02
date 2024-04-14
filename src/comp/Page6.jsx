import React from "react";
import { ReactComponent as Logo } from "../logo.svg";
import { FaLessThan } from "react-icons/fa6";
import { CiBatteryFull } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { RiHome2Line } from "react-icons/ri";
import { FaObjectGroup } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function Page6() {
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
        </p>{" "}
        <h1 className=" text-2xl font-semibold ml-20 pl-10 md:ml-96 md:pl-36 ">
          Workout Tracker
        </h1>
      </div>

      <div className="container md:flex md:flex-col md:justify-center md:items-center">
        {/* <div className=' flex '>
    <p className=' mx-14 mt-1 bg-slate-100 rounded p-1'><FaLessThan /></p> <h1 className=' text-2xl font-semibold  ml-40 '>Workout Tracker</h1>
   </div> */}
        <Logo className="w-full h-full m-6 p-6 md:w-2/3 md:ml-12 " />

        <div className=" ml-12  flex items-center bg-gradient-to-br from-blue-300 to-white w-full  h-16  md:w-3/4 rounded-md">
          <p className=" ml-8">
            <CgDanger />
          </p>{" "}
          <h1 className="ml-10">
            You've burned fewer calories than <br /> yesterday. Time to get
            moving! !
          </h1>
        </div>

        <div className="flex justify-between my-12">
          <h1 className="  font-semibold px-8 text-2xl">Upcoming Workout </h1>
          <p className=" text-gray-400">see more</p>
        </div>

        <div className="   md:w-2/3 rounded h-20   shadow-md shadow-grey-200 m-4 px-6 flex justify-between items-center">
          <div className="flex  justify-between items-center">
            <img
              className="  ml-6 mr-8 w-16 h-16 rounded-full bg-slate-200"
              src="https://s3-alpha-sig.figma.com/img/4aee/a404/269733701b8604f00f8ab3dbc8874dc4?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W~R5jLwDlFZg5jA64xQhhXbvhiOqzfoczemNjyW41IVUCfJ07EPR-hsYnSBBRI2sqofehWaWTuQY~6RvVQ3wD76Uk4Txe5bN9Yj1DViahbdVfdkonHpB-PV-nkAvCb3M2NCNr6qtm~WbCe8Ev5zORs0VERmpMiOOhbBv355jujI8R0aeICn1CHOqALGYLcoqFrac56bs-WVo5jgsmBTg7gf1NHO-AuLwLmlrvKIaHMDoOPg1EhdNJrWE2shP4dNuAzmevLfNGzn1tgxrdGBTo~lSYqtGIlBfZOQfGq9c5AuV7OKylc4iRvLNCto3-0o-1ytNSDtJ1gRJESlnAmuicQ__"
              alt="error"
            />
            <h1>
              Full Body Workout <br /> Today 3pm{" "}
            </h1>
          </div>

          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-blue-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="   md:w-2/3 rounded h-20   shadow-md shadow-grey-200 m-4 px-6 flex justify-between items-center">
          <div className="flex mt-8 justify-between items-center">
            <img
              className="  ml-6 mr-8 w-16 h-16 rounded-full bg-slate-200"
              src="https://s3-alpha-sig.figma.com/img/5688/dda6/63ce83a9876ee1cadf652148a636fe39?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AqtSmY1k0iQ8zli~s3WMSgjesxoSBX573f59fyG3X26w9pIUPYo3nnz3m3c4qUGEIovIU09HBtKVrkQySapb0bh8Yp8U1FJK5aPFsozGeJ8X861G5sPhGHKYlsLopZDDDwAa6ARD3e6uHOn6FB3FULjSyMzWCM9Uf3ARLQk-RlKJA8a-wiR7virfjjVWh4IzgnqiQbjrIqzXxccxMsIXsy0zZjzxEuZlEglquyGS6~c4lWjn~qF0tc8kXABthnR~PLAlkKsLKaMV7GtrCE90MqDMlogLvYNaTUjWgiQ2UvuzhlOWODEEhPSJhpWAX-cKKrst9CGnC6Km~BR-DEGKKg__"
              alt="error"
            />
            <h1>
              Upper Body Workout <br />4 Feb, 3:30 pm{" "}
            </h1>
          </div>

          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-blue-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <h1 className=" text-2xl font-semibold mx-8 my-10">
          What Do You Want to Train
        </h1>

        <div className="   md:w-2/3 rounded bg-blue-300 h-20    m-4 px-6 flex justify-between items-center">
          <div>
            <h1>Full Body Workout</h1>
            <p>Arms</p>
            <p>Arms</p>
          </div>

          <img
            className="  ml-6 mr-8 w-20 h-20 rounded-full bg-slate-200"
            src="https://s3-alpha-sig.figma.com/img/23ae/977c/32610d884493905711642300c8cc67c0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mu33qv9pYMsUqYlc9TFa5ztiZhwNCioQkCJ4s~C5W9TtHezEYCOvLE9X3I4rvzFgZJ1X4FDgOQwtkiNovuk7EWLhsinm8Sody3hycvElP3~J6V4oLgXkoHjd~O-oFgMKfjnYA~XKv9WfsKfotsK0WJ0gEjvTY~LXvi34bZZdbcMOZ-EEk5yKQ9kpACihIFgANBY-PN7NpvZN-0p1i05GsvdVvhx9LzOQLnTRmbUJakdyx3pqot3txCBZSpXDnnHJiDlwZwE-j-x84-yE2snCCUTn~LsZBbvKtpP7a1nl9h5I6Tkl503oojKuwQs~zH9rUa30hrt4I3WvV8Gkk5wwHg__"
            alt="error"
          />
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
      </div>
    </>
  );
}

export default Page6;
