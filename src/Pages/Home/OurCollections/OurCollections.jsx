/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const OurCollections = ({ datas }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-bold text-center mt-10 mb-20 underline">
        Our Collections
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-4  md:w-1/2 lg:w-10/12  md:mx-auto">
        {datas.map((data) => (
          <div key={data.id}>
            <NavLink to={`/brand/${data.id}`}>
              <div
                className=" md:w-96 bg-[#FFF9ED]  mb-6"
                data-aos="flip-left"
              >
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
