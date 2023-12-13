// Finally this is for the cool 3D animation contact page

import { useState, useRef } from "react";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import { styles } from "../styles";

import { EarthCanvas } from "./canvas";

import { SectionWrapper } from "../hoc";

import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Thank You. Your message has been sent successfully!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "between", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-9 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Contact Me</p>
        <h3 className={styles.sectionHeadText}>Get In Touch</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-5"
        >
          {/* This is for name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What are you called?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-2xl outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black-100"
            />
          </label>

          {/* This is for email */}

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-2xl outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black-100"
            />
          </label>

          {/* This is for message */}

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>

            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-2xl outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black-100"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-mt shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* adding the earth globe */}

      <motion.div
        variants={slideIn("right", "between", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md-h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
