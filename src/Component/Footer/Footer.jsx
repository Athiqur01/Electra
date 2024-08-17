import { FaFacebook,FaLinkedin,FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="   ">
        <footer className="footer   px-10 mx-auto bg-[#100F6C] text-base-content pt-20 flex flex-col md:flex-row ">
  <nav className="text-white mx-auto">
    <h6 className="footer-title ">Electra</h6> 
    <p className="text-left ">Welcome to Electra <br />  Discover your perfect <br /> electronic goods </p>
    
  </nav> 
  <nav className="text-white mx-auto">
    <h6 className="footer-title ">Contact</h6> 
    <p className="text-left ">700 WE 15th Int Miami, FLR B379 <br />Call us FREE<a className="link link-hover text-left" href="">+1 (800) 990 6688</a>  <br />
<a className="link link-hover" >codezenallfoods@gmail.com</a>
</p>
  </nav> 
  <nav className="text-white mx-auto ">
    <h6 className="footer-title ">Social Links</h6> 
    <div className="flex space-x-4 text-2xl">
    <a className="link link-hover "><FaFacebook /></a>
    <a className="link link-hover "><FaLinkedin /></a>
    <a className="link link-hover "><FaTwitter /></a>

    </div>
    
  </nav> 
  
  
</footer>
  <div className="bg-[#100F6C] text-center rounded-b-md  ">
    <p className="text-white p-20">© 2024 Electra, All Rights Reserved</p>
  </div>
        </div>
    );
};

export default Footer;