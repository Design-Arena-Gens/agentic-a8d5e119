"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}
