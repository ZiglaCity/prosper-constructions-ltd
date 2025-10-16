import {
  Building2,
  Home,
  Building,
  Construction,
  Wrench,
  Hammer,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
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
              <a href="/" className="text-gray-700 hover:text-orange-600">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-orange-600">
                About
              </a>
              <a href="/services" className="text-orange-600 font-medium">
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
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Construction Services
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive construction solutions for residential, commercial,
              and infrastructure projects across Ghana
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What We Build
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From dream homes to commercial complexes, we deliver quality
              construction services tailored to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Residential Construction */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-orange-100 p-8 text-center">
                <Home className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900">
                  Residential Construction
                </h4>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Building beautiful, functional homes that families love. From
                  custom single-family homes to multi-unit residential
                  complexes.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">
                      Custom Home Design & Build
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Apartment Complexes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Townhouses & Condos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Home Renovations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Luxury Estates</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
                >
                  Get Quote
                </a>
              </div>
            </div>

            {/* Commercial Construction */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-orange-100 p-8 text-center">
                <Building className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900">
                  Commercial Buildings
                </h4>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Professional commercial spaces designed for business success.
                  From office buildings to retail centers and industrial
                  facilities.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Office Buildings</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">
                      Retail Centers & Malls
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">
                      Warehouses & Factories
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Hotels & Hospitality</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">
                      Educational Facilities
                    </span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
                >
                  Get Quote
                </a>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-orange-100 p-8 text-center">
                <Construction className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900">
                  Infrastructure Projects
                </h4>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Building the foundation for Ghana's growth. Large-scale
                  infrastructure projects that connect communities and drive
                  development.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Roads & Highways</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Bridges & Overpasses</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Drainage Systems</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">
                      Water Treatment Plants
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Public Facilities</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-lg text-gray-600">
              Complete construction solutions from planning to maintenance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Project Management</h4>
              <p className="text-gray-600 text-sm">
                End-to-end project coordination ensuring timely delivery and
                quality results
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Design & Planning</h4>
              <p className="text-gray-600 text-sm">
                Architectural design and engineering planning services for all
                project types
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">
                Renovation & Remodeling
              </h4>
              <p className="text-gray-600 text-sm">
                Transform existing spaces with modern upgrades and improvements
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Quality Inspection</h4>
              <p className="text-gray-600 text-sm">
                Comprehensive quality control and safety inspections throughout
                construction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Construction Process
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven approach that ensures quality results and client
              satisfaction from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold mb-3">
                Consultation & Planning
              </h4>
              <p className="text-gray-600">
                We meet with you to understand your vision, requirements, and
                budget to create a detailed project plan
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold mb-3">Design & Permits</h4>
              <p className="text-gray-600">
                Our team creates detailed designs and handles all necessary
                permits and regulatory approvals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold mb-3">Construction</h4>
              <p className="text-gray-600">
                Skilled craftsmen execute the project with regular quality
                checks and progress updates
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h4 className="text-lg font-semibold mb-3">
                Completion & Handover
              </h4>
              <p className="text-gray-600">
                Final inspections, cleanup, and project handover with ongoing
                support and warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Licensed & Insured
              </h4>
              <p className="text-gray-600">
                Fully licensed construction company with comprehensive insurance
                coverage for your peace of mind
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Local Materials
              </h4>
              <p className="text-gray-600">
                We source quality materials locally when possible, supporting
                Ghana's economy while ensuring durability
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Competitive Pricing
              </h4>
              <p className="text-gray-600">
                Fair, transparent pricing with detailed estimates and no hidden
                costs throughout your project
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Timely Delivery
              </h4>
              <p className="text-gray-600">
                Proven track record of completing projects on schedule without
                compromising on quality
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Quality Guarantee
              </h4>
              <p className="text-gray-600">
                We stand behind our work with comprehensive warranties and
                ongoing support after completion
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Safety First
              </h4>
              <p className="text-gray-600">
                Strict safety protocols and regular training ensure a safe work
                environment for everyone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your
            construction project.
          </p>
          <a
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Free Quote
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
