import  { useEffect } from 'react';
import { clrType } from './HomePage';
import { motion } from 'framer-motion';


const About:React.FC<clrType> = ({clr}) => {
 

  useEffect(() => {
   
  }, []);

  return (
    <>
     <div  style={{border:`1px solid ${clr}`,boxShadow:`5px 5px 20px  ${clr}`,fontFamily:'Dancing Script, cursive'}}   className='about z-40 text-white text-center mt-20 pt-4  bg-slte-800 rounded-md mb-16 m-7 shadow-lg shadow-white p-1 ' >
      
    
     <motion.div
     animate={{ scale: [1, 1.5, 1], opacity: [5, 0.4, 3] }}
     transition={{ duration: 1.5, repeat: Infinity }}
     style={{ fontSize: "24px", fontWeight: "bold",color:`${clr}`,textAlign:'center',width:'200px',alignContent:'center',margin:'auto'}} // Adjust styles as needed
   >
  <h1 className="mt-5 mb-5">About( );</h1>
    </motion.div>
    <div className='flex'>
      <p   className='text-xl lg:text-2xl z-20 '>I'm Piyush Chandra, a passionate and creative web developer with 2 years of experience crafting elegant and functional 
      websites..I am from Nainital (Uttarakhand),I compleated my diploma in Information Teachnology from government 
       Pollytechnic college Nainital and compleated The web developer bootcamp and the react+typeScript course from udemy.
       I have been learning web developement since 2 year.With a blend of creativity and technical expertise, I craft elegant 
       solutions that not only meet but exceed expectations.</p><br/>
       </div>
       <div className='flex'>
        <p  className='text-xl lg:text-2xl'>My journey into web development started with a curiosity to understand how things work behind the scenes on the internet.
       This curiosity quickly turned into a passion as I delved deeper into the world of coding and discovered the endless 
        possibilities of creating impactful online experiences.</p><br/>
        </div>
        
        <div className='flex'>
        <p  className='text-xl lg:text-2xl z-10'>I thrive in the dynamic environment of web development, where every project presents a unique challenge and an opportunity to learn
            and grow. Whether it's building a sleek user interface, optimizing website performance, or solving complex technical problems,
            I approach each task with enthusiasm and attention to detail.</p><br/>
            </div>

            <div className='flex'>
            <p  className='text-xl lg:text-2xl z-20'>What truly drives me is the ability to combine my love for technology with my desire
               to make a positive impact. I believe that well-designed websites have the power to 
               inform, inspire, and connect people across the globe, and I'm dedicated to contributing
                my skills to projects that make a difference.</p><br/>
                </div>

                <div className='flex'>
                <p  className='text-xl lg:text-2xl z-20'>As an avid sports enthusiast, I find immense joy and passion in playing cricket,
                  football, and indulging in online gaming. Cricket, with its strategic gameplay and
                   moments of brilliance on the field, has always been a favorite pastime of mine.
                    Whether it's batting, bowling, or fielding, each aspect of the game offers a unique
                     challenge that keeps me engaged and energized. Similarly, football captivates me with 
                     its fast-paced action and team dynamics, fostering camaraderie and sportsmanship.                      
                     </p>
                     </div>
    
                     
</div >  
    </>
  )
}

export default About