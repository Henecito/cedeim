import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/cedeim_logotipo.png'; // Usa WebP si es posible
import { useEffect, useState } from 'react';

function useReducedMotion() {
  const [shouldReduce, setShouldReduce] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduce(mediaQuery.matches);
  }, []);
  return shouldReduce;
}

export default function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={shouldReduce ? false : { opacity: 0, x: -80 }}
        whileInView={shouldReduce ? false : { opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          initial={shouldReduce ? false : { y: 50, opacity: 0 }}
          whileInView={shouldReduce ? false : { y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tu bienestar es<br /><span>nuestra prioridad</span>
        </motion.h1>
        <motion.p
          initial={shouldReduce ? false : { opacity: 0 }}
          whileInView={shouldReduce ? false : { opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          Ofrecemos atención médica integral y programas de rehabilitación deportiva
        </motion.p>
        <motion.button
          className="cta"
          whileHover={!shouldReduce ? { scale: 1.05 } : {}}
          whileTap={!shouldReduce ? { scale: 0.95 } : {}}
          initial={shouldReduce ? false : { opacity: 0 }}
          whileInView={shouldReduce ? false : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Nuestros servicios
        </motion.button>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={shouldReduce ? false : { opacity: 0, x: 80 }}
        whileInView={shouldReduce ? false : { opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img src={heroImage} alt="Rehabilitación física" />
      </motion.div>
    </section>
  );
}
