// src/sections/HeroAbout.jsx
export default function HeroAbout() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/about-banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6rem 2rem',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h1>Quiénes Somos</h1>
      <p>Construimos soluciones con propósito y pasión.</p>
    </section>
  );
}
