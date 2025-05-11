
import React from 'react';
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

interface ProjectsProps {
  className?: string;
}

const projectsData: ProjectProps[] = [
  {
    title: "AI Enhanced Fiction Writer",
    description: "A tool that leverages machine learning models to assist creative writers in generating story ideas, character profiles, and plot developments.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "Machine Learning", "NLP", "Flask"],
    link: "#"
  },
  {
    title: "FuelFlex",
    description: "A mobile application that helps users track fuel consumption, find the nearest gas stations, and optimize fuel economy for their vehicles.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tags: ["React Native", "Google Maps API", "Firebase"],
    link: "#"
  },
  {
    title: "Data Science Dashboard",
    description: "An interactive dashboard created during my internship that visualizes complex data sets and provides actionable insights for business decisions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["Data Visualization", "Python", "Tableau", "SQL"],
    link: "#"
  }
];

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, tags, link }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover-card h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-tech-400">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-tech-100 text-tech-300 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {link && (
          <Button 
            variant="outline" 
            className="w-full border-tech-200 text-tech-300 hover:bg-tech-100"
          >
            <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
              View Project
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <section id="projects" className={cn("py-16 md:py-24 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <div 
              key={project.title} 
              className="animate-slide-up" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-slide-up" style={{animationDelay: "0.4s"}}>
          <p className="text-gray-600 mb-6">
            These are just a few examples of my work. I'm constantly learning and building new projects.
          </p>
          <Button className="bg-tech-200 hover:bg-tech-300 text-white">
            <a href="#contact">Let's work together</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
