import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Faq.css";

const faqs = [
  {
    question: "¿Necesito una orden médica para atenderme?",
    answer:
      "En la mayoría de los servicios no es obligatoria, pero recomendamos traer cualquier derivación médica si la tienes para una atención más personalizada."
  },
  {
    question: "¿Atienden con convenios o seguros de salud?",
    answer:
      "Sí, trabajamos con diversos convenios y seguros. Te recomendamos consultar previamente para confirmar la cobertura específica."
  },
  {
    question: "¿Cuánto dura una sesión de rehabilitación?",
    answer:
      "La duración promedio es de 45 a 60 minutos, dependiendo del tipo de tratamiento y de la condición del paciente."
  },
  {
    question: "¿Puedo agendar mi cita online?",
    answer:
      "Sí, contamos con sistema de reservas online a través de nuestra página web o aplicación móvil."
  },
  {
    question: "¿Atienden a niños y adultos mayores?",
    answer:
      "Por supuesto, tenemos especialistas en atención pediátrica y geriátrica."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Preguntas Frecuentes
      </motion.h2>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
