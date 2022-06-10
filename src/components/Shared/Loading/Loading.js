import React from "react";
import loading from "../../../images/spinning-loading.gif";

const Loading = () => {
  return (
    <div className="mt-10">
      <img
        className="w-[120px] h-[120px] object-cover mx-auto"
        src={loading}
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
