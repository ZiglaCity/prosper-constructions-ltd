import { Building2, Users, Award, Phone, Mail, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Prosper Constructions Limited
                </h1>
                <p className="text-sm text-gray-600">Building Ghana's Future</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-orange-600 font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-orange-600">
                About
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-orange-600"
              >
                Services
              </a>
              <a
                href="/projects"
                className="text-gray-700 hover:text-orange-600"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-orange-600"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2019/06/13/24094-344765308_large.mp4"
            type="video/mp4"
          />
          {/* Fallback gradient if video doesn't load */}
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Building Excellence in Ghana
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner for residential, commercial, and
              infrastructure construction projects across Ghana
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

        {/* Fallback background for when video is loading or fails */}
        <style jsx>{`
          video:not([src]) + div {
            background: linear-gradient(to right, #ea580c, #dc2626);
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Prosper Constructions?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With years of experience in the Ghanaian construction industry, we
              deliver quality projects on time and within budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Quality Construction
              </h4>
              <p className="text-gray-600">
                We use premium materials and proven construction methods to
                ensure lasting quality in every project
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Expert Team</h4>
              <p className="text-gray-600">
                Our skilled professionals bring decades of combined experience
                to every construction project
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Proven Track Record
              </h4>
              <p className="text-gray-600">
                Successfully completed hundreds of projects across Ghana with
                satisfied clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Construction Services
            </h3>
            <p className="text-lg text-gray-600">
              From residential homes to commercial buildings, we handle all
              types of construction projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                Residential Construction
              </h4>
              <p className="text-gray-600 mb-4">
                Custom homes, apartments, and residential complexes built to
                your specifications
              </p>
              <a
                href="/services"
                className="text-orange-600 font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                Commercial Buildings
              </h4>
              <p className="text-gray-600 mb-4">
                Office buildings, retail spaces, warehouses, and industrial
                facilities
              </p>
              <a
                href="/services"
                className="text-orange-600 font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                Infrastructure Projects
              </h4>
              <p className="text-gray-600 mb-4">
                Roads, bridges, drainage systems, and other infrastructure
                development
              </p>
              <a
                href="/services"
                className="text-orange-600 font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Construction Project?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's build
            something amazing together.
          </p>
          <a
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-orange-600" />
                <span className="text-lg font-semibold">
                  Prosper Constructions Limited
                </span>
              </div>
              <p className="text-gray-400">
                Building Ghana's future with quality construction services and
                exceptional craftsmanship.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="/about"
                  className="block text-gray-400 hover:text-white"
                >
                  About Us
                </a>
                <a
                  href="/services"
                  className="block text-gray-400 hover:text-white"
                >
                  Services
                </a>
                <a
                  href="/projects"
                  className="block text-gray-400 hover:text-white"
                >
                  Projects
                </a>
                <a
                  href="/contact"
                  className="block text-gray-400 hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-400">+233 XX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-400">
                    info@prosperconstructionsgh.com
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-400">Accra, Ghana</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Prosper Constructions Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
