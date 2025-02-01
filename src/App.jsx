import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChatBot from './components/chatbot';
import Navbar from './components/navbar';
import myimage from './assets/linkedin.jpeg';
import Candle from './components/candle';
import ProjectDetails from './components/projectDetails';

const App = () => {
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

  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "MongoDB",
    "Git",
    "AWS",
  ];

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-gray-100">
        <Navbar />
        
        {/* Introduction Section */}
        <section id="intro" className="px-10 py-20 lg:py-32 max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img 
              src={myimage} 
              alt="Profile" 
              className="w-48 h-48 rounded-full object-cover"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4">Hi, I'm Hammad Qaiser</h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                A passionate full-stack developer with expertise in building web applications 
                using modern technologies. Focused on creating user-friendly and efficient 
                solutions for real-world problems.
              </p>
            </div>
          </div>
          <Candle /> {/* Candle with glow effect */}
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-10 py-20 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-6 py-2 bg-gray-700 rounded-full text-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-10 py-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={`/projects/${index}`} // Use project index as the route parameter
                state={{ project }} // Pass project data via state
                className="bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Routes */}
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>

        <ChatBot />
      </div>
    </Router>
  );
};

export default App;