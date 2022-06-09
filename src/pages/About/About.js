import React from "react";
import ridwansuhel from "../../images/ridwan-suhel.png";
import { Icon } from "@iconify/react";
import "./About.css";

const About = () => {
  return (
    <main>
      <section className="about-section">
        <div className="about-hero h-[270px] bg-[#E9E9E9] w-full"></div>
        {/* page container  */}
        <div className="container mx-auto px-4 md:px-0 about-title">
          <div className="img-wrapper w-[270px] h-[270px] border-8 shadow border-base-100 rounded-full mt-[-135px] mx-auto">
            <img
              className="object-cover w-full "
              src={ridwansuhel}
              alt="ridwan-suhel"
            />
          </div>

          <div className="md:w-3/4 pb-10 mx-auto about-content-wrapper mt-10 flex justify-between items-center ">
            <div className="intro-wrapper md:w-3/5 ">
              <h2 className="about-me text-2xl mb-8 font-bold">About Me</h2>
              <p className="text-xl mb-8">
                Hello there, I'm <strong> Ridwan Hussen Suhel</strong> . I am a
                Web Developer, with a good knowledge of HTML/CSS, React JS, Node
                JS, and Expertise with Bootstrap, Tailwind CSS, Javascript, and
                Sass/Scss.
              </p>
              <p className="text-xl">
                I am experienced with converting any design file to HTML CSS
                with a fully <strong>responsive design</strong>. As a junior web
                developer, I have developed web-based applications from design
                to code and implemented backend technologies like Node js,
                Express js, MongoDB, and so on for my projects. I love and enjoy
                what I do and always looking for an opportunity to do better and
                achieve greatness.
              </p>
            </div>
            <div className="about-social md:w-2/5">
              <ul className="text-2xl text-right social-ul">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ridwan-suhel"
                >
                  <li>
                    <Icon
                      className="w-8 h-8 ml-auto"
                      icon="akar-icons:github-outline-fill"
                    />
                  </li>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="linkedin.com/in/ridwan-suhel/"
                >
                  <li>
                    <Icon
                      className="w-8 h-8 ml-auto"
                      icon="teenyicons:linkedin-outline"
                    />
                  </li>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/RidwanSuhel"
                >
                  <li>
                    <Icon className="w-8 h-8 ml-auto" icon="iconoir:twitter" />
                  </li>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/RidwanSuhel/"
                >
                  <li>
                    <Icon
                      className="w-8 h-8 ml-auto"
                      icon="icon-park-outline:facebook-one"
                    />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        {/* page container end */}
      </section>
    </main>
  );
};

export default About;
