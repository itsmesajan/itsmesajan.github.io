import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react'

const projects = [
  {
    id: 1,
    title: "10 JavaScript Projects",
    description:
      "10 mini apps using vanilla JavaScript like ToDo App, Weather App, Notes, and Drawing Tool.",
    image: "/projects/project_1.png",
    tags: ["JavaScript", "HTML", "CSS", "DOM"],
    demoUrl: "https://www.maharjan-sajan.com.np/10-Js-Based-Project/",
    githubURL: "https://github.com/itsmesajan/10-Js-Based-Project",
  },
  {
    id: 2,
    title: "Event Management System",
    description: "Manage event bookings with admin panel using PHP and MySQL.",
    image: "/projects/project_2.png",
    tags: ["PHP", "MySQL", "JavaScript", "CRUD"],
    demoUrl: "https://ems.maharjan-sajan.com.np/",
    githubURL: "https://github.com/itsmesajan/ems",
  },
  {
    id: 3,
    title: "Jewelry E-commerce Site",
    description:
      "Responsive store for showcasing and managing jewelry products.",
    image: "/projects/project_3.png",
    tags: ["PHP", "MySQL", "HTML"],
    demoUrl: "https://preamratnajyasa.maharjan-sajan.com.np/",
    githubURL: "https://github.com/itsmesajan/preamratnajyasa",
  },
  {
    id: 4,
    title: "Amazon Clone",
    description:
      "React app with Firebase auth, Stripe payments, and cart/order features.",
    image: "/projects/project_4.png",
    tags: ["React", "Tailwind", "Firebase", "Stripe"],
    demoUrl: "https://www.maharjan-sajan.com.np/amazon_clone_react/",
    githubURL: "https://github.com/itsmesajan/amazon_clone_react",
  },
];

const ProjectsSection = ()=> {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection
