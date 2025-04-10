import type { Metadata } from 'next';
import Image from 'next/image';

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
          <h1 className="text-4xl font-heading text-dark sm:text-5xl">
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
              <h2 className="text-3xl font-heading text-dark">Our Mission</h2>
              <p className="mt-4 text-lg text-medium-dark">
                At Six Minutes Out PR, we're dedicated to helping consumer product brands
                establish a strong market presence through strategic public relations
                and effective affiliate program management. We believe that every
                product has a story worth telling, and we're here to help you tell it.
              </p>
            </div>
            <div className="bg-light-gray p-6 rounded-lg">
              <h2 className="text-3xl font-heading text-dark">Our Approach</h2>
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
          <h2 className="text-3xl font-heading text-dark text-center">Our Values</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="text-center bg-light-gray p-6 rounded-lg">
              <h3 className="text-xl font-heading text-dark">Excellence</h3>
              <p className="mt-2 text-medium-dark">
                We strive for excellence in everything we do, delivering high-quality
                results that exceed expectations.
              </p>
            </div>
            <div className="text-center bg-light-gray p-6 rounded-lg">
              <h3 className="text-xl font-heading text-dark">Innovation</h3>
              <p className="mt-2 text-medium-dark">
                We embrace innovative approaches and stay ahead of industry trends
                to provide cutting-edge solutions.
              </p>
            </div>
            <div className="text-center bg-light-gray p-6 rounded-lg">
              <h3 className="text-xl font-heading text-dark">Partnership</h3>
              <p className="mt-2 text-medium-dark">
                We build strong, lasting partnerships with our clients, working
                together to achieve shared success.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-heading text-dark text-center">Our Team</h2>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="text-center bg-light-gray p-8 rounded-lg">
              <div className="w-48 h-48 mx-auto relative rounded-full mb-6">
                <Image 
                  src="/six_minutes_out_logo_black_fill.png"
                  alt="Charlene Hanna"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="bg-green-medium p-3 rounded-full"
                />
              </div>
              <h3 className="mt-4 text-2xl font-heading text-dark">Charlene Hanna</h3>
              <p className="text-medium-dark text-lg mt-2">Founder & Lead Strategist</p>
              <p className="mt-4 text-medium-dark max-w-md mx-auto">
                With extensive experience in public relations and affiliate marketing, 
                Charlene leads Six Minutes Out PR with a passion for helping consumer 
                product brands reach their full potential.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 