'use client'

import { useState, useEffect } from 'react';
import { Home, Users, Shield, Wifi, MapPin, Star, Menu, X, Building2, Award, Heart } from 'lucide-react';
import Link from 'next/link';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const spaces = [
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Kemang, Jakarta Selatan',
      price: 'Starting from Rp 3.5jt/month'
    },
    {
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Senopati, Jakarta Selatan',
      price: 'Starting from Rp 4.2jt/month'
    },
    {
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Menteng, Jakarta Pusat',
      price: 'Starting from Rp 3.8jt/month'
    },
    {
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Sudirman, Jakarta Pusat',
      price: 'Starting from Rp 4.5jt/month'
    },
    {
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Kuningan, Jakarta Selatan',
      price: 'Starting from Rp 4.0jt/month'
    },
    {
      image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'TB Simatupang, Jakarta Selatan',
      price: 'Starting from Rp 3.3jt/month'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Wijaya',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Pindah ke CoLiving adalah keputusan terbaik! Fasilitasnya lengkap, lokasinya strategis, dan komunitasnya sangat supportif. Saya merasa seperti di rumah sendiri.',
      rating: 5
    },
    {
      name: 'Budi Santoso',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Sebagai pekerja remote, saya butuh tempat yang nyaman dengan WiFi cepat. CoLiving memberikan semua itu plus komunitas profesional yang menginspirasi.',
      rating: 5
    },
    {
      name: 'Lisa Anggraini',
      role: 'Graphic Designer',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Harga terjangkau dengan kualitas premium. Proses booking mudah dan tim support sangat responsif. Highly recommended untuk young professionals!',
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Modern Spaces',
      description: 'Fully furnished rooms with contemporary design and premium amenities'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Vibrant Community',
      description: 'Connect with like-minded professionals and expand your network'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safe & Secure',
      description: '24/7 security, CCTV monitoring, and secure access control'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'High-Speed WiFi',
      description: 'Lightning-fast internet perfect for work and entertainment'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="w-8 h-8 text-[#FF6B00]" />
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>CoLiving</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`font-medium transition-colors hover:text-[#FF6B00] ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Home</a>
              <a href="#why-us" className={`font-medium transition-colors hover:text-[#FF6B00] ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Why Us</a>
              <a href="#spaces" className={`font-medium transition-colors hover:text-[#FF6B00] ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Spaces</a>
              <a href="#testimonials" className={`font-medium transition-colors hover:text-[#FF6B00] ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Testimonials</a>
              <a href="#contact" className={`font-medium transition-colors hover:text-[#FF6B00] ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Contact</a>
              <Link href="/login" className=" bg-[#FF6B00] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#E55F00] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Book Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
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
              <a href="#home" className="block text-gray-700 hover:text-[#FF6B00] font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#why-us" className="block text-gray-700 hover:text-[#FF6B00] font-medium" onClick={() => setIsMenuOpen(false)}>Why Us</a>
              <a href="#spaces" className="block text-gray-700 hover:text-[#FF6B00] font-medium" onClick={() => setIsMenuOpen(false)}>Spaces</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-[#FF6B00] font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="block text-gray-700 hover:text-[#FF6B00] font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="w-full bg-[#FF6B00] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#E55F00] transition-colors">
                Book Now
              </button>
            </nav>
          )}
        </div>
      </header >

    </div >
  );
}

export default App;
