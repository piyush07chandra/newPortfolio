

const Footer = () => {
  return (
    <>
    <div className=" bg-slate-900">
      <div className="flex">
      <h1 className="text-center text-xl lg:text-4xl font-serif pt-8 z-20 mx-auto">"The harder you work for something,<br/>the greater you'll feel when you achieve it."</h1>
      </div>
      <div className="flex"><h1 className="text-xl lg:text-3xl font-serif text-center mt-12 mb-4 z-20 mx-auto">Get in Touch( );</h1></div>
      
      <div className="flex mx-auto justify-center">
        <a className="z-20" href="https://www.instagram.com/piyushchandra07/" target="_blank"><img className="h-14 w-14 hover:bg-white p-1 rounded-full" src="/instagram.svg"/></a>
        <a className="z-20" href="https://www.linkedin.com/in/piyush-chandra-16418722b/" target="_blank"><img className="h-14 w-14 hover:bg-white p-1 rounded-full" src="/linkedin-original.svg"/></a>
        <a className="z-20" href="https://api.whatsapp.com/send/?phone=%2B917579230565&text&type=phone_number&app_absent=0" target="_blank"><img className="h-14 w-14 hover:bg-white p-1 rounded-full" src="/whatsapp.svg"/></a>
        <a className="z-20" href="https://www.youtube.com/@1mystic486" target="_blank"><img className="h-14 w-14 hover:bg-white p-1 rounded-full" src="/youtube.svg"/></a>
        <a className="z-20" href="https://github.com/piyush07chandra" target="_blank"><img className="h-14 w-14 hover:bg-white p-1 rounded-full" src="/icons8-github-50.png"/></a>
      </div>

      <div className="flex">
          <h1 className="text-center text-md lg:text-xl font-serif mt-8 pb-8 mx-auto z-20">Design and built by Piyush @ 2024</h1>
      </div>
    
    </div>
    </>
  )
}

export default Footer