import about from "../../../assets/about.png";

const AboutUs = () => {
  return (
    <div className="bg-[#FFEBC3]">
      <h1 className="text-5xl font-bold text-center py-10">ABOUT US</h1>
      <div className="flex flex-col lg:flex-row items-center p-14 w-[95%] mx-auto">
        <div className=" flex justify-center items-center flex-col-reverse md:flex-row">
          <div className="w-[18rem] lg:w-[10rem] space-y-8">
            <h1 className="font-bold text-[#FFA800] text-2xl text-center md:text-left">Trandy -</h1>
            <ul className="md:list-disc md:list-outside my-4 md:space-y-4 text-lg flex gap-4 md:gap-0 flex-wrap justify-center items-center md:flex-col">
                <li>CASUAL</li>
                <li>FORMAL</li>
                <li>LOAFERS</li>
                <li>SANDALS</li>
                <li>FLIP FLOPS</li>
            </ul>
          </div>
          {/* image Design */}
          <div className=" flex p-10  ">
            <img src={about} alt="about image" className=" lg:w-[95%]" />
          </div>
        </div>
        <div className="lg:w-2/4">
          <h1 className="font-bold text-3xl text-right">
            {" "}
            WALK LIGHTLY LEARNING TO ENJOY YOUR WALK..
          </h1>
          <p className="text-2xl text-justify">
            <span className="font-bold">Shoes</span> are coverings for the outer
            foot with sturdy soles on the bottom, typically made of leather that
            reaches no higher than the ankle. <br />
            <br />
            <div className="font-bold">
              A shoe is an item of footwear intended to protect and comfort the
              human foot. They are often worn with a sock....
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

//
