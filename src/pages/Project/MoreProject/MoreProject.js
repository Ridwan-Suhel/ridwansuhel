import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./MoreProject.css";
import MoreProjectCard from "./MoreProjectCard";

const MoreProject = () => {
  const [prData, setPrData] = useState([]);

  useEffect(() => {
    const callData = async () => {
      await fetch("moreProject.json")
        .then((res) => res.json())
        .then((data) => {
          setPrData(data);
        });
    };
    callData();
  }, []);

  return (
    <section className="ff-merri mb-10">
      <div className="container mx-auto px-4 md:px-0">
        <div>
          <h2 className="text-gray-400 mb-1 text-left text-xl ">
            Check more projects
          </h2>
          <p className="text-lg text-left ">
            Here are some more works. If you are interested then feel free to
            visit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 pt-10">
          {prData.map((data, index) => (
            <MoreProjectCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProject;
