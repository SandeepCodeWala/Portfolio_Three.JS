import React, { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../assets/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation("mixamo.com");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };
  const handleSumit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    console.log("form.name form.name",form.name,form.email,form.message)

    emailjs.send(
      "service_h434aim",         // replace with your EmailJS service ID
      "template_rjulekq",        // replace with your EmailJS template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "j54fSbnBqLywADYaX"          // replace with your EmailJS public key
    )
    .then(() => {
      showAlert({ show: true, text: "Message Sent!", type: "success" });
      setCurrentAnimation("hit");
  
      setTimeout(() => {
        hideAlert();
        setCurrentAnimation("idle");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      }, 5000);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      showAlert({ show: true, text: "Something went wrong!", type: "danger" });
      setLoading(false);
    });
  };
  

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="sandy"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="text"
              name="email"
              value={form.email}
              className="input"
              placeholder="youremail@example.com"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
             rows={4}
              name="message"
              value={form.message}
              className="textarea"
              placeholder="let me know how i can help you"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </label>
          <button
            onClick={handleSumit}
            type="submit"
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="btn"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 9], fov: 75, near: 0.1, far: 6000 }}>
          <directionalLight intensity={5.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}></Suspense>
          <Fox
            currentAnimation={currentAnimation}
            position={[0.9, -0.5, 0]}
            rotation={[12.66, -0.9, 0]}
            scale={[0.7, 0.5, 0.5]}
          />
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;
