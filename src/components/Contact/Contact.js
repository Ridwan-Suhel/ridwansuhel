import React from "react";
import "./Contact.css";
import airplane from "../../images/airplane.png";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
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
            <p className="text-gray-400 mb-2 text-left md:text-center text-xl">
              Get In Touch
            </p>
            <h1 className="text-xl text-left md:text-center ">
              I'd love to hear from you.
            </h1>
          </div>
        </div>

        {/* contact area start  */}
        <div className="contact-area w-3/4 mx-auto">
          <div class="card lg:card-side bg-base-100 shadow-xl border border-primary">
            <div class="w-3/5 p-5">
              <div className="flex justify-between mb-5">
                <h2 class="card-title">Send Me Message</h2>
                <span className="h-6 w-6">
                  <img src={airplane} alt="Icon" />
                </span>
              </div>
              {/* ========== form start ======= */}
              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mb-4">
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered input-primary w-full"
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
                    className="input input-bordered input-primary w-full"
                    {...register("email", { required: true })}
                  />
                </div>
                <small className="text-rose-700">
                  {errors.email && "Email is required "}
                </small>

                <div className="form-control mb-4">
                  <textarea
                    className="textarea textarea-primary textarea-bordered h-24 w-full"
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

            <div className="w-2/5 contact-info lg:border-l border-primary p-5">
              <h2 className="text-xl font-bold">Contact Information</h2>
              <ul className="mt-5">
                <li>ridwansuhel96@gmail.com</li>
                <li>+8801758758396</li>
                <li>Moulvibazar, Sylhet-Bangladesh.</li>
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
