// components/FinalCTASection.tsx
export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Start Your Digital Transformation Today
        </h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Join hundreds of hotels that have increased revenue, improved guest satisfaction, 
          and streamlined operations with Fikira1.
        </p>
        <button className="bg-secondary text-primary px-12 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors">
          Schedule a Free Demo
        </button>
      </div>
    </section>
  );
}