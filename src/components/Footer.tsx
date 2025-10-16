import { Building2, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
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
              <a href="/about" className="block text-gray-400 hover:text-white">
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
  );
}
