import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import "./ContactForm.css";

export default function ContactForm() {
  const { register, reset, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const accessKey = "68e59986-0491-4ad1-8855-caf618871e7e";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Summit Auto Glass, LLC",
      subject: "New Contact Message from Summit Auto Glass, LLC",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="contact-section">
      <div className="gradient-bg-contact">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div
            className="interactive"
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
          ></div>
        </div>
      </div>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <h1>Contact Us</h1>
          <p className="subheading">Belgrade Shop Phone | (406) 750-4992</p>
          <p className="subheading">Billings Shop Phone | (406) 694-9706</p>
          <p className="instruction">Please fill out the form below.</p>

          <div className="form-grid">      
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
            <input
              type="number"
              placeholder="Vehicle Year"
              {...register("year", { required: true })}
            />
            <input
              type="text"
              placeholder="Make"
              {...register("make", { required: true })}
            />
            <input
              type="text"
              placeholder="Model"
              {...register("model", { required: true })}
            />
            <input
              type="text"
              placeholder="VIN"
              {...register("vin")}
            />
            <input
              type="text"
              placeholder="License Plate"
              {...register("plate")}
            />

            <div className="form-field">
              <label htmlFor="glass-type">Glass Type </label>
                <select
                  id="glass-type"
                  defaultValue=""
                  {...register("glass-type", { required: true })}
                >
                <option value="" disabled> Select an option</option>
                  <option value="oem">OEM</option>
                  <option value="aftermarket">Aftermarket</option>
                </select>
            </div>
          </div>

          <textarea
            placeholder="Message..."
            rows="5"
            {...register("message", { required: true })}
          ></textarea>

          <button type="submit">Submit Form</button>
        </form>

        {result && (
          <div className={`form-result ${isSuccess ? "success" : "error"}`}>
            {result}
          </div>
        )}
      </div>
    </div>
  );
}