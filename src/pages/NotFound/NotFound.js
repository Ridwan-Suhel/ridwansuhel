import React from "react";
import four0four from "../../images/giphy.gif";

const NotFound = () => {
  return (
    <section className="py-10 notfound-section">
      <div className="container mx-auto px-4 md:px-0 hero-title">
        <div className="">
          <div className="md:w-2/4 mx-auto notFound">
            <p className="text-center text-2xl mb-3 mt-10">
              Oops! Page Not Found.
            </p>
            <img
              className="object-cover w-full mb-5 rounded-xl"
              src={four0four}
              alt="not found"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
