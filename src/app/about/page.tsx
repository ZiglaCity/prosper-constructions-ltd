export const metadata = {
  title: "About Us | Prosper Constructions Limited",
  description:
    "Learn about Prosper Constructions Limited — our mission, vision, and commitment to building Ghana’s future with excellence and integrity.",
  keywords:
    "about Prosper Constructions, construction company Ghana, Ghana builders, construction excellence, Prosper Limited",
  openGraph: {
    title: "About Prosper Constructions Limited",
    description:
      "Prosper Constructions Limited is committed to building Ghana’s future through sustainable and quality construction solutions.",
    url: "https://prosperconstructions.com/about",
    type: "article",
    images: ["/prosper-about-og.jpg"],
  },
};

import { Building2, Users, Award, Target, Eye, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* TODO: later update this with the home hero... so the video plays in the background  */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Prosper Constructions
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Leading Ghana&apos;s construction industry with integrity,
              innovation, and excellence since our founding
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
                Founded with a vision to transform Ghana&apos;s construction
                landscape, Prosper Constructions Limited has grown from a small
                local contractor to one of the most trusted construction
                companies in the country.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple commitment: to deliver
                exceptional construction services that exceed our clients&apos;
                expectations while contributing to Ghana&apos;s infrastructure
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
                To be Ghana&apos;s leading construction company, recognized for
                innovation, sustainability, and our contribution to the
                nation&apos;s infrastructure development and economic growth.
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
                    Deep understanding of Ghana&apos;s construction regulations,
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
            Let&apos;s discuss your construction project and how we can bring
            your vision to life.
          </p>
          <a
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
