import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/ourovance-logo.svg"
                alt="Ourovance"
                width={160}
                height={32}
                priority
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Services
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-teal-600/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                The Future of Health
              </span>
              <br />
              <span className="text-slate-700">is Coming</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-600 mb-12 leading-relaxed">
              Pioneering innovative health technology solutions that transform wellness and healthcare for a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Discover Innovation
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Placeholder */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              About <span className="text-blue-600">Ourovance</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-12">
              We are at the forefront of health technology innovation, developing cutting-edge solutions that bridge the gap between healthcare and technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Innovation</h3>
                <p className="text-slate-600">Cutting-edge technology solutions for modern healthcare challenges.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Wellness</h3>
                <p className="text-slate-600">Comprehensive wellness solutions for better health outcomes.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Future</h3>
                <p className="text-slate-600">Building tomorrow&apos;s healthcare infrastructure today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Placeholder */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              Comprehensive health technology services designed to transform the healthcare landscape.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
              <p className="text-slate-500 text-lg">Services coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-12">
              Ready to explore the future of health technology? Let&apos;s start a conversation.
            </p>
            <div className="inline-block p-8 bg-slate-50 rounded-2xl">
              <p className="text-slate-500 text-lg">Contact information coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image
              src="/ourovance-logo.svg"
              alt="Ourovance"
              width={160}
              height={32}
              className="h-8 w-auto mx-auto mb-4 brightness-0 invert"
            />
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Ourovance. The Future of Health is Coming.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
