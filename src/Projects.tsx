import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { clrType } from "./HomePage";
import {motion} from 'framer-motion'
const Projects:React.FC<clrType> = ({clr}) => {
  const img1Ref=useRef(null)
  const img2Ref=useRef(null)
  const img3Ref=useRef(null)
  const img4Ref=useRef(null)
  const img5Ref=useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const image = img1Ref.current;
    gsap.to(image, {
      scrollTrigger: {
        trigger: image,
        start: 'top 80%', // Start the animation when 80% of the image is in view
        end: 'bottom top', // End the animation when the top of the image leaves the viewport
        scrub: true, // Smoothly transition the vibration effect as you scroll
      },
      y: '+=10', 
      repeat: -1, // Repeat infinitely
      yoyo: true, // Reverse animation to move back to the left
      duration: 0.01, // Duration of each movement
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up ScrollTriggers
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const image = img2Ref.current;
    gsap.to(image, {
      scrollTrigger: {
        trigger: image,
        start: 'top 80%', // Start the animation when 80% of the image is in view
        end: 'bottom top', // End the animation when the top of the image leaves the viewport
        scrub: true, // Smoothly transition the vibration effect as you scroll
      },
      y: '+=10', 
      repeat: -1, // Repeat infinitely
      yoyo: true, // Reverse animation to move back to the left
      duration: 0.01, // Duration of each movement
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up ScrollTriggers
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const image = img3Ref.current;
    gsap.to(image, {
      scrollTrigger: {
        trigger: image,
        start: 'top 80%', // Start the animation when 80% of the image is in view
        end: 'bottom top', // End the animation when the top of the image leaves the viewport
        scrub: true, // Smoothly transition the vibration effect as you scroll
      },
      y: '+=10', 
      repeat: -1, // Repeat infinitely
      yoyo: true, // Reverse animation to move back to the left
      duration: 0.01, // Duration of each movement
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up ScrollTriggers
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const image = img4Ref.current;
    gsap.to(image, {
      scrollTrigger: {
        trigger: image,
        start: 'top 80%', // Start the animation when 80% of the image is in view
        end: 'bottom top', // End the animation when the top of the image leaves the viewport
        scrub: true, // Smoothly transition the vibration effect as you scroll
      },
      y: '+=10', 
      repeat: -1, // Repeat infinitely
      yoyo: true, // Reverse animation to move back to the left
      duration: 0.01, // Duration of each movement
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up ScrollTriggers
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const image = img5Ref.current;
    gsap.to(image, {
      scrollTrigger: {
        trigger: image,
        start: 'top 80%', // Start the animation when 80% of the image is in view
        end: 'bottom top', // End the animation when the top of the image leaves the viewport
        scrub: true, // Smoothly transition the vibration effect as you scroll
      },
      y: '+=10', 
      repeat: -1, // Repeat infinitely
      yoyo: true, // Reverse animation to move back to the left
      duration: 0.01, // Duration of each movement
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up ScrollTriggers
    };
  }, []);

  
  return (
    <>
    <div  style={{border:`1px solid ${clr}`,boxShadow:`5px 5px 20px  ${clr}`,fontFamily:'Dancing Script, cursive'}} className='projects text-3xl text-center rounded-md bg-black m-7 shadow-lg shadow-white pb-8 '>
      
      <motion.div
    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
    transition={{ duration: 3, repeat: Infinity }}
    style={{ fontSize: "24px", fontWeight: "bold",marginLeft:'200px',marginRight:'200px',marginTop:'12px',textAlign:'center' }} // Adjust styles as needed
  >
    <h1 className="lg:ml-0 -ml-20">Projects();</h1>
    </motion.div>
{/* first */}
      <div className="bg-gray-700 lg:m-12 m-7 lg:p-4 p-1 rounded-md shadow-lg shadow-white h-auto">
        <h1 className="pt-3 mb-8">Biorhythm App</h1>
        <p className="lg:text-2xl lg:block hidden mb-4">Track your physical, emotional, and intellectual cycles to optimize your life!</p>
        <h1 className="mx-auto justify-center flex "><a href="https://biorhythmm.netlify.app/" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the live site -  <img src="/right_1635581.png" className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className="mx-auto justify-center flex"><a href="https://github.com/piyush07chandra/Biorhythm" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the code base-<img src="/right_1635581.png"  className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className=" my-6 text-lg lg:text-3xl">Tech Tags: React js, Chart js</h1>
        <img ref={img1Ref} className="flex justify-center mx-auto rounded-md  shadow-lg shadow-yellow-500 mb-9" src="/Screenshot (33).png" width={700}/>
      </div>
  {/* second */}
  <div className="bg-gray-700 lg:m-12 m-7 lg:p-4 p-1 rounded-lg shadow-md shadow-white">
        <h1 className="pt-3 mb-8">Demo Website</h1>
        <p className="lg:text-2xl lg:block hidden mb-4">From responsive design to intuitive navigation, we aim to make your browsing experience seamless. Whether you're on a desktop, tablet, or mobile device, our website adapts to ensure optimal viewing.</p>
        <h1 className="mx-auto justify-center flex"><a href="https://task3banao.netlify.app/" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the live site -  <img src="/right_1635581.png" className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className="mx-auto justify-center flex"><a href="https://github.com/piyush07chandra/task3banao" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the code base-<img src="/right_1635581.png"  className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className=" my-6 text-lg lg:text-3xl">Tech Tags: React js, GSAP</h1>
        <img ref={img2Ref} className="flex justify-center mx-auto rounded-md  shadow-lg shadow-purple-800 mb-9" src="/Screenshot (36).png" width={700}/>
      </div>
      {/* third */}
      <div className="bg-gray-700 lg:m-12 m-7 lg:p-4 p-1 rounded-md shadow-lg shadow-white">
        <h1 className="pt-3 mb-8">Demo Website</h1>
        <p className="lg:text-2xl lg:block hidden mb-4">From responsive design to intuitive navigation, we aim to make your browsing experience seamless. Whether you're on a desktop, tablet, or mobile device, our website adapts to ensure optimal viewing.</p>
        <h1 className="mx-auto justify-center flex"><a href="https://banao2.netlify.app/" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the live site -  <img src="/right_1635581.png" className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className="mx-auto justify-center flex"><a href="https://github.com/piyush07chandra/banao2" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the code base-<img src="/right_1635581.png"  className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className=" my-6 text-lg lg:text-3xl">Tech Tags: React js</h1>
        <img ref={img3Ref} className="flex justify-center mx-auto rounded-md  shadow-lg shadow-white mb-9" src="/Screenshot (35).png" width={700}/>
      </div>
      {/* forth */} 
      <div className="bg-gray-700 lg:m-12 m-7 lg:p-4 p-1 rounded-md shadow-lg shadow-white">
        <h1 className="pt-3 mb-8">Demo website</h1>
        <p className="lg:text-2xl lg:block hidden mb-4">From responsive design to intuitive navigation, we aim to make your browsing experience seamless. Whether you're on a desktop, tablet, or mobile device, our website adapts to ensure optimal viewing.</p>
        <h1 className="mx-auto justify-center flex"><a href="https://edzorb.netlify.app/" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the live site -  <img src="/right_1635581.png" className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className="mx-auto justify-center flex"><a href="https://github.com/piyush07chandra/Edzord." target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the code base-<img src="/right_1635581.png"  className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className=" my-6 text-lg lg:text-3xl">Tech Tags: React js</h1>
        <img ref={img4Ref} className="flex justify-center mx-auto rounded-md  shadow-lg shadow-white mb-9" src="/Screenshot (34).png" width={700}/>
      </div>
      {/* fifth */}
      <div className="bg-gray-700 lg:m-12 m-7 lg:p-4 p-1 rounded-md shadow-lg shadow-white">
        <h1 className="pt-3 mb-8">Weather app</h1>
        <p className="lg:text-2xl lg:block hidden mb-4">Weather Now is your go-to app for up-to-date weather information. With our app, you can quickly check the current weather conditions and more for any location. Whether you're planning a trip, getting ready for your day, or just curious about the weather around the world, Weather Now has you covered.</p>
        <h1 className="mx-auto justify-center flex"><a href="https://openweatherr.netlify.app/" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the live site -  <img src="/right_1635581.png" className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className="mx-auto justify-center flex"><a href="" target="_blank" className="lg:text-3xl text-lg text-blue-400 hover:text-white flex">See the code base-<img src="/right_1635581.png"  className="lg:h-11 lg:w-20 h-10 w-10 "/></a></h1>
        <h1 className=" my-6 text-lg lg:text-3xl">Tech Tags: React js</h1>
        <img ref={img5Ref} className="flex justify-center mx-auto rounded-md  shadow-lg shadow-yellow-500 mb-9" src="/Screenshot (37).png"   width={700}/>
      </div>
    </div>
    
    </>
  )
}

export default Projects;