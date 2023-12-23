// import { FaUserParent } from "react-icons/fa";
import { FaBuilding, FaUniversity, FaUser } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { BsCodeSlash } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const skillsData = [
  {
    name: "parents",
    icon: (
      <FaUser className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "PxED a division of XED corp., dedicated to parenting aspects of our mission. Designed for all parents who want their children to have a better future education and development.",
    aosDelay: "0",
  },
  {
    name: "Teachers",
    icon: (
      <GiTeacher className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Dedicated to teaching aspects of our mission. Designed for every teacher who wants to be part of future education without any limits!",
    aosDelay: "500",
  },
  {
    name: "Learners",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "Dedicated for the next generation of kids where they have option to create their own future through our user tech and developmental tech",
    aosDelay: "1000",
  },
  {
    name: "Institutions",
    icon: (
      <FaUniversity className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "Schools, colleges, and universities who want to be part of re-building the best education and development model.",
    aosDelay: "1000",
  },
  {
    name: "Edtech",
    icon: (
      <BsCodeSlash className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "ExED The division which focuses on providing  a platform for all edtech startups to reach the right customers with our technology. Become part of xED and integrate your technology into our systems. Click here to learn more.",
    aosDelay: "1000",
  },
  {
    name: "Organisations/Business",
    icon: (
      <FaBuilding className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "OxED Division that helps organizations hire the best possible talent for their roles without having to conduct interviews or look at resumes. To know when we start our services click here.",
    aosDelay: "1000",
  },
];

const Services = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate an API call or handling email submission
    // Here you can implement your logic for handling the email input
    // For now, let's simulate a delay of 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // After submission, show a success message using toast
    toast.success("Email submitted successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
    setLoading(false);
  };

  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Clients
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter Your Email"
                    className="border border-gray-300 rounded-md px-3 py-2 mt-3 focus:outline-none focus:border-primary"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded-md mt-3 hover:bg-opacity-80 transition duration-300"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Visit Site
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Services;
