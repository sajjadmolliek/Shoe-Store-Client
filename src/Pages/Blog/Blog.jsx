import { useLoaderData } from "react-router-dom";




const Blog = () => {


    const datas = useLoaderData();



    return (
        <div className="grid lg:grid-cols-3 p-5 my-20 lg:w-10/12 lg:mx-auto ">
      {datas.map((data) => (
        <div key={data.group_id}>
          <div className="card card-compact md:w-96 md:mx-auto bg-[#FFF9ED] mb-7 border-[#FFA800] border-4" data-aos="flip-left">
            <figure>
              <img
              className="h-56"
                src={data.Image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.Name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn bg-[#FFA800] text-white font-bold btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default Blog;