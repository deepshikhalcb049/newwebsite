import React from 'react';

const next = () => {
    return (
        <div className='w-[1518px] bg-black'>
            <div className='flex flex-col justify-center w-[1518px]  h-[1550px] bg-black z-[0]     items-center     ' id='neww'>
                <div className='w-[400px]  h-[635px] top-[70px] flex sticky z-30 bk'>
                    <img src={require('./img/nphone.png')} alt="" />
                </div>
                <div className='flex flex-col justify-center   h-[90px]  relative  items-center z-0 '>
                    {/* <img src={require('./img/phone.png')} alt="" srcset="" className='w-[294px] h-[00px]' /> */}

                </div>
                <div className='flex flex-col justify-center  h-[1000px]  relative  items-center bg-white w-[1518px] z-0 '>
                    {/* <img src={require('./img/phone.png')} alt="" srcset="" className='w-[294px] h-[00px]' /> */}

                </div>
            </div>
            <div className='bg-white w-[1518px]'>
                <div className='flex flex-col h-[700px] relative justify-center items-center top-[0px]'>
                    <p className='nt1 w-[729px] text-center leading-8'>
                        Take control of your time with Black!
                    </p>
                    <p className='nt5 w-[463px] text-center mt-[20px]'>Start your free trial now and see how easy it is to track, manage, and optimize your time.</p>
                </div>
                <div className=' grid grid-cols-4 justify-center items-center w-full relative  gap-[40px] '>
                    <div className="bg-[#F5F5F8] w-[308px] h-[524px] left-[110px] relative rounded-[25px]">
                        <img src={require('./img/g1.png')} alt="" className=' rounded-[25px] w-[308px] h-[404px]' />
                        <p className='te1 mt-[10px]'>Integrations</p>
                        <p className='te2'>Allows the user to track time on the go,</p>
                    </div>
                    <div className='col-span-2 h-[520px] w-[617px] left-[58px] relative'><img src={require('./img/g2.png')} alt="" /></div>
                    <div className='h-[520px] w-[310px] right-[75px] relative'>
                        <img src={require('./img/g3.png')} alt="" />
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-3 relative ml-[110px] h-[380px] top-[50px] mr-[60px] '>
                        <div  className='bg-[#F5F5F8] w-[400px] h-[330px] rounded-[25px]'>
                            <img src={require('./img/g4.png')} alt="" srcset="" className='h-[171px] w-[411px]' />
                            <p className='te1'>Group tracking</p>
                            <p className='te2'>Without the user having to manually start
                                and stop a timer.</p>
                        </div>
                        <div className='bg-[#F5F5F8] w-[400px] h-[330px] rounded-[25px]'>
                            <img src={require('./img/g5.png')} alt="" srcset="" className='h-[171px] w-[411px]' />
                            <p className='te1'>Task categorization</p>
                            <p className='te2'>The app allows the user to categorize
                                tasks into different projects</p>
                        </div>
                        <div className='bg-[#F5F5F8] w-[400px] h-[330px] rounded-[25px]'>
                            <img src={require('./img/g6.png')} alt="" srcset="" className='h-[171px] w-[411px]' />
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