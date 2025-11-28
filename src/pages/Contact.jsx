import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qfhi0ab", "template_nt61z5w", form.current, {
        publicKey: "VZ6jEdJ1gcsjqqhWl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4">

        <h1 className="text-center text-4xl my-10 ">Contact us</h1>


      <form
        className="w-full max-w-[400px] bg-white shadow-md rounded-xl p-8 flex flex-col gap-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <label className="font-semibold">Name</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
          type="text"
          name="user_name"
          required
        />

        <label className="font-semibold">Email</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
          type="email"
          name="user_email"
          required
        />

        <label className="font-semibold">Message</label>
        <textarea
          className="border border-gray-300 rounded-md px-3 py-2 h-24 resize-none outline-none focus:ring-2 focus:ring-green-400"
          name="message"
          required
        ></textarea>

        <input
          type="submit"
          value="Send"
          className="mt-4 bg-green-500 text-white font-semibold rounded-md px-4 py-2 cursor-pointer hover:bg-green-600 transition"
        />
      </form>
    </div>
  );
};

export default Contact;
