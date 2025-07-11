import React from 'react';
import Header from './Header';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SignIn () {
    return (
        <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="min-h-screen"
              style={{
                backgroundColor: '#160433'
                //Im confused too why the both are neccessary it didnt work without the other, i mean the 
               // className and the style:bg and the in style
              }}
            >
              {/* <main className=" bg-[#160433]/70 "></main> */}
            <Header />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-12">
              {/* Left Side - Hero Image */}
              <div className="order-1 lg:order-1">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <img 
                    src="/Group-sign.png" 
                    alt=" illustration" 
                    className="w-[70%] h-[100%] object-fill"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="order-2 lg:order-2 w-full">
                <form className="grid grid-cols-2 gap-x-6 gap-y-5 w-[200%] mb-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#13D10F] text-sm"
                  />
                </form>
                {/* Add more content here as needed */}
                <Link to="/category">
                <button
            className="tertiary-btn text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 w-full shadow-2xl"
            // style={{ boxShadow: '0 8px 32px 0 rgba(44, 44, 44, 0.7)' }}
          >
            SIGN IN
          </button>
          </Link>
          <p className="mt-4 text-[#6D6A6A] text-center text-sm">
            You have an account?{' '}
            <a
              href="#"
              className="text-[#009DE9] underline hover:text-blue-500 transition-colors"
            >
              Sign In
            </a>
          </p>
          <p className="mt-2 text-xs text-white text-center">
            By clicking this button you have agreed to our {' '}
            <a
              href="#"
              className="underline text-[#009DE9]  hover:text-blue-500 transition-colors"
            >
              Terms of service
            </a>{' '}
            and acknowledged our {' '}
            <a
              href="#"
              className="underline text-[#009DE9]  transition-colors"
            >
              Company Policy
            </a>
            .
          </p>
              </div>
            </div>
          </div>
        </main>
            

      </motion.div>
    );
}
{/* 
<form className="grid grid-cols-2 gap-x-6 gap-y-5 w-full mb-6">
                        <input
                            type="text"
                            placeholder="Username"
                            className="col-span-1 border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#13D10F] text-sm"
                        /></form> */}