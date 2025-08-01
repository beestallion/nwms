import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './App';
import GetStarted from './GetStarted';
import SignIn from './SignIn';
import Category from './Category';
import Discount from './Discount';
import Wrkspace from './Wrkspace';
import './index.css';


// AnimatedRoutes component to wrap Routes with AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/category" element={<Category />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/wrkspace" element={<Wrkspace />} />
        {/* Add more routes as needed */}
      </Routes>
    </AnimatePresence>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
