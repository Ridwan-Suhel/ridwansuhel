import React from "react";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const ContactPage = () => {
  return (
    <>
      <main>
        <section className="py-16 contact-section">
          <div className="container mx-auto px-4 md:px-0 contact-title">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
