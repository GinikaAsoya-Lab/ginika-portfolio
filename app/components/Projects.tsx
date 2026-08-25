import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string; 
  link?: string;
  techStack: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Staffing Demand ML Forecast",
    description: "Engineered a Random Forest Regressor machine learning model to replace human estimation with precise payroll allocation. Reduced the Mean Absolute Error (MAE) of staffing predictions from a baseline of 20.89 down to just 2.59 staff members per event.",
    techStack: "Python • Pandas • Scikit-Learn • Machine Learning",
    image: "/projects/project-1.png",
    link: "#", // Placeholder link
  },
  {
    id: 2,
    title: "Stock Variance & Data Pipeline",
    description: "Developed a comprehensive Power BI business intelligence dashboard tracking inventory flows and shrinkage. Engineered the underlying architecture with a custom Python script and an SQLite database to simulate and manage complex operational data.",
    techStack: "Power BI • Python • SQLite • DAX",
    image: "/projects/project-2.png",
    link: "#", // Placeholder link
  },
  {
    id: 3,
    title: "Automated EPOS Resolution Engine",
    description: "Built a digital feedback and issue resolution pipeline utilizing Microsoft Forms branching logic and Power Automate to optimize cash office communications and streamline daily operational reporting alongside Kappture systems.",
    techStack: "Excel • Power Automate • Microsoft Forms",
    image: "/projects/project-3.png",
    link: "#", // Placeholder link
  },
  {
    id: 4,
    title: "sims4mgr – Python Application",
    description: "Developed a full-scale Python application with a robust modular architecture, featuring a CLI and web components. Engineered to systematically manage, verify, and automate the tracking of large-scale digital assets and directory paths.",
    techStack: "Python • Application Architecture • CLI • Asset Management",
    image: "/projects/project-4.png",
    link: "#", // Placeholder link
  },
  {
    id: 5,
    title: "Race-Day Performance & Forecasting Engine",
    description: "Single-handedly engineered a fully automated Excel architecture tracking staffing assignments, real-time sales milestones, and inventory consumption across 15 concurrent race-day events. Built centralized, dynamic dashboards that aggregate forecast variances and seamlessly map data between Kappture EPOS and Trails systems without requiring manual formula adjustments.",
    techStack: "Advanced Excel • Financial Forecasting • Dynamic Dashboards • System Mapping",
    link: "#", // Placeholder link
  }
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`relative grid grid-cols-1 ${
                project.image ? "lg:grid-cols-2 gap-8 lg:gap-12" : "gap-4"
              } items-center ${isEven && project.image ? "lg:grid-flow-dense" : ""}`}>
                
                {/* Text Content */}
                <div className={`${isEven && project.image ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-sm lg:text-base mb-2 font-bold tracking-widest uppercase">
                    {project.techStack}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  
                  {/* Description Card */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                      project.image 
                        ? (isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]")
                        : "w-full lg:w-3/4"
                    }`}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* View Code Button */}
                  {project.link && (
                    <div className="relative z-10">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-md"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View Source Architecture
                      </a>
                    </div>
                  )}

                </div>

                {/* Image Content */}
                {project.image && (
                  <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                      <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-900 border border-white/5">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}