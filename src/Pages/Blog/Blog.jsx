import { useLoaderData } from "react-router-dom";




const Blog = () => {


    const datas = useLoaderData();



    return (
        <div className="grid lg:grid-cols-3 my-20 lg:w-10/12 lg:mx-auto ">
      {datas.map((data) => (
        <div key={data.group_id}>
          <div className="card card-compact md:w-96 bg-[#FFF9ED] mb-7 border-[#FFA800] border-4">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
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