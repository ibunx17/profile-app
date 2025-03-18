'use client'
import { Formik, Form, Field, FormikProps } from "formik"
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContentVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 10% of the section is visible
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isContentVisible]);

  interface IUsers {
    name: string,
    email: string,
    message: string,
  }

  const initialValues: IUsers = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values: IUsers, {resetForm} : {resetForm : () => void }) => {
    const phoneNumber = "081219376708";
    const message = `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    resetForm();
  };

  return (
    <div className="container" ref={contactRef}>
      <h1 className="block font-bold text-xl mt-1 md:text-4xl lg:5xl mb-3 pt-20 md:pt-48 lg:pt-48 text-center">
        Contact Me
      </h1>
      <div className="flex justify-center mb-5">
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={isContentVisible ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
        >
          <div className="w-[340px] p-8 bg-white shadow-lg rounded-xl">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {(props: FormikProps<IUsers>) => {
                const { values, handleChange } = props;

                return (
                  <Form>
                    <div className="mb-6">
                      <Field
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        className="w-full mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-4">
                      <Field
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        className="w-full mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-4">
                      <Field
                        as="textarea"
                        type="text"
                        name="message"
                        onChange={handleChange}
                        value={values.message}
                        className="w-full mt-2 p-3 h-52 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter your message"
                      />
                    </div>
                    <div className="mb-4">
                      <button
                        type="submit"
                        className="text-base font-semibold w-full text-white bg-gray-800 py-3 px-8 rounded-full
                        hover:bg-gray-500 transition duration-300 ease-in-out md:text-xl lg:2xl"
                      >
                        Send
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </motion.div>
      </div>
    </div>
  )
}