import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-center p-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to our website! We are dedicated to providing you with the best services and solutions tailored to your needs.
            Our team of experts is committed to excellence, ensuring that you receive top-notch quality and support.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Whether you're looking for innovative technology solutions or creative strategies for your business, we are here to help you unlock limitless possibilities.
            Our mission is to empower you to thrive in today's competitive landscape.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

