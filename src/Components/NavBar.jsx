import navicon1 from "../assets/nav-icon1.svg"
import navi2 from '../assets/nav-icon2.svg'
import navi3 from '../assets/nav-icon3.svg'
import '../Components/navbar.css'
import "./navbar.css"
export const NavBar = () => {
  return (
    <div className="  md:flex md:flex-row nav-bar-header fixed top-0 w-full  text-white shadow-lg  " style={{ 
      zIndex: 1000, 
      background: "linear-gradient(to bottom, #12071f, #12071f)" 
    }}
     >

        {/* section 1 */}
        <div className="md:basis-100   md:flex md:flex-row md:items-center md:ml-5 md:mr-0 md:text-2xl md:font-mono md:font-bold heading">Nimesh Bashitha</div>
        
  
        {/* section 2 */}
        <div className="md:basis-250  md:flex md:flex-row md:gap-6  justify-end">
            {/* pages */}
            <div className='md:flex md:flex-row md:gap-6 text-white md:items-center justify-start md:pl-6 justify-items-start text-xl font-mono font-light'>
                <div className="hover:text-[#AD49E1]" ><a href="#home" className="item123">Home</a></div>
                <div className="hover:text-[#AD49E1] "><a href="#about">Skills</a></div>
                <div className="hover:text-[#AD49E1]"><a href="#projects">Projects</a></div>

                <div className="hover:text-[#AD49E1]"><a href="#blogs">Blogs </a></div>
                <div className="hover:text-[#AD49E1]"><a href="#achievements">Achievements</a></div>
                <div className="hover:text-[#AD49E1]"><a href="#contact">Contact</a></div>
                </div> 
                <div className="flex flex-row gap-6 p-2">
            {/* social media */}
            <div className='flex flex-row gap-3 items-center  '>
              <div className="p-2 border-2 border-gray-900  rounded-full" style={{backgroundColor:"#AD49E1"}}><a href="https://www.linkedin.com/in/nimesh-bashitha-a87b2a33a" target="_blank"><img src={navicon1}></img></a></div>
              <div className="p-2 border-2 border-gray-900 rounded-full " style={{backgroundColor:"#AD49E1"}}><img src={navi2}></img></div>
              <div className="p-2 border-2 border-gray-900 rounded-full " style={{backgroundColor:"#AD49E1"}}><img src={navi3}></img></div>

        
              </div> 
            {/* buttons */}
            <div className="flex flex-row items-center  ">
              <div className=" border-4 pl-3 pr-3 pt-2 pb-2" style={{borderColor:"#7A1CAC"}}>Lets Connect</div>
              
              </div> 
              </div>
            
            </div>
           
        
    </div>
  )
}
