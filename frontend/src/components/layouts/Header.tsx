
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menu = ['Beranda', 'Hotel', 'Lokasi', 'Testimonials'];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Link href="/" className=''>
                            <Image src="/images/logo.png" alt='Roomify' width={190} height={500} />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menu.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className={`font-medium transition-colors hover:text-[#FF6B00] ${isScrolled ? 'text-gray-700' : 'text-white'
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                        <Link
                            href="/login"
                            className=" flex bg-[#FF6B00] text-white px-8 py-2.5 rounded-full font-bold hover:bg-[#E55F00] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <Menu className={`w-6 h-6 pe-2`} />
                            Login
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                        {isMenuOpen ? (
                            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
                        ) : (
                            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-6 pb-4 space-y-4">
                        {menu.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="block text-gray-700 hover:text-[#FF6B00] font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="w-full bg-[#FF6B00] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#E55F00] transition-colors">
                            Cari Hotel
                        </button>
                    </nav>
                )}
            </div>
        </header>
    )
}