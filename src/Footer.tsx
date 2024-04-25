

const Footer = () => {
  return (
    <>
    <div className=" bg-slate-900">
      <h1 className="text-center text-2xl lg:text-4xl font-serif pt-8">"The harder you work for something,<br/>the greater you'll feel when you achieve it."</h1>
      
      <h1 className="text-2xl lg:text-3xl font-serif text-center mt-12 mb-4">Get in Touch( );</h1>
      <div className="flex mx-auto justify-center">
        <a href="https://www.instagram.com/piyushchandra07/"><img className="h-14 w-14 hover:bg-white p-1 rounded-full" src="/instagram.svg"/></a>
        <a href="https://www.linkedin.com/in/piyush-chandra-16418722b/"><img className="h-14 w-14 hover:bg-white p-1 rounded-full" src="/linkedin-original.svg"/></a>
        <a href="https://api.whatsapp.com/send/?phone=%2B917579230565&text&type=phone_number&app_absent=0"><img className="h-14 w-14 hover:bg-white p-1 rounded-full" src="/whatsapp.svg"/></a>
        <a href="https://www.youtube.com/@1mystic486"><img className="h-14 w-14 hover:bg-white p-1 rounded-full" src="/youtube.svg"/></a>
        <a href="https://github.com/piyush07chandra"><img className="h-14 w-14 hover:bg-white p-1 rounded-full" src="/icons8-github-50.png"/></a>
      </div>

      <h1 className="text-center text-xl font-semibold font-mono mt-8 pb-8">Design and built by Piyush @ 2024</h1>
    </div>
    </>
  )
}

export default Footer