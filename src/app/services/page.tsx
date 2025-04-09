import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive PR and affiliate management services for consumer product brands.',
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive solutions to elevate your brand
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {/* Media Relations Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">Media Relations</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Press Outreach</h3>
                <ul className="mt-4 space-y-4 text-gray-500">
                  <li>Strategic media targeting and pitching</li>
                  <li>Press release development and distribution</li>
                  <li>Media relationship building</li>
                  <li>Editorial calendar planning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Media Coverage</h3>
                <ul className="mt-4 space-y-4 text-gray-500">
                  <li>Feature story development</li>
                  <li>Product placement opportunities</li>
                  <li>Industry event participation</li>
                  <li>Media monitoring and reporting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Affiliate Management Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">Affiliate Management</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Program Development</h3>
                <ul className="mt-4 space-y-4 text-gray-500">
                  <li>Affiliate program strategy</li>
                  <li>Commission structure design</li>
                  <li>Program terms and conditions</li>
                  <li>Affiliate recruitment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Program Management</h3>
                <ul className="mt-4 space-y-4 text-gray-500">
                  <li>Affiliate relationship management</li>
                  <li>Performance tracking and optimization</li>
                  <li>Commission processing</li>
                  <li>Program growth strategies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Content Strategy Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">Content Strategy</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Content Development</h3>
                <ul className="mt-4 space-y-4 text-gray-500">
                  <li>Brand storytelling</li>
                  <li>Product messaging</li>
                  <li>Content calendar planning</li>
                  <li>Multi-channel content strategy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Content Distribution</h3>
                <ul className="mt-4 space-y-4 text-gray-500">
                  <li>Social media strategy</li>
                  <li>Email marketing content</li>
                  <li>Blog and article writing</li>
                  <li>Content performance tracking</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 