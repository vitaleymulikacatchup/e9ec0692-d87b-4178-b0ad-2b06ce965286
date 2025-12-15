"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import SplitAbout from "@/components/sections/about/SplitAbout";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "Blog", id: "blog" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Welcome to Our Platform"
          description="Experience the future of digital innovation with our cutting-edge solutions"
          carouselItems={[
            {
              title: "Innovation First",
              description: "Leading the way in technological advancement",
              imageSrc: "/images/noise.webp",
              imageAlt: "Innovation concept"
            },
            {
              title: "Quality Assured",
              description: "Delivering excellence in every project we undertake",
              imageSrc: "/images/noise.webp",
              imageAlt: "Quality assurance"
            },
            {
              title: "Customer Focus",
              description: "Your success is our primary goal and commitment",
              imageSrc: "/images/noise.webp",
              imageAlt: "Customer satisfaction"
            }
          ]}
        />
      </div>
      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Articles"
          description="Stay updated with our latest insights"
          blogs={[
            {
              id: "1",
              category: "Design",
              title: "UX review presentations",
              excerpt: "How to create compelling presentations that wow your audience",
              imageSrc: "/images/noise.webp",
              authorName: "Olivia Rhye",
              authorAvatar: "/images/noise.webp",
              date: "20 Jan 2025",
            },
            {
              id: "2",
              category: "Development",
              title: "Building scalable applications",
              excerpt: "Learn the best practices for building scalable web applications",
              imageSrc: "/images/noise.webp",
              authorName: "John Doe",
              authorAvatar: "/images/noise.webp",
              date: "18 Jan 2025",
            },
            {
              id: "3",
              category: "Product",
              title: "Product strategy essentials",
              excerpt: "Key principles for successful product strategy and execution",
              imageSrc: "/images/noise.webp",
              authorName: "Sarah Smith",
              authorAvatar: "/images/noise.webp",
              date: "15 Jan 2025",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          carouselMode="buttons"
          containerStyle="default"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout />
      </div>
      <div id="menu" data-section="menu">
        <ProductCardOne />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen />
      </div>
      <div id="contact" data-section="contact">
        <ContactSplit />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase />
      </div>
    </ThemeProvider>
  );
}