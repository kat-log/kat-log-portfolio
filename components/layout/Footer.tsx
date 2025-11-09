import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* コピーライト */}
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Kat Log. All rights reserved.
          </p>

          {/* SNSリンク */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              GitHub
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              X
            </Link>
            <Link
              href="mailto:contact@example.com"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
