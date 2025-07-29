import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Wrkspace() {
  const location = useLocation();
  const name = location.state?.name || 'User Surname';
  const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = React.useState<string | null>(null);

  const toggleOptions = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="h-screen bg-[#160433] text-white relative overflow-hidden"
    >
      {/* Logo */}
      <a href="/">
              <img src="/nlogo.png" alt="Netisens Logo" className="absolute top-6 left-8 w-40 h-auto z-20"  />
              </a>

      {/* Main Content */}
      <main className= "h-screen flex items-center relative overflow-hidden">
        {/* Welcome Section with Toggle Button */}
        <div className="text-left mt-20 px-12 transition-transform duration-500 ease-in-out transform relative min-h-[400px]">
          
          <motion.div
            animate={{ 
              opacity: isOptionsVisible ? 0 : 1,
              y: isOptionsVisible ? -20 : 0
            }}
            transition={{ duration: 0.5 }}
          >
          <h1 className="text-[#FF9D00] text-4xl lg:text-5xl xl:text-6xl font-thin leading-[1.2]">
            Welcome{' '}
            <br />
            <span className="text-[#13D10F] font-bold">{name}</span>{' '}
            <br />
            to Netisens{' '}
            <br />
            <span className="inline-block mt-2">Workspace!</span>
          </h1>
          </motion.div>

          {/* Options text that moves to top when visible */}
          <motion.p 
            className="text-base text-gray-300 mt-14 ease-in-out duration-100 transition-all"
            animate={{ 
              y: isOptionsVisible ? -420 : 0,
              x: isOptionsVisible ? 500 : 0,
              scale: isOptionsVisible ? 1.1 : 1
            }}
            transition={{ duration: 0.5 }}
          >
            Workspace options for every need. 
            <br />Choose your preferred workspace.
          
          </motion.p>
        </div>

        {/* Workspace Options */}
        <div 
          className={`flex gap-6 absolute right-40 transition-all duration-500 ease-in-out transform px-4
            ${isOptionsVisible ? 'translate-x-0' : 'translate-x-[32%]'}`}
        >
          {/* Private Workspace */}
          <div 
            onClick={() => setSelectedWorkspace('private')}
            className={`bg-[#ffffff] rounded-lg p-5 text-center shadow-lg relative w-[320px] cursor-pointer
              transition-all duration-300 hover:outline hover:outline-3 hover:outline-[#13D10F] hover:scale-105
              hover:shadow-xl hover:z-10
              ${selectedWorkspace === 'private' ? 'outline outline-3 outline-[#13D10F]' : ''}`}
          >
            <img
              src="/ptemp.svg"
              alt="Private Workspace"
              className="w-full h-50 object-contain mb-4"
            />
            <h2 className="text-2xl font-bold text-black text-left">Private</h2>
            <p className="text-black mt-2 text-left">
              A fully enclosed, secure space for individual work.
            </p>
            <div className="mt-8"> 
              <div className="absolute bottom-1 left-3 ">
                <button className="flex items-center gap-2 px-4 py-1 border-2 border-[#13D10F] rounded-full group relative overflow-hidden gradient-outline-bton">
                  {/* Your Icon */}
                  <img
                    src="/Vector-pr.svg"  /* Replace with your icon path */
                    alt="Icon"
                    className="h-4 w-4 group-hover:invert transition-all duration-300 "
                  />
                  {/* Text */}
                  <span className="text-[#000000] group-hover:text-white text-sm transition-all duration-300">1 Person</span>
                 
                </button>
              </div>
            </div>
          </div>

          {/* Semi-Private Workspace */}
          <div 
            onClick={() => setSelectedWorkspace('semi-private')}
            className={`bg-[#ffffff] rounded-lg p-5 text-center shadow-lg relative w-[320px] cursor-pointer
              transition-all duration-300 hover:outline hover:outline-3 hover:outline-[#13D10F] hover:scale-105
              hover:shadow-xl hover:z-10
              ${selectedWorkspace === 'semi-private' ? 'outline outline-3 outline-[#13D10F]' : ''}`}
          >
            <img
              src="/sptemp.svg"
              alt="Semi-Private Workspace"
              className="w-half h-[39vh] ml-8 mb-4"
            />
            <h2 className="text-2xl font-bold text-black text-left">Semi-Private</h2>
            <p className="text-black mt-2 text-left">
              A shared workspace with designated areas offering some privacy.
            </p>
            <div className="mt-8"> 
              <div className="absolute bottom-1 left-3">
                <button className="flex items-center gap-2 px-4 py-1 border-2 border-[#13D10F] rounded-full group relative overflow-hidden gradient-outline-bton">
                  {/* Your Icon */}
                  <img
                    src="/Vectorsp.svg"
                    alt="Icon"
                    className="h-4 w-4 group-hover:invert transition-all duration-300"
                  />
                  {/* Text */}
                  <span className="text-black group-hover:text-white text-sm transition-all duration-300">1-2 People</span>
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#13D10F] to-[#FF9D00] opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Public Workspace */}
          <div 
            onClick={() => setSelectedWorkspace('public')}
            className={`bg-[#ffffff] rounded-lg p-5 text-center shadow-lg relative w-[320px] cursor-pointer
              transition-all duration-300 hover:outline hover:outline-3 hover:outline-[#13D10F] hover:scale-105
              hover:shadow-xl hover:z-10
              ${selectedWorkspace === 'public' ? 'outline outline-3 outline-[#13D10F]' : ''}`}
          >
            <img
              src="/putemp.svg"
              alt="Public Workspace"
              className="w-full h-[42vh] object-cover"
            />
            <h2 className="text-2xl font-bold text-black text-left">Public</h2>
            <p className="text-black mt-2 text-left">
              An open, communal space for flexible work and collaboration.
            </p>
            <div className="mt-8"> 
              <div className="absolute bottom-1 left-3 ">
                <button className="flex items-center gap-2 px-4 py-1 border-2 border-[#13D10F] rounded-full group relative overflow-hidden gradient-outline-bton">
                  {/* Your Icon */}
                  <img
                    src="/vectorpu.svg"  /* Replace with your icon path */
                    alt="Icon"
                    className="h-4 w-6  group-hover:invert transition-all duration-300 "
                  />
                  {/* Text */}
                  <span className="text-[#000000] group-hover:text-white text-sm transition-all duration-300">30+ People</span>
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#13D10F] to-[#FF9D00] opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </button>
              </div>
            </div>
          </div>
          </div>
        
        {/* Toggle Button */}
        <button
          onClick={toggleOptions}
          className="fixed bottom-8 right-8 px-6 py-3 bg-[#13D10F] text-white rounded-xl hover:bg-[#0fa00c] transition-colors flex items-center gap-2 shadow-lg z-50"
        >
          {isOptionsVisible ? (
            <>
              <span>Close Workspaces</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </>
          ) : (
            <>
              <span>View Workspaces</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </>
          )}
        </button>
      </main>
    </motion.div>
  );
}

export default Wrkspace;