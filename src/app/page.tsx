"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Calendar, ChefHat, Heart, Leaf, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumSizeExtraSmallSpacing"
      background="circleGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Idisuda"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Experience Culinary Excellence"
          description="Discover the finest dining destination where tradition meets innovation. Every dish crafted with passion and premium ingredients."
          tag="Welcome to Idisuda"
          tagIcon={Sparkles}
          buttons={[
            { text: "Make a Reservation", href: "contact" },
            { text: "Explore Menu" }
          ]}
          carouselItems={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806858539-hu3lfbjj.jpg",
              imageAlt: "Gourmet plated appetizer"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806859933-y3cq5xob.jpg",
              imageAlt: "Fine dining starter"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806861420-vuvcp70k.jpg",
              imageAlt: "Elegant dessert presentation"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806862624-gkx70lxg.jpg",
              imageAlt: "Main course showcase"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806863777-tggd5g5v.jpg",
              imageAlt: "Seafood specialty"
            },
            {
              id: "6",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806864869-q002lpem.jpg",
              imageAlt: "Signature dish"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="Idisuda is more than just a restaurant—it's a celebration of authentic flavors and culinary artistry. Founded on the principles of quality, passion, and hospitality, we bring you an unforgettable dining experience."
          tag="Since 2015"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806865825-oriyjfih.jpg"
          imageAlt="Idisuda restaurant interior"
          imagePosition="right"
          bulletPoints={[
            {
              title: "Premium Ingredients",
              description: "Sourced from trusted suppliers, ensuring the highest quality in every bite",
              icon: Leaf
            },
            {
              title: "Expert Chefs",
              description: "Our culinary team brings decades of experience and passion to the kitchen",
              icon: ChefHat
            },
            {
              title: "Warm Hospitality",
              description: "Every guest is treated like family in our welcoming dining space",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Signature Dishes"
          description="Handpicked selections from our menu that showcase the best of Idisuda's culinary creations"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          containerStyle="default"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              name: "Pan-Seared Salmon",
              price: "$34",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806866884-dpy5au15.jpg",
              imageAlt: "Pan-seared salmon with vegetables"
            },
            {
              id: "2",
              name: "Truffle Risotto",
              price: "$28",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806868553-xwoxqvnf.jpg",
              imageAlt: "Creamy truffle risotto"
            },
            {
              id: "3",
              name: "Prime Ribeye Steak",
              price: "$42",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806869577-f2549ehb.jpg",
              imageAlt: "Grilled prime ribeye steak"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Guests Say"
          description="Hear from our delighted diners about their memorable experiences at Idisuda"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahmitchell",
              testimonial: "Absolutely extraordinary! The service was impeccable and every dish was a masterpiece. Idisuda has become my favorite restaurant.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806870607-fdfwz3zc.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "David Chen",
              handle: "@davidchen",
              testimonial: "The truffle risotto is incredible. Fresh ingredients, perfect execution. Worth every penny. Highly recommended!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806871969-uc0nebkh.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emmarod",
              testimonial: "What a gem! The ambiance is perfect, the staff is attentive, and the food is simply outstanding. Can't wait to return.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806873013-9j4mjzp6.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "James Wilson",
              handle: "@jameswilson",
              testimonial: "Best dining experience of the year! Every detail was perfect, from the appetizers to the dessert. Thank you Idisuda!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765806874036-04txktia.jpg",
              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Reserve Your Table"
          description="Join us for an unforgettable culinary journey. Subscribe to our newsletter for special offers and exclusive menu previews."
          useInvertedBackground="noInvert"
          mediaPosition="right"
          tagIcon={Calendar}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We'll send you updates about new dishes and special events. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Idisuda"
          copyrightText="© 2025 Idisuda Restaurant. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "menu" },
                { label: "Reservations", href: "contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Phone: +1 (555) 123-4567", href: "#" },
                { label: "Email: info@idisuda.com", href: "#" },
                { label: "Hours: Tue-Sun 5PM-11PM", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}