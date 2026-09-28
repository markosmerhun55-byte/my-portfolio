import profile from '../assets/profile.jpg'
export default function Home() {
  return (
    <div className="min-h-screen bg-sky-500 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4">
        <img
          src={profile}
          alt="My profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-white mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Merhun Markos Mache</h1>
        <p className="text-xl text-gray-100">Frontend Developer</p>
        <p className="mt-4 max-w-md text-center text-gray-200">
          I build modern web applications using React and modern tools.
          Passionate about clean code and great user experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {['React', 'JavaScript', 'CSS', 'Tailwind', 'Vite', 'Git'].map((skill) => (
            <span key={skill} className="bg-white/20 px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-200 text-sm">
              A short description of what this project does.
            </p>
            <a href="#" className="text-sky-200 underline mt-3 inline-block text-sm">
              View Project →
            </a>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-200 text-sm">
              Another project description goes here.
            </p>
            <a href="#" className="text-sky-200 underline mt-3 inline-block text-sm">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-200 mb-6">Want to work together? Reach out!</p>
        <div className="flex justify-center gap-4">
          <a href="markosmerhun55@email.com" className="bg-white text-sky-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Email Me
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="bg-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
            GitHub
          </a>
        </div>
      </section>
    </div>
  )
}   