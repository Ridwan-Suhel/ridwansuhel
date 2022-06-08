import React, { useEffect } from "react";
import "./Contact.css";
import airplane from "../../images/airplane.png";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { GlobeAltIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";
const Contact = () => {
  let conTitleTxt = useRef(null);
  let conTitleTxt2 = useRef(null);
  let contactArea = useRef(null);
  let sendMessageTxt = useRef(null);
  let contactInfoTxt = useRef(null);
  let paperPlane = useRef(null);

  useEffect(() => {
    const titleTrigger = [conTitleTxt.current, conTitleTxt2.current];
    // const prTrigger = [proj1.current, proj2.current, proj3.current];
    gsap.fromTo(
      titleTrigger,
      { y: 70, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: titleTrigger,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      contactArea.current,
      { y: 70, opacity: 0 },
      {
        duration: 1,
        delay: 0.2,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: contactArea.current,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      sendMessageTxt.current,
      { y: 70, opacity: 0 },
      {
        duration: 1,
        delay: 0.3,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: sendMessageTxt.current,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      contactInfoTxt.current,
      { y: 70, opacity: 0 },
      {
        duration: 1,
        delay: 0.4,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: contactInfoTxt.current,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      paperPlane.current,
      { y: 70, x: -50, opacity: 0 },
      {
        duration: 1,
        delay: 0.3,
        y: 0,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: paperPlane.current,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".contactLi1",
      { y: 70, opacity: 0 },
      {
        duration: 1,
        delay: 0.3,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".contactLi1",
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".contactLi2",
      { y: 70, opacity: 0 },
      {
        duration: 1,
        delay: 0.5,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".contactLi2",
          start: "top bottom",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".contactLi3",
      { y: 70, opacity: 0 },
      {
        duration: 1,
        delay: 0.7,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".contactLi3",
          start: "top bottom",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const form = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (e) => {
    emailjs
      .sendForm(
        "service_a4bvxpa",
        "template_ztc79xz",
        form.current,
        "tl8QNtWbNvPUrF8St"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };
  return (
    <section className="pb-20 contact-section">
      <div className="container mx-auto px-4 md:px-0 ">
        <div className="contact-title mb-10">
          <div>
            <p
              ref={conTitleTxt}
              className="text-gray-400 mb-2 text-left md:text-center text-xl"
            >
              Get In Touch
            </p>
            <h1
              ref={conTitleTxt2}
              className="text-xl text-left md:text-center "
            >
              I'd love to hear from you.
            </h1>
          </div>
        </div>

        {/* contact area start  */}
        <div ref={contactArea} className="contact-area w-full md:w-3/4 mx-auto">
          <div class="card lg:card-side bg-base-100 shadow-md border border-neutral">
            <div class="w-full lg:w-3/5 p-5">
              <div className="flex justify-between mb-5">
                <h2 ref={sendMessageTxt} class="card-title">
                  Send Me Message
                </h2>
                <span ref={paperPlane} className="h-6 w-6">
                  <img src={airplane} alt="Icon" />
                </span>
              </div>
              {/* ========== form start ======= */}
              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mb-4">
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered input-neutral w-full"
                    {...register("name", { required: true })}
                  />
                </div>
                <small className="text-rose-700">
                  {errors.name?.type === "required" && "Name is required"}
                </small>

                <div className="form-control mb-4">
                  <input
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered input-neutral w-full"
                    {...register("email", { required: true })}
                  />
                </div>
                <small className="text-rose-700">
                  {errors.email && "Email is required "}
                </small>

                <div className="form-control mb-4">
                  <textarea
                    className="textarea textarea-neutral textarea-bordered h-24 w-full"
                    name="message"
                    placeholder="Message"
                    {...register("message", { required: true })}
                  />
                </div>
                <small className="text-rose-700">
                  {errors.message && "Message is required"}
                </small>

                <div className="">
                  <input type="submit" className="btn text-white px-10" />
                </div>
              </form>
            </div>

            <div className="w-full lg:w-2/5 contact-info lg:border-l border-neutral p-5">
              <h2 ref={contactInfoTxt} className="text-xl font-bold">
                Contact Information
              </h2>
              <ul className="mt-5">
                <li className="mb-2 flex items-center contactLi1 text-gray-500">
                  <MailIcon className="w-5 h-5 mr-1" />
                  <span>ridwansuhel96@gmail.com</span>
                </li>
                <li className="mb-2 flex items-center contactLi2 text-gray-500">
                  <PhoneIcon className="w-5 h-5 mr-1" />
                  <span>+8801758758396</span>
                </li>
                <li className="mb-2 flex items-center  contactLi3 text-gray-500">
                  <GlobeAltIcon className="w-5 h-5 mr-1" />
                  <span>Moulvibazar, Sylhet-Bangladesh.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* contact area end  */}
      </div>
    </section>
  );
};

export default Contact;
