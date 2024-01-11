import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "../assets/png/Contact-us3.gif";
import { useSelector } from "react-redux";

const ContactUpperSection = () => {
  const { selectedColor } = useSelector((state) => state.colors);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  //   email section   -----

  const sendEmail = () => {
    setSending(true);

    const templateParams = {
      to_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_rkjubno",
        "template_5inlwwy",
        templateParams,
        "qoR2rMGkc83u2KsWw"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // Show toast for successful email sending
        toast.success("Email sent successfully!", {
          position: "top-right",
          autoClose: 3000, // Close the toast after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Clear form fields after successful submission
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSending(false);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        // Show toast for failed email sending
        toast.error("Failed to send email!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setSending(false);
      });
  };
  return (
    <>
      <div className="flex flex-col w-full md:flex-row lg:flex-row justify-center items-center">
        <div className="left-side flex p-4  md:pl-14 md:pt-14 lg:pl-14 pt:14 ">
          <div>
            <p className="mb-1  from-neutral-300 font-medium text-lg text-gray-900  text-opacity-70">
              CONTACT US
            </p>
            <div className="pl-3">
              <h1 className="font-calibri font-bold text-5xl text-gray-900 text-opacity-80 mb-4">
                Get in touch
              </h1>
              <p className="font-semibold text-xl font-tomorrow text-gray-900 text-opacity-60">
                We'd love to talk about how we can help you.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img src={contact} alt="" />
            </div>
          </div>
        </div>

        <div className="right-side">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (name && email && phone && message) {
                  sendEmail();
                } else {
                  toast.warning("Please fill all fields");
                }
              }}
            >
              <div className="flex flex-wrap  justify-center items-center md:pl-14  lg:pl-14 md:mt-10 lg:mt-10 ">
                <div className="h-auto w-full  md:w-auto lg:w-auto bg-white rounded-lg shadow-xl p-5">
                  <div className="flex">
                    <h1 className="text-2xl font-bold font-tomorrow text-gray-600">
                      Send a message
                    </h1>
                  </div>
                  <div className="grid gap-2 mt-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="rounded-md p-3 border border-gray-400 border-solid border-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 col-span-2 sm:col-span-1"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="rounded-md p-3 border border-gray-400 border-solid border-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 col-span-2 sm:col-span-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="rounded-md p-3 border border-gray-400 border-solid border-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 col-span-2 sm:col-span-1"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <textarea
                      placeholder="Your Message"
                      className="rounded-md p-3 border border-gray-400 border-solid border-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 col-span-2"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <button
                      type="submit"
                      style={{
                        background: selectedColor,
                        cursor: "pointer",
                        color: "white",
                      }}
                      className="rounded-md p-3 text-lg bg-green-600 font-semibold text-white font-calibri col-span-2 sm:col-span-1"
                      disabled={sending}
                    >
                      {sending ? "Sending..." : "Submit"}
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUpperSection;
