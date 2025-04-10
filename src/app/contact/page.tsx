import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Six Minutes Out PR to discuss your PR and affiliate management needs.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-light">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-heading text-dark sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-medium-dark">
            Let's discuss how we can help grow your brand
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-light-gray p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-heading text-dark">Send us a message</h2>
            <form className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-medium-dark">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray bg-mint-light shadow-sm focus:border-green-medium focus:ring-green-medium"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-medium-dark">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray bg-mint-light shadow-sm focus:border-green-medium focus:ring-green-medium"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-medium-dark">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="mt-1 block w-full rounded-md border-gray bg-mint-light shadow-sm focus:border-green-medium focus:ring-green-medium"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-medium-dark">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray bg-mint-light shadow-sm focus:border-green-medium focus:ring-green-medium"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-medium hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-medium transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-light-gray p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-heading text-dark">Get in touch with Charlene Hanna</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-heading text-dark">Office Location</h3>
                <p className="mt-2 text-medium-dark">
                  Denver, Colorado<br />
                </p>
              </div>
              <div>
                <h3 className="text-lg font-heading text-dark">Contact Information</h3>
                <p className="mt-2 text-medium-dark">
                  Email: <a href="mailto:charlene@sixminutesout.com" className="text-green-medium hover:text-green-dark hover:underline transition-colors">charlene@sixminutesout.com</a><br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 