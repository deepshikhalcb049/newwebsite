import react from 'react';
import Logo from './img/logo.png'
const text1 = {
    fontFamily: " Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "16.8px",
}
const st = {
    textAlign: "center",
    // fontFamily: "Manrope",
    fontSize: "93.8px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    textTransform: "capitalize",
}





function nav() {

    return (
        <div>
            <div className='sticky flex justify-center w-full z-50'>
                <div className="w-[700px] h-[55px] bg-[#212121]  rounded-[100px] fixed top-[10px]">
                    <div class="flex justify-between ">
                        <div className=' left-[19px] top-[16px] relative '>
                            <div className='w-[80px] h-[44px] '> <img src={require('./img/loo.png')} alt="" /></div>
                        </div>
                        <div className='flex relative w-[300px] justify-between text-[#81859F] top-[15px]' style={text1}>
                            <div className=''>Home</div>
                            <div className=''>Team</div>
                            <div className=''>Blog</div>
                            <div className=''>Contact Us</div>
                        </div>

                        <div className='relative top-[10px] right-[21px]'> <button className='bg-white rounded-[100px] w-[83px] h-[35px]' style={text1}>Sign up</button> </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center w-full mt-[0px] h-[1050px] bg-black z-[0]     justify-center items-center     ' id='neww'>
                <div className='w-[1200px] h-[275px] top-[250px] flex sticky'>
                    <p className='relative text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#EEC5BD] via-[#F3B1A5]  via-[#C6CAF6] to-[#DAD9E9]' style={st}>Take charge of your money & Grow it, effortlessly.</p>
                </div>
                <div className='flex flex-col justify-center w-full top-[-280px]  relative  items-center '>
                    <img src={require('./img/phone.png')} alt="" srcset="" className='w-[294px] h-[600px]' />

                </div>
            </div>
            <div className='h-[350px] w-full bg-black  flex flex-col items-center '>
                <div className=' '><p className='texx w-[716px]'>Effortlessly track and manage your time with Black. Customizable reports, invoicing, and integrations make it the perfect tool for freelancers and professionals.</p>
                </div>


                <div className='flex relative mt-[45px] ml-[150px] items-center '>
                    <input type="text " className='border-0 h-[50px] w-[460px] area text-white' placeholder="Enter your email" id="clear" />
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

