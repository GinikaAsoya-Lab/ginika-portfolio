import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string; // Made optional!
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
  },
  {
    id: 2,
    title: "Stock Variance & Data Pipeline",
    description: "Developed a comprehensive Power BI business intelligence dashboard tracking inventory flows and shrinkage. Engineered the underlying architecture with a custom Python script and an SQLite database to simulate and manage complex operational data.",
    techStack: "Power BI • Python • SQLite • DAX",
    image: "/projects/project-2.png",
  },
  {
    id: 3,
    title: "Automated EPOS Resolution Engine",
    description: "Built a digital feedback and issue resolution pipeline utilizing Microsoft Forms branching logic and Power Automate to optimize cash office communications and streamline daily operational reporting alongside Kappture systems.",
    techStack: "Excel • Power Automate • Microsoft Forms",
    image: "/projects/project-3.png",
  },
  {
    id: 4,
    title: "sims4mgr – Python Application",
    description: "Developed a full-scale Python application with a robust modular architecture, featuring a CLI and web components. Engineered to systematically manage, verify, and automate the tracking of large-scale digital assets and directory paths.",
    techStack: "Python • Application Architecture • CLI • Asset Management",
    image: "/projects/project-4.png",
  },
  {
    id: 5,
    title: "Race-Day Performance & Forecasting Engine",
    description: "Single-handedly engineered a fully automated Excel architecture tracking staffing assignments, real-time sales milestones, and inventory consumption across 15 concurrent race-day events. Built centralized, dynamic dashboards that aggregate forecast variances and seamlessly map data between Kappture EPOS and Trails systems without requiring manual formula adjustments.",
    techStack: "Advanced Excel • Financial Forecasting • Dynamic Dashboards • System Mapping",
    // No image here! The layout will adapt automatically.
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
                </div>

                {/* Image Content - Only renders if an image exists */}
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