
'use client'


import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position to toggle state
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hero">
        {/* Hero image */}
        <Image 
          src="/black.jpg"
          className="hero-img"
          width={1520}
          height={725}
          alt="hero"
        />

        {/* Logo */}
        <div className={`logo-container ${isScrolled ? 'scrolled' : ''}`}>
          <Image 
            src="/logo.svg"
            className="logo"
            width={500}
            height={500}
            alt="logo"
          />
        </div>
      </div>

      <main>
        <div className="content">
          <p>lorem100</p>
        </div>
      </main>
    </>
  );
}