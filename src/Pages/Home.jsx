import React from 'react';
import { TypeAnimation } from "react-type-animation";
export const Home = () => {
    return (
        <div className="grid grid-cols-2 ">
          <div className=" mt-20 flex-col p-10 items-center gap-6">
            <div className=" text-3xl p-3 items-center justify-center  font-semibold ">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "I am Nimesh Bashitha",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "I am a Fullstack Developer",
                  1000,
                  "I am a Machine Learning Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "2em",
                  display: "inline-block",
                  color: "#EBD3F8",
                }}
                repeat={Infinity}
              />
            </div>
            <div className="flex  md:text-xl font-mono text-home w-2/3 p-3">
              I am a Computer Science undergraduate at the University of Jaffna,
              specializing in    full-stack development and exploring machine learning.
              Passionate about building innovative solutions and expanding my
              technical expertise.
            </div>
            <div>
                <button className='rounded-full border-4 border-fuchsia-950 p-3 mt-4 ' style={{background: "#7A1CAC"}}>Download CV</button>
            </div>
          </div>
          <div>
            <img></img>
          </div>
        </div>
      );
}
