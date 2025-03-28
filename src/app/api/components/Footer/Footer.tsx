import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-6 mt-auto w-full">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Navigasyon Linkleri */}
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-gray-400">
            Ana Sayfa
          </Link>
          <Link href="/hakkinda" className="hover:text-gray-400">
            Hakkında
          </Link>
          <Link href="/urunler" className="hover:text-gray-400">
            Ürünler
          </Link>
        </nav>

        {/* Adınız Soyadınız */}
        <p className="text-sm">© 2025 Elif KAYA</p>

        {/* Sosyal Medya İkonları */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
