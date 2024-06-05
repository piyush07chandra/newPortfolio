import { useRef} from 'react'
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {motion} from 'framer-motion'

// Define the type of your form element
type FormElementType = HTMLFormElement;
import { clrType } from './HomePage';

const Contact:React.FC<clrType> = ({clr}) => {
  const form = useRef<FormElementType>(null);

  const Alert=()=>{  
    alert('thanks for text me')
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Assuming 'form' is a React ref pointing to your form element
    if (!form.current) return; // Check if form.current is null or undefined
  
    emailjs.sendForm('service_k0zpnqy', 'template_604q89c', form.current, 'b2oygVunPHWCnIcLL')
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text);
        }
      );
  };
  
  return (
    <>
    <div style={{border:`1px solid ${clr}`,boxShadow:`5px 5px 20px  ${clr}`,fontFamily:'Dancing Script, cursive'}} className='contact text-3xl text-center rounded-md bg-black m-7 shadow-lg shadow-white'>
      
    <motion.div
     animate={{ scale: [1, 1.5, 1], opacity: [5, 0.4, 3] }}
     transition={{ duration: 1.5, repeat: Infinity }}
     style={{ fontSize: "24px", fontWeight: "bold",color:`${clr}`,textAlign:'center',width:'200px',alignContent:'center',margin:'auto'}} // Adjust styles as needed
   >
  <h1 className="mt-8">Contact( );</h1>
    </motion.div>
    <div className='flex'>
      <div className='mb-8 text-lg z-20 mx-auto'>   
      <h3 className='mt-8'><img className='flex mx-auto justify-center rounded-md' src='/icons8-email.gif'/> Email: <br/>piyushchandra9458@gmail.com</h3>
      <h3 className='mt-8'><img className='flex mx-auto justify-center rounded-md' src='/icons8-phonelink-ring.gif'/> Call:<br/>91+7579230565</h3>
      <h3 className='mt-8'><img className='flex mx-auto justify-center rounded-md' src='/icons8-location.gif'/> Location:<br/>Nainital (Uttarakhand)</h3>
      </div>
      </div>
      <iframe className=" mt-4 justify-center w-full px-8 h-96 " title='iframe' src="https://maps.google.com/maps?&amp;hl=en&amp;q=nainital gufamahadev&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

     

      <form className="text-xl lg:text-3xl " ref={form} onSubmit={sendEmail}>    
  <div className="mb-3 flex">
    <div className='mx-auto z-20'>
    <label>Name: </label>
    <input type="text" name='Name' className="text-black focus:outline-none rounded-md text-xl"  aria-describedby="emailHelp"/>
    </div>
  </div>
  <div className="mb-3 flex">
    <div className='mx-auto z-20'>
    <label>Email: </label>
    <input type="text" name='Email' className="text-black focus:outline-none rounded-md text-xl" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text text-blue-500">I'll never share your email with anyone else.</div>
    </div>
  </div>
  <div className="mb-3 flex justify-center">
    <label className='z-20'>Message: </label>
    <textarea 
        placeholder="Type your message here..."
        className="text-black focus:outline-none lg:w-96 h-40 p-2 text-lg border border-gray-300 rounded resize-y z-20"
      />
  </div>
  <div className='flex'>
  <button onClick={Alert} type="submit" className="bg-blue-600 hover:bg-blue-400 rounded-md px-2 mb-4 text-white z-20 mx-auto">Sent</button>
  </div>
</form>
    </div>
    </>
  )
}

export default Contact