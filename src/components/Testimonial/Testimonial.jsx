import React from "react";

const testimonialData = [
  {
    name: "Dilshad",
    image: "",
    description:
      "Empowering Parents for a Brighter Future Welcome to PxED, dedicated to enhancing your child's education and development. We cater to parents who aspire for a better educational journey for their children, guiding them toward a brighter future.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description:
      "Empowering Educators for Limitless Learning At TxEd, we invite educators seeking boundless educational opportunities aligned with our mission. Join us in shaping the future of education without constraints.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description:
      "Empowering Future Creators GxED is designed for aspiring young minds who wish to craft their own futures using our innovative user and developmental technologies. Welcome to a world of endless possibilities.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Research
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Embracing cutting-edge technology, our startup pioneers
              groundbreaking prototypes. PRS utilizes user data for predictive
              analytics, revolutionizing assessments by obviating exams and
              interviews. HIMS, central to our vision, fosters human intellect,
              safeguarding potential from infancy. FIM, an AI marvel, predicts
              traits via facial changes. Our integrated x Device and x OS
              redefine personal tech, amalgamating PRS and HIMS capabilities.
              Dynamic X Curriculum tailors education to user data. Serving
              diverse clientele, from parents seeking enriched education to
              organizations scouting top talent, our mission caters to a
              spectrum of developmental needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
