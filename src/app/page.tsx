import Hero from "@@/components/Hero";

export const metadata = {
  title: "Home | Prosper Constructions Limited",
  description:
    "Welcome to Prosper Constructions Limited – delivering high-quality construction and engineering solutions with trust and innovation.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Prosper?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          With decades of combined experience, we bring precision, innovation,
          and integrity to every project we undertake — from residential builds
          to large-scale infrastructure.
        </p>
      </section>
    </>
  );
}
