import {
  Building2,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Target,
  Eye,
  Heart,
} from "lucide-react";

export default function AboutPage() {
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
              <a href="/about" className="text-orange-600 font-medium">
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
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Prosper Constructions
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Leading Ghana's construction industry with integrity, innovation,
              and excellence since our founding
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to transform Ghana's construction
                landscape, Prosper Constructions Limited has grown from a small
                local contractor to one of the most trusted construction
                companies in the country.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple commitment: to deliver
                exceptional construction services that exceed our clients'
                expectations while contributing to Ghana's infrastructure
                development and economic growth.
              </p>
              <p className="text-lg text-gray-600">
                Today, we proudly serve clients across Ghana, from individual
                homeowners to large corporations and government agencies, always
                maintaining our core values of quality, integrity, and customer
                satisfaction.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Expert Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mission, vision, and values guide everything we do and shape
              our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">
                Our Mission
              </h4>
              <p className="text-gray-600">
                To deliver exceptional construction services that transform
                communities across Ghana while maintaining the highest standards
                of quality, safety, and environmental responsibility.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">
                Our Vision
              </h4>
              <p className="text-gray-600">
                To be Ghana's leading construction company, recognized for
                innovation, sustainability, and our contribution to the nation's
                infrastructure development and economic growth.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">
                Our Values
              </h4>
              <p className="text-gray-600">
                Integrity, Excellence, Innovation, Safety, Sustainability, and
                Community - these values drive our decisions and define our
                relationships with clients, partners, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our success is built on the expertise and dedication of our
              professional team members
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-400" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Engineering Team</h4>
              <p className="text-gray-600">
                Licensed engineers with expertise in structural, civil, and
                mechanical engineering
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building2 className="h-16 w-16 text-gray-400" />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Construction Specialists
              </h4>
              <p className="text-gray-600">
                Skilled craftsmen and project managers with decades of
                construction experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-16 w-16 text-gray-400" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality Assurance</h4>
              <p className="text-gray-600">
                Dedicated quality control professionals ensuring every project
                meets our high standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Prosper Constructions?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Building2 className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Local Expertise
                  </h4>
                  <p className="text-gray-600">
                    Deep understanding of Ghana's construction regulations,
                    climate, and local materials
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Quality Assurance
                  </h4>
                  <p className="text-gray-600">
                    Rigorous quality control processes and use of premium
                    materials
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Professional Team
                  </h4>
                  <p className="text-gray-600">
                    Licensed professionals and skilled craftsmen committed to
                    excellence
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    On-Time Delivery
                  </h4>
                  <p className="text-gray-600">
                    Proven track record of completing projects on schedule and
                    within budget
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Customer Focus</h4>
                  <p className="text-gray-600">
                    Dedicated to understanding and exceeding client expectations
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Eye className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Transparency</h4>
                  <p className="text-gray-600">
                    Clear communication and honest pricing throughout every
                    project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Work With Us?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your construction project and how we can bring your
            vision to life.
          </p>
          <a
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us Today
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
                  <span className="text-gray-400">+233 24 407 4435</span>
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
