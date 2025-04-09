import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Six Minutes Out PR and our mission to help consumer product brands succeed.',
};

export default function About() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-dark sm:text-5xl">
            About Six Minutes Out PR
          </h1>
          <p className="mt-4 text-xl text-gray">
            Your partner in strategic PR and affiliate management
          </p>
        </div>

        {/* Mission Section */}
        <section className="mt-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-light-gray p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-dark">Our Mission</h2>
              <p className="mt-4 text-lg text-medium-dark">
                At Six Minutes Out PR, we're dedicated to helping consumer product brands
                establish a strong market presence through strategic public relations
                and effective affiliate program management. We believe that every
                product has a story worth telling, and we're here to help you tell it.
              </p>
            </div>
            <div className="bg-light-gray p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-dark">Our Approach</h2>
              <p className="mt-4 text-lg text-medium-dark">
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
          <h2 className="text-3xl font-bold text-dark text-center">Our Values</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="text-center bg-light-gray p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-dark">Excellence</h3>
              <p className="mt-2 text-medium-dark">
                We strive for excellence in everything we do, delivering high-quality
                results that exceed expectations.
              </p>
            </div>
            <div className="text-center bg-light-gray p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-dark">Innovation</h3>
              <p className="mt-2 text-medium-dark">
                We embrace innovative approaches and stay ahead of industry trends
                to provide cutting-edge solutions.
              </p>
            </div>
            <div className="text-center bg-light-gray p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-dark">Partnership</h3>
              <p className="mt-2 text-medium-dark">
                We build strong, lasting partnerships with our clients, working
                together to achieve shared success.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-dark text-center">Our Team</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center bg-light-gray p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto rounded-full bg-mint"></div>
              <h3 className="mt-4 text-xl font-semibold text-dark">Jane Smith</h3>
              <p className="text-medium-dark">Founder & CEO</p>
            </div>
            <div className="text-center bg-light-gray p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto rounded-full bg-mint"></div>
              <h3 className="mt-4 text-xl font-semibold text-dark">John Doe</h3>
              <p className="text-medium-dark">PR Director</p>
            </div>
            <div className="text-center bg-light-gray p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto rounded-full bg-mint"></div>
              <h3 className="mt-4 text-xl font-semibold text-dark">Sarah Johnson</h3>
              <p className="text-medium-dark">Affiliate Manager</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 