import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { motion } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger)

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type clrType={
  clr:string
} 

const Skills:React.FC<clrType> = ({clr}) => {
 

  const imgRef1=useRef(null)
  const imgRef2=useRef(null)
  const imgRef3=useRef(null)
  const imgRef4=useRef(null)
  const imgRef5=useRef(null)
  const imgRef6=useRef(null)
  const imgRef7=useRef(null)
  const imgRef8=useRef(null)
  const imgRef9=useRef(null)
  const imgRef10=useRef(null)
  const imgRef11=useRef(null)

  useEffect(()=>{
    const el=imgRef1.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "",
        end: "",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{ 
      x:400,  
    })
  },[])

  useEffect(()=>{
    const el=imgRef2.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "",
        end: "",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{ 
      x:-400,  
    })
  },[]) 

   useEffect(()=>{
    const el=imgRef3.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "",
        end: "",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{ 
      x:300,  
    })
  },[])
  useEffect(()=>{
    const el=imgRef4.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "",
        end: "",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{ 
      x:-300,  
    })
  },[])
  useEffect(()=>{
    const el=imgRef5.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "",
        end: "",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{ 
      x:400,  
    })
  },[])
  useEffect(()=>{
    const el=imgRef6.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "",
        end: "",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{ 
      x:-400,  
    })
  },[])

  useEffect(()=>{
    const el=imgRef7.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "",
        end: "",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{ 
      x:400,  
    })
  },[])
  useEffect(()=>{
    const el=imgRef8.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "",
        end: "",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{ 
      x:-400,  
    })
  },[])

   useEffect(()=>{
    const el=imgRef9.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "",
        end: "",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{ 
      x:400,  
    })
  },[])
  useEffect(()=>{
    const el=imgRef10.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "",
        end: "",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{ 
      x:-400,  
    })
  },[])

  useEffect(()=>{
    const el=imgRef11.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "",
        end: "",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{ 
      y:200,  
    })
  },[])

  return (
    <>
    <div id='skills'>
    <div style={{border:`1px solid ${clr}`,boxShadow:`5px 5px 20px  ${clr}`}}  className=" lg:block hidden mb-48 m-7 bg-black pb-60 rounded-md">
    <motion.div
    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
    transition={{ duration: 3, repeat: Infinity }}
    style={{ fontSize: "24px", fontWeight: "bold",marginLeft:'200px',marginRight:'200px', textAlign:'center' }} // Adjust styles as needed
  >
      Skills( );
    </motion.div>

    <h1 className="text-4xl text-white font-semibold mb-8 text-center mt-8">Programing Languages && Framework && Library</h1>
      <div className="lg:flex mx-auto justify-center gap-96"> 
      <div>
      <img ref={imgRef1} src="/html.png" className="h-40 w-40 z-10 lg:mr-64 "/>
      </div>
    
      <img ref={imgRef2} src="/css.png" className="h-40 w-40 z-10 lg:ml-64"/>
    </div>

      <div className="lg:flex mx-auto justify-center gap-60">
        <img ref={imgRef3} src="/javascript.png" className="h-40 w-40 z-10 lg:mr-64"/>
        <img ref={imgRef4} src="/typescript.png" className="h-36 mt-3 w-48 z-10 lg:ml-64"/>
      </div>

      <div className="lg:flex mx-auto justify-center gap-60">
       <img ref={imgRef5} src="/tailwind-css.svg" className="h-40 w-40 z-10 lg:mr-80"/>
       <img ref={imgRef6} src="/nodejs.png" className="h-40 w-40 z-10 lg:ml-80"/>
      </div>

      <div className="lg:flex mx-auto justify-center gap-60">
       <img ref={imgRef7} src="/react.png" className="h-40 w-40 z-10 lg:mr-80"/>
       <img ref={imgRef8} src="/bootstrap.png" className="h-40 w-40 z-10 lg:ml-80"/>
      </div>
          <h1 className="text-4xl text-white font-semibold mb-8 mt-8 text-center">Database && Designer</h1>
          <div >
            <div className=" lg:flex mx-auto justify-center gap-60">
              <img ref={imgRef9} src="/canva.png" className="h-40 w-40 mr-80"/>
              <img ref={imgRef10} src="/figma.png" className="h-40 w-40 ml-80"/>
            </div>
               <img ref={imgRef11}  src="/mongodb.png" className="mx-auto justify-center h-40 w-60 -mt-40 "/>
          </div>
    </div>
   
   
   {/* for mobile */}
   
    <div style={{border:`1px solid ${clr}`,boxShadow:`5px 5px 30px  ${clr}`}} className=" block lg:hidden  shadow-lg shadow-slate-50 m-7 bg-slate-800 mx-12 rounded-md">
    <motion.div
    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
    transition={{ duration: 3, repeat: Infinity }}
    style={{ fontSize: "24px", fontWeight: "bold",marginLeft:'200px',marginRight:'200px', textAlign:'center' }} // Adjust styles as needed
  >
     <h1 className="lg:ml-0 -ml-20">Skills();</h1>
    </motion.div>
    
    <h1 className="text-4xl text-white font-semibold mb-8 text-center ">Programing Languages && Framework && Library</h1>
       <Slider infinite={true}
        slidesToShow={1}
        arrows={true}
        autoplay={true}
        autoplaySpeed={1500}>
      <div className="">
      <img src="/html.png" className="h-60 w-60 z-10 lg:mr-64  flex mx-auto justify-center"/>
      
      </div>
      <div>
      <img  src="/css.png" className="h-60 w-60 z-10 lg:mr-64 flex mx-auto justify-center"/>
      </div>
      <div>
      <h1 className="text-center text-3xl font-serif">javascript</h1>
      <img src="/javascript.png" className="h-60 w-60 z-10 lg:mr-64 flex mx-auto justify-center"/>
      </div>
      <div><h1 className="text-center text-3xl font-serif">TypeScript</h1><img src="/typescript.png" className="h-56 w-68 z-10 lg:mr-64 flex mx-auto justify-center"/></div>
      <div><h1 className="text-center text-3xl font-serif">Tailwind css</h1><img src="/tailwind-css.svg" className="h-60 w-60 z-10 lg:mr-64 flex mx-auto justify-center"/></div>
      <div><h1 className="text-center text-3xl font-serif">Node js</h1><img src="/nodejs.png" className="h-60 w-60 z-10 lg:mr-64 flex mx-auto justify-center"/></div>
      <div><h1 className="text-center text-3xl font-serif">React</h1><img src="/react.png" className="h-60 w-60 z-10 lg:mr-64 flex mx-auto justify-center"/></div>
      <div><h1 className="text-center text-3xl font-serif">Bootstrap</h1> <img src="/bootstrap.png" className="h-60 w-60 z-10 lg:mr-64 flex mx-auto justify-center"/></div>
    </Slider>  
    </div>

    <div style={{border:`1px solid ${clr}`,boxShadow:`5px 5px 20px  ${clr}`}} className="block lg:hidden  shadow-lg shadow-slate-50 m-7 bg-slate-800 mx-12 rounded-md">
    <h1 className="text-4xl text-white font-semibold mb-8 mt-8 text-center">Database && Designer</h1>
    <Slider infinite={true}
        slidesToShow={1}
        arrows={true}
        autoplay={true}
        autoplaySpeed={1500}>
      <div><h1 className="text-center text-3xl font-serif">Canva</h1><img src="/canva.png" className="h-56 w-68 z-10 lg:mr-64 flex mx-auto justify-center"/></div>
      <div><h1 className="text-center text-3xl font-serif">Figma</h1><img src="/figma.png" className="h-60 w-60 z-10 lg:mr-64 flex mx-auto justify-center"/></div>
      <div><h1 className="text-center text-3xl font-serif">mongo DB</h1><img src="/mongodb.png" className="h-60 w-60 z-10 lg:mr-64 flex mx-auto justify-center"/></div>
    </Slider>          
    </div> 
    </div> 
    </>
  )
}

export default Skills