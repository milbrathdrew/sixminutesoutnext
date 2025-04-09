import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Six Minutes Out PR and our mission to help consumer product brands succeed.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Six Minutes Out PR
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Your partner in strategic PR and affiliate management
          </p>
        </div>

        {/* Mission Section */}
        <section className="mt-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-500">
                At Six Minutes Out PR, we're dedicated to helping consumer product brands
                establish a strong market presence through strategic public relations
                and effective affiliate program management. We believe that every
                product has a story worth telling, and we're here to help you tell it.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Approach</h2>
              <p className="mt-4 text-lg text-gray-500">
                We take a comprehensive approach to brand growth, combining traditional
                PR strategies with modern affiliate marketing techniques. Our team
                works closely with you to develop customized solutions that drive
                real results for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Values</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
              <p className="mt-2 text-gray-500">
                We strive for excellence in everything we do, delivering high-quality
                results that exceed expectations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="mt-2 text-gray-500">
                We embrace innovative approaches and stay ahead of industry trends
                to provide cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">Partnership</h3>
              <p className="mt-2 text-gray-500">
                We build strong, lasting partnerships with our clients, working
                together to achieve shared success.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Team</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Jane Smith</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">John Doe</h3>
              <p className="text-gray-500">PR Director</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-gray-500">Affiliate Manager</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 