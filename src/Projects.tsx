import { clrType } from "./HomePage";
import {motion} from 'framer-motion'
const Projects:React.FC<clrType> = ({clr}) => {
  
  return (
    <>
    <div  style={{border:`1px solid ${clr}`,boxShadow:`5px 5px 20px  ${clr}`,fontFamily:'Dancing Script, cursive'}} className='projects text-3xl text-center rounded-md bg-black m-7 shadow-lg shadow-white pb-8'>
      
    <motion.div
     animate={{ scale: [1, 1.5, 1], opacity: [5, 0.4, 3] }}
     transition={{ duration: 1.5, repeat: Infinity }}
     style={{ fontSize: "24px", fontWeight: "bold",color:`${clr}`,textAlign:'center',width:'200px',alignContent:'center',margin:'auto'}} // Adjust styles as needed
   >
  <h1 className="mt-8 mb-5">Projects( );</h1>
    </motion.div>
{/* first */}
      <div className="bg-gray-900 lg:m-12 m-7 lg:p-4 p-1 rounded-md shadow-lg shadow-white h-auto flex">
        <div className="z-20 mx-auto">
        <h1 className="pt-3 mb-8 z-20 ">Biorhythm App</h1>
        <p className="lg:text-2xl lg:block hidden mb-4 z-20">Track your physical, emotional, and intellectual cycles to optimize your life!</p>
        <h1 className="mx-auto justify-center flex z-20"><a href="https://biorhythmm.netlify.app/" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the live site -  <img src="/right_1635581.png" className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className="mx-auto justify-center flex z-20"><a href="https://github.com/piyush07chandra/Biorhythm" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the code base-<img src="/right_1635581.png"  className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className=" my-6 text-lg lg:text-3xl z-20">Tech Tags: React js, Chart js</h1>
        <img  className="flex justify-center mx-auto rounded-md  shadow-lg shadow-yellow-500 mb-9 z-20" src="/Screenshot (33).png" width={700}/>
        </div>
      </div>
  {/* second */}
  <div className="bg-gray-900 lg:m-12 m-7 lg:p-4 p-1 rounded-lg shadow-md shadow-white flex">
    <div className="z-20 mx-auto">
        <h1 className="pt-3 mb-8">Demo Website</h1>
        <p className="lg:text-2xl lg:block hidden mb-4">From responsive design to intuitive navigation, we aim to make your browsing experience seamless. Whether you're on a desktop, tablet, or mobile device, our website adapts to ensure optimal viewing.</p>
        <h1 className="mx-auto justify-center flex"><a href="https://task3banao.netlify.app/" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the live site -  <img src="/right_1635581.png" className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className="mx-auto justify-center flex"><a href="https://github.com/piyush07chandra/task3banao" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the code base-<img src="/right_1635581.png"  className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className=" my-6 text-lg lg:text-3xl">Tech Tags: React js, GSAP</h1>
        <img  className="flex justify-center mx-auto rounded-md  shadow-lg shadow-purple-800 mb-9" src="/Screenshot (36).png" width={700}/>
        </div>
      </div>
      {/* third */}
      <div className="bg-gray-900 lg:m-12 m-7 lg:p-4 p-1 rounded-md shadow-lg shadow-white flex">
        <div className="z-20 mx-auto">
        <h1 className="pt-3 mb-8">Demo Website</h1>
        <p className="lg:text-2xl lg:block hidden mb-4">From responsive design to intuitive navigation, we aim to make your browsing experience seamless. Whether you're on a desktop, tablet, or mobile device, our website adapts to ensure optimal viewing.</p>
        <h1 className="mx-auto justify-center flex"><a href="https://banao2.netlify.app/" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the live site -  <img src="/right_1635581.png" className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className="mx-auto justify-center flex"><a href="https://github.com/piyush07chandra/banao2" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the code base-<img src="/right_1635581.png"  className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className=" my-6 text-lg lg:text-3xl">Tech Tags: React js</h1>
        <img  className="flex justify-center mx-auto rounded-md  shadow-lg shadow-white mb-9" src="/Screenshot (35).png" width={700}/>
        </div>
      </div>
      {/* forth */} 
      <div className="bg-gray-900 lg:m-12 m-7 lg:p-4 p-1 rounded-md shadow-lg shadow-white flex">
        <div className="z-20 mx-auto">
        <h1 className="pt-3 mb-8">Demo website</h1>
        <p className="lg:text-2xl lg:block hidden mb-4">From responsive design to intuitive navigation, we aim to make your browsing experience seamless. Whether you're on a desktop, tablet, or mobile device, our website adapts to ensure optimal viewing.</p>
        <h1 className="mx-auto justify-center flex"><a href="https://edzorb.netlify.app/" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the live site -  <img src="/right_1635581.png" className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className="mx-auto justify-center flex"><a href="https://github.com/piyush07chandra/Edzord." target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the code base-<img src="/right_1635581.png"  className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className=" my-6 text-lg lg:text-3xl">Tech Tags: React js</h1>
        <img  className="flex justify-center mx-auto rounded-md  shadow-lg shadow-white mb-9" src="/Screenshot (34).png" width={700}/>
        </div>
      </div>
      {/* fifth */}
      <div className="bg-gray-900 lg:m-12 m-7 lg:p-4 p-1 rounded-md shadow-lg shadow-white flex">
        <div className="z-20 mx-auto">
        <h1 className="pt-3 mb-8">Weather app</h1>
        <p className="lg:text-2xl lg:block hidden mb-4">Weather Now is your go-to app for up-to-date weather information. With our app, you can quickly check the current weather conditions and more for any location. Whether you're planning a trip, getting ready for your day, or just curious about the weather around the world, Weather Now has you covered.</p>
        <h1 className="mx-auto justify-center flex"><a href="https://openweatherr.netlify.app/" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the live site -  <img src="/right_1635581.png" className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className="mx-auto justify-center flex"><a href="" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the code base-<img src="/right_1635581.png"  className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className=" my-6 text-lg lg:text-3xl">Tech Tags: React js</h1>
        <img  className="flex justify-center mx-auto rounded-md  shadow-lg shadow-yellow-500 mb-9" src="/Screenshot (37).png"   width={700}/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Projects;