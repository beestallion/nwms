import React from 'react';
import Header from './Header';
import { motion } from 'framer-motion';

export default function GetStarted() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/loginbgimg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center bg-[#160433]/70 min-h-[calc(100vh-4rem)]">
        <div
          className="bg-white rounded-2xl shadow-lg px-8 py-8 max-w-xl w-full flex flex-col items-center"
          style={{ minHeight: 440 }}
        >
          <p className="text-base mb-3 font-semibold text-black text-center">
            Find your{' '}
            <span style={{ color: '#13D10F' }}>perfect</span>
            {' '}space, with our help
          </p>
          <h2 className="text-3xl font-bold mb-4 text-black text-center">Welcome!</h2>
          <p className="text-sm text-gray-700 mb-6 text-center">
            Enter your details to get started with Netisens.
          </p>
          {/* Form starts here */}
          <form className="grid grid-cols-2 gap-x-6 gap-y-5 w-full mb-6">
            <input
              type="text"
              placeholder="Username"
              className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#13D10F] text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#13D10F] text-sm"
            />
            <select
              className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#13D10F] text-sm"
              defaultValue=""
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#13D10F] text-sm"
            />
          </form>
          <button
            className="primary-btn bg-[#FF9D00] hover:bg-[#e8890a] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 w-full shadow-2xl"
            style={{ boxShadow: '0 8px 32px 0 rgba(44, 44, 44, 0.7)' }}
          >
            GET STARTED
          </button>
          <p className="mt-4 text-black text-center text-sm">
            You have an account?{' '}
            <a
              href="#"
              className="text-blue-400 underline hover:text-blue-500 transition-colors"
            >
              Sign In
            </a>
          </p>
          <p className="mt-2 text-xs text-gray-600 text-center">
            By filling the following information and clicking this button you have agreed to our{' '}
            <a
              href="#"
              className="underline text-gray-800 hover:text-black transition-colors"
            >
              Terms of service
            </a>{' '}
            and{' '}
            <a
              href="#"
              className="underline text-gray-800 hover:text-black transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </main>
    </motion.div>
  );
}
