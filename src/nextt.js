import React from 'react';

const nextt=()=>{
    return(
        <div className='mt-[500px] justify-center items-center relative flex flex-col'>
            <div className='relative flex flex-col justify-center items-center'>
              
               <p className='nt1  text-transparent  bg-clip-text bg-gradient-to-r from-[#F5F5F8]  to-[#BBBBBD]'>Start using Black now</p>
                <p className='nt5 text-[#B4BCD0] w-[464px] mt-[40px] inline-block'>Start your free trial now and see how easy it is to track, manage, and optimize your time.</p>
           
            </div>
            <div className='flex mt-[40px]'>
                <img src={require('./img/111.png')} alt="" className='h-[70px] w-[] ' />
                <img src={require('./img/222.png')} alt=""  className='h-[70px] w-[] ml-[10px] '/>

            </div>
        </div>
    )
}
export default nextt;