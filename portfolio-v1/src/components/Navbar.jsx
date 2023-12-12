import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

import logo1 from "/images/logos/1.png";
import logo2 from "/images/logos/2.png";
import logo3 from "/images/logos/3.png";
import logo4 from "/images/logos/4.png";
import logo5 from "/images/logos/5.png";
import { act } from "@react-three/fiber";

// TODO

function getLogo() {
  var logos = [logo1, logo2, logo3, logo4, logo5];
  var logo = logos[Math.floor(Math.random() * logos.length)];
  // return logo;
  return logos[0];
}

// *************

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [logo, setLogo] = useState(getLogo());
  const [name, setName] = useState("Ujjwal Sharma | @IITB");

  function randomLogos() {
    setInterval(() => {
      setLogo(getLogo());
    }, 2000);
  }

  useEffect(() => {
    randomLogos();
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 left-0 z-50 bg-primary shadow-sm`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            // will make the active component default
            setActive("");
            // it will scroll to the top of the page
            window.scrollTo(0, 0);
          }}
        >
          {/* visit logo.com and create your logo */}
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p
            className="text-white text-[18px]
          font-bold cursor-pointer"
          >
            {name}
          </p>
        </Link>
        {/* unordered. list for navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
             ${
               active === link.title ? "text-white" : "text-secondary"
             }  hover:text-white text-[18px] font-bold cursor-pointer transition-all duration-300`}
              //  on click set. the active bar

              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {`${link.title}`} </a>
            </li>
          ))}
        </ul>

        {/* now we take care on small devices for the nav bar
         */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}
          >
            {/* This is for small devices . list  */}

            {/* unordered. list for navigation */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`
             ${
               active === link.title ? "text-white" : "text-secondary"
             } hover:text-white font-poppins font-medium cursor-pointer text-[16px] transition-all duration-300`}
                  //  on click set. the active bar

                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}> {`${link.title}`} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
