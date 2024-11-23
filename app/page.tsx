
'use client'


import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 50); // Add 'scrolled' class if more than 50px scroll
      setIsScrollingDown(currentScroll > lastScrollTop); // Detect scrolling down or up
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll

    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hero">
        {/* Hero image */}
        <Image 
          src="/cover.png"
          className="hero-img"
          width={1500}
          height={725}
          alt="hero"
        />

        {/* Logo */}
        <div className={`logo-container ${isScrolled ? 'scrolled' : ''}`}>
          <Image 
            src="/logoff.png"
            className="logo"
            width={500}
            height={500}
            alt="logo"
          />

      <nav className={`navbar ${isScrollingDown ? "hidden" : ""}`}>
              <a href="#home">Home</a>
              <a href="#recipes">Recipes</a>
              <a href="#about">About</a>
            </nav>
        </div>
      </div>

      <main>
        <div className="content">
          <h1>Welcome to OnlyPans!</h1>
          <p>
            At OnlyPans, we believe that cooking isn’t just about making food—it’s about creating love on a plate. 
            Dive into a world of mouthwatering recipes, sizzling tips, and a hearty dose of culinary inspiration. 
            Whether you're a seasoned chef or just starting your food journey, OnlyPans is here to keep you "hongry" 
            for more!
          </p>
        </div>
    </main>

    </>
  );
}