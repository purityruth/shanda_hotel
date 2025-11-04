// components/CaseStudySection.tsx
export default function CaseStudySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Digital Transformation Success Story
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              See how The Grand Hotel transformed their operations and guest experience 
              with Fikira1's digital solutions.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Before Fikira1
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 35% direct booking rate</li>
                  <li>• Manual check-in processes</li>
                  <li>• Limited guest communication</li>
                  <li>• Inefficient operations</li>
                </ul>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  After Fikira1 Implementation
                </h3>
                <ul className="space-y-2">
                  <li>• 75% direct booking rate (+114% increase)</li>
                  <li>• Automated digital check-in</li>
                  <li>• Real-time guest messaging</li>
                  <li>• Streamlined operations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-200 h-80 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500">Before & After Dashboard Mockup</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-primary">Occupancy Rate</div>
              </div>
              <div className="bg-primary p-4 rounded-lg text-white">
                <div className="text-2xl font-bold">4.8/5</div>
                <div className="text-sm">Guest Satisfaction</div>
              </div>
              <div className="bg-accent p-4 rounded-lg text-white">
                <div className="text-2xl font-bold">60%</div>
                <div className="text-sm">Repeat Guests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}