import React from "react";
import { Icon } from "@iconify/react";

const MoreProjectCard = ({ data }) => {
  return (
    <div className="transition-all cursor-pointer more-card-box border border-slate-300 shadow rounded-sm p-4 relative overflow-hidden">
      <div>
        <img src={data?.image} alt={data?.title} />
      </div>
      <div className="card-bottom">
        <h3 className="text-md font-bold mt-3">{data.title}</h3>
        <p className="text-sm">{data.description.slice(0, 45).concat("...")}</p>
      </div>
      <a
        href={data?.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-md mt-2 text-sky-600 transition hover:text-slate-100"
      >
        <div className="transition-all card-abs absolute top-full left-0 p-4 text-white bg-slate-900 w-full h-full rounded-sm">
          <p className="text-sm mb-1">{data.description}</p>
          <p className="text-sm mb-3">
            <span className="font-bold">Features &amp; Functionality:</span>{" "}
            {data.features}
          </p>
          <div className="flex items-center ">
            <a
              href={data?.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md mr-3 mt-2 text-sky-600 transition hover:text-slate-100"
            >
              <span className="flex">
                <span className="">Live Link</span>{" "}
                <Icon icon="bx:link-external" />
              </span>
            </a>
            <a
              href={data?.clientLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md mt-2 text-sky-600 transition hover:text-slate-100"
            >
              <span className="flex">
                <span className="">Code Link</span>{" "}
                <Icon icon="bx:link-external" />
              </span>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MoreProjectCard;
