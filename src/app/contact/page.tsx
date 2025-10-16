"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // TODO: include node mailer for email sending...
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitMessage(
        "Thank you for your message! We will get back to you within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Ready to start your construction project? Get in touch with our
              team for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re here to help bring your construction vision to life.
              Contact us through any of the following methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Phone</h4>
              <p className="text-gray-600 mb-2">Call us directly</p>
              <p className="text-orange-600 font-medium">+233 24 407 4435</p>
              <p className="text-orange-600 font-medium">+233 59 493 5223</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Email</h4>
              <p className="text-gray-600 mb-2">Send us an email</p>
              <p className="text-orange-600 font-medium">
                info@prosperconstructionsgh.com
              </p>
              <p className="text-orange-600 font-medium">
                hello@prosperconstructionsgh.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Office Location</h4>
              <p className="text-gray-600 mb-2">Visit our office</p>
              <p className="text-gray-700">123 Construction Avenue</p>
              <p className="text-gray-700">Accra, Ghana</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Business Hours</h4>
              <p className="text-gray-600 mb-2">We&apos;re available</p>
              <p className="text-gray-700">Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Sat: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h3>
            <p className="text-lg text-gray-600">
              Fill out the form below and we&apos;ll get back to you within 24
              hours with a detailed response.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => handleInputChange(e)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">
                      Residential Construction
                    </option>
                    <option value="commercial">Commercial Building</option>
                    <option value="infrastructure">
                      Infrastructure Project
                    </option>
                    <option value="renovation">Renovation/Remodeling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-vertical"
                  placeholder="Please describe your project, including timeline, budget range, and any specific requirements..."
                />
              </div>

              {submitMessage && (
                <div
                  className={`p-4 rounded-lg ${
                    submitMessage.includes("Thank you")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our construction services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                How long does a typical construction project take?
              </h4>
              <p className="text-gray-600">
                Project timelines vary depending on size and complexity.
                Residential homes typically take 6-12 months, while commercial
                projects can take 12-24 months. We provide detailed timelines
                during the planning phase.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Do you provide free estimates?
              </h4>
              <p className="text-gray-600">
                Yes, we offer free initial consultations and estimates for all
                projects. Our team will visit your site, discuss your
                requirements, and provide a detailed quote within 5-7 business
                days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Are you licensed and insured?
              </h4>
              <p className="text-gray-600">
                Absolutely. Prosper Constructions Limited is fully licensed by
                the Ghana Institution of Construction and holds comprehensive
                insurance coverage for all our projects and workers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                What areas do you serve?
              </h4>
              <p className="text-gray-600">
                We serve all regions of Ghana, with our main office in Accra. We
                have successfully completed projects in Greater Accra, Ashanti,
                Central, Western, and Northern regions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Do you offer warranties on your work?
              </h4>
              <p className="text-gray-600">
                Yes, we provide comprehensive warranties on all our construction
                work. Structural work comes with a 10-year warranty, while
                finishes and fixtures have a 2-year warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Build Your Dream Project?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don&apos;t wait any longer. Contact us today and let&apos;s turn
            your construction vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+233244074435"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Call Now
            </a>
            <a
              href="mailto:info@prosperconstructionsgh.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-block"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
