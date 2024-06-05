import { useState } from "react";
import { useSpring, animated } from 'react-spring';
import { Link as ScrollLink } from 'react-scroll';



const Navbar  = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

   const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' }, // Start from above (-50px)
    to: { opacity: 1, transform: 'translateY(0)' }, // End at the normal position (0)
    config: { duration: 1000 }, // Animation duration
  });

   

  return (
    <>
      <nav className=" lg:rounded-full rounded-3xl fixed top-4 lg:left-52 md:left-10 left-6 bg-gray-800 backdrop-filter backdrop-blur-sm bg-opacity-50 px-4 py-1 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center ">
            <img className="lg:h-20 lg:w-20 h-16 w-16 " src="/Snapchat-2116996598-removebg-preview.png" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
               <animated.div style={animation}>
               <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
                className=" cursor-pointer text-white hover:bg-purple-900 px-3 py-2 rounded-3xl lg:text-2xl text-lg font-serif"
              >
                Home();
              </ScrollLink>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
                className="cursor-pointer text-white hover:bg-purple-900 px-3 py-2 rounded-3xl lg:text-2xl text-lg font-serif"
              >
                About();
              </ScrollLink>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
                className="cursor-pointer text-white hover:bg-purple-900 px-3 py-2 rounded-3xl lg:text-2xl text-lg font-serif"
              >
                Skills();
              </ScrollLink>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
                className="cursor-pointer text-white hover:bg-purple-900 px-3 py-2 rounded-3xl lg:text-2xl text-lg font-serif"
              >
                Projects();
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
                className="cursor-pointer text-white hover:bg-purple-900 px-3 py-2 rounded-3xl lg:text-2xl text-lg font-serif"
              >
                Contact();
              </ScrollLink>
              </animated.div>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleNavbar}
              className="ml-28 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 `}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home();
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            About();
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Skills();
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects();
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact();
          </ScrollLink>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar