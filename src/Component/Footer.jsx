import React from "react";
import Logo from "../assets/paw-mart-logo.png";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <div className="col-span-2 md:col-span-2 lg:col-span-2">
             {/* LOGO + TITLE */}
                    <div className="flex items-center gap-2">
                      <img className="w-16 hidden lg:block" src={Logo} alt="logo" />
            
                      {/* UPDATED TEXT COLOR */}
                      <h3 className="font-bold whitespace-nowrap text-3xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                        Paw Mart
                      </h3>
                    </div>
            <p className="text-gray-400 text-sm max-w-sm">
              “PawMart connects local pet owners and buyers for adoption and pet care products.”
            </p>
          </div>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      
    </footer>
    
  );
};

export default Footer;
