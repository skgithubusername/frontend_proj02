import { FaGreaterThan } from "react-icons/fa6";
import { CiBatteryFull } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

const Page1 = () => {
  return (
    <>
      <div>
      <div className='flex justify-between  mb-10 '>
        <h1 className='px-8 font-semibold'>9:41</h1>
        
        <div className='flex  '>
        <p className='p-1'><FaSignal /></p>
        <p className='p-1'><FaWifi /></p>
        <p className='p-1'><CiBatteryFull /></p>
        </div>
      </div>
      <a href="/page3" className=" text-cyan-300 border-b-2 border-cyan-300 float-end mx-6">Skip</a>

      </div>
      <div className=' flex  justify-center my-6 '>
        <img className='my-12  mt-7 '  src="https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X98NRcuTqs-LptbnMh8RugF2~giYfag76Pj4fDaCsYjiOxKMJAmU83mRTuBiDO--rZtkz8tgcqXe--QgR0XDTWiw3v3LSOmG1ty6G6aWVmj~1aqDWqMW0WQ0H9vT1ThnQYUm21xuvgiP31FNPy2JGIPek-rLc2gOU57w5pUncI0dkbC2XG~dHXLhmPJP2RGfxaPzPrXABntLnE6JVJtUKL5SNI3bToqm9hnpecsig~gIAJbwiF6otDKx1SRsB2giqMwv0Oz4N3dklR77Y2IKMrxtdBxRNY4nxASS8iW73pI4sp3CvgngfqAGrKgnSAc1fLXUjFDGSYNR~UwcgfB7Uw__" alt="error" />
      </div>

      <div className=' flex  justify-center my-6 mx-8  flex-col' >
        <h1 className=' text-2xl mb-2  font-bold'>Track Your Goal</h1>

        <h2 className=' text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Alias, debitis impedit vel cupiditate possimus corrupti doloribus, odio aut commodi repellendus  <br /> perspiciatis eius consequatur fuga qui. Nihil, vel provident?</h2>
      </div>

      <div className="float-end  rounded-full   m-7 p-5 bg-gradient-to-br from-cyan-100 to-blue-700 ">

      <a href="/page2"><FaGreaterThan size={20} className=" text-white text-center" /></a>
      </div>
    </>
  )
}

export default Page1
