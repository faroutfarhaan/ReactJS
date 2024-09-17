import React from "react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log("Form submitted:", formData);
    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 mt-28 min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-left text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-left text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-left text-gray-700 font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              rows="5"
              placeholder="Your Message"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
