import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Strategic PR & Affiliate Management for Consumer Products
        </h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          We help small business consumer product brands elevate their visibility and drive sales through
          targeted media coverage and affiliate relationships.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-green-medium hover:bg-green-dark text-white px-6 py-3 rounded-md font-medium transition-colors inline-block text-center"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="bg-mint hover:bg-mint-light text-dark px-6 py-3 rounded-md font-medium transition-colors inline-block text-center"
          >
            Our Services
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Comprehensive PR and affiliate management solutions tailored for your brand
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-light-gray p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Media Relations</h3>
            <p>Strategic media outreach and press coverage to increase brand visibility</p>
          </div>
          
          <div className="bg-light-gray p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Affiliate Management</h3>
            <p>Build and manage relationships with top affiliates to drive sales</p>
          </div>
          
          <div className="bg-light-gray p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Content Strategy</h3>
            <p>Develop compelling content that resonates with your target audience</p>
          </div>
        </div>
      </section>
    </>
  );
}
