import React from 'react';
import { TypeAnimation } from "react-type-animation";
import test1 from '../assets/test1.jpg';
export const Home = () => {
    return (
        <div className="md:grid md:grid-cols-2 flex flex-col-reverse gap-3">
          <div className=" md:mt-20 flex-col md:p-10 items-center gap-6">
          <div className="md:text-3xl p-3 text-4xl items-center justify-center font-semibold" 
     style={{ height: "85px" }}> {/* Adjust height based on the longest text */}
  <TypeAnimation
    sequence={[
      "I am Nimesh Bashitha",
      1000,
      "I am a Fullstack Developer",
      1000,
      "I am a Machine Learning Enthusiast",
      1000,
    ]}
    wrapper="span"
    speed={50}
    style={{
      display: "inline-block",
      color: "#EBD3F8",
    }}
    repeat={Infinity}
  />
</div>

            <div className="flex   mt-5 text-lg  md:text-xl font-mono text-home w-5/6 justify-center p-3">
              I am a Computer Science undergraduate at the University of Jaffna,
              specializing in    full-stack development and exploring machine learning.
              Passionate about building innovative solutions and expanding my
              technical expertise.
            </div>
            <div>
                <button className='rounded-full border-4 border-fuchsia-950 p-3 mt-6 ' style={{background: "#7A1CAC"}}>Download CV</button>
            </div>
          </div>
          <div className='flex md:flex-col justify-center md:items-center'>
            <img src={test1} className='w-60 h-60 object-contain md:w-96 md:h-96 '></img>
          </div>
        </div>
      );
}
