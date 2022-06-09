import React from "react";
import ridwanAvatar from "../../images/ridwan-avatar.png";
import resume from "../../resume/ridwan-hussen-web-developer-resume.pdf";
import { DownloadIcon } from "@heroicons/react/outline";

const ToastBox = () => {
  return (
    <div>
      <div className="hidden md:flex p-2 justify-center items-center toastBox fixed bottom-0 right-5 z-20 w-[265px] h-[50px] bg-neutral rounded-t">
        <div className="flex  items-center mt-1">
          <div class="avatar-ridwan mr-2">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={ridwanAvatar}
              alt="ridwan suhel"
            />
          </div>
          <a
            href={resume}
            download="ridwan-hussen-web-developer-resume"
            className="hire-btn"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="shadow border border-base-100 md:hidden flex justify-center items-center toastBox fixed bottom-4 right-2 z-20 w-[40px] h-[40px] bg-neutral rounded-full">
        <a
          href={resume}
          download="ridwan-hussen-web-developer-resume"
          rel="noopener noreferrer"
        >
          <DownloadIcon className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
  );
};

export default ToastBox;
