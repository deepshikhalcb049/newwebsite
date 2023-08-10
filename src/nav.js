import react from 'react';
import Logo from './img/logo.png'
const text1 = {
    fontFamily: " Inter",
 
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "16.8px",
}
const st = {
    textAlign: "center",
    // fontFamily: "Manrope",
    // fontSize: "93.8px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    textTransform: "capitalize",
}





function nav() {

    return (
        <div className=' bg-black flex flex-col shrink'> 
            <div className='sticky flex  shrink justify-center  z-50'>
                <div className="sm:w-[700px] min-[380px]:w-[500px] w-[300px]  h-[55px] bg-[#212121]  rounded-[100px] fixed top-[10px]">
                    <div class="flex  shrink justify-between ">
                        <div className=' left-[19px] top-[16px] relative '>
                            <div className='sm:w-[80px] w-[50px] h-[44px] '> <img src={require('./img/loo.png')} alt="" /></div>
                        </div>
                        <div className='flex min-[380px]:text-[14px] text-[8px] relative min-[380px]:w-[200px] w-[150px] gap-x-[0px] min-[380px]:gap-x-[5px] sm:w-[300px] justify-between text-[#81859F] top-[15px]' style={text1}>
                            <div className=''>Feautures</div>
                            <div className=''>About</div>
                            <div className=''>Pricing</div>
                            <div className=''>Blog </div>
                        </div>

                        <div className='relative top-[10px] right-[21px]'> <button className='bg-white rounded-[100px] w-[43px] min-[380px]:w-[83px] min-[380px]:h-[35px] h-[20px]' style={text1}>Sign up</button> </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col shrink  w-min-screen mt-[0px] min-[380px]:h-[1150px] h-[800px] bg-black z-[0]     justify-center items-center     ' id='neww'>
                <div className='w-auto  min-[380px]:top-[250px] top-[300px] flex  sticky'>
                    <p className='relative text-transparent  text-[25px] min-[380px]:text-[93px] bg-clip-text bg-gradient-to-r from-[#EEC5BD] via-[#F3B1A5]  via-[#C6CAF6] to-[#DAD9E9]' style={st}>Take charge of your money & Grow it, effortlessly.</p>
                </div>
                <div className='flex flex-col justify-center w-min-screen min-[380px]:top-[-290px] top-[-100px]  relative  items-center '>
                    <img src={require('./img/phone.png')} alt="" srcset="" className='min-[380px]:w-[294px] w-[120px] min-[380px]:h-[600px] h-[280px]' />

                </div>
            </div>
            <div className='h-[350px] w-min-screen bg-black flex flex-col shrink items-center '>
                <div className=' '><p className='texx min-[380px]:text-[18px] text-[7px] min-[380px]:w-[716px] w-[300px]'>Effortlessly track and manage your time with Black. Customizable reports, invoicing, and integrations make it the perfect tool for freelancers and professionals.</p>
                </div>


                <div className='flex relative mt-[45px] ml-[150px] items-center '>
                    <input type="text " className='border-0 min-[380px]:h-[50px] min-[380px]:w-[460px] h-[40px] w-[350px] area text-white' placeholder="Enter your email" id="clear" />
                    <button id="butt" className='areabut'>Start Free Trial</button>
                </div>
            </div>
            <div className='flex justify-between ml-[20px] mr-[20px]'>
                <img src={require('./img/a1.png')} alt="" className="h-[27px] w-[25px] " />
                <img src={require('./img/a2.png')} alt="" className="h-[27px] w-[25px] " />
                <img src={require('./img/a3.png')} alt="" className="h-[27px] w-[25px] " />
                <img src={require('./img/a4.png')} alt="" className="h-[27px] w-[25px] " />
                <img src={require('./img/a5.png')} alt="" className="h-[27px] w-[25px] " />
                <img src={require('./img/a6.png')} alt="" className="h-[27px] w-[25px] " />
                <img src={require('./img/a7.png')} alt="" className="h-[27px] w-[25px] " />
                <img src={require('./img/a8.png')} alt="" className="h-[27px] w-[25px] " />
            </div>
            <p className='a1 mt-[40px]'>Trusted by Top-tier product campanies</p>
          
            {/* <script src={require('./new')}>
                
            </script> */}
        </div>
    )
}
export default nav;

