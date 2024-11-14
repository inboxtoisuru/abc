import { Award, BookOpen, Code2, Cpu } from 'lucide-react';

export default function About() {
  const certifications = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'AWS Solutions Architect',
      description: 'Certified AWS Solutions Architect with expertise in cloud infrastructure design',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Azure Fundamentals',
      description: 'Microsoft Azure Fundamentals certified professional',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Specialized in ML model development and deployment',
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Cloud Development',
      description: 'Expert in cloud-native application development',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          About <span className="text-emerald-600">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
            I’m Isuru Deshal, a dedicated cloud computing undergraduate student passionate about cloud architecture, DevOps, and scalable solutions. With hands-on experience in AWS, Azure, and containerization tools like Docker, I focus on creating efficient, secure, and reliable applications. I enjoy learning cutting-edge cloud technologies and applying them to real-world challenges. Feel free to explore my projects, certifications, and connect with me for collaboration!
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in cloud architecture, machine learning, and AI, I specialize in
              creating robust cloud solutions that drive innovation and business growth.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-emerald-600">3+</h4>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-emerald-600">50+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-emerald-600">20+</h4>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-emerald-600/20 hover:border-emerald-600 transition-all">
                <div className="text-emerald-600 mb-3">{cert.icon}</div>
                <h3 className="text-white font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}