
import React from 'react';
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

interface ResumeProps {
  className?: string;
}

const Resume: React.FC<ResumeProps> = ({ className }) => {
  return (
    <section id="resume" className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          My <span className="gradient-text">Resume</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-md hover-card animate-slide-up">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="mb-8 w-20 h-20 bg-tech-100 rounded-full flex items-center justify-center">
                <FileText className="h-10 w-10 text-tech-300" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center">My Professional Resume</h3>
              <p className="text-gray-600 mb-8 text-center max-w-md">
                Download my resume to learn more about my education, skills, experience, and projects.
              </p>
              
              <Button className="bg-tech-200 hover:bg-tech-300 text-white flex items-center gap-2">
                <a 
                  href="/lovable-uploads/69acf58f-24a7-495e-a7ca-e67b29378770.png" 
                  download="Tushar_Kathe_Resume.pdf"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              
              <p className="mt-4 text-sm text-gray-500">
                Last updated: May 2025
              </p>
            </CardContent>
          </Card>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Card className="shadow-md hover-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-tech-400">Work Experience</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium">Data Science & AI/ML Intern</h4>
                  <p className="text-gray-600">Ybi Foundation | ISO Certified, Vadodara</p>
                  <p className="text-sm text-gray-500">June 2024 - July 2024</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                    <li>Analyzed datasets, built ML models</li>
                    <li>Deployed AI solutions to enhance decision-making</li>
                    <li>Improved predictive accuracy through data analysis</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium">Career Objective</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Dynamic, results-oriented professional skilled in designing websites and web applications, optimizing web performance, 
                    and enhancing client satisfaction. Proven success in delivering projects that exceed expectations through innovative design, 
                    effective team leadership, and strong communication.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-tech-400">Education & Certifications</h3>
                
                <div className="mb-4">
                  <h4 className="font-medium">B.Tech, Information Technology</h4>
                  <p className="text-gray-600">Parul University, Vadodara</p>
                  <p className="text-sm text-gray-500">2022 - 2026</p>
                  <p className="text-sm text-gray-500">CGPA: 7.50/10</p>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 mt-4 text-tech-400">Certifications</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium text-sm">Power BI</h4>
                    <p className="text-xs text-gray-500">Parul University, Sep 2024</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm">Database & SQL</h4>
                    <p className="text-xs text-gray-500">Infosys | Springboard, Jun-Sep 2024</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm">Computer Networks & Internet Protocol</h4>
                    <p className="text-xs text-gray-500">NPTEL(IIT Kharagpur), Jan-Apr 2024</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm">Hackathon 1.0</h4>
                    <p className="text-xs text-gray-500">Parul University, Jul 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
