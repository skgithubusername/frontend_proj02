import { FaGreaterThan } from "react-icons/fa6";
import { CiBatteryFull } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

const Page2 = () => {
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
      <div>
      <a href="/page3" className=" text-cyan-300 border-b-2 border-cyan-300 float-end mx-6">Skip</a>

      </div>
      <div className=' flex  justify-center my-6 '>
        <img className='my-12  mt-7 '  src="https://s3-alpha-sig.figma.com/img/9958/8bb7/dbf14a6d26ec54e2ba9e71eaef184f6b?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr3KQ~d1yUj8ihEHiaH7fqq2Bx87CveYvGg5WfoTnraj4r5QDk9Rs2g7PQ0NkiePRuEs015f2Scvkp9djImftRb7vIN0Q436lUOUi2Vz0HMN2YLBsrUwlsxwHK4~i~GT7KGdOrwjVV045VwrAdEFTsIHU5OFwbyLFidv7viJwMQL~Dj1dO58aVn70O0qclkztMmmGqgp5sbPUTTBET0FqbqH2YDMASEQdPn-Eamptqvrv8K6eu-nsZ5Tr9lKIAKKP4MB5iSZncm46y5fepqMHCd~cdCg13TMWcF-QtyOF1YrT3NN~w4WQDoFpdPZYcVqBqLyN6pDrkUSf-~AcMV5VQ__" alt="error" />
      </div>

      <div className=' flex  justify-center my-6 mx-8  flex-col' >
        <h1 className=' text-2xl mb-2 font-bold'>Get Burn</h1>

        <h2 className=' text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Alias, debitis impedit vel cupiditate possimus corrupti doloribus, odio aut commodi repellendus  <br /> perspiciatis eius consequatur fuga qui. Nihil, vel provident?</h2>
      </div>

      <div className="float-end  rounded-full   m-7 p-5 bg-gradient-to-br from-cyan-100 to-blue-700 ">
      <FaGreaterThan size={20} className=" text-white text-center" />
      </div>
    </>
  )
}

export default Page2
