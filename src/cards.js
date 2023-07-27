import react from 'react'
import Atropos from 'atropos/react';
import "atropos/atropos.css";
import ScrollReveal from "scrollreveal";

function cards() {
    return (
        <div className=' bg-black relative flex shrink'>
            <div className='w-[100%] items-center justify-center relative flex flex-col'>
                <div className='min-[380px]:mt-[300px] mt-[100px] w-[90%] items-center justify-center  flex relative'>
                    <p className='gt bg-clip-text text-white min-[380px]:w-[905px] w-[380px]  '>Experience your product as you create it.</p>
                </div>
                <div className='min-[380px]:mt-[100px] mt-[30px] min-[380px]:h-[1200px] h-[340px] w-[95%] min-[380px]:mr-[-50px] relative  flex flex-col shrink'>
                    <div className=' h-[48%] min-[380px]:pl-[15px] min-[380px]:pr-[15px] relative grid grid-cols-3 flex-col shrink'>
                        <div className='  col-span-2'>
                            <Atropos
                                className="atropos-banner"
                                highlight={false}
                                activeOffset={0}
                                duration={400}
                                // shadowScale={1.05}
                                // shadowOffset={2.5}	
                                stretchZ={15}
                                rotate={true}
                                rotateXMax={15}
                                rotateYMax={15}
                            // shadow={true}
                            // shadowOffset={2}
                            >
                                <div className='min-[380px]:w-[785px] min-[380px]:h-[520px] h-[150px] ml-[10px] w-[200px] border-[0.08px] border-gray-700 min-[380px]:rounded-[26px] rounded-[10px] bg-[#161B22]  relative'>
                                    <img src={require('./img/a.png')} alt="" className='' />
                                    <p className="t1 text-transparent  bg-clip-text bg-gradient-to-r from-[#F5F5F8] to-[#BBBBBD]  mt-[18px] min-[380px]:mt-[30px]">Effortlessly tracking with Black</p>
                                    <p className='t2  min-[380px]:w-[487px] w-[150px] h-[100px] inline-block'>Designed for you, Black is the perfect solution for you and
                                        your teams tracking time."</p>
                                </div>
                            </Atropos>
                        </div>
                        <div className='min-[380px]:ml-[-100px] ml-[-10px] relative flex flex-col shrink'>
                            <Atropos
                                className="atropos-banner"
                                highlight={false}
                                activeOffset={40}
                                duration={500}
                                // shadowScale={1.05}
                                // shadowOffset={2.5}	
                                stretchZ={15}
                                rotate={true}
                                rotateXMax={15}
                                rotateYMax={15}
                            // shadow={true}
                            // shadowOffset={2}
                            >
                                <div className='min-[380px]:w-[445px] min-[380px]:h-[520px] h-[150px] min-[380px]:left-[50px] w-[110px] left-[px] relative  border-[0.08px] border-gray-700 min-[380px]:rounded-[26px] rounded-[10px] bg-[#161B22]'>
                                    <img src={require('./img/b.png')} alt="" />
                                    <p className="t1 text-transparent  bg-clip-text bg-gradient-to-r from-[#F5F5F8] to-[#BBBBBD]">Save your time</p>
                                    <p className='t2'>Available on iOS and Android, Black is accessible
                                        from any device.</p>
                                </div>
                            </Atropos>
                        </div>
                    </div>
                    <div className=' h-[48%]   relative grid grid-cols-3'>
                        <div className='min-[380px]:mr-[-20px] relative left-[10px]'>
                            <Atropos
                                className="atropos-banner"
                                highlight={false}
                                activeOffset={40}
                                duration={400}
                                // shadowScale={1.05}
                                // shadowOffset={2.5}	
                                stretchZ={15}
                                rotate={true}
                                rotateXMax={15}
                                rotateYMax={15}
                            // shadow={true}
                            // shadowOffset={2}
                            >
                                <div className='min-[380px]:w-[445px] min-[380px]:h-[520px] h-[150px] min-[380px]:left-[50px] w-[110px] relative  border-[0.08px] border-gray-700 min-[380px]:rounded-[26px] rounded-[10px] bg-[#161B22]'>
                                    <img src={require('./img/d.png')} alt="" />
                                    <p className="t1 text-transparent  bg-clip-text bg-gradient-to-r from-[#F5F5F8] to-[#BBBBBD] z-20">Tracking</p>
                                    <p className='t2 min-[380px]:w-[403px] w-[90px] inline-block z-20'>Comes with built-in workflows that create focus
                                        and routine.</p>
                                </div>
                            </Atropos>
                        </div>
                        <div className='relative min-[380px]:ml-[50px] ml-[13px] col-span-2 flex flex-col shrink'>
                            <Atropos
                                className="atropos-banner"
                                highlight={false}
                                activeOffset={0}
                                duration={500}
                                // shadowScale={1.05}
                                // shadowOffset={2.5}	
                                stretchZ={15}
                                rotate={true}
                                rotateXMax={15}
                                rotateYMax={15}
                            // shadow={true}
                            // shadowOffset={2}
                            >
                                <div className='min-[380px]:w-[785px] min-[380px]:h-[520px] h-[150px]  w-[200px] border-[0.08px] border-gray-700 min-[380px]:rounded-[26px] rounded-[10px] bg-[#161B22]  relative'>
                                    <p className="t1 text-transparent  bg-clip-text bg-gradient-to-r from-[#F5F5F8] to-[#BBBBBD] mt-[20px] z-20">Experience seamless tracking</p>
                                    <p className='t2'>Awarded App of the day, Black has been recognized as the
                                        top choice for teams and individuals."</p>
                                    <img src={require('./img/c.png')} alt="" />
                                </div>
                            </Atropos>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default cards;
