import { Building2, Home, Building, Construction, Phone, Mail, MapPin, Calendar, MapPin as Location, Users } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Luxury Residential Estate - East Legon",
      category: "Residential",
      description: "A premium 20-unit residential complex featuring modern amenities and sustainable design.",
      location: "East Legon, Accra",
      year: "2024",
      status: "Completed",
      image: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Corporate Office Complex",
      category: "Commercial",
      description: "5-story modern office building with state-of-the-art facilities for a leading tech company.",
      location: "Airport City, Accra",
      year: "2023",
      status: "Completed",
      image: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      id: 3,
      title: "Tema-Aflao Highway Bridge",
      category: "Infrastructure",
      description: "Major bridge construction project improving transportation connectivity in the region.",
      location: "Greater Accra Region",
      year: "2023",
      status: "Completed",
      image: "bg-gradient-to-br from-orange-400 to-orange-600"
    },
    {
      id: 4,
      title: "Affordable Housing Project",
      category: "Residential",
      description: "100-unit affordable housing development providing quality homes for middle-income families.",
      location: "Tema, Greater Accra",
      year: "2024",
      status: "In Progress",
      image: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      id: 5,
      title: "Shopping Mall & Retail Center",
      category: "Commercial",
      description: "Large-scale retail development with modern shopping facilities and entertainment areas.",
      location: "Kumasi, Ashanti Region",
      year: "2024",
      status: "In Progress",
      image: "bg-gradient-to-br from-red-400 to-red-600"
    },
    {
      id: 6,
      title: "Water Treatment Facility",
      category: "Infrastructure",
      description: "Modern water treatment plant serving over 50,000 residents in the northern region.",
      location: "Tamale, Northern Region",
      year: "2023",
      status: "Completed",
      image: "bg-gradient-to-br from-teal-400 to-teal-600"
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Residential':
        return <Home className="h-5 w-5" />;
      case 'Commercial':
        return <Building className="h-5 w-5" />;
      case 'Infrastructure':
        return <Construction className="h-5 w-5" />;
      default:
        return <Building2 className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status) => {
    return status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Prosper Constructions Limited</h1>
                <p className="text-sm text-gray-600">Building Ghana's Future</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-orange-600">Home</a>
              <a href="/about" className="text-gray-700 hover:text-orange-600">About</a>
              <a href="/services" className="text-gray-700 hover:text-orange-600">Services</a>
              <a href="/projects" className="text-orange-600 font-medium">Projects</a>
              <a href="/contact" className="text-gray-700 hover:text-orange-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Showcasing our commitment to excellence through completed and ongoing construction projects across Ghana
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">10</div>
              <div className="text-gray-600">Regions Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore some of our most notable construction projects that demonstrate our expertise and commitment to quality
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <Building2 className="h-16 w-16 mx-auto mb-2 opacity-80" />
                    <p className="text-sm opacity-80">Project Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 text-orange-600">
                      {getCategoryIcon(project.category)}
                      <span className="text-sm font-medium">{project.category}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Location className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Project Categories</h3>
            <p className="text-lg text-gray-600">
              We specialize in diverse construction projects across multiple sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Residential Projects</h4>
              <p className="text-gray-600 mb-4">
                Custom homes, apartments, condos, and residential complexes designed for modern living
              </p>
              <div className="text-sm text-gray-500">
                <p>• Single-family homes</p>
                <p>• Apartment complexes</p>
                <p>• Luxury estates</p>
                <p>• Affordable housing</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Commercial Projects</h4>
              <p className="text-gray-600 mb-4">
                Office buildings, retail spaces, and industrial facilities that drive business success
              </p>
              <div className="text-sm text-gray-500">
                <p>• Office complexes</p>
                <p>• Shopping centers</p>
                <p>• Warehouses</p>
                <p>• Hotels & hospitality</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Construction className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Infrastructure Projects</h4>
              <p className="text-gray-600 mb-4">
                Large-scale infrastructure that connects communities and supports economic development
              </p>
              <div className="text-sm text-gray-500">
                <p>• Roads & highways</p>
                <p>• Bridges & overpasses</p>
                <p>• Water treatment plants</p>
                <p>• Public facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-lg text-gray-600">
              Hear from satisfied clients about their experience working with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h5 className="font-semibold">Kwame Asante</h5>
                  <p className="text-sm text-gray-600">Homeowner, East Legon</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Prosper Constructions delivered our dream home exactly as promised. The quality of work and attention to detail exceeded our expectations."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h5 className="font-semibold">Akosua Mensah</h5>
                  <p className="text-sm text-gray-600">Business Owner, Kumasi</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Professional, reliable, and delivered on time. Our new office building has transformed our business operations completely."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h5 className="font-semibold">John Osei</h5>
                  <p className="text-sm text-gray-600">Project Manager, Government</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Excellent project management and quality construction. The infrastructure project was completed ahead of schedule and within budget."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Next Project?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and let us bring your construction vision to life with quality and excellence.
          </p>
          <a href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Start Your Project
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
                <span className="text-lg font-semibold">Prosper Constructions Limited</span>
              </div>
              <p className="text-gray-400">
                Building Ghana's future with quality construction services and exceptional craftsmanship.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/about" className="block text-gray-400 hover:text-white">About Us</a>
                <a href="/services" className="block text-gray-400 hover:text-white">Services</a>
                <a href="/projects" className="block text-gray-400 hover:text-white">Projects</a>
                <a href="/contact" className="block text-gray-400 hover:text-white">Contact</a>
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
                  <span className="text-gray-400">info@prosperconstructionsgh.com</span>
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