import react from 'react';
import ScrollReveal from "scrollreveal";
import Zoom from 'react-reveal/Zoom';
import { motion } from "framer-motion"



const scrolling = () => {
    const s = document.getElementById('scrollimg');
    console.log(s.style)
}


function sec() {
    return (
        <div>
            <div className='w-min-screen h-[1210px] bg-[#161B22] text-center'>
                <Zoom reset><div className='relative top-[200px]'>
                    <p className='gt text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#F5F5F8]  to-[#BBBBBD]'>
                        Effortlessly Integration
                    </p>
                    <p className='texx w-[600px] inline-block '>Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.</p>
                </div></Zoom>
                <div className=' w-min-screen h-[155px]  grid grid-cols-7 ml-[55px] mt-[450px]'>
                    <img src={require('./img/11.png')} alt="" srcset="" className=' yo ' />
                    <img src={require('./img/22.png')} alt="" srcset="" className=' yo' />
                    <img src={require('./img/33.png')} alt="" srcset="" className=' yo' />
                    <img src={require('./img/44.png')} alt="" srcset="" className=' yo' />
                    <img src={require('./img/55.png')} alt="" srcset="" className=' yo' />
                    <img src={require('./img/66.png')} alt="" srcset="" className=' yo' />
                    <img src={require('./img/11.png')} alt="" srcset="" className=' yo' />
                </div>
                <div className=' h-[9s00px] flex flex-col top-[-315px] relative justify-center items-center ' onWheel={scrolling}>
                    <motion.div
                        className='z-20'


                        initial={{ y: 300 }}
                        whileInView={{
                            y: 50,
                            // rotate: -10,
                            transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8
                            }
                        }}
                    >

                        <img src={require('./img/phonee.png')} alt="" srcset="" className='myi' id="scrollimg" />
                    </motion.div>


                    <div className=' w-[600px]' id="shad">

                    </div>
                    <hr className='w-[500px] bor' />
                    <div className='h-[240px] w-min-screen bg-[#161B22] text-center z-20'> <p className='nn text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#F5F5F8]  to-[#BBBBBD] relative top-[70px]'>
                        Integrates with your workflow do need to change
                    </p>
                        <p className='texxt w-[600px] inline-block top-[80px] relative'>Fly through your tasks with rapid-fire keyboard shortcuts for
                            everything. Literally everything.</p>
                    </div>
                </div>
            </div>

            <div className=''>

            </div>
            {/* <script src={require('./help.js')}></script> */}
        </div>
    )
}
export default sec;
