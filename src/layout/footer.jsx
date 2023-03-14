import React from "react";
import {
  Calling,
  facebook,
  instagram,
  Location,
  logo,
  Message,
  pinterest,
  twitter,
} from "../assets";

const Footer = () => {
  return (
    <div className="px-5 md:px-24">
      <div className="grid md:grid-cols-5  sm:grid-cols-4 grid-cols-2">
        <div className="flex gap-5 flex-col">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-3">
            <img src={Location} alt="" />
            Tashkent
          </div>
          <div className="flex gap-3">
            <img src={Calling} alt="" /> +9987654321
          </div>
          <div className="flex gap-3">
            <img src={Message} alt="" />
            support@efood.com
          </div>
          <div className="flex gap-3">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={pinterest} alt="" />
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <div className="text-2xl mt-5 text-primary font-bold">Service</div>
          <div>How it works</div>
          <div>Home delivery</div>
          <div>Prducts</div>
          <div>Menu</div>
        </div>
        <div className="flex gap-3 flex-col">
          <div className="text-2xl mt-5 text-primary font-bold">Company</div>
          <div>About Us</div>
          <div>News</div>
          <div>Our trusted partner</div>
          <div>New users FAQ</div>
        </div>
        <div className="flex gap-3 flex-col">
          <div className="text-2xl mt-5 text-primary font-bold">Supports</div>
          <div>Help center</div>
          <div>Feedbcak</div>
          <div>Contact us</div>
          <div>Terms conditins</div>
        </div>
        <div className="flex gap-3 flex-col">
          <div className="text-2xl mt-5 text-primary font-bold">Resources</div>
          <div>Download app</div>
          <div>Blog</div>
          <div>What’s new</div>
          <div>Sitemap</div>
        </div>
      </div>
      <div className="flex justify-between border-t-2 border-gray-300 mt-5 py-8 text-[#646464]">
        <h1>© {new Date().getFullYear()} EFood - All rights reserved.</h1>
        <div className="flex gap-5 ">
          <div>Privacy</div>
          <div>Security</div>
          <div>Terms</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
