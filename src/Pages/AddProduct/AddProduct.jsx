import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_name = form.brand_name.value.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const fullForm = {
      name,
      brand_name,
      type,
      price,
      description,
      rating,
      photo,
    };
    const isNotEmpty = Object.values(fullForm).some((value) => value === "");

    if (!isNotEmpty) {
      fetch("https://server-of-shoes-store.vercel.app/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullForm),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            form.reset();
            Swal.fire("Yeahh!", "Successfully added product", "success");
          } else {
            alert("Failed to add the product");
          }
        });
    } else {
      Swal.fire("Opps!", "You should fill in the entire form", "error");
    }
  };

  return (
    <div>
    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mt-10 underline">Adding Product </h1>
      <form
        onSubmit={handleAdd}
        className="lg:w-3/5 mx-auto bg-[#FFF9ED] p-10 my-10 rounded-lg"
      >
        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#FFA800] text-white font-bold">
              Name
            </span>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#FFA800] text-white font-bold">
              Brand Name
            </span>
            <input
              name="brand_name"
              type="text"
              placeholder="Brand Name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="  flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#FFA800] text-white font-bold">
              Type
            </span>
            <input
              name="type"
              type="text"
              placeholder="Type"
              className="input input-bordered w-full"
            />
          </label>
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#FFA800] text-white font-bold">
              Price
            </span>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#FFA800] text-white font-bold">
              Description
            </span>
            <input
              name="description"
              type="text"
              placeholder="Description"
              className="input input-bordered w-full"
            />
          </label>
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#FFA800] text-white font-bold">
              Rating
            </span>
            <input
              name="rating"
              type="text"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md mb-10">
          <span className="w-[10rem] bg-[#FFA800] text-white font-bold">
            Photo URL
          </span>
          <input
            name="photo"
            className="w-full input input-bordered input-md"
            type="text"
            placeholder="Photo URL"
          />
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
