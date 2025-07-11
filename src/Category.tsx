import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    key: 'user',
    label: 'User',
    description: 'Engaged in personal or professional activities, leveraging the platform.',
    icon: '👩',
  },
  {
    key: 'student',
    label: 'Student',
    description: 'Focused on academic growth, utilizing the platform to support learning and collaboration.',
    icon: '🧑‍🎓',
  },
  {
    key: 'siwes',
    label: 'SIWES',
    description: 'Gaining real-world skills through Student Industrial Work Experience Scheme.',
    icon: '👨‍💼',
  },
];

export default function Category () {
    const [selected, setSelected] = useState('student');
    const selectedIdx = categories.findIndex((cat) => cat.key === selected);

  // Card positions for carousel effect
  const getCardPosition = (idx) => {
    if (idx === selectedIdx) return 'center';
    if ((idx + 1) % 3 === selectedIdx) return 'left';
    if ((idx + 2) % 3 === selectedIdx) return 'right';
    return '';
  };

    return (
        <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="min-h-screen flex flex-col bg-[#160433] relative"
            >
              
              <img src="/nlogo.png" alt="Netisens Logo" className="absolute top-6 left-8 w-40 h-auto z-20" />
              <br />
              <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-white mt-8 mb-2 text-center">Category</h1>

        <p className="text-lg text-gray-300 mb-10 text-center">Pick your category to proceed: User, Student, or SIWES.</p>
        <div className="relative flex justify-center items-center mb-10 w-full max-w-4xl h-[370px]">
          {categories.map((cat, idx) => {
            const position = getCardPosition(idx);
            let motionProps = {};
            if (position === 'center') {
              motionProps = {
                zIndex: 30,
                scale: 1.1,
                x: 0,
                boxShadow: '0 8px 32px 0 rgba(44, 44, 44, 0.25)',
              };
            } else if (position === 'left') {
              motionProps = {
                zIndex: 20,
                scale: 0.95,
                x: -200, // widened gap
                boxShadow: '0 4px 16px 0 rgba(44, 44, 44, 0.10)',
              };
            } else if (position === 'right') {
              motionProps = {
                zIndex: 20,
                scale: 0.95,
                x: 200, // widened gap
                boxShadow: '0 4px 16px 0 rgba(44, 44, 44, 0.10)',
              };
            }
            return (
              <motion.div
                key={cat.key}
                layout
                transition={{ type: 'spring', stiffness: 700, damping: 20 }}
                animate={motionProps}
                className={`absolute cursor-pointer bg-white rounded-3xl flex flex-col items-center px-8 py-8 w-72 transition-all duration-200 border-2 ${selected === cat.key ? 'border-[#0CF637] scale-105' : 'border-transparent'} ${position}`}
                style={{ minHeight: 320 }}
                onClick={() => setSelected(cat.key)}
                tabIndex={0}
                role="button"
                aria-pressed={selected === cat.key}
              >
                <div className="text-6xl mb-4">{cat.icon}</div>
                <h2 className="text-2xl font-bold text-center mb-2 text-black">{cat.label}</h2>
                <p className="text-gray-700 text-center mb-8">{cat.description}</p>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <span className={`inline-block w-7 h-7 rounded-full border-2 ${selected === cat.key ? 'border-[#0CF637] bg-white' : 'border-gray-300 bg-gray-100'} flex items-center justify-center`}>
                    {selected === cat.key ? (
                      <span className="inline-block w-3 h-3 bg-[#0CF637] rounded-full"></span>
                    ) : null}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <button
          className="mt-2 px-10 py-3 rounded-xl border-2 border-[#0CF637] text-white font-bold text-lg bg-transparent hover:bg-[#0CF637] hover:text-[#160433] transition-all duration-200 flex items-center gap-2"
          onClick={() => alert(`Proceeding as: ${selected.charAt(0).toUpperCase() + selected.slice(1)}`)}
        >
          NEXT <span className="ml-4">→</span>
        </button>
      </main>
            </motion.div>
    );
}


