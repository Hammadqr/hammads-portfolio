import React from 'react';
import { useParams } from 'react-router-dom';
import myimage1 from '../assets/podcast1.jpg';
import myimage2 from '../assets/podcast2.jpg';
import myimage3 from '../assets/podcast3.jpg';
const projects = [
  {
    title: "Project 1",
    description: "A responsive web application using React and Node.js",
    tech: ["React", "Node.js", "MongoDB"],
    repo: "https://github.com/yourusername/project1",
    images: [
      myimage1,
      myimage2,
      myimage3,
    ],
    detailedDescription: "A comprehensive solution for real-time data management featuring user authentication, REST API integration, and dashboard analytics. Developed using modern best practices with a focus on scalability and maintainability."
  },
  // Add similar structure for other projects
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[parseInt(id)];

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <a 
            href={project.repo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors"
          >
            View Repository
          </a>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {project.images.map((img, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl hover:shadow-2xl transition-all"
            >
              <img 
                src={img} 
                alt={`Project screenshot ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Technologies Used */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-full flex items-center"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {project.detailedDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Responsive user interface with dark mode</li>
                <li>JWT-based authentication system</li>
                <li>Real-time data updates using WebSocket</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Challenges & Solutions</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Optimized database queries reducing load time by 40%</li>
                <li>Implemented caching mechanism for frequent API calls</li>
                <li>Solved cross-browser compatibility issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;