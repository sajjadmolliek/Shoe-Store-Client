/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import useCustomeHook from "../../../Hooks/useCustomeHook";

const OurCollections = ({ datas }) => {
  const { setFindShoes } = useCustomeHook();

  const handleBrandCatagory = (brandName) => {
    const lowarCaseBrandName = brandName.toLowerCase();

    fetch("http://localhost:5005/addProducts", {
      method: "POST", // Change to POST to send data to the backend
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ brand_name: lowarCaseBrandName }), // Send the brand_name as an object
    })
      .then((res) => res.json())
      .then((data) => {
        setFindShoes(data);
      });
  };

  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-bold text-center mt-10 mb-20 underline">
        Our Collections
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-4  md:w-1/2 lg:w-10/12  md:mx-auto">
        {datas.map((data) => (
          <div key={data.id}>
            <NavLink
              onClick={() => handleBrandCatagory(data.brand_name)}
              to={`/brand/${data.id}`}
            >
              <div className=" md:w-96 bg-[#FFF9ED]  mb-6" data-aos="flip-left">
                <figure className="flex justify-center items-center">
                  <img className="h-52" src={data.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="text-center text-4xl font-bold">
                    {data.brand_name}
                  </h2>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCollections;
