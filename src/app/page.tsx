import Hero from "@@/components/Hero";
import { Building2, Users, Award } from "lucide-react";

export const metadata = {
  title: "Prosper Constructions Limited | Building Ghana's Future",
  description:
    "Prosper Constructions Limited delivers high-quality construction services across Ghana — from residential to commercial and infrastructure projects.",
  keywords:
    "construction company Ghana, building contractors, residential construction, commercial construction, Prosper Constructions Limited, Ghana builders",
  openGraph: {
    title: "Prosper Constructions Limited",
    description:
      "Trusted partner for residential, commercial, and infrastructure construction projects across Ghana.",
    url: "https://prosperconstructions.com/",
    type: "website",
    images: ["/prosper-og.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
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
    </>
  );
}
