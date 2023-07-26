import react from 'react'
import Atropos from 'atropos/react';
import "atropos/atropos.css";
import ScrollReveal from "scrollreveal";

function cards() {
    return (
        <div className='w-[1500px] bg-black'>
            <div className=' items-center justify-center relative flex flex-col'>
                <div className='mt-[300px] w-[1232px] items-center justify-center relative flex'>
                    <p className='gt bg-clip-text text-white w-[905px]'>Experience your product as you create it.</p>
                </div>
                <div className='mt-[100px] h-[1200px] w-fit md:w-min '>
                    <div className='flex h-[48%]'>
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
                            <div className='w-[785px] h-[520px]  mr-[15px] border-[0.08px] border-gray-700 rounded-[26px] bg-[#161B22] relative'>
                                <img src={require('./img/a.png')} alt="" className='' />
                                <p className="t1 text-transparent  bg-clip-text bg-gradient-to-r from-[#F5F5F8] to-[#BBBBBD]  mt-[30px]">Effortlessly tracking with Black</p>
                                <p className='t2  w-[487px] inline-block'>Designed for you, Black is the perfect solution for you and
                                    your teams tracking time."</p>
                            </div>
                        </Atropos>
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
                             <div className='w-[445px] h-[520px]  ml-[15px] border-[0.08px] border-gray-700 rounded-[26px] bg-[#161B22]'>
                            <img src={require('./img/b.png')} alt="" />
                            <p className="t1 text-transparent  bg-clip-text bg-gradient-to-r from-[#F5F5F8] to-[#BBBBBD]">Save your time</p>
                            <p className='t2'>Available on iOS and Android, Black is accessible
                                from any device.</p>
                        </div>
                        </Atropos>
                    </div>
                    <div className='flex h-[48%]  mt-[-25px]'>
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
                             <div className='w-[445px] h-[520px] mr-[15px] border-[0.08px] border-gray-700 rounded-[26px] bg-[#161B22]'>
                            <img src={require('./img/d.png')} alt="" />
                            <p className="t1 text-transparent  bg-clip-text bg-gradient-to-r from-[#F5F5F8] to-[#BBBBBD] z-20">Tracking</p>
                            <p className='t2 w-[403px] inline-block z-20'>Comes with built-in workflows that create focus
                                and routine.</p>
                        </div>
                        </Atropos>
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
                            <div className='w-[785px] h-[520px] ml-[15px] border-[0.08px] border-gray-700 rounded-[26px] bg-[#161B22]'>
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
    )
}
export default cards;
