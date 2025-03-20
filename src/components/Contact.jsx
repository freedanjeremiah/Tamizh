import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import Popup from "./Popup"
import { logo } from "../assets"
import { FaMapMarked } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { FaPhoneVolume } from "react-icons/fa6";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (showPopup) {
      const handleClickOutside = (e) => {
        if (e.target.classList.contains("popup")) {
          setShowPopup(false);
          setErrorMsg("");
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [showPopup]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_hqf6fzh',
        'template_cknfggk',
        '77vENVRctYiIB3f5S',
        {
          from_name: form.name,
          to_name: "",
          from_email: form.email,
          to_email: "",
          message: form.message,
        },
        
      )
      .then(() => {
        setLoading(false);
        setShowPopup(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        setShowPopup(true);
        setErrorMsg("Oops! Something went wrong. Please try again later.");
        console.error(error);
      });
  };


  return (
  <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>

    <div className="flex-1 p-8">

      <div className="w-full  text-center md:text-left mb-4 md:mb-0">
          <div className=''>
              <div className="flex justify-start items-center">
                <img src={logo} alt="logo" className="w-20 h-20 object-contain"/>
                <div className='ml-5'>
                    <h5 className="font-bold text-5xl">TAMIZH</h5>
                </div>
              </div>
              <p className="mt-2 md:mt-5"> <span className="font-bold ">CIN </span>
                - U26409TN2024PTC173084
              </p>
          </div>

    <div className="flex gap-3 justify-start items-start mt-5"><FaMapMarked className="flex-shrink-0 mt-1" size={20}/>
    <p><span className="font-bold">Registered Address</span> - 4/2A/1, Labour School Street, Karai, Ranipet, Tamil Nadu, India - 632404</p>
    </div>

    
    <div className="flex gap-3 justify-start items-start mt-5"><FaMapMarked className="flex-shrink-0 mt-1" size={20}/>
    <p><span className="font-bold">Branch Address</span> - 106, Second Floor, Platinum Jubilee building, AC Tech Campus, Anna University, Guindy, Chennai, Tamil Nadu, India - 600025</p>
    </div>


    <div className="flex gap-3 justify-start items-start mt-5"><FaPhoneVolume className="flex-shrink-0 mt-1" size={18}/>
    <p><span className="font-bold">Phone Number</span> : +91 91760 90092</p>
    </div>

      
    <div className="flex gap-3 justify-start items-start mt-5"><IoIosMail className="flex-shrink-0 mt-1" size={22}/>
    <p><span className="font-bold">Mail ID</span> : contact@tamizh.co.in</p>
    </div>

      </div>
      
    </div>


    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-1 bg-black-100 p-8 rounded-2xl"
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            type="text"
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
          />
        </label>

        <button
          type="submit"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>

    {showPopup && (
      <Popup
        message={
          loading
            ? "Sending your message..."
            : "Thank you🤗! Your message has been sent."
        }
        onClose={() => setShowPopup(false)}
        error={errorMsg}
      />
    )}
  </div>
);

}

export default SectionWrapper(Contact, "contact")
