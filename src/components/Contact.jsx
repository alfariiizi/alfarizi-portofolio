import React, { useState, useRef } from "react";
import emailJs from "@emailjs/browser";
import Devider from "./Devider";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    let result = await emailJs.sendForm(
      "service_phmvnjq",
      "template_djdmdim",
      form.current,
      "rLYpIYijqkeWuyZmc"
    );

    console.log(result.text);
    console.log(result.status);
    setStatus("Submit");
  };

  return (
    <div className="">
      <Devider name={"Contact Me"} />
      <div className="h-full w-full p-5 py-16 dark:bg-gradient-to-bl dark:from-slate-800 dark:to-slate-900 dark:text-slate-200">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex h-full w-full flex-col justify-center">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="rounded border-2 border-slate-800 px-2 focus:border-blue-700 focus:outline-none focus:outline-blue-500 dark:text-black"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="rounded border-2 border-slate-800 px-2 focus:border-blue-700 focus:outline-none focus:outline-blue-500 dark:text-black"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-2/3 max-w-lg rounded border-2 border-slate-800 px-2 focus:border-blue-700 focus:outline-none focus:outline-blue-500 dark:text-black"
              />
            </div>
          </div>
          <button
            type="submit"
            value="Send"
            className="hover:from-teal700 my-8 mx-auto rounded-lg border-[1px] border-slate-600 bg-gradient-to-tr from-teal-600 to-slate-700 p-2 text-slate-200 hover:from-teal-700 hover:to-slate-800 dark:border-slate-200">
            {status}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
