import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { motion } from 'framer-motion'; // Add this import


function Discount() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#160433] text-white"
    >
      <Header />
      <div className="w-full flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
     <div className="flex items-center justify-between w-full max-w-6xl">
  {/* Left illustration */}
  <div className="relative z-20">
  <img
    src="/standingman.png"
    alt="Left Illustration"
    className="hidden md:block w-[200px] h-[370px]  translate-x-[70px] translate-y-[40px] object-cover"
  />
  </div>

      <main className="flex flex-1 flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
             <div
          className="relative z-10 bg-[#C475F9] rounded-lg shadow-lg max-w-2xl w-full flex flex-col items-center justify-center"
          style={{ minHeight: 440 }}
            >
          {/* Circles at the top */}
          <div className="absolute top-3 left-6 flex flex-row gap-2">
            <span className="w-5 h-5 rounded-full bg-[#0CF637]" />
            <span className="w-5 h-5 rounded-full bg-[#FF9D00]" />
            <span className="w-5 h-5 rounded-full bg-[#160433]" />
          </div>

          {/* Overlapping white card */}
          <div className="overlapping-card">
            {/* Content for the white card */}
            <h2 className="text-xl font-bold text-black mb-4 text-center">
            <span className='italic'>For this category, there is a <span className='text-[#13D10F]'>10%</span> discount for all members.     </span>       </h2>
            <p className="text-[#6D6A6A] text-center text-lg">
              Please fill in the course you’re offering
               
            </p>
<br />
            <div className="flex items-center gap-3 mb-4 w-full ">
  <label className="text-xl font-bold text-black italic" htmlFor="course-select">
    Course:
  </label>
  <div className="relative flex-1" >
    <select
      id="course-select"
      className="appearance-none w-full bg-[#f8f8e700] px-4 py-3 text-black text-md font-normal focus:outline-none focus:ring-2 focus:ring-[#12d10f00] transition border-b-2 border-black pb-2 cursor-pointer"
      defaultValue=""
    >
      {/* <option value="" disabled>
        Select a course
      </option> */}
      <option value="DA">Data Analysis</option>
      <option value="UI/UX">User Interface/User Experience</option>
      <option value="WEB">Web Development</option>
      <option value="PM">Product Management</option>
      <option value="WD">Web Design</option>
      <option value="BD">Brand Design</option>
      <option value="DM">Digital Marketing</option>
      <option value="CS">Cyber Security</option>
    </select>
    {/* Custom arrow */}
    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-[#000000]">&#9660;</span>
  </div>
  
</div>
<br />
<br />
<br />

                <Link to="/wrkspace"
                  className="primary-btn bg-[#0CF637] hover:bg-[#13D10F] text-white font-bold px-6 py-3 rounded-2xl transition-all duration-200 w-[35vh] h-[8vh] shadow-2xl text-center"
                  style={{ boxShadow: '0 10px 25px rgba(12, 246, 55, 0.2)' }}
                    >
                  SUBMIT
                </Link>


                <p className="mt-2 text-md text-black text-center">
                  By clicking this button you have agreed to our {' '} 
                  <a href="#"
                    className="underline text-black hover:text-blue-500 transition-colors"
                  >
                    Terms of service
                  </a>{' '}
                  <br />
                  and acknowledged our{' '}
                  <a
                    href="#"
                    className="underline text-black hover:text-blue-500 transition-colors"
                  >
                   Company Policy
                  </a>
                  .
                </p>

          </div>
        </div>
                
             </main> 
              
             <img
    src="/sittingwoman.png"
    alt="Right Illustration"
    className="hidden md:block z-10 w-[290px] h-auto -translate-x-[170px] translate-y-[140px] "
  />
  
            </div>
            </div>
    </motion.div>
  );
}

export default Discount;


{/* <span className="w-5 h-5 rounded-full bg-[#0CF637] animate-ping" />
            <span className="w-5 h-5 rounded-full bg-[#FF9D00]" />
            <span className="w-5 h-5 rounded-full bg-[#160433] animate-ping" />

 <motion.span
              className="w-5 h-5 rounded-full bg-[#0CF637]"
              animate={{ y: [0, -10, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0, ease: "easeInOut" }}
            />
            <motion.span
              className="w-5 h-5 rounded-full bg-[#FF9D00]"
              animate={{ y: [0, -10, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.2, ease: "easeInOut" }}
            />
            <motion.span
              className="w-5 h-5 rounded-full bg-[#160433]"
              animate={{ y: [0, -10, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.4, ease: "easeInOut" }}
            /> */}