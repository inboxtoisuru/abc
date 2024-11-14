import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-black flex items-center">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hey, I'm <span className="text-emerald-600">Isuru Deshal</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-500 mb-6">
              Cloud Computing Professional
            </p>
            <p className="text-gray-300 mb-8 max-w-2xl">
              AWS Certified Solutions Architect and Azure Fundamentals certified professional
              specializing in cloud architecture, machine learning, and AI solutions.
            </p>
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <a href="https://github.com/IsuruDeshal" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors">
                <Github className="w-6 h-6 text-white" />
              </a>
              <a href="https://linkedin.com/isurudeshal1" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href="inboxtoisuru@gmail.com"
                className="p-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
            <button
            onClick={() => window.location.href = "https://github.com/IsuruDeshal"}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              Contact Me
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://i.postimg.cc/8cwzY72q/pixelcut-export.jpg"
              alt="Cloud Computing"
              className="rounded-lg shadow-2xl shadow-emerald-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}