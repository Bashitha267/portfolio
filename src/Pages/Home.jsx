import React from 'react';
import { TypeAnimation } from "react-type-animation";
import test1 from '../assets/test1.jpg';
export const Home = () => {
    return (
      <div className='md:flex md:w-[90%] mx-auto'> 
        <div className="md:grid md:grid-cols-2 flex flex-col-reverse gap-3">
          <div className=" md:mt-20 flex-col md:p-10 items-center gap-6">
          <div className="md:text-6xl p-3 text-2xl items-center justify-center font-semibold md:mb-10" 
     style={{ height: "85px" }}> {/* Adjust height based on the longest text */}
     <div className='text-[#EBD3F8]'>Hi I'm</div>
  <TypeAnimation
    sequence={[
      "Nimesh Bashitha",
      1000,
      "Fullstack Developer",
      1000,
      "Machine Learning Enthusiast",
      1000,
    ]}
    wrapper="span"
    speed={50}
    style={{
      display: "inline-block",
      color: "#EBD3F8",
      width:"max"
    }}
    repeat={Infinity}
  />
</div>

            <div className="flex   mt-3 md:mt-20 text-lg  md:text-3xl font-mono text-home  justify-center p-3 md:w-8/12">
              I am a Computer Science undergraduate at the University of Jaffna,
              specializing in    full-stack development and exploring machine learning.
              Passionate about building innovative solutions and expanding my
              technical expertise.
            </div>
            <div>
                <button className='rounded-full border-4 border-fuchsia-950 p-3 mt-6 md:p-6 md:mt-14 text-lg' style={{background: "#7A1CAC"}}>Download CV</button>
            </div>
          </div>
          <div className='flex md:flex-col justify-center md:items-center'>
            <img src={test1} className='w-60 h-60 object-contain md:w-[80%] md:h-[80%] '></img>
          </div>
        </div>
        </div>
      );
}
