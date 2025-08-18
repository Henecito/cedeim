import { motion } from "framer-motion";
import "./ServicesN.css";
import { FaStethoscope, FaHeartbeat, FaRunning, FaUserNurse, FaXRay, FaHandHoldingMedical } from "react-icons/fa";

const servicesN = [
  {
    icon: <FaStethoscope size={40} />,
    title: "Consulta Médica General",
    description: "Atención integral para el diagnóstico y seguimiento de tu salud."
  },
  {
    icon: <FaHeartbeat size={40} />,
    title: "Cardiología",
    description: "Evaluación y tratamiento especializado en enfermedades cardiovasculares."
  },
  {
    icon: <FaRunning size={40} />,
    title: "Rehabilitación Deportiva",
    description: "Programas personalizados para recuperación y mejora del rendimiento físico."
  },
  {
    icon: <FaUserNurse size={40} />,
    title: "Enfermería",
    description: "Cuidados clínicos profesionales para pacientes en todas las etapas."
  },
  {
    icon: <FaXRay size={40} />,
    title: "Imágenes Diagnósticas",
    description: "Exámenes de rayos X, ecografías y otros estudios para diagnóstico preciso."
  },
  {
    icon: <FaHandHoldingMedical size={40} />,
    title: "Terapias Especializadas",
    description: "Fisioterapia, kinesiología y programas de rehabilitación integral."
  }
];

export default function ServicesN() {
  return (
    <section className="servicesN">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Nuestros Servicios Clínicos
      </motion.h2>

      <div className="servicesN-grid">
        {servicesN.map((service, index) => (
          <motion.div
            key={index}
            className="serviceN-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.15
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="serviceN-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
