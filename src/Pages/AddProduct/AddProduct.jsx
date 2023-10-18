import { Link } from "react-router-dom";

const AddProduct = () => {

    const handleAdd = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const test = form.test.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const supplier = form.supplier.value;
        const coffeesDetails = {name,test,price,photo,supplier}

        fetch('https://day4-server-site.vercel.app/coffee',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(coffeesDetails),
          })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged)
            {
                form.reset();
                alert("Added Successfully")
            }})
    }


    return (
        <div>
          <form onSubmit={handleAdd} className="w-3/5 mx-auto">
            <div className=" flex gap-12 mb-5">
              <label className="input-group w-1/2  input-group-md">
                <span>Name</span>
                <input
                name = "name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="input-group w-1/2  input-group-md">
                <span>Test</span>
                <input
                name="test"
                  type="text"
                  placeholder="Test"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="  flex gap-12 mb-5">
              <label className="input-group w-1/2  input-group-md">
                <span>Price</span>
                <input
                name="price"
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="input-group w-1/2  input-group-md">
                <span>Supplier</span>
                <input
                name="supplier"
                  type="text"
                  placeholder="Supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <label className="input-group input-group-md mb-10">
              <span>Photo</span>
              <input name="photo"  className="w-full input input-bordered input-md" type="text" placeholder="Photo" />
            </label>
            <input
              className="w-full text-center btn btn-accent"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      );
};

export default AddProduct;