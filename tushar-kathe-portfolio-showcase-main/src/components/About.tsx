
import React from 'react';
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn("py-16 md:py-24 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-2 animate-slide-up">
            <Card className="h-full shadow-md hover-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-tech-400">Background</h3>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Hello, my name is Tushar Kathe, and I'm currently pursuing a B.Tech in Information Technology at Parul University. I have a strong interest in areas like Artificial Intelligence, Machine Learning, and Software Development. I am actively involved in projects such as AI Enhanced Fiction Writer and FuelFlex, as well as the Medical Diagnosis System. I'm also a member of the IoT Club at my university.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  I have completed an internship in Data Science and AI/ML at Ybi Foundation, which gave me valuable hands-on experience with real-world applications. I analyzed datasets, built ML models, and deployed AI solutions to enhance decision-making and predictive accuracy.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Coming from a middle-class farming family, I've learned the value of dedication and perseverance from my parents—my father is a farmer, and my mother helps both at home and in the fields. With a 7.5 CGPA, I stay committed to continuous learning and look forward to contributing meaningfully to the tech industry.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Card className="h-full shadow-md hover-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-tech-400">Education</h3>
                <div className="mb-4">
                  <p className="font-medium">Bachelor of Technology in Information Technology</p>
                  <p className="text-gray-600">Parul University, Vadodara</p>
                  <p className="text-sm text-gray-500">2022 - 2026</p>
                  <p className="text-sm text-gray-500 mt-1">CGPA: 7.5/10</p>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-tech-400">Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>HTML, CSS, JavaScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Data Structures</li>
                  <li>Power BI</li>
                  <li>SQL</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 mt-4 text-tech-400">Languages</h3>
                <p className="text-gray-700">
                  Native: English, Hindi, Marathi<br/>
                  Intermediate: German
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
