import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Explore = () => {
  return (
    <>
      <nav className="mb-6">
        <Navbar />
      </nav>

      <section className="my-16 p-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md transition-all hover:shadow-lg">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 relative inline-block">
          Explore
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-100"></span>
        </h1>
        <p className="text-xl text-gray-800 leading-relaxed mb-8">
          Discover resources, connect with providers, and explore what our
          platform has to offer.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            What You'll Find Here:
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-lg">
                <span className="font-medium text-blue-900">
                  Latest Resources:
                </span>{" "}
                Explore trending and recently added resources in various
                categories.
              </span>
            </div>
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-lg">
                <span className="font-medium text-blue-900">
                  Resource Providers:
                </span>{" "}
                Connect with verified organizations and individuals offering
                valuable resources.
              </span>
            </div>
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-lg">
                <span className="font-medium text-blue-900">
                  Tools & Guides:
                </span>{" "}
                Find helpful guides and tools to maximize your experience on our
                platform.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md transition-all hover:shadow-lg">
        <h1 className="text-4xl font-bold text-purple-900 mb-6 relative inline-block">
          Our Vision
          <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 transform scale-x-100"></span>
        </h1>
        <p className="text-xl text-gray-800 leading-relaxed mb-6">
          Our vision is to create a platform that empowers individuals and
          organizations to share and access resources seamlessly.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            What We Strive For:
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-800 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-lg">
                <span className="font-medium text-purple-900">
                  Bridging Gaps:
                </span>{" "}
                Enable seamless connection between resource providers and
                seekers.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-800 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-lg">
                <span className="font-medium text-purple-900">
                  Promoting Sustainability:
                </span>{" "}
                Reduce resource waste by encouraging reuse and responsible
                sharing.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-800 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-lg">
                <span className="font-medium text-purple-900">
                  Fostering Collaboration:
                </span>{" "}
                Build a strong network where users contribute, engage, and grow
                together.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-800 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-lg">
                <span className="font-medium text-purple-900">
                  Ensuring Trust & Security:
                </span>{" "}
                Guarantee verified resources and protect user data with robust
                moderation and encryption.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12 p-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-md transition-all hover:shadow-lg">
        <h1 className="text-4xl font-bold text-teal-900 mb-6 relative inline-block">
          Features
          <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-600 transform scale-x-100"></span>
        </h1>
        <p className="text-xl text-gray-800 leading-relaxed mb-8">
          Explore the latest features and updates in our platform designed to
          enhance your experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-teal-800 mb-3 flex items-center">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-teal-100 text-teal-700 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </span>
              Easy Resource Download
            </h3>
            <div className="text-gray-700 ml-11">
              Access resources in multiple formats with a single click.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-teal-800 mb-3 flex items-center">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-teal-100 text-teal-700 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Scheduled Resource Sharing
            </h3>
            <div className="text-gray-700 ml-11">
              Automate availability periods for efficient resource management.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-teal-800 mb-3 flex items-center">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-teal-100 text-teal-700 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </span>
              Instant Notifications
            </h3>
            <div className="text-gray-700 ml-11">
              Get notified about new resources and approval updates in
              real-time.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-teal-800 mb-3 flex items-center">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-teal-100 text-teal-700 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              Encrypted File Management
            </h3>
            <div className="text-gray-700 ml-11">
              Ensure secure sharing of resources with end-to-end encryption.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-teal-800 mb-3 flex items-center">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-teal-100 text-teal-700 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              Role-Based Access Control
            </h3>
            <div className="text-gray-700 ml-11">
              Define granular permissions for users, contributors, and
              administrators.
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 p-8 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl shadow-md transition-all hover:shadow-lg">
        <h1 className="text-4xl font-bold text-amber-900 mb-6 relative inline-block">
          Meet The Developers
          <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-600 transform scale-x-100"></span>
        </h1>
        <p className="text-xl text-gray-800 leading-relaxed mb-8">
          Get to know the talented individuals behind this platform's
          development and design.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-800 mb-6 border-b border-amber-200 pb-2">
            Development Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                Aayush Samal
              </h3>
              <div>
                <h4 className="text-lg font-medium text-amber-800 mt-4 mb-2">
                  About Me
                </h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I am a passionate developer with a keen interest in technology
                  and innovation. I love to explore new tools and frameworks to
                  build impactful solutions.
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-amber-800 mb-3">
                    Contact Me
                  </h4>
                  <ul className="flex flex-wrap gap-3">
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                        </svg>
                        Website
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-amber-800">
                  Join Our Team
                </h3>
                <p className="text-gray-600 mt-2">
                  Interested in contributing to our project?
                </p>
                <button className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Explore;
