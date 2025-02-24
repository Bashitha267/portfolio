import axios from "axios";
import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";

export const Blogs = () => {
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
      <h2 className="items-center md:text-4xl font-bold font-mono flex  justify-center md:p-3 m-3 " style={{color:"#AD49E1"}}>
            Blogs
          </h2>
      <div className="grid grid-cols-4 gap-4 mt-4 ">
        {data.map((item, index) => (
          <div key={index} className="flex flex-row justify-center gap-4 m-4 ">
            <a href={item.link} target="_blank"><img
              src={item.image}
              className=" object-cover hover:scale-110 transition-transform duration-300 w-72 h-72 " // Added hover effect
              alt={item.title} 
            /></a>
          </div>
        ))}
      </div>
    </div>
  );
};
