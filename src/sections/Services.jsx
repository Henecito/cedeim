import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    title: 'Rehabilitación Física',
    description: 'Recupera tu movilidad con terapias personalizadas y tecnología de punta.',
  },
  {
    title: 'Evaluación Deportiva',
    description: 'Optimiza tu rendimiento con análisis físico y seguimiento integral.',
  },
  {
    title: 'Atención Kinesiológica',
    description: 'Alivio y tratamiento del dolor, lesiones musculares y más.',
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nuestros Servicios
      </motion.h2>

      <div className="services-grid">
        {services.map((servicio, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
            <a href="/servicios" className="btn-outline">Ver más</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
