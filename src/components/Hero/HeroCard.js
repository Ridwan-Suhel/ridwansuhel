import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { ChevronRightIcon } from "@heroicons/react/solid";
import riwdan from "../../images/ridwan-suhel.png";
import { Link } from "react-router-dom";
import { gsap, Power3, Power1 } from "gsap";
const HeroCard = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  let cardTl = useRef();
  const aboutCard = useRef(null);
  const avatar = useRef(null);
  const shortInfo = useRef(null);
  const chevronIcon = useRef(null);

  const cardClicked = () => {
    setMenuClicked(!menuClicked);
  };

  let toggle = menuClicked;

  useEffect(() => {
    cardTl.current = gsap.timeline({
      paused: true,
    });
    cardTl.current.to(
      aboutCard.current,
      {
        duration: 0.5,
        ease: Power1.easeInOut,
        height: 355,
      },
      0
    );
    cardTl.current.to(
      ".dummyTxt",
      {
        "clip-path": "polygon(0% 100%, 99% 100%, 100% 100%, 0% 100%)",
        opacity: 0,
      },
      0
    );
    cardTl.current.to(
      avatar.current,
      {
        duration: 0.5,
        opacity: 1,
        top: 20,
      },
      0.6
    );
    cardTl.current.to(
      ".bioTxt",
      {
        top: 90,
      },
      0.6
    );
    cardTl.current.to(
      shortInfo.current,
      {
        duration: 0.5,
        opacity: 1,
        bottom: 40,
        "clip-path": "polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)",
      },
      0.7
    );
    cardTl.current.to(
      chevronIcon.current,
      {
        duration: 0.5,
        rotate: "90deg",
      },
      0.5
    );
  }, []);

  useEffect(() => {
    toggle ? cardTl.current.play() : cardTl.current.reverse();
  }, [toggle]);

  return (
    <div
      ref={aboutCard}
      onClick={cardClicked}
      className="shadow bg-white mx-auto border rounded-lg about-me-card"
    >
      <div className="flex items-center justify-between">
        <div>
          <div
            ref={avatar}
            className="avatar w-20 h-20 rounded-full border-solid border-2 border-neutral mb-4"
          >
            <img
              src={riwdan}
              className="w-full object-cover"
              alt="ridwan-suhel"
            />
          </div>

          <p className="text-gray-400 mb-2 bioTxt">Biography</p>
          <h1 className="dummyTxt">Read a bit about me...</h1>

          {/* anim part start */}
          <div ref={shortInfo} className="short-info">
            <h1>
              Dedicated to exploring and learning new technologies. Hi, I'm{" "}
              <strong>Ridwan </strong>a front-end developer. :)
            </h1>

            <p className="mt-4 short-info-bottomTxt">
              {" "}
              I have a good knowledge of HTML/CSS, React JS, Node JS, and
              Expertise with Bootstrap, Tailwind CSS, Javascript, and Sass/Scss.
              I am experienced with converting any design file to HTML CSS with
              a fully responsive design.{" "}
            </p>
            <Link className="text-indigo-600" to="/">
              read more..
            </Link>
          </div>
          {/* anim part end */}
        </div>
        <div>
          <span ref={chevronIcon} className="icon-wrapper">
            <ChevronRightIcon className="h-8 w-8 text-neutral" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
