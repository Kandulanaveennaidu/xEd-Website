import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Let's collaborate on your upcoming xEd
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem necessitatibus quasi et vel,{" "}
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <a
                href="#"
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase rounded-full overflow-hidden relative"
              >
                Contact
                <span className="absolute inset-0 bg-white transform scale-0 origin-left transition-transform rounded-full group-hover:scale-100"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
