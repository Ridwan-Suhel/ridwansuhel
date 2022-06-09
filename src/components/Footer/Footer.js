import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="py-5 bg-neutral">
      <div className="container mx-auto px-4 md:px-0">
        <p className=" mb-0 text-white">
          copyright &copy; {year}. All rights reserved by{" "}
          <strong className="">ridwan suhel</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
