import { Cloud, Database, Brain, Code, Server, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'AWS Solutions Architecture',
      description: 'Design and implement scalable cloud infrastructure using AWS services.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Azure Cloud Services',
      description: 'Microsoft Azure cloud solutions and infrastructure management.',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning',
      description: 'Development and deployment of ML models and AI solutions.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Cloud Development',
      description: 'Cloud-native application development and serverless architecture.',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'DevOps',
      description: 'CI/CD pipeline implementation and infrastructure automation.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cloud Security',
      description: 'Implementation of cloud security best practices and compliance.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          My <span className="text-emerald-600">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-900 border border-emerald-600/20 hover:border-emerald-600 transition-colors group"
            >
              <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}