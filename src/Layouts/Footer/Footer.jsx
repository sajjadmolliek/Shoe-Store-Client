import logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/Fa";
import { AiFillYoutube } from "react-icons/Ai";
import { BsLinkedin, BsTwitter } from "react-icons/Bs";

const Footer = () => {
  return (
    <div className="bg-[#353535]">
      <div className="w-[80%] mx-auto">
        <footer className="footer py-10 lg:pl-28 text-white">
          <nav>
            <header className="footer-title">YOUR ACCOUNT</header>
            <a className="link link-hover">Running Shoes</a>
            <a className="link link-hover">Football Shoes</a>
            <a className="link link-hover">Basketball Shoes</a>
            <a className="link link-hover">Volleyball Shoes</a>
            <a className="link link-hover">Trainee Shoes</a>
          </nav>
          <nav>
            <header className="footer-title">INFORMATION</header>
            <a className="link link-hover">Returns</a>
            <a className="link link-hover">F.A.Q</a>
            <a className="link link-hover">Shipping Policy</a>
            <a className="link link-hover">Search Terms</a>
            <a className="link link-hover">Contact Us</a>
          </nav>
          <nav>
            <header className="footer-title">HAPPY HOURS</header>
            <a className="link link-hover">Monday - Friday</a>
            <a className="link link-hover">8a.m - 10 p.m</a>
            <a className="link link-hover">Saturday & Sunday</a>
            <a className="link link-hover">10a.m - 8 p.m</a>
          </nav>
          <form>
            <div className="flex justify-end">
              <img src={logo} alt="Logo" className="w-[30%]" />
            </div>
            <fieldset className="form-control md:w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16 bg-[#FFA80033]"
                />
                <button className="btn bg-[#FFA800] border-0 absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
            <div className="flex gap-6 mt-8 flex-wrap">
                <FaFacebookF className="bg-[#FFA800] p-3 text-5xl rounded-full"></FaFacebookF>
                <AiFillYoutube className="bg-[#FFA800] p-3 text-5xl rounded-full"></AiFillYoutube>
                <BsLinkedin className="bg-[#FFA800] p-3 text-5xl rounded-lg"></BsLinkedin>
                <BsTwitter className="bg-[#FFA800] p-3 text-5xl rounded-full"></BsTwitter>
            </div>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
