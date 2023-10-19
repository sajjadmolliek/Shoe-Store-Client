import { NavLink, useLoaderData } from "react-router-dom";
import useCustomeHook from "../../Hooks/useCustomeHook";
import "./Brands.css";



const Brands = () => {
  // const { findShoes } = useCustomeHook();
  const findShoes = useLoaderData()
  console.log(findShoes);

  // Array(4).fill("").map(rate => "*").join([])
  if (findShoes.length > 0) {
    if (findShoes.length < 4) {
      let remainCard = 4 - findShoes.length;
      return (
        <div>
          {/* Carousel Side */}
          <div className="carousel w-full h-96  background">
            <div id="slide1" className="carousel-item relative w-full">
              {findShoes[0]?.photo ? (
                <img src={findShoes[0]?.photo} className="w-[30%] mx-auto" />
              ) : (
                <h1 className="text-4xl font-bold text-white flex justify-center h-56 w-full items-end">
                  To show No data this Image You Should add more items
                </h1>
              )}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              {findShoes[1]?.photo ? (
                <img src={findShoes[1]?.photo} className="w-[30%] mx-auto" />
              ) : (
                <h1 className="text-4xl font-bold text-white flex justify-center h-56 w-full items-end">
                  To show No data this Image You Should add more items
                </h1>
              )}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              {findShoes[2]?.photo ? (
                <img src={findShoes[2]?.photo} className="w-[30%] mx-auto" />
              ) : (
                <h1 className="text-4xl font-bold text-white flex justify-center h-56 w-full items-end">
                  To show No data this Image You Should add more items
                </h1>
              )}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              {findShoes[3]?.photo ? (
                <img src={findShoes[3]?.photo} className="w-[30%] mx-auto" />
              ) : (
                <h1 className="text-4xl font-bold text-white flex justify-center h-56 w-full items-end">
                  To show No data this Image You Should add more items
                </h1>
              )}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-2xl md:text-5xl font-bold text-center mt-10 mb-20 underline">
            {findShoes[0].brand_name.toUpperCase()}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 p-4  md:w-1/2 lg:w-7/12  md:mx-auto">
            {findShoes.map((shoes) => (
              <div key={shoes._id}>
                <div
                  className="card shadow-xl md:w-96 bg-[#FFF9ED]  mb-10"
                  data-aos="flip-left"
                >
                  <figure>
                    <img className="h-56" src={shoes.photo} alt="Shoes" />
                  </figure>
                  <div className="card-body ">
                    <h2 className="card-title justify-center">
                      {shoes.name.toUpperCase()}
                      <div className="badge border-0 bg-[#FFA800] text-white">
                        NEW
                      </div>
                    </h2>
                    <div className="flex justify-center gap-5 my-5 items-center">
                      <h2 className="card-title">
                        {shoes.brand_name.toUpperCase()}
                      </h2>
                      <h2 className="card-title">{shoes.type.toUpperCase()}</h2>
                    </div>
                    <div className="flex gap-x-2 justify-center items-center mb-5">
                      
                      {Array(Math.floor(shoes.rating))
                        .fill("")
                        .map((rate) => <svg key={rate.id}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.47966 1.49897C9.52196 1.3958 9.59398 1.30755 9.68658 1.24543C9.77918 1.18331 9.88816 1.15015 9.99966 1.15015C10.1112 1.15015 10.2201 1.18331 10.3127 1.24543C10.4053 1.30755 10.4774 1.3958 10.5197 1.49897L12.6447 6.60997C12.6844 6.70561 12.7498 6.78841 12.8336 6.84928C12.9174 6.91015 13.0164 6.94672 13.1197 6.95497L18.6377 7.39697C19.1367 7.43697 19.3387 8.05997 18.9587 8.38497L14.7547 11.987C14.6761 12.0542 14.6176 12.1417 14.5855 12.2399C14.5534 12.3382 14.5489 12.4434 14.5727 12.544L15.8577 17.929C15.8835 18.037 15.8767 18.1503 15.8382 18.2545C15.7997 18.3587 15.7312 18.4491 15.6413 18.5144C15.5514 18.5797 15.4442 18.6168 15.3332 18.6212C15.2222 18.6256 15.1124 18.597 15.0177 18.539L10.2927 15.654C10.2044 15.6002 10.103 15.5717 9.99966 15.5717C9.8963 15.5717 9.79493 15.6002 9.70666 15.654L4.98166 18.54C4.88692 18.598 4.77712 18.6266 4.66612 18.6222C4.55512 18.6178 4.44791 18.5807 4.35803 18.5154C4.26815 18.4501 4.19962 18.3597 4.16111 18.2555C4.1226 18.1513 4.11584 18.038 4.14166 17.93L5.42666 12.544C5.45049 12.4434 5.44611 12.3381 5.414 12.2399C5.38189 12.1416 5.3233 12.0541 5.24466 11.987L1.04066 8.38497C0.956476 8.31258 0.895573 8.21692 0.865612 8.11001C0.835651 8.00309 0.83797 7.88971 0.872278 7.78412C0.906586 7.67852 0.971351 7.58543 1.05843 7.51654C1.1455 7.44766 1.25101 7.40605 1.36166 7.39697L6.87966 6.95497C6.98291 6.94672 7.08188 6.91015 7.16569 6.84928C7.2495 6.78841 7.31488 6.70561 7.35466 6.60997L9.47966 1.49897Z"
                          fill="#FFC107"
                          stroke="#FFC107"
                        />
                      </svg>)
                        }
                    </div>

                    <div className="card-actions justify-end">
                      <button className="btn mr-2 md:mr-7 border-0 bg-[#FFA800] text-white font-bold btn-sm">
                        {shoes.price}
                      </button>

                      <NavLink to={`/update/${shoes._id}`}>
                        <button className="btn mr-5 border-0 bg-[#FFA800] text-white font-bold btn-sm">
                          Update
                        </button>
                      </NavLink>
                      <NavLink to={`/details/${shoes._id}`}>
                        <button className="btn border-0 bg-[#FFA800] text-white font-bold btn-sm">
                          Show More
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center p-10">
            You Should Enter more ({remainCard}) item. <br />
            {`"Please Enter Them"`}
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          {/* Carousel Side */}
          <div className="carousel w-full h-96 background">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={findShoes[0]?.photo} className="w-[30%] mx-auto" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={findShoes[1]?.photo} className="w-[30%] mx-auto" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={findShoes[2]?.photo} className="w-[30%] mx-auto" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={findShoes[3]?.photo} className="w-[30%] mx-auto" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <h1 className="text-2xl md:text-5xl font-bold text-center mt-10 mb-20 underline">
            {findShoes[0].brand_name.toUpperCase()}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2  p-4 md:w-1/2 lg:w-7/12  md:mx-auto">
            {findShoes.map((shoes) => (
              <div key={shoes._id}>
                <div
                  className="card shadow-xl md:w-96 bg-[#FFF9ED]  mb-10"
                  data-aos="flip-left"
                >
                  <figure>
                    <img className="h-56" src={shoes.photo} alt="Shoes" />
                  </figure>
                  <div className="card-body ">
                    <h2 className="card-title justify-center">
                      {shoes.name.toUpperCase()}
                      <div className="badge border-0 bg-[#FFA800] text-white">
                        NEW
                      </div>
                    </h2>
                    <div className="flex justify-center gap-5 my-5 items-center">
                      <h2 className="card-title">
                        {shoes.brand_name.toUpperCase()}
                      </h2>
                      <h2 className="card-title">{shoes.type.toUpperCase()}</h2>
                    </div>
                    <div className="flex gap-x-2 justify-center items-center mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.47966 1.49897C9.52196 1.3958 9.59398 1.30755 9.68658 1.24543C9.77918 1.18331 9.88816 1.15015 9.99966 1.15015C10.1112 1.15015 10.2201 1.18331 10.3127 1.24543C10.4053 1.30755 10.4774 1.3958 10.5197 1.49897L12.6447 6.60997C12.6844 6.70561 12.7498 6.78841 12.8336 6.84928C12.9174 6.91015 13.0164 6.94672 13.1197 6.95497L18.6377 7.39697C19.1367 7.43697 19.3387 8.05997 18.9587 8.38497L14.7547 11.987C14.6761 12.0542 14.6176 12.1417 14.5855 12.2399C14.5534 12.3382 14.5489 12.4434 14.5727 12.544L15.8577 17.929C15.8835 18.037 15.8767 18.1503 15.8382 18.2545C15.7997 18.3587 15.7312 18.4491 15.6413 18.5144C15.5514 18.5797 15.4442 18.6168 15.3332 18.6212C15.2222 18.6256 15.1124 18.597 15.0177 18.539L10.2927 15.654C10.2044 15.6002 10.103 15.5717 9.99966 15.5717C9.8963 15.5717 9.79493 15.6002 9.70666 15.654L4.98166 18.54C4.88692 18.598 4.77712 18.6266 4.66612 18.6222C4.55512 18.6178 4.44791 18.5807 4.35803 18.5154C4.26815 18.4501 4.19962 18.3597 4.16111 18.2555C4.1226 18.1513 4.11584 18.038 4.14166 17.93L5.42666 12.544C5.45049 12.4434 5.44611 12.3381 5.414 12.2399C5.38189 12.1416 5.3233 12.0541 5.24466 11.987L1.04066 8.38497C0.956476 8.31258 0.895573 8.21692 0.865612 8.11001C0.835651 8.00309 0.83797 7.88971 0.872278 7.78412C0.906586 7.67852 0.971351 7.58543 1.05843 7.51654C1.1455 7.44766 1.25101 7.40605 1.36166 7.39697L6.87966 6.95497C6.98291 6.94672 7.08188 6.91015 7.16569 6.84928C7.2495 6.78841 7.31488 6.70561 7.35466 6.60997L9.47966 1.49897Z"
                          fill="#FFC107"
                          stroke="#FFC107"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.47966 1.49897C9.52196 1.3958 9.59398 1.30755 9.68658 1.24543C9.77918 1.18331 9.88816 1.15015 9.99966 1.15015C10.1112 1.15015 10.2201 1.18331 10.3127 1.24543C10.4053 1.30755 10.4774 1.3958 10.5197 1.49897L12.6447 6.60997C12.6844 6.70561 12.7498 6.78841 12.8336 6.84928C12.9174 6.91015 13.0164 6.94672 13.1197 6.95497L18.6377 7.39697C19.1367 7.43697 19.3387 8.05997 18.9587 8.38497L14.7547 11.987C14.6761 12.0542 14.6176 12.1417 14.5855 12.2399C14.5534 12.3382 14.5489 12.4434 14.5727 12.544L15.8577 17.929C15.8835 18.037 15.8767 18.1503 15.8382 18.2545C15.7997 18.3587 15.7312 18.4491 15.6413 18.5144C15.5514 18.5797 15.4442 18.6168 15.3332 18.6212C15.2222 18.6256 15.1124 18.597 15.0177 18.539L10.2927 15.654C10.2044 15.6002 10.103 15.5717 9.99966 15.5717C9.8963 15.5717 9.79493 15.6002 9.70666 15.654L4.98166 18.54C4.88692 18.598 4.77712 18.6266 4.66612 18.6222C4.55512 18.6178 4.44791 18.5807 4.35803 18.5154C4.26815 18.4501 4.19962 18.3597 4.16111 18.2555C4.1226 18.1513 4.11584 18.038 4.14166 17.93L5.42666 12.544C5.45049 12.4434 5.44611 12.3381 5.414 12.2399C5.38189 12.1416 5.3233 12.0541 5.24466 11.987L1.04066 8.38497C0.956476 8.31258 0.895573 8.21692 0.865612 8.11001C0.835651 8.00309 0.83797 7.88971 0.872278 7.78412C0.906586 7.67852 0.971351 7.58543 1.05843 7.51654C1.1455 7.44766 1.25101 7.40605 1.36166 7.39697L6.87966 6.95497C6.98291 6.94672 7.08188 6.91015 7.16569 6.84928C7.2495 6.78841 7.31488 6.70561 7.35466 6.60997L9.47966 1.49897Z"
                          fill="#FFC107"
                          stroke="#FFC107"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.47966 1.49897C9.52196 1.3958 9.59398 1.30755 9.68658 1.24543C9.77918 1.18331 9.88816 1.15015 9.99966 1.15015C10.1112 1.15015 10.2201 1.18331 10.3127 1.24543C10.4053 1.30755 10.4774 1.3958 10.5197 1.49897L12.6447 6.60997C12.6844 6.70561 12.7498 6.78841 12.8336 6.84928C12.9174 6.91015 13.0164 6.94672 13.1197 6.95497L18.6377 7.39697C19.1367 7.43697 19.3387 8.05997 18.9587 8.38497L14.7547 11.987C14.6761 12.0542 14.6176 12.1417 14.5855 12.2399C14.5534 12.3382 14.5489 12.4434 14.5727 12.544L15.8577 17.929C15.8835 18.037 15.8767 18.1503 15.8382 18.2545C15.7997 18.3587 15.7312 18.4491 15.6413 18.5144C15.5514 18.5797 15.4442 18.6168 15.3332 18.6212C15.2222 18.6256 15.1124 18.597 15.0177 18.539L10.2927 15.654C10.2044 15.6002 10.103 15.5717 9.99966 15.5717C9.8963 15.5717 9.79493 15.6002 9.70666 15.654L4.98166 18.54C4.88692 18.598 4.77712 18.6266 4.66612 18.6222C4.55512 18.6178 4.44791 18.5807 4.35803 18.5154C4.26815 18.4501 4.19962 18.3597 4.16111 18.2555C4.1226 18.1513 4.11584 18.038 4.14166 17.93L5.42666 12.544C5.45049 12.4434 5.44611 12.3381 5.414 12.2399C5.38189 12.1416 5.3233 12.0541 5.24466 11.987L1.04066 8.38497C0.956476 8.31258 0.895573 8.21692 0.865612 8.11001C0.835651 8.00309 0.83797 7.88971 0.872278 7.78412C0.906586 7.67852 0.971351 7.58543 1.05843 7.51654C1.1455 7.44766 1.25101 7.40605 1.36166 7.39697L6.87966 6.95497C6.98291 6.94672 7.08188 6.91015 7.16569 6.84928C7.2495 6.78841 7.31488 6.70561 7.35466 6.60997L9.47966 1.49897Z"
                          fill="#FFC107"
                          stroke="#FFC107"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.47966 1.49897C9.52196 1.3958 9.59398 1.30755 9.68658 1.24543C9.77918 1.18331 9.88816 1.15015 9.99966 1.15015C10.1112 1.15015 10.2201 1.18331 10.3127 1.24543C10.4053 1.30755 10.4774 1.3958 10.5197 1.49897L12.6447 6.60997C12.6844 6.70561 12.7498 6.78841 12.8336 6.84928C12.9174 6.91015 13.0164 6.94672 13.1197 6.95497L18.6377 7.39697C19.1367 7.43697 19.3387 8.05997 18.9587 8.38497L14.7547 11.987C14.6761 12.0542 14.6176 12.1417 14.5855 12.2399C14.5534 12.3382 14.5489 12.4434 14.5727 12.544L15.8577 17.929C15.8835 18.037 15.8767 18.1503 15.8382 18.2545C15.7997 18.3587 15.7312 18.4491 15.6413 18.5144C15.5514 18.5797 15.4442 18.6168 15.3332 18.6212C15.2222 18.6256 15.1124 18.597 15.0177 18.539L10.2927 15.654C10.2044 15.6002 10.103 15.5717 9.99966 15.5717C9.8963 15.5717 9.79493 15.6002 9.70666 15.654L4.98166 18.54C4.88692 18.598 4.77712 18.6266 4.66612 18.6222C4.55512 18.6178 4.44791 18.5807 4.35803 18.5154C4.26815 18.4501 4.19962 18.3597 4.16111 18.2555C4.1226 18.1513 4.11584 18.038 4.14166 17.93L5.42666 12.544C5.45049 12.4434 5.44611 12.3381 5.414 12.2399C5.38189 12.1416 5.3233 12.0541 5.24466 11.987L1.04066 8.38497C0.956476 8.31258 0.895573 8.21692 0.865612 8.11001C0.835651 8.00309 0.83797 7.88971 0.872278 7.78412C0.906586 7.67852 0.971351 7.58543 1.05843 7.51654C1.1455 7.44766 1.25101 7.40605 1.36166 7.39697L6.87966 6.95497C6.98291 6.94672 7.08188 6.91015 7.16569 6.84928C7.2495 6.78841 7.31488 6.70561 7.35466 6.60997L9.47966 1.49897Z"
                          fill="#FFC107"
                          stroke="#FFC107"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.4797 3.49897C11.522 3.3958 11.594 3.30755 11.6866 3.24543C11.7792 3.18331 11.8882 3.15015 11.9997 3.15015C12.1112 3.15015 12.2201 3.18331 12.3127 3.24543C12.4053 3.30755 12.4774 3.3958 12.5197 3.49897L14.6447 8.60997C14.6844 8.70561 14.7498 8.78841 14.8336 8.84928C14.9174 8.91015 15.0164 8.94672 15.1197 8.95497L20.6377 9.39697C21.1367 9.43697 21.3387 10.06 20.9587 10.385L16.7547 13.987C16.6761 14.0542 16.6176 14.1417 16.5855 14.2399C16.5534 14.3382 16.5489 14.4434 16.5727 14.544L17.8577 19.929C17.8835 20.037 17.8767 20.1503 17.8382 20.2545C17.7997 20.3587 17.7312 20.4491 17.6413 20.5144C17.5514 20.5797 17.4442 20.6168 17.3332 20.6212C17.2222 20.6256 17.1124 20.597 17.0177 20.539L12.2927 17.654C12.2044 17.6002 12.103 17.5717 11.9997 17.5717C11.8963 17.5717 11.7949 17.6002 11.7067 17.654L6.98166 20.54C6.88692 20.598 6.77712 20.6266 6.66612 20.6222C6.55512 20.6178 6.44791 20.5807 6.35803 20.5154C6.26815 20.4501 6.19962 20.3597 6.16111 20.2555C6.1226 20.1513 6.11584 20.038 6.14166 19.93L7.42666 14.544C7.45049 14.4434 7.44611 14.3381 7.414 14.2399C7.38189 14.1416 7.3233 14.0541 7.24466 13.987L3.04066 10.385C2.95648 10.3126 2.89557 10.2169 2.86561 10.11C2.83565 10.0031 2.83797 9.88971 2.87228 9.78412C2.90659 9.67852 2.97135 9.58543 3.05843 9.51654C3.1455 9.44766 3.25101 9.40606 3.36166 9.39697L8.87966 8.95497C8.98291 8.94672 9.08188 8.91015 9.16569 8.84928C9.2495 8.78841 9.31488 8.70561 9.35466 8.60997L11.4797 3.49897Z"
                          stroke="#FFC107"
                        />
                      </svg>
                    </div>

                    <div className="card-actions justify-end">
                      <button className="btn mr-2 md:mr-7 border-0 bg-[#FFA800] text-white font-bold btn-sm">
                        {shoes.price}
                      </button>
                      <button
                        onClick={() => HandleUpdate(shoes._id)}
                        className="btn mr-5 border-0 bg-[#FFA800] text-white font-bold btn-sm"
                      >
                        Update
                      </button>
                      <NavLink to={`/details/${shoes._id}`}>
                        <button className="btn border-0 bg-[#FFA800] text-white font-bold btn-sm">
                          Show More
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center p-10">
          {" "}
          No Data Match <br /> Or <br /> You Should Input Relevant Items
        </h1>
      </div>
    );
  }
};

export default Brands;
