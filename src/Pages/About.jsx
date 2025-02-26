import "react-multi-carousel/lib/styles.css";
// 95

import axios from "axios";
import { useEffect, useState } from "react";
import "./about.css";

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      if (loading) {
        return;
      } else {
        setLoading(true);
        try {
          const response = await axios.get("http://localhost:3000/getskills");
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
        
        <div className="flex flex-col justify-center md:grid-cols-2 md:grid p-3  ">
          {data.map((item, index) => (
            <div className="flex flex-row gap-4 md:justify-center p-3 border-2 border-[#68288b]  ">
              <div>
                <img src={item.image} className="md:w-28 md:h-28 object-contain w-16 h-16"></img>
              </div>
              <div className="flex flex-col">
                <div>
                <h5 className="text-xl" style={{ color: "#EBD3F8" }}>
                  {item.title}
                </h5>
                </div>
               <div>
               <p className="text-md">{item.description}</p>

               </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};
