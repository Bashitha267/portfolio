import axios from "axios";
import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
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
    <div className="flex flex-col">
      <div className="skill-bx">
        <h2
          className="items-center md:text-4xl font-bold font-mono flex text-3xl mt-1 mb-4 justify-center md:p-3 
                     animate-fade-in"
          style={{ color: "#AD49E1" }}
        >
          Skills
        </h2>
        <p className="items-center md:text-3xl font-bold font-mono mb-2 text-center md:p-4 md:ml-8 md:mr-8
                      animate-fade-in "
        >
          Skilled in React.js and Node.js for web development, alongside logo
          design and branding. Machine learning enthusiast with experience in
          using python libraries. Continuously learning and enhancing my
          expertise through practical projects.
        </p>
        <div className="md:flex md:justify-center">
        <div className="md:m-6 m-2 justify-center grid-cols-3 grid p-3 gap-4 md:gap-8 text-white md:w-[50%]">
          {data.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col gap-4 justify-center md:p-6 p-3  border-2 border-[#68288b] bg-neutral-900
                         transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#68288b]/30
                         animate-fade-in " 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center overflow-hidden">
                <img 
                  src={item.image} 
                  className="md:w-28 md:h-28 w-6 h-6 object-contain
                             transition-all duration-500 hover:rotate-12 hover:scale-110
                             animate-bounce-in"
                  alt={item.title}
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                  <h5 
                    className="text-lg md:text-2xl flex text-center font-mono font-semibold text-white"
                    style={{ color: "#EBD3F8" }}
                  >
                    {item.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};
