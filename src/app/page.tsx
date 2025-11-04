// app/page.tsx
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RoomsSection from '@/components/RoomsSection';
import BookingWidget from '@/components/BookingWidget';
import FacilitiesSection from '@/components/FacilitiesSection';
import CaseStudySection from '@/components/CaseStudySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <RoomsSection />
      <BookingWidget />
      <FacilitiesSection />
      <CaseStudySection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>
  );
}