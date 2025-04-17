"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import CustomerTestimonial from "@/components/CustomerTestimonial";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
      });
    }

    // Initialize food confetti
    const initFoodConfetti = () => {
      const foodConfetti = document.querySelectorAll(`.${styles.foodConfetti}`);
      foodConfetti.forEach((particle) => {
        // Create a more dramatic, fountain-like pattern
        const angle = Math.random() * Math.PI * 2; // Random direction
        const distance = 100 + Math.random() * 400; // Random distance

        // Calculate x and y with a upward bias for fountain effect
        const upwardBias = Math.random() * 0.8 + 0.2; // 0.2 to 1.0
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance * upwardBias * -1; // Negative to go upward

        // More dramatic rotation
        const r = Math.random() * 1080; // Up to 3 full rotations

        // Apply properties
        particle.style.setProperty("--x", x);
        particle.style.setProperty("--y", y);
        particle.style.setProperty("--r", r);

        // Continuous fountain with staggered delays
        const delay = Math.random() * 3;
        particle.style.animationDelay = `${delay}s`;
      });
    };

    // Combined scroll handler for all animations
    const handleScroll = () => {
      // Gallery section animation
      const gallerySection = document.querySelector(
        `.${styles.immersiveGallery}`
      );
      if (gallerySection) {
        const sectionTop = gallerySection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Start animation when the section is 20% in view
        if (sectionTop < windowHeight * 0.8) {
          gallerySection.classList.add("animate");
        } else {
          gallerySection.classList.remove("animate");
        }

        // Calculate scroll progress within the section
        const sectionHeight = gallerySection.offsetHeight;
        const scrollPosition = window.scrollY;
        const sectionOffset = gallerySection.offsetTop;
        const scrollProgress = (scrollPosition - sectionOffset) / sectionHeight;

        // Apply different transformations based on scroll progress
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          const images = document.querySelectorAll(`.${styles.galleryImage}`);

          images.forEach((image, index) => {
            // Customize the movement for each image
            const delay = index * 0.1; // Stagger the animations
            const progress = Math.max(
              0,
              Math.min(1, (scrollProgress - delay) * 2)
            );

            // Apply custom transformations based on progress
            if (image.id === "galleryImage1") {
              image.style.opacity = progress;
              const translateX = -120 * progress;
              const translateY = -60 * progress;
              const scale = 0.8 + 0.2 * progress;
              image.style.transform = `translate(${translateX}%, ${translateY}%) scale(${scale})`;
            } else if (image.id === "galleryImage2") {
              image.style.opacity = progress;
              const translateX = -40 * progress;
              const translateY = -80 * progress;
              const scale = 0.8 + 0.3 * progress;
              image.style.transform = `translate(${translateX}%, ${translateY}%) scale(${scale})`;
            } else if (image.id === "galleryImage3") {
              image.style.opacity = progress;
              const translateX = 40 * progress;
              const translateY = -60 * progress;
              const scale = 0.8 + 0.1 * progress;
              image.style.transform = `translate(${translateX}%, ${translateY}%) scale(${scale})`;
            } else if (image.id === "galleryImage4") {
              image.style.opacity = progress;
              const translateX = -80 * progress;
              const translateY = 20 * progress;
              const scale = 0.8 + 0.05 * progress;
              image.style.transform = `translate(${translateX}%, ${translateY}%) scale(${scale})`;
            } else if (image.id === "galleryImage5") {
              image.style.opacity = progress;
              const translateX = 0;
              const translateY = 40 * progress;
              const scale = 0.8 + 0.4 * progress;
              image.style.transform = `translate(${translateX}%, ${translateY}%) scale(${scale})`;
            } else if (image.id === "galleryImage6") {
              image.style.opacity = progress;
              const translateX = 80 * progress;
              const translateY = 10 * progress;
              const scale = 0.8 + 0.15 * progress;
              image.style.transform = `translate(${translateX}%, ${translateY}%) scale(${scale})`;
            }
          });
        }
      }

      // Animated plate section
      const plateSection = document.getElementById("animatedPlateSection");
      if (plateSection) {
        const plateSectionTop = plateSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Start animation when the section is 20% in view
        if (plateSectionTop < windowHeight * 0.8) {
          // Start plate animations
          const plate1 = document.getElementById("plate1");
          const plate2 = document.getElementById("plate2");
          const plate3 = document.getElementById("plate3");
          const plate4 = document.getElementById("plate4");

          if (plate1) plate1.style.animationPlayState = "running";
          if (plate2) plate2.style.animationPlayState = "running";
          if (plate3) plate3.style.animationPlayState = "running";
          if (plate4) plate4.style.animationPlayState = "running";

          // Start confetti animation
          const confettiContainer = document.querySelector(
            `.${styles.confettiContainer}`
          );
          if (confettiContainer)
            confettiContainer.style.animationPlayState = "running";

          // Start text animation
          const plateText = document.querySelector(`.${styles.plateText}`);
          if (plateText) plateText.style.animationPlayState = "running";

          // Start confetti particles animation
          const confetti = document.querySelectorAll(`.${styles.confetti}`);
          confetti.forEach((particle) => {
            particle.style.animationPlayState = "running";
          });
        }
      }

      // Enhanced plate section
      const enhancedPlateSection = document.getElementById(
        "enhancedPlateSection"
      );
      if (enhancedPlateSection) {
        const sectionTop = enhancedPlateSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
          console.log("Starting enhanced plate animations");

          // Start all plate animations
          const centerPlate = document.getElementById("centerPlate");
          const topPlate = document.getElementById("topPlate");
          const rightPlate = document.getElementById("rightPlate");
          const bottomPlate = document.getElementById("bottomPlate");
          const leftPlate = document.getElementById("leftPlate");

          // Make plates visible and start animations
          if (centerPlate) centerPlate.style.animationPlayState = "running";
          if (topPlate) topPlate.style.animationPlayState = "running";
          if (rightPlate) rightPlate.style.animationPlayState = "running";
          if (bottomPlate) bottomPlate.style.animationPlayState = "running";
          if (leftPlate) leftPlate.style.animationPlayState = "running";

          // Start the plate circle rotation
          const plateCircle = document.querySelector(`.${styles.plateCircle}`);
          if (plateCircle) plateCircle.style.animationPlayState = "running";

          // Initialize confetti with a delay
          initFoodConfetti();

          // Start confetti animation after plates are positioned
          setTimeout(() => {
            const foodConfettiContainer = document.querySelector(
              `.${styles.foodConfettiContainer}`
            );
            if (foodConfettiContainer) {
              foodConfettiContainer.style.opacity = "1";
              foodConfettiContainer.style.animationPlayState = "running";
            }

            const foodConfetti = document.querySelectorAll(
              `.${styles.foodConfetti}`
            );
            foodConfetti.forEach((particle) => {
              particle.style.animationPlayState = "running";
            });
          }, 2000); // 2 second delay for confetti to start
        }
      }
    };

    // Initialize animations
    initFoodConfetti();

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Video Background */}
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className={styles.backgroundVideo}
        >
          <source src="/rest.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.openTimes}>
            <button className={styles.openTimesButton}>OPEN TIMES</button>
            <span>Mon-Fri: 10am-9pm</span>
          </div>

          <div className={styles.logo}>
            <div className={styles.logoText}>
              NEW
              <br />
              VIBE
            </div>
          </div>

          <div className={styles.reservation}>
            <Link href="/reservation" className={styles.reservationLink}>
              <span className={styles.reservationIcon}>🔔</span> RESERVATION
            </Link>
            <button className={styles.menuToggle}>☰</button>
          </div>
        </header>

        {/* Main Text */}
        <main className={styles.main}>
          <p className={styles.tagline}>
            Cuisine you&apos;ll crave, in a ambiance you&apos;ll admire
          </p>
          <h1 className={styles.heading}>Good Times, Great Tastes</h1>
        </main>

        {/* Social Media Sidebar */}
        <div className={styles.socialSidebar}>
          <div className={styles.followUs}>FOLLOW US</div>
          <div className={styles.socialIcons}>
            <Link href="#" className={styles.socialIcon}>
              📷
            </Link>
            <Link href="#" className={styles.socialIcon}>
              📘
            </Link>
            <Link href="#" className={styles.socialIcon}>
              🐦
            </Link>
          </div>
        </div>

        {/* Awards Section */}
        <div className={styles.awards}>
          <div className={styles.award}>
            <div className={styles.awardLogo}></div>
          </div>
          <div className={styles.award}>
            <div className={styles.awardLogo}></div>
          </div>
          <div className={styles.award}>
            <div className={styles.rating}>
              <span className={styles.ratingNumber}>4.8</span>
              <div className={styles.stars}>★★★★★</div>
            </div>
          </div>
          <div className={styles.callUs}>
            <Link href="tel:+1234567890" className={styles.callButton}>
              📞
            </Link>
          </div>
        </div>
      </div>

      {/* Menu Categories Section */}
      <section className={styles.menuSection}>
        <div className={styles.menuHeader}>
          <div className={styles.forkKnifeIcon}>🍴</div>
          <h2 className={styles.menuTitle}>
            Come for our fresh, delicious fare, and stay
            <br />
            for a dining experience you won&apos;t forget.
          </h2>
        </div>

        <div className={styles.menuCategories}>
          <Link href="/restaurant-menu#drink" className={styles.categoryCard}>
            <div className={styles.categoryImageContainer}>
              <Image
                src="/fo1.jpg"
                alt="Signature Drink"
                fill
                className={styles.categoryImage}
              />
            </div>
            <div className={styles.categoryLabel}>Drink</div>
          </Link>

          <Link href="/restaurant-menu#main" className={styles.categoryCard}>
            <div className={styles.categoryImageContainer}>
              <Image
                src="/fo2.jpg"
                alt="Main Course"
                fill
                className={styles.categoryImage}
              />
            </div>
            <div className={styles.categoryLabel}>Main</div>
          </Link>

          <Link
            href="/restaurant-menu#desserts"
            className={styles.categoryCard}
          >
            <div className={styles.categoryImageContainer}>
              <Image
                src="/fo3.jpg"
                alt="Desserts"
                fill
                className={styles.categoryImage}
              />
            </div>
            <div className={styles.categoryLabel}>Desserts</div>
          </Link>
        </div>
      </section>

      {/* Customer Testimonial Section */}
      <CustomerTestimonial />

      {/* Exquisite Flavors Section */}
      <section className={styles.exquisiteSection}>
        <div className={styles.exquisiteOverlay}></div>
        <div className={styles.exquisiteContent}>
          <h2 className={styles.exquisiteTitle}>
            EXQUISITE
            <br />
            FLAVORS
          </h2>
          <p className={styles.exquisiteDescription}>
            New Wave is more than just food—it&apos;s a celebration of culinary
            passion, crafted from an inspiring journey.
          </p>
          <div className={styles.exquisiteButton}>LEARN MORE</div>
        </div>
      </section>

      {/* Immersive Gallery Section */}
      <section className={styles.immersiveGallery}>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryHeading}>
            <h2>IMMERSIVE DINING EXPERIENCE</h2>
            <p>
              Discover the perfect blend of ambiance and culinary artistry in
              our thoughtfully designed spaces
            </p>
          </div>
          <div className={styles.galleryImages}>
            <div
              className={styles.galleryImage}
              id="galleryImage1"
              data-caption="Elegant Main Dining"
            >
              <Image
                src="/ts1.jpg"
                alt="Interior Design"
                width={400}
                height={500}
                priority
              />
            </div>
            <div
              className={styles.galleryImage}
              id="galleryImage2"
              data-caption="Private Lounge"
            >
              <Image
                src="/ts2.jpg"
                alt="Dining Area"
                width={400}
                height={500}
                priority
              />
            </div>
            <div
              className={styles.galleryImage}
              id="galleryImage3"
              data-caption="Chef's Table"
            >
              <Image
                src="/ts3.jpg"
                alt="Lounge Space"
                width={400}
                height={500}
                priority
              />
            </div>
            <div
              className={styles.galleryImage}
              id="galleryImage4"
              data-caption="Cocktail Bar"
            >
              <Image
                src="/ts4.jpg"
                alt="Bar Area"
                width={400}
                height={500}
                priority
              />
            </div>
            <div
              className={styles.galleryImage}
              id="galleryImage5"
              data-caption="Signature Experience"
            >
              <Image
                src="/ts5.jpg"
                alt="Private Dining"
                width={400}
                height={500}
                priority
              />
            </div>
            <div
              className={styles.galleryImage}
              id="galleryImage6"
              data-caption="Outdoor Terrace"
            >
              <Image
                src="/t6.jpg"
                alt="Outdoor Seating"
                width={400}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animated Footer Section */}
      <footer className={styles.animatedFooter}>
        <div className={styles.footerBackground}></div>

        {/* Add floating particles */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className={styles.footerParticle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              "--x": `${(Math.random() - 0.5) * 100}px`,
            }}
          ></div>
        ))}

        {/* Repeating Text Animation */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            <span>CULINARY EXCELLENCE</span>
            <span>TASTE SENSATION</span>
            <span>CULINARY EXCELLENCE</span>
            <span>TASTE SENSATION</span>
          </div>
        </div>

        {/* Footer Content */}
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <div className={styles.logoText}>
              NEW
              <br />
              WAVE
            </div>
          </div>

          <div className={styles.footerColumns}>
            <div className={styles.footerColumn}>
              <h3>VISIT US</h3>
              <p>
                123 Gourmet Avenue
                <br />
                Culinary District
                <br />
                Mumbai 400001
              </p>
            </div>

            <div className={styles.footerColumn}>
              <h3>HOURS</h3>
              <p>
                Monday - Thursday: 11am - 10pm
                <br />
                Friday - Saturday: 11am - 11pm
                <br />
                Sunday: 11am - 9pm
              </p>
            </div>

            <div className={styles.footerColumn}>
              <h3>CONTACT</h3>
              <p>
                reservations@newwave.com
                <br />
                +1 (212) 555-1234
              </p>
              <div className={styles.footerSocial}>
                <Link href="#" aria-label="Instagram">
                  📷
                </Link>
                <Link href="#" aria-label="Facebook">
                  📘
                </Link>
                <Link href="#" aria-label="Twitter">
                  🐦
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2025 New Wave Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
