import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-16 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to our food delivery platform! We strive to bring you the best food from your favorite restaurants directly to your doorstep. 
          Our mission is to connect food lovers with great food, ensuring fast and reliable delivery services.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          With a user-friendly interface, real-time order tracking, and a vast selection of restaurants to choose from, 
          our app makes food delivery quick, easy, and enjoyable.
        </p>
        <p className="text-gray-700 text-lg">
          Join us and experience seamless food delivery like never before. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default About;
