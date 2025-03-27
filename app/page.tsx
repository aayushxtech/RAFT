import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";

const Home = () => {
  const steps = [
    {
      step: "1",
      title: "Sign Up or Log In",
      description: "Register as a user or admin to start using RAFT.",
    },
    {
      step: "2",
      title: "Share or Request Resources",
      description: "Post a new resource or request access to available ones.",
    },
    {
      step: "3",
      title: "Admin Approval/Moderation",
      description: "Admins verify and approve shared resources.",
    },
    {
      step: "4",
      title: "Track and Manage",
      description: "Monitor resource engagement and usage trends.",
    },
  ];

  const benefits = [
    {
      icon: "📚",
      title: "Easy Resource Download",
      description:
        "Download shared resources in multiple formats, including PDFs and docs.",
    },
    {
      icon: "🕰️",
      title: "Scheduled Resource Sharing",
      description: "Set availability periods and automate resource expiration.",
    },
    {
      icon: "🔔",
      title: "Instant Notifications & Updates",
      description: "Stay informed about new resources and admin actions.",
    },
    {
      icon: "📊",
      title: "Resource Usage Insights",
      description: "Track engagement, downloads, and interaction metrics.",
    },
    {
      icon: "🔐",
      title: "Encrypted File Management",
      description: "Ensure data security with end-to-end encryption.",
    },
    {
      icon: "🛂",
      title: "Role-Based Access Control",
      description:
        "Grant specific permissions to different user types for secure collaboration.",
    },
  ];

  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <section className="container mx-auto my-12 md:my-20 px-4">
        <div className="text-center space-y-3 md:space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Welcome to RAFT
          </h1>
          <p className="text-xl md:text-2xl font-medium text-teal-600 max-w-3xl mx-auto px-4">
            Resource Allocation and Facilitation Tool
          </p>
          <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </div>
      </section>

      <section className="container mx-auto my-8 md:my-15 px-4">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">What We Do?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-8 max-w-5xl mx-auto">
          <div className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
            <h3 className="text-lg md:text-xl font-semibold text-sky-900 mb-2 md:mb-3">
              Share Resources
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Books, documents, tools, or any digital/physical resources.
            </p>
          </div>
          <div className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-teal-500">
            <h3 className="text-lg md:text-xl font-semibold text-sky-900 mb-2 md:mb-3">
              Request Resources
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Request resources from other users.
            </p>
          </div>
          <div className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-500">
            <h3 className="text-lg md:text-xl font-semibold text-sky-900 mb-2 md:mb-3">
              Connect with Users
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Connect with users to share resources.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gradient-to-r from-sky-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-sky-950">
              How RAFT Works
            </h2>
            <div className="w-16 md:w-20 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-sky-900 mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-2 md:mb-3">
              Benefits of RAFT
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Our platform offers multiple features to make resource sharing
              seamless and efficient
            </p>
            <div className="w-16 md:w-24 h-1 bg-teal-500 mx-auto mt-3 md:mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500 flex flex-col h-full transform hover:-translate-y-2 group animate-delay-${index}`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-200 to-teal-200 text-blue-600 flex items-center justify-center font-bold text-xl md:text-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-sky-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-lg text-gray-600 flex-grow">
                  {item.description}
                </p>
                <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-1 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gradient-to-r from-sky-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-2 md:mb-3">
              Join Us Now
            </h2>
          </div>
          <div className="text-center">
            <Link href="/login">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                Get Started with RAFT
              </button>
            </Link>

            <p className="mt-3 text-sm text-gray-600">
              Join our community and start sharing resources today
            </p>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
