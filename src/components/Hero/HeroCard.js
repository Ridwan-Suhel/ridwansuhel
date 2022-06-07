import React from "react";
import "./Hero.css";
// import { BeakerIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
const HeroCard = () => {
  return (
    <div className="w-[460px] shadow bg-white mx-auto p-5 border rounded-lg about-me-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 mb-2">Biography</p>
          <h1>Read a bit about me...</h1>
        </div>
        <div>
          <span className="icon-wrapper">
            <ChevronRightIcon className="h-8 w-8 text-neutral" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
