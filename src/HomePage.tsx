import { useSpring, animated } from 'react-spring';

export type clrType={
  clr:string;
}

const HomePage:React.FC<clrType> = ({clr}) => {

    const props = useSpring({
        from: { opacity: 0,transform:'translateY(100%)' },
        to: { opacity: 0.8,transform:'translateY(10%)'},
        config: { duration: 1200 },
      });
      const imgProp = useSpring({
        from: { opacity: 0, transform:'translateX(-50%)'},
        to: { opacity: 1, transform: 'translateX(30%)'},
        config: { duration: 800 },
      
      });
      const imgPropForMob = useSpring({
        from: { opacity: 0, transform:'translateY(-50%)'},
        to: { opacity: 1, transform: 'translateY(20%)'},
        config: { duration: 1000 } // duration of the animation
      
      });

      
  return (
    <>
    <div id='home'>
    {/* for desktop */}
    <div className=' lg:flex hidden pt-48 mb-32 ' >
      <animated.div style={props}>
        <h1 className='text-white text-4xl mb-4 ml-16 font-semibold'>Namaste ();</h1>
       <div className='text-5xl text-white font-serif flex mb-5'><h1 className='border-b-2 border-blue-500 w-12 mr-4 mb-4'></h1>I'm<h1 style={{color:clr}} className='ml-2 text-6xl'>Piyush Chandra</h1></div>
       <h1 className='text-7xl text-center text-white font-serif'>I am a Web Developer</h1>
      </animated.div>
      <animated.div style={imgProp}>
        <div style={{border:`2px solid ${clr}`}}><img   className=' h-96 w-96 rounded-md ' src='/piyush.jpg'/></div>
      </animated.div>
    </div>

{/* for tablet */}
<div className=' md:flex pt-32 hidden lg:hidden ' >
      <animated.div style={props}>
         <h1 className='text-blue-500 text-2xl mb-4 ml-16 font-semibold'>Namaste ();</h1>
       <div className='text-3xl text-white font-serif flex mb-5'><h1 className='border-b-2 border-blue-500 w-12 mr-4 mb-4'></h1>I'm<h1 style={{color:clr}} className='ml-2 text-4xl'>Piyush Chandra</h1></div>
       <h1 className='text-3xl text-center text-white font-serif'>I am a Web Developer</h1>
      </animated.div>
      <animated.div style={imgProp}>
      <div className='h-80 w-80 mx-auto justify-center mb-12 -ml-12' style={{border:`1px solid ${clr}`}}>
        <img className=' h-80 w-80 rounded-md  mx-auto block ' src='/piyush.jpg' alt='Imagee'/>
        </div>
      </animated.div>
    </div>
{/* for Mobile */}
<div className=' block lg:hidden md:hidden pt-32' >
      <animated.div style={props} >
        <h1 className='text-blue-400 ml-8 mb-2 text-xl'>Namaste( );</h1>
       <div className='text-2xl text-white font-serif flex mb-5 '><h1 className='border-b-2 border-blue-500 w-12 mr-4 mb-4'> </h1><h1>I'm </h1> <h1 style={{color:clr}} className='ml-2'> Piyush Chandra</h1></div>
       <h1 className='text-4xl text-center  text-white font-serif '>I am a Web Developer</h1>
      </animated.div>
      <animated.div style={imgPropForMob}>
        <div className='h-80 w-80 mx-auto justify-center mb-12' style={{border:`2px solid ${clr}`}}>
        <img className=' h-80 w-80 rounded-md  mx-auto block pb-1' src='/piyush.jpg' alt='Imagee'/>
        </div>
       
      </animated.div>
    </div>
    </div>
    
    </>
  )
}

export default HomePage