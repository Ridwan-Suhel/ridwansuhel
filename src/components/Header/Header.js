import React from "react";
import { useEffect, useRef } from "react";
import gsap, { Power2, Power3 } from "gsap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
const Header = () => {
  let headerTl = useRef();
  let header = useRef();

  useEffect(() => {
    headerTl.current = gsap.timeline();

    headerTl.current.to(header.current, { duration: 0.3, y: 0 }).to(
      ".navTxt",
      {
        duration: 0.5,
        y: 0,
        stagger: 0.1,
        ease: "none",
      },
      "<"
    );
  }, []);

  const navlink = (
    <>
      <li className="navTxt translate-y-[-1rem]">
        <NavLink to="/home">HOME</NavLink>
      </li>
      <li className="navTxt translate-y-[-1rem]">
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li className="navTxt translate-y-[-1rem]">
        <NavLink to="/project">PROJECTS</NavLink>
      </li>
      <li className="navTxt translate-y-[-1rem]">
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
    </>
  );

  // border-b sticky top-0 bg-white/[.6] relative z-10 backdrop-blur-[20px] backdrop-saturate-[180%]

  return (
    <header
      ref={header}
      className="border-b top-0 translate-y-[-1rem] sticky bg-white/[0.85] relative z-10 backdrop-blur-[12px] backdrop-saturate-[180%]"
    >
      <div className="container mx-auto">
        <div class="navbar justify-between">
          <div class="navbar-start">
            <Link to="/" className="">
              <img
                className="w-10 h-10 md:w-12 md:h-12 object-cover"
                src={logo}
                alt="ridwan-suhel"
              />
            </Link>
          </div>
          <div class="navbar-end hidden lg:flex">
            <ul class="menu menu-horizontal p-0">{navlink}</ul>
          </div>
          {/* <div class="navbar-end">
            <a class="btn">Get started</a>
          </div> */}
          <div className="navbar-end lg:hidden">
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navlink}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
