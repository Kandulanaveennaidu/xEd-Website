import { useState } from "react";
import hims from "../../assets/HIMS.png";
import prs from "../../assets/prs.png";
import fim from "../../assets/fim.png";
import device from "../../assets/device.png";
import device1 from "../../assets/device1.png";
import curriculum from "../../assets/curriculum.png";
const carList = [
  {
    name: "PRS",
    image: prs,
    loremText:
      "The next generation technology tool uses user data to analyze and predict their professional traits, potentially eliminating the need for exams, resumes, and interviews.",
  },
  {
    name: "HIMS",
    price: 140,
    image: hims,
    aosDelay: "500",
    loremText:
      "HIMS(Human Intelligence management system) A core mechanism of xED’s vision to manage, improve the entire human intelligence resource for its true potential by preventing possible destruction  and enhancing intellectual resource of every new born kid.",
  },
  {
    name: "FIM",
    price: 100,
    image: fim,
    aosDelay: "1000",
    loremText:
      "FIM (Face Indexing MInd) An AI tool with the ability to analyze and predict all traits of humans based on facial structural changes that happen over time.",
  },
  {
    name: "X OS",
    price: 100,
    image: device,
    aosDelay: "1000",
    loremText:
      "x  Device, x OS A personal device that integrated with PRS, HIMS technology that assist every developmentaL aspect of users through various means and a single potential alternative to smartphones, tabs, and Laptops.",
  },
  {
    name: "X DEVICES",
    price: 100,
    image: device1,
    aosDelay: "1000",
    loremText:
      "A personal device that integrated with PRS, HIMS technology that assist every developmentaL aspect of users through various means and a single potential alternative to smartphones, tabs, and Laptops.",
  },
  {
    name: "X curriculum ",
    price: 100,
    image: curriculum,
    aosDelay: "1000",
    loremText:
      "A dynamic curriculum that build itself  up from scratch based on the data of users to meet their education and development goals.",
  },
];
const CarList = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  return (
    <div className="pb-24">
      <div className="container">
        {/* ... (existing code) */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Prototype
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          The prototypes by xED mark a tech leap. PRS redefines assessments
          using user data, potentially supplanting exams and resumes. HIMS
          optimizes human intellect, nurturing from birth. FIM predicts traits
          via facial changes using AI. x Devices, with x OS, merge PRS and HIMS,
          replacing gadgets while enhancing development. X Curriculum tailors
          education from user data. Genetic advancements hint at tech-driven
          human evolution.
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="card relative group"
              >
                <div className="card-image">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div className="card-details">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p onClick={() => openModal(data.loremText)}>Learn</p>
                    <button onClick={() => openModal(data.loremText)}>
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ... (existing code) */}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Cards */
        .card {
          border: 2px solid #e5e5e5;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s ease-in-out;
        }
        .card-image {
          height: 200px;
          overflow: hidden;
        }
        .card-details {
          padding: 5px;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .modal {
          background: green; /* Change this to your preferred color */
          border-radius: 10px;
          padding: 20px;
          max-width: 40%;
          max-height: 40%;
          overflow-y: auto;
          position: relative;
        }
        .close {
          position: absolute;
          top: 1px;
          right: 5px;
          cursor: pointer;
          font-size: 30px;
          color: yellow;
        }
        @media screen and (max-width: 768px) {
          .modal {
            width: 90%;
            max-width: 90%;
            max-height: 90%;
            padding: 15px;
          }
          .close {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default CarList;
