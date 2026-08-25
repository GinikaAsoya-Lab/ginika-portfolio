export default function About(): React.JSX.Element {
  const techStack = [
    "Python", 
    "SQL", 
    "Power BI", 
    "Microsoft Excel", 
    "Pandas", 
    "Scikit-Learn", 
    "Power Automate", 
    "Data Architecture",
    "Kappture EPOS"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl max-w-4xl mx-auto leading-relaxed text-white">
            I&apos;m currently looking to join a <span className="text-purple-400 font-semibold">data-driven team</span><br/> 
            <span className="text-lg text-white/70 mt-4 block font-normal tracking-wide">
              that values turning operational chaos into strategic clarity and measurable performance.
            </span>
          </h2>
        </div>
        
        {/* Sleek Coded Tech Stack Grid */}
        <div className="max-w-4xl mx-auto mt-12 relative">
          {/* Subtle background glow effect */}
          <div className="absolute inset-0 bg-purple-600/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div 
                key={tech} 
                className="px-6 py-3 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-full text-white/90 font-medium tracking-wide hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-300 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}