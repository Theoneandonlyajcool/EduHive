import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoTriangleSharp } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { HiOutlineDocumentText } from "react-icons/hi";
import { LuFileChartColumnIncreasing } from "react-icons/lu";

function LandingPage({ onSignUpClick }) {
  const nav = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="bg-orange-50  sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-red-900">
            Eduhive
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-[40%]  justify-center items-center py-2 rounded-full bg-white">
            <nav className=" items-center flex justify-around w-full">
              <a
                href="#"
                className="text-gray-700 hover:text-red-800 font-medium transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-800 font-medium transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-800 font-medium transition"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-800 font-medium transition"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => nav("/sign_up")}
              className="px-6 py-2  border-2 bg-red-900 text-white rounded-full font-bold  transition"
            >
              Sign Up
            </button>
            <button
              //   onClick={onSignUpClick}
              className="px-6 py-2 bg-black text-white rounded-full font-bold  transition"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-orange-200 py-4 px-4 space-y-3">
            <a
              href="#"
              className="block text-gray-700 hover:text-red-800 font-medium py-2"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-800 font-medium py-2"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-800 font-medium py-2"
            >
              Features
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-800 font-medium py-2"
            >
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <button className="w-full px-4 py-2 text-red-900 border-2 border-red-900 rounded font-bold hover:bg-red-50 transition">
                Sign In
              </button>
              <button
                onClick={() => nav("/sign_up")}
                className="w-full px-6 py-2 bg-red-900 text-white rounded font-bold hover:bg-red-800 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-orange-50 py-8 md:py-16 lg:py-20 ">
        <div className="max-w-7xl mx-auto px-4  h-full">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Manage Your
                <br />
                <span className="text-red-900">School Smarter</span>
                <br />
                and Simpler
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Handle admissions, attendance,grades,fees <br />
                and communication all in ine easy-to-use platform. <br />
                Save time, stay organized, and keep everyone <br /> connected
              </p>
              <button
                onClick={onSignUpClick}
                className="inline-block px-8 py-3 bg-red-900 text-white rounded font-bold hover:bg-red-800 transition transform hover:scale-105"
              >
                SIGN UP NOW
              </button>
            </div>

            {/* Right Image Placeholder */}
            <div className="hidden md:flex justify-center md:justify-end h-full">
              <img
                src="https://res.cloudinary.com/dp75oveuw/image/upload/v1763996084/35d2eed3d71cad8b6ebc671a71eeeee0b65ffc99_ajctq9.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center">
          <div className="text-center mb-12">
            <h3 className=" font-bold mb-2 text-4xl">
              WELCOME TO <span className="text-red-900">EDUHIVE</span>
            </h3>
            <h2 className="text-3xl md:text-3xl  text-gray-900 mb-4">
              .....the fututre of School management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe running a school shouldn't feel complicated. That's why
              we created a simple platform that helps you stay organized, save
              time, and focus more on teaching and learning. Whethere you're an
              administrator, teacher or parent, everything you need is right
              here
            </p>
          </div>

          {/* Features Grid */}
          <div className="flex justify-center md:justify-around items-center flex-wrap w-full max-w-[80%]">
            {[
              {
                text: "Choose a plan",
              },
              {
                text: "Book Consulatation",
              },
              {
                text: "Start Free Trial",
              },
              {
                text: "Talk to us",
              },
            ].map((ele, idx) => (
              <div className=" flex flex-col my-2 mx-2 items-center cursor-pointer ">
                <div className="bg-red-900 w-[10rem] my-2 h-[10rem] rounded-full flex justify-center items-center hover:shadow-xl hover:translate-y-1 transition-all ease-in-out duration-300">
                  <p>
                    <IoTriangleSharp className="text-white text-5xl" />
                  </p>
                </div>
                <p className="text-xl mt-2">{ele.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automated Records Section */}
      <section className="py-12 md:py-20 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automated Attendance And Secured Student Records
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our system automatically captures attendance data and securely
              stores all student information with advanced encryption.
            </p>
          </div>

          {/* Features Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: LiaClipboardListSolid,
                content:
                  "EduHive’s smart attendance feature makes attendance simple and automatic. With a few clicks, teachers can record attendance from any device, and the system instantly syncs data across all dashboards. Real-time analytics help administrators monitor trends, spot absences, and make informed decisions with ease.",
                BtnText: "AUTOMATED ATTENDANCE",
              },
              {
                icon: HiOutlineDocumentText,
                content:
                  "EduHive makes fee management effortless. Schools can generate invoices automatically, track payments in real time, and send instant reminders to parents. From invoicing to receipts, everything happens in one place. Every transaction is recorded securely, reducing errors and saving hours of manual work for administrators.",
                BtnText: "FEES PAYMENT",
              },
              {
                icon: LuFileChartColumnIncreasing,
                content:
                  "With EduHive, managing academic data is completely automated. Attendance, scores, and transcripts are synced across subjects and classes. Schools can generate detailed academic reports with a single click, giving teachers, students, and parents a clear view of progress throughout the term.",
                BtnText: "ACADEMIC RECORDS",
              },
            ].map((ele, idx) => (
              <div
                key={idx}
                className="bg-[#F5E2C8] text-black flex flex-col justify-between items-center hover:shadow-xl hover:translate-y-2 cursor-pointer transition-all "
              >
                <div className=" w-full max-w-[95%] p-6">
                  {/* Icon */}
                  <div className="border-2 border-black w-[4rem] h-[4rem] rounded-full flex justify-center items-center ">
                    <ele.icon className="text-black text-3xl" />
                  </div>
                  <p className="mt-3">{ele.content}</p>
                </div>
                <button className="bg-red-900 h-[3rem] w-full text-white font-bold">
                  {ele.BtnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* py-12 md:py-20 */}
      {/* Why EduHive Section */}
      <section className="bg-red-900 w-full h-[110vh] min-h-fit md:h-[100vh]"></section>

      {/* Video Section */}
      <section className="py-12 md:py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-700 rounded-lg overflow-hidden shadow-xl aspect-video flex items-center justify-center hover:bg-gray-600 transition cursor-pointer group">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-gray-800 group-hover:scale-110 transition transform">
                <span className="text-4xl">▶</span>
              </div>
              <p className="text-white mt-4">Watch Our Demo</p>
            </div>
          </div>
        </div>
      </section>

      {/* What People Say Section */}
      <section className="py-12 md:py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What People Say
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Hear from school administrators and educators who have transformed
              their operations with EduHive.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "EduHive has completely transformed how we manage our school. Highly recommended!",
                author: "John Smith",
                role: "School Principal",
              },
              {
                text: "The best school management system we've ever used. Simple, powerful, and reliable.",
                author: "Sarah Johnson",
                role: "Academic Director",
              },
              {
                text: "Our administrative work has been cut in half since we started using EduHive.",
                author: "Mike Davis",
                role: "Admin Manager",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-red-900 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-red-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join hundreds of schools already using EduHive
          </p>
          <button
            onClick={onSignUpClick}
            className="px-10 py-4 bg-white text-red-900 rounded-lg font-bold text-lg hover:bg-orange-50 transition transform hover:scale-105 shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">EduHive</h3>
              <p className="text-gray-400">
                Your complete school management solution
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">
              &copy; 2024 EduHive. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
