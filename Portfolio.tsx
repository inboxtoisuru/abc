import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'AWS-based infrastructure automation using Terraform and CloudFormation',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&q=80&w=2070',
      tags: ['AWS', 'Terraform', 'CloudFormation'],
      github: 'https://github.com/IsuruDeshal',
      demo: 'https://github.com/IsuruDeshal',
    },
    {
      title: 'ML Model Deployment Platform',
      description: 'Scalable platform for deploying machine learning models on Azure',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&q=80&w=2070',
      tags: ['Azure', 'ML', 'Python'],
      github: 'https://github.com/IsuruDeshal',
      demo: 'https://github.com/IsuruDeshal',
    },
    {
      title: 'Serverless Analytics Pipeline',
      description: 'Real-time data analytics using AWS Lambda and Kinesis',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&q=80&w=2070',
      tags: ['AWS', 'Lambda', 'Kinesis'],
      github: 'https://github.com/IsuruDeshal',
      demo: 'https://github.com/IsuruDeshal',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          My <span className="text-emerald-600">Portfolio</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-emerald-600/20 text-emerald-500 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}