const projects = [
  { title: "Digital Twin Framework", desc: "Entwicklung einer skalierbaren BIM-KI-Architektur." },
  { title: "Bauprozess Automatisierung", desc: "Optimierung durch datengetriebene Prozessanalysen." },
];

export default function Projects() {
  return (
    <section id="projects" className="section grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <div key={i} className="bg-navy-800 rounded-xl p-6 shadow-md hover:shadow-gold transition-all duration-300 hover:scale-[1.02]">
          <h3 className="text-gold-400 font-medium text-lg mb-2">{p.title}</h3>
          <p className="text-neutral-200 text-sm leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </section>
  );
}
