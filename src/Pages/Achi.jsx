import axios from "axios";
import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";

export const Achi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (loading) {
        return;
      } else {
        setLoading(true);
        try {
          const response = await axios.get("http://localhost:3000/getprojects");
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-3">
    <h2 className="items-center md:text-4xl font-bold font-mono flex text-3xl mb-4 justify-center md:p-3 " style={{color:"#AD49E1"}}>
            My Achievements
          </h2>
    <div className="grid md:grid-cols-4 gap-4 mt-4 grid-cols-2">
      {data.map((item, index) => (
        <div key={index} className="flex flex-row justify-center gap-4 m-4 ">
          <a href={item.link} target="_blank"><img
            src={item.image}
            className=" object-contain hover:scale-110 transition-transform duration-300 md:w-72 md:h-72 " // Added hover effect
            alt={item.title} 
          /></a>
        </div>
      ))}
    </div>
  </div>
  );
};
