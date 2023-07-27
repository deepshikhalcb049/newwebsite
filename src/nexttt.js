import React from 'react';

const next = () => {
    return (
        <div className='w-full bg-black flex flex-col'>
            <div className=' justify-center w-full  h-[1550px] bg-black z-[0]  flex flex-col shrink    items-center     ' id='neww'>
                <div className='w-[400px]  h-[635px] top-[70px] flex  shrink sticky z-30 bk'>
                    <img src={require('./img/nphone.png')} alt="" />
                </div>
                <div className='flex flex-col shrink justify-center   h-[90px]  relative  items-center z-0 '>
                    {/* <img src={require('./img/phone.png')} alt="" srcset="" className='w-[294px] h-[00px]' /> */}

                </div>
                <div className='flex flex-col shrink justify-center  h-[1000px]  relative  items-center bg-white w-full z-0 '>
                    {/* <img src={require('./img/phone.png')} alt="" srcset="" className='w-[294px] h-[00px]' /> */}

                </div>
            </div>
            <div className='bg-white w-full flex flex-col shrink'>
                <div className='flex flex-col shrink h-[700px] relative justify-center items-center w-[100%] top-[0px]'>
                    <p className='nt1 w-[729px] text-center leading-8'>
                        Take control of your time with Black!
                    </p>
                    <p className='nt5 w-[463px] text-center mt-[20px]'>Start your free trial now and see how easy it is to track, manage, and optimize your time.</p>
                </div>
                <div className=' flex w-[100%] shrink justify-center items-center    gap-[40px] '>
                    <div className="bg-[#F5F5F8] w-] h-[524px] flex flex-col shrink   rounded-[25px]">
                        <img src={require('./img/g1.png')} alt="" className=' rounded-[25px] w-[308px] h-[404px] flex shrink' />
                        <p className='te1 mt-[10px]'>Integrations</p>
                        <p className='te2'>Allows the user to track time on the go,</p>
                    </div>
                    <div className='col-span-2 h-[520px] w-[617px]  relative flex flex-col shrink'><img src={require('./img/g2.png')} alt="" /></div>
                    <div className='h-[520px] w-[310px]  relative flex flex-col shrink'>
                        <img src={require('./img/g3.png')} alt="" />
                    </div>
                </div>
                <div className='w-[100%] flex flex-col shrink'>
                    <div className='flex gap-x-8 relative w-[100%] pl-[110px] pr-[85px] h-[380px] top-[50px] mr-[60px]  shrink'>
                        <div  className='bg-[#F5F5F8] w-[400px] h-[330px] rounded-[25px] flex flex-col shrink'>
                            <img src={require('./img/g4.png')} alt="" srcset="" className='  flex flex-col shrink h-[171px] w-[411px]' />
                            <p className='te1'>Group tracking</p>
                            <p className='te2'>Without the user having to manually start
                                and stop a timer.</p>
                        </div>
                        <div className='bg-[#F5F5F8] w-[400px] h-[330px] rounded-[25px] flex flex-col shrink'>
                            <img src={require('./img/g5.png')} alt="" srcset="" className=' flex flex-col shrink h-[171px] w-[411px]' />
                            <p className='te1'>Task categorization</p>
                            <p className='te2'>The app allows the user to categorize
                                tasks into different projects</p>
                        </div>
                        <div className='bg-[#F5F5F8] w-[400px] h-[330px] rounded-[25px] flex flex-col shrink'>
                            <img src={require('./img/g6.png')} alt="" srcset="" className='h-[171px] w-[411px] flex flex-col shrink' />
                            <p className='te1'>Automatic reports</p>
                            <p className='te2'>These reports can be exported in a variety
                                of formats</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default next;