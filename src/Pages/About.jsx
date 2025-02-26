import "react-multi-carousel/lib/styles.css";
// 95

import axios from "axios";
import { useEffect, useState } from "react";
import "./about.css";

export const About = () => {
 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      if (loading) {
        return;
      } else {
        setLoading(true);
        try {
          const response = await axios.get("https://portfoliobe-2.onrender.com/getskills");
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="skill-bx  ">
        <h2
          className="items-center md:text-4xl font-bold font-mono flex text-3xl mt-4 mb-4 justify-center md:p-3 "
          style={{ color: "#AD49E1" }}
        >
          Skills
        </h2>
        <p className="items-center md:text-2xl font-bold font-mono mb-2 text-center md:p-4 md:ml-8 md:mr-8">
          Skilled in React.js and Node.js for web development, alongside logo
          design and branding. Machine learning enthusiast with experience in
          using python libraries. Continuously learning and enhancing my
          expertise through practical projects.
        </p>
        {/* <div>{data.title}</div> */}
        <div className=" justify-center grid-cols-3 grid p-3 gap-4 text-white ">
          {data.map((item, index) => (
            <div className="flex flex-col gap-4 justify-center p-3 border-2 border-[#68288b]  bg-neutral-900">
              <div className="flex justify-center">
                <img src={item.image} className="md:w-28 md:h-28 object-contain w-6 h-6 "></img>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                <h5 className="text-lg  flex text-center font-mono font-semibold text-white" style={{ color: "#EBD3F8" }}>
                  {item.title}
                </h5>
                </div>
               
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};
