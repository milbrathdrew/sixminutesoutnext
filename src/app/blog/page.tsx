import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights and updates from Six Minutes Out PR on PR strategy and affiliate marketing.',
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Insights and updates from our team
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Post 1 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray-500">March 15, 2024</div>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                The Future of PR in the Digital Age
              </h2>
              <p className="mt-3 text-gray-500">
                Exploring how digital transformation is reshaping public relations
                and what it means for consumer product brands.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Read more →
                </a>
              </div>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray-500">March 10, 2024</div>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                Maximizing Affiliate Program Success
              </h2>
              <p className="mt-3 text-gray-500">
                Key strategies for building and maintaining successful affiliate
                relationships in the consumer products space.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Read more →
                </a>
              </div>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray-500">March 5, 2024</div>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                Building Brand Authority Through Media Relations
              </h2>
              <p className="mt-3 text-gray-500">
                How to establish your brand as an industry leader through
                strategic media coverage and thought leadership.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Read more →
                </a>
              </div>
            </div>
          </article>

          {/* Blog Post 4 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray-500">February 28, 2024</div>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                Content Strategy for Consumer Products
              </h2>
              <p className="mt-3 text-gray-500">
                Creating compelling content that resonates with your target
                audience and drives engagement.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Read more →
                </a>
              </div>
            </div>
          </article>

          {/* Blog Post 5 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray-500">February 20, 2024</div>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                Measuring PR Success: Beyond Media Coverage
              </h2>
              <p className="mt-3 text-gray-500">
                Understanding the key metrics that matter when evaluating
                your PR campaign's effectiveness.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Read more →
                </a>
              </div>
            </div>
          </article>

          {/* Blog Post 6 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray-500">February 15, 2024</div>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                The Power of Influencer Partnerships
              </h2>
              <p className="mt-3 text-gray-500">
                How to leverage influencer relationships to amplify your
                brand's reach and credibility.
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Read more →
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
} 