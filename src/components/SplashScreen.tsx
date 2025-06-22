import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/viewme-logo.png';

const SplashScreen: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'fixed',
          zIndex: 9999,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#fffef6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.img
          src={logo}
          alt="ViewMe Logo"
          initial={{ scale: 0.6, rotate: 0 }}
          animate={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          style={{ width: '150px', height: '150px' }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
