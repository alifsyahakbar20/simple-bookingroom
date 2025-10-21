'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layouts/Header';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Modern CoLiving Spaces',
      subtitle:
        'Find your dream space to live, work, and connect with inspiring people.',
    },
    {
      image:
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Live Comfortably, Work Efficiently',
      subtitle:
        'Premium locations with all the facilities you need for modern living.',
    },
    {
      image:
        'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Join a Vibrant Community',
      subtitle:
        'Collaborate, socialize, and grow with like-minded professionals.',
    },
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Header />

      {/* Hero Slider */}
      <section id="home" className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2 }}
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-6">
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-2xl mb-8 text-gray-200 max-w-2xl"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.a
                href="#spaces"
                className="bg-[#FF6B00] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#E55F00] transition-all"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Explore Spaces
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-[#FF6B00] w-6' : 'bg-white/70 hover:bg-white'
                }`}
            ></button>
          ))}
        </div>

        <div className="absolute bottom-5 w-full z-50">
          <div className="container mx-auto px-6 py-4 bg-white rounded-2xl shadow-lg max-w-5xl">
            <h1 className="text-xl font-semibold mb-4 text-gray-800 text-center">
              Cari Hotel yang Kamu Inginkan
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {/* Lokasi */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Lokasi</label>
                <input
                  type="text"
                  placeholder="Masukkan kota atau nama hotel"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Check-in */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Check-in</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Check-out */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Check-out</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Jumlah Tamu */}
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Tamu</label>
                <input
                  type="number"
                  min="1"
                  placeholder="1"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Tombol Cari */}
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                  Cari Hotel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Rekomendasi Hotel untuk Kamu
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <img
                  src={`https://picsum.photos/seed/hotel${i}/400/250`}
                  alt={`Hotel ${i}`}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">Hotel Santika {i}</h3>
                  <p className="text-gray-500 text-sm mt-1">Jakarta, Indonesia</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-blue-600 font-bold text-lg">Rp {400000 + i * 50000}</span>
                    <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div >
  );
}

export default App;
