import { useEffect, useState } from "react"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import HomePage from "./HomePage"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"
import SmokeCursor from "./SmokeCursor"

function App() {
  const [color, setColor]=useState('red')

  useEffect(()=>{
    const intervalId=setInterval(()=>{
      const randomColor=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
      setColor(randomColor)
    },1000);
    return () => {
      clearInterval(intervalId);
    };
  },[])

  return (
    <>
   <div style={{backgroundColor:'black',color:'white'}}>
   <SmokeCursor/>
    <Navbar  />
    <HomePage clr={color}/>
    <About clr={color}/>
    <Skills clr={color}/>
    <Projects clr={color}/>
    <Contact clr={color}/>
    <Footer/>
    

    </div>
    </>
  )
}

export default App
