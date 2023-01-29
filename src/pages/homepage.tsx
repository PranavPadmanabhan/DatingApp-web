import React from 'react'
import  HeaderHome  from "../components/Homepage_comp/HeaderHome";
import Firstdiv from "../components/Homepage_comp/Firstdiv"
import Seconddiv from "../components/Homepage_comp/Seconddiv";
import Thirddiv from "../components/Homepage_comp/Thirddiv";


function homepage() {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col justify-evenly items-center bg-bgcolor  '>
      <HeaderHome/>
      <div className="h-[92%] w-[100%] flex flex-row justify-center items-center -mt-4">

      <div className="h-[87%] w-[21%] rounded-lg">
        <Firstdiv/>
      </div>
      <div className="h-[87%] w-[25%] rounded-lg  mx-12">
<Seconddiv/>
      </div>
      <div className="h-[87%] w-[21%] rounded-lg ">
<Thirddiv/>
      </div>
      </div>
     
    </div>
  )
}

export default homepage;