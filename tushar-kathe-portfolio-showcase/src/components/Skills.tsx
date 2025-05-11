
import React from 'react';
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface SkillProps {
  name: string;
  level: number;
  color: string;
}

interface SkillsProps {
  className?: string;
}

const skillsData: SkillProps[] = [
  { name: "Python", level: 85, color: "bg-blue-500" },
  { name: "Machine Learning", level: 80, color: "bg-green-500" },
  { name: "Data Science", level: 75, color: "bg-purple-500" },
  { name: "HTML/CSS", level: 70, color: "bg-orange-500" },
  { name: "JavaScript", level: 65, color: "bg-yellow-500" },
  { name: "SQL", level: 75, color: "bg-red-500" },
  { name: "AI Development", level: 80, color: "bg-indigo-500" },
  { name: "React.js", level: 60, color: "bg-sky-500" },
];

const SkillBar: React.FC<SkillProps> = ({ name, level, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-sm">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full">
        <div 
          className={`h-full rounded-full ${color}`} 
          style={{ width: `${level}%`, transition: "width 1s ease-in-out" }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC<SkillsProps> = ({ className }) => {
  const technicalSkills = skillsData.slice(0, 4);
  const otherSkills = skillsData.slice(4);

  return (
    <section id="skills" className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <Card className="h-full shadow-md hover-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-tech-400">Technical Skills</h3>
                {technicalSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    color={skill.color} 
                  />
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Card className="h-full shadow-md hover-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-tech-400">Development Skills</h3>
                {otherSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    color={skill.color} 
                  />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center animate-slide-up" style={{animationDelay: "0.3s"}}>
          <Card className="shadow-md hover-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-tech-400">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Problem Solving", "Team Collaboration", "Critical Thinking", "Time Management", 
                  "Communication", "Adaptability", "Creativity", "Leadership"].map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-tech-100 text-tech-400 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
