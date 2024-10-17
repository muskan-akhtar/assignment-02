import React from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-center p-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-4">
            We value your feedback and inquiries! Please feel free to reach out to us for any questions, concerns, or support.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            You can contact us through the following methods:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li>Email: <a href="mailto:ABC@example.com" className="text-blue-600 underline">ABC@example.com</a></li>
            <li>Phone: <span className="text-blue-600">+92-3226207818</span></li>
            <li>Follow us on social media for updates!</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
