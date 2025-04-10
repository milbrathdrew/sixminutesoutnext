import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Six Minutes Out PR to discuss your PR and affiliate management needs.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-light">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading text-dark sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-medium-dark max-w-2xl mx-auto">
            Have questions about our services? Get in touch with Charlene directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-light-gray p-8 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 relative overflow-hidden rounded-full shrink-0">
              <Image 
                src="/six_minutes_out_logo_black_fill.png" 
                alt="Charlene Hanna"
                fill
                style={{ objectFit: 'contain' }}
                className="bg-mint-light p-3 rounded-full"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-heading text-dark mb-4">Charlene Hanna</h2>
              <p className="text-medium-dark mb-6">
                Founder & Lead Strategist at Six Minutes Out PR
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-heading text-dark">Office Location</h3>
                  <p className="text-medium-dark">
                    Denver, Colorado
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading text-dark">Email</h3>
                  <a 
                    href="mailto:charlene@sixminutesout.com" 
                    className="text-green-medium hover:text-green-dark hover:underline transition-colors"
                  >
                    charlene@sixminutesout.com
                  </a>
                </div>
                
                <div className="pt-4">
                  <p className="text-medium-dark">
                    For inquiries about PR services, affiliate program management, or partnership opportunities, 
                    please reach out directly via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 