import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SERVICE_ID = "service_4x7624i";     
const TEMPLATE_ID = "template_rs8jrv5";  
const PUBLIC_KEY = "K0u6ONclaZXEpP9Z0";  

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (loading) return;

  
    const data = new FormData(form.current);
    const email = data.get("user_email")?.toString().trim();
    const name = data.get("user_name")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    const subject = data.get("subject")?.toString().trim();

    if (!email || !name || !message || !subject) {
      toast.error("Please fill all fields.", { theme: "dark", autoClose: 2500 });
      return;
    }

    
    try {
      emailjs.init(PUBLIC_KEY);
    } catch (err) {
     
    }

    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          setLoading(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-6 sm:px-12 md:px-20"
    >
      <ToastContainer />

      <div className="text-center mb-10 max-w-2xl">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">CONTACT</h2>
        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded" />
        <p className="text-gray-400 mt-4 text-lg">
          I’d love to hear from you — reach out for opportunities or questions!
        </p>
      </div>

      <div className="w-full max-w-xl">
        <div className="bg-gradient-to-b from-white/3 to-transparent border border-white/6 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Connect With Me </h3>
            <div className="text-sm text-gray-400">I'll reply within 24–48 hours</div>
          </div>

      
          {isSent ? (
            <div className="flex flex-col items-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-emerald-400 mb-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-2xl text-white font-semibold mb-2">Message sent</h4>
              <p className="text-gray-300 text-center max-w-md">
                Thanks for reaching out — I’ll get back to you shortly. If it’s urgent, you can also
                message me on LinkedIn.
              </p>
            </div>
          ) : (
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
           
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="relative group">
                  <span className="sr-only">Your Email</span>
                  <div className="flex items-center bg-[#0f0b1a] border border-white/6 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-purple-400 transition">
                    <svg
                      className="w-5 h-5 text-gray-400 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12l-4-3-4 3m0 0l4 3 4-3M4 7h16M4 17h16" />
                    </svg>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      required
                      aria-label="Your Email"
                      className="bg-transparent flex-1 text-white placeholder:text-gray-400 outline-none"
                    />
                  </div>
                </label>

                <label className="relative group">
                  <span className="sr-only">Your Name</span>
                  <div className="flex items-center bg-[#0f0b1a] border border-white/6 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-purple-400 transition">
                    <svg
                      className="w-5 h-5 text-gray-400 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c4 0 6 2 6 4v1H6v-1c0-2 2-4 6-4z" />
                    </svg>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      required
                      aria-label="Your Name"
                      className="bg-transparent flex-1 text-white placeholder:text-gray-400 outline-none"
                    />
                  </div>
                </label>
              </div>

             
              <label className="relative block">
                <span className="sr-only">Subject</span>
                <div className="flex items-center bg-[#0f0b1a] border border-white/6 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    aria-label="Subject"
                    className="bg-transparent flex-1 text-white placeholder:text-gray-400 outline-none"
                  />
                </div>
              </label>

             
              <label className="relative block">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="5"
                  required
                  aria-label="Message"
                  className="w-full bg-[#0f0b1a] border border-white/6 rounded-md px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-purple-400 transition resize-y"
                />
              </label>

          
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-[1.01] active:scale-100 text-white font-semibold px-4 py-3 rounded-md shadow-lg disabled:opacity-70 transition"
                >
                  {loading ? (
                    <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10l7-7m0 0l7 7M10 3v18" />
                    </svg>
                  )}
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    form.current.reset();
                  }}
                  className="px-3 py-2 text-sm rounded-md bg-white/3 border border-white/6 text-gray-200 hover:bg-white/5 transition"
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        </div>

        
        <div className="mt-3 text-center text-xs text-gray-500">
          By sending you consent to be contacted. No spam — only genuine replies.
        </div>
      </div>
    </section>
  );
};

export default Contact;
