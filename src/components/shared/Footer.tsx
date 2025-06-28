import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2b2d42] border-t-2 border-[#ef233c] py-12">
      <div className="container-vintage">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-[#ef233c] rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-[#d4af37]">
              <span className="text-white font-black text-2xl">CS</span>
            </div>
            <h3 className="text-[#edf2f4] font-black text-2xl tracking-wider mb-2">
              THE CHOP SHOP
            </h3>
            <p className="text-[#8d99ae] text-sm">
              Clean Cuts. Sharp Looks.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <Link 
              href="https://www.yelp.com/biz/the-chop-shop-san-luis-obispo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8d99ae] hover:text-[#ef233c] transition-colors duration-300"
              aria-label="Visit our Yelp page"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.16 12.73c-.25-.13-.56-.18-.84-.11l-2.25.5c-.22.05-.42.15-.58.3l-1.25 1.25c-.15.15-.25.36-.3.58l-.5 2.25c-.07.28-.02.59.11.84.13.25.35.42.62.47l2.25.5c.22.05.42.15.58.3l1.25 1.25c.15.15.36.25.58.3l2.25.5c.28.07.59.02.84-.11.25-.13.42-.35.47-.62l.5-2.25c.05-.22.15-.42.3-.58l1.25-1.25c.15-.15.25-.36.3-.58l.5-2.25c.07-.28.02-.59-.11-.84-.13-.25-.35-.42-.62-.47l-2.25-.5c-.22-.05-.42-.15-.58-.3l-1.25-1.25c-.15-.15-.36-.25-.58-.3l-2.25-.5c-.28-.07-.59-.02-.84.11z"/>
              </svg>
            </Link>
            <Link 
              href="https://www.instagram.com/thechopshop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8d99ae] hover:text-[#ef233c] transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
          </div>

          <div className="text-[#8d99ae] text-sm">
            <p className="mb-2">© 2024 The Chop Shop. All rights reserved.</p>
            <p>123 Main Street, San Luis Obispo, CA 93401</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 