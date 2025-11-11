"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Calendar, Heart, Sparkles, Users, Zap, ShieldCheck, Clock, Target, Quote } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="radialGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/g04abef92d544eeaceebb880db6fb0f7c1d586b7d29762ddde500dd5d9dd6e1e6ee8aa74dd9c77cf57867458260de940b04bcc0290040cb446aab0d6fff83ff08_1280.jpg"
          logoAlt="Beautix Laser Logo"
          brandName="Beautix Laser"
          button={{
            text: "Book Appointment",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Beautiful Skin Starts Here"
          description="Experience the latest in laser aesthetic treatments at Beautix Laser. Transform your skin with our advanced, safe, and effective laser treatments."
          tag="Premium Beauty Treatments"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Book Consultation",
              href: "contact"
            },
            {
              text: "Our Services",
              href: "feature"
            }
          ]}
          imageSrc="https://pixabay.com/get/gbc1f09089f386b0dc89f8eef65bc63f44d4c06fc397f2a05e440289b614ed156ee2bd7926027dd0a9a737a8630e08ccae3c719acc8c93cf47f605e2c580f43a9_1280.jpg"
          imageAlt="Modern Beautix Laser clinic interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="The Betzalel Family Legacy"
          description="Founded in 1998 by the Betzalel family, Beautix Laser has been dedicated to providing exceptional aesthetic treatments for over 25 years. Our commitment to excellence and personalized care has made us a trusted name in beauty and wellness."
          tag="Our Story"
          tagIcon={Heart}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "25+ Years Experience",
              description: "Over two decades of expertise in aesthetic treatments and laser technology",
              icon: Calendar
            },
            {
              title: "Family-Owned Excellence",
              description: "Three generations of the Betzalel family committed to your beauty and wellness journey",
              icon: Users
            },
            {
              title: "Advanced Technology",
              description: "State-of-the-art laser equipment and cutting-edge treatment methods",
              icon: Zap
            },
            {
              title: "Personalized Care",
              description: "Customized treatment plans tailored to your unique skin needs and goals",
              icon: Heart
            }
          ]}
          imageSrc="https://pixabay.com/get/g7b0b39f445aee7878ba382a6c4a90de808dfbe57b49652ef5aaefd19dd62064fe46783c12bc4701b911f47926d531247ba351aab1e98f596b2b5857c4ab72a69_1280.jpg"
          imageAlt="Betzalel family at Beautix Laser clinic"
          imagePosition="left"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFive
          title="Our Laser Treatments"
          description="Discover our comprehensive range of advanced laser treatments designed to enhance your natural beauty"
          tag="Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          showIconBoxBackground={true}
          features={[
            {
              title: "Laser Facial Rejuvenation",
              icon: Sparkles
            },
            {
              title: "Advanced Hair Removal",
              icon: Zap
            },
            {
              title: "Skin Resurfacing",
              icon: ShieldCheck
            },
            {
              title: "Anti-Aging Treatments",
              icon: Clock
            },
            {
              title: "Acne Scar Reduction",
              icon: Target
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real experiences from our satisfied clients who have transformed their skin with our treatments"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Executive",
              testimonial: "The laser facial treatment at Beautix Laser completely transformed my skin. The Betzalel family's expertise and caring approach made me feel confident throughout the process.",
              imageSrc: "https://pixabay.com/get/g3b1475e7c554f5936eadb28b21efa79ace209dac13881f93830c164eaed4f806ac3f1567b088e1738e25cce21a1c6764a87d327f172586b40ba9c5e0795bd862_1280.jpg",
              imageAlt: "Sarah Johnson testimonial"
            },
            {
              id: "2",
              name: "Maria Rodriguez",
              role: "Teacher",
              testimonial: "After years of struggling with acne scars, the laser treatments here gave me the clear, smooth skin I always wanted. The results exceeded my expectations!",
              imageSrc: "https://pixabay.com/get/g2fbe4dbe034a16248df88e328e4213fdaff79bb02cedff8c4593e28434d555fa2d1c080befe5dade1c84f6412b860fbbc1f595589de0ff10dd6d227b81264145_1280.jpg",
              imageAlt: "Maria Rodriguez testimonial"
            },
            {
              id: "3",
              name: "Jennifer Chen",
              role: "Business Owner",
              testimonial: "The anti-aging laser treatment has taken years off my appearance. The professional team at Beautix Laser made the entire experience comfortable and effective.",
              imageSrc: "https://pixabay.com/get/gd2a6663b846a3290bd095c0252690bd405ea8b60f7f21fb0e36c0601dce7195e8f70a151496464ccb880bf855083a5a05cc2657c82d696f2db727cd875551aeb_1280.jpg",
              imageAlt: "Jennifer Chen testimonial"
            },
            {
              id: "4",
              name: "Amanda Thompson",
              role: "Nurse",
              testimonial: "The laser hair removal treatment was painless and incredibly effective. I'm amazed by the long-lasting results and professional care I received.",
              imageSrc: "https://pixabay.com/get/g46b733edda0b93427a22c0d8ad1ea4dae0e553e9a69287d9dca9fbd1f8fbf58e9ebd5c2f9326221bef51b67ac02ad439f01a80e58ea7d06fdcc5b5bf00ff4882_1280.jpg",
              imageAlt: "Amanda Thompson testimonial"
            },
            {
              id: "5",
              name: "Lisa Williams",
              role: "Real Estate Agent",
              testimonial: "The skin rejuvenation treatment gave me back my confidence. The Betzalel family's 25 years of experience really shows in their exceptional service.",
              imageSrc: "https://pixabay.com/get/g533fc0a791752c589bbdfb7656e96a2c5f913a6d0a1b967b959a17a91ebdce52b737ce2086892b152684eefb677c46ee94c129a9ff7018c05a3704a3f5c90990_1280.jpg",
              imageAlt: "Lisa Williams testimonial"
            },
            {
              id: "6",
              name: "Rachel Davis",
              role: "Consultant",
              testimonial: "From my first consultation to follow-up care, Beautix Laser provided outstanding service. My skin has never looked better thanks to their advanced treatments.",
              imageSrc: "https://pixabay.com/get/g2cc604d931f5073daa63d89eae1c76082c979294ca0cc8899568453d33c85e7b3beea4bcdc591e93cc2daeb6799fe3a5dba6777cee44254b11a045248131a1b5_1280.jpg",
              imageAlt: "Rachel Davis testimonial"
            },
            {
              id: "7",
              name: "Patricia Brown",
              role: "Retired Teacher",
              testimonial: "At 65, I thought it was too late for skin treatments. Beautix Laser proved me wrong! The results are natural-looking and exactly what I hoped for.",
              imageSrc: "https://pixabay.com/get/g79b0bee73f44c765b4a3239f55511343cdfba99e1d1c2b23ce8f3c3bdf0d78f24d5d4ec89b963cb7167b51f2bcebcc3ff758b62f6404db51dab3d74d778830cd_1280.jpg",
              imageAlt: "Patricia Brown testimonial"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Book Appointment"
          title="Ready to Transform Your Skin?"
          description="Schedule your consultation today and discover how our advanced laser treatments can help you achieve the beautiful, healthy skin you deserve."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email address"
          buttonText="Book Now"
          termsText="By booking an appointment, you agree to our consultation terms and privacy policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://pixabay.com/get/g04abef92d544eeaceebb880db6fb0f7c1d586b7d29762ddde500dd5d9dd6e1e6ee8aa74dd9c77cf57867458260de940b04bcc0290040cb446aab0d6fff83ff08_1280.jpg"
          logoText="Beautix Laser"
          copyrightText="© 2025 | Beautix Laser - Betzalel Family"
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Laser Facial",
                  href: "feature"
                },
                {
                  label: "Hair Removal",
                  href: "feature"
                },
                {
                  label: "Skin Rejuvenation",
                  href: "feature"
                },
                {
                  label: "Anti-Aging",
                  href: "feature"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "The Betzalel Family",
                  href: "about"
                },
                {
                  label: "25+ Years Experience",
                  href: "about"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Book Appointment",
                  href: "contact"
                },
                {
                  label: "Consultation",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}