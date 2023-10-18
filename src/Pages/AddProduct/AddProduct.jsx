import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAdd = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.Type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const fullForm = {name,brand_name,type,price,description,rating,photo}

        fetch('',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fullForm),
          })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged)
            {
                form.reset();
                Swal.fire("Yesss!","Added Successfully","success")
            }})
    }


    return (
        <div>
          <form onSubmit={handleAdd} className="w-3/5 mx-auto bg-[#FFF9ED] p-10 my-10 rounded-lg">
            <div className=" flex gap-12 mb-10">
              <label className="input-group w-1/2  input-group-md">
                <span className="w-[10rem] bg-[#FFA800] text-white font-bold">Name</span>
                <input
                name = "name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="input-group w-1/2  input-group-md">
                <span className="w-[10rem] bg-[#FFA800] text-white font-bold">Brand Name</span>
                <input
                name="brand_name"
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="  flex gap-12 mb-10">
              <label className="input-group w-1/2  input-group-md">
                <span className="w-[10rem] bg-[#FFA800] text-white font-bold">Type</span>
                <input
                name="type"
                  type="text"
                  placeholder="Type"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="input-group w-1/2  input-group-md">
                <span className="w-[10rem] bg-[#FFA800] text-white font-bold">Price</span>
                <input
                name="price"
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className=" flex gap-12 mb-10">
              <label className="input-group w-1/2  input-group-md">
                <span className="w-[10rem] bg-[#FFA800] text-white font-bold">Description</span>
                <input
                name = "description"
                  type="text"
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="input-group w-1/2  input-group-md">
                <span className="w-[10rem] bg-[#FFA800] text-white font-bold">Rating</span>
                <input
                name="rating"
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            
            <label className="input-group input-group-md mb-10">
              <span className="w-[10rem] bg-[#FFA800] text-white font-bold">Photo URL</span>
              <input name="photo"  className="w-full input input-bordered input-md" type="text" placeholder="Photo URL" />
            </label>
            <input
              className="w-full text-center btn text-white text-bold text-lg bg-[#FFA800]"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      );
};

export default AddProduct;