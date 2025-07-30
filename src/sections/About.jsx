import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section className="about-hero">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/about.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <div className="about-hero-overlay" />

      <motion.div
        className="about-hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Tu bienestar, nuestro propósito
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Somos CEDEIM, especialistas en salud, rendimiento y recuperación. Combinamos ciencia y compromiso humano para que vuelvas a dar lo mejor de ti.
        </motion.p>
        <motion.a
          href="/quienes-somos"
          className="btn-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Conoce más
        </motion.a>
      </motion.div>
    </section>
  );
}
