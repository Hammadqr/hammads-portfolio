// import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  {
    title: "Project 1",
    description: "A responsive web application using React and Node.js",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project 2",
    description: "E-commerce platform with payment gateway integration",
    tech: ["Next.js", "Stripe", "Firebase"],
  },
  {
    title: "Project 3",
    description: "Machine learning model deployment with Flask",
    tech: ["Python", "Flask", "TensorFlow"],
  },
];

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from the URL
  const project = projects[parseInt(id)]; // Find the project by ID

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl text-gray-400 mb-8">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-800 rounded-full text-lg"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-400">More details about the project can go here...</p>
      </div>
    </div>
  );
};

export default ProjectDetails;