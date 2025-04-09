import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore our successful PR and affiliate management case studies for consumer product brands.',
};

export default function CaseStudies() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-dark sm:text-5xl">
            Case Studies
          </h1>
          <p className="mt-4 text-xl text-gray">
            Real results for real brands
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {/* Case Study 1 */}
          <section className="bg-light-gray rounded-lg p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-dark">Eco-Friendly Home Goods</h2>
                <p className="mt-4 text-medium-dark">
                  How we helped a sustainable home goods brand increase their media coverage
                  by 300% and drive significant affiliate sales through strategic partnerships.
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-dark">Results</h3>
                  <ul className="mt-2 space-y-2 text-medium-dark">
                    <li>300% increase in media coverage</li>
                    <li>150% growth in affiliate sales</li>
                    <li>Featured in 5 major publications</li>
                    <li>25% increase in website traffic</li>
                  </ul>
                </div>
              </div>
              <div className="bg-mint rounded-lg h-64"></div>
            </div>
          </section>

          {/* Case Study 2 */}
          <section className="bg-light-gray rounded-lg p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <div className="bg-mint rounded-lg h-64"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold text-dark">Organic Beauty Brand</h2>
                <p className="mt-4 text-medium-dark">
                  Supporting an organic beauty brand's launch with a comprehensive PR
                  and affiliate strategy that resulted in nationwide retail partnerships.
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-dark">Results</h3>
                  <ul className="mt-2 space-y-2 text-medium-dark">
                    <li>Successful product launch in 3 major retailers</li>
                    <li>200+ media placements</li>
                    <li>50% increase in brand awareness</li>
                    <li>40% growth in online sales</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study 3 */}
          <section className="bg-light-gray rounded-lg p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-dark">Tech Gadget Startup</h2>
                <p className="mt-4 text-medium-dark">
                  Helping a tech gadget startup establish market presence through
                  strategic media relations and affiliate program development.
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-dark">Results</h3>
                  <ul className="mt-2 space-y-2 text-medium-dark">
                    <li>Featured in top tech publications</li>
                    <li>75% increase in affiliate revenue</li>
                    <li>Successful crowdfunding campaign</li>
                    <li>Partnership with major tech retailers</li>
                  </ul>
                </div>
              </div>
              <div className="bg-mint rounded-lg h-64"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 