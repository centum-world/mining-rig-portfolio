import React from "react";
import contact from '../assets/png/Contact-us.gif'

const ContactUpperSection = () => {
  return (
    <>
     <div className="flex ">
     <div className="left-side flex pl-14 pt-14 ">
        <div>
          <p className="mb-1 font- from-neutral-300 font-medium text-lg text-gray-900  text-opacity-70">
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
          <div>
            <img src={contact} alt="" />
          </div>
        </div>
      </div>

      <div className="right-side">
        <div>
        <form
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   if (name && email && phone && message) {
            //     sendEmail();
            //   } else {
                
            //     toast.warning("Please fill all fields");
            //   }
            // }}
          >
            <div className="flex flex-wrap justify-center items-center pt-14 pl-14 ">
              <div className="h-auto w-full md:w-auto lg:w-auto bg-white rounded-lg shadow-xl p-2">
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
                    
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-md p-3 border border-gray-400 border-solid border-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 col-span-2 sm:col-span-1"
                    
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="rounded-md p-3 border border-gray-400 border-solid border-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 col-span-2 sm:col-span-1"

                  />
                  <textarea
                    placeholder="Your Message"
                    className="rounded-md p-3 border border-gray-400 border-solid border-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 col-span-2"
                    rows="4"
                   
                  ></textarea>

                  <button
                    type="submit"
                    className="rounded-md p-3 text-lg bg-green-600 font-semibold text-white font-calibri col-span-2 sm:col-span-1"
                    // disabled={sending}
                  >
                    Submit
                    {/* {sending ? "Sending..." : "Send Message"} */}
                  </button>
                  {/* <ToastContainer /> */}
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
