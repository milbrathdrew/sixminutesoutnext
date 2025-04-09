import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Industry insights, tips, and updates from the Six Minutes Out PR team.',
};

export default function Blog() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-dark sm:text-5xl">Blog</h1>
          <p className="mt-4 text-xl text-gray">
            Industry insights, tips, and updates
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog post 1 */}
          <article className="bg-light-gray rounded-lg overflow-hidden shadow">
            <div className="bg-mint h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray">March 15, 2023</div>
              <h2 className="mt-2 text-xl font-semibold text-dark">
                5 PR Strategies That Actually Drive Sales
              </h2>
              <p className="mt-3 text-medium-dark">
                Discover the most effective PR strategies that go beyond brand awareness to directly impact your bottom line.
              </p>
              <div className="mt-4">
                <a href="#" className="text-primary font-medium">
                  Read more →
                </a>
              </div>
            </div>
          </article>

          {/* Blog post 2 */}
          <article className="bg-light-gray rounded-lg overflow-hidden shadow">
            <div className="bg-mint h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray">February 28, 2023</div>
              <h2 className="mt-2 text-xl font-semibold text-dark">
                Building an Effective Affiliate Program from Scratch
              </h2>
              <p className="mt-3 text-medium-dark">
                Learn how to create, launch, and optimize an affiliate program that attracts the right partners and drives consistent revenue.
              </p>
              <div className="mt-4">
                <a href="#" className="text-primary font-medium">
                  Read more →
                </a>
              </div>
            </div>
          </article>

          {/* Blog post 3 */}
          <article className="bg-light-gray rounded-lg overflow-hidden shadow">
            <div className="bg-mint h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray">January 12, 2023</div>
              <h2 className="mt-2 text-xl font-semibold text-dark">
                Content Marketing Trends to Watch in 2023
              </h2>
              <p className="mt-3 text-medium-dark">
                Stay ahead of the curve with these emerging content marketing trends that are shaping the industry this year.
              </p>
              <div className="mt-4">
                <a href="#" className="text-primary font-medium">
                  Read more →
                </a>
              </div>
            </div>
          </article>

          {/* Blog post 4 */}
          <article className="bg-light-gray rounded-lg overflow-hidden shadow">
            <div className="bg-mint h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray">December 5, 2022</div>
              <h2 className="mt-2 text-xl font-semibold text-dark">
                How to Measure PR Success: Beyond Vanity Metrics
              </h2>
              <p className="mt-3 text-medium-dark">
                Learn which metrics truly matter when evaluating the success of your PR campaigns and how to track them effectively.
              </p>
              <div className="mt-4">
                <a href="#" className="text-primary font-medium">
                  Read more →
                </a>
              </div>
            </div>
          </article>

          {/* Blog post 5 */}
          <article className="bg-light-gray rounded-lg overflow-hidden shadow">
            <div className="bg-mint h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray">November 18, 2022</div>
              <h2 className="mt-2 text-xl font-semibold text-dark">
                Creating a PR Crisis Management Plan
              </h2>
              <p className="mt-3 text-medium-dark">
                A step-by-step guide to developing a robust crisis management plan that protects your brand reputation in challenging times.
              </p>
              <div className="mt-4">
                <a href="#" className="text-primary font-medium">
                  Read more →
                </a>
              </div>
            </div>
          </article>

          {/* Blog post 6 */}
          <article className="bg-light-gray rounded-lg overflow-hidden shadow">
            <div className="bg-mint h-48"></div>
            <div className="p-6">
              <div className="text-sm text-gray">October 30, 2022</div>
              <h2 className="mt-2 text-xl font-semibold text-dark">
                The Intersection of PR and SEO: How to Optimize Both
              </h2>
              <p className="mt-3 text-medium-dark">
                Discover strategies for aligning your PR and SEO efforts to maximize visibility and organic traffic.
              </p>
              <div className="mt-4">
                <a href="#" className="text-primary font-medium">
                  Read more →
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
} 