import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Six Minutes Out PR
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/services" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                Services
              </Link>
              <Link href="/about" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link href="/case-studies" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                Case Studies
              </Link>
              <Link href="/blog" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 