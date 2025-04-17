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

        {/* Add curved wave at the top of footer */}
        <div className={styles.footerWave}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className={styles.wave1}
              d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,224C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className={styles.wave2}
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className={styles.wave3}
              d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

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
            {/* Add curved decoration under logo */}
            <svg
              className={styles.logoCurve}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#c9a77c"
                d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,133.3C672,160,768,192,864,197.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
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
              {/* Add curved decoration */}
              <svg
                className={styles.columnCurve}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                preserveAspectRatio="none"
              >
                <path
                  fill="#c9a77c"
                  d="M41.3,-51.2C52.9,-42.1,61.2,-28.5,64.9,-13.6C68.7,1.3,68,17.6,60.8,30.1C53.6,42.7,39.9,51.5,25.3,57.4C10.7,63.3,-4.9,66.3,-19.2,62.5C-33.5,58.7,-46.5,48.1,-54.8,34.7C-63.1,21.3,-66.7,5.1,-64.2,-10.1C-61.7,-25.3,-53.1,-39.5,-41.3,-48.5C-29.5,-57.5,-14.7,-61.3,0.2,-61.6C15.2,-61.8,29.7,-60.4,41.3,-51.2Z"
                  transform="translate(100 100)"
                />
              </svg>
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
              {/* Add curved decoration */}
              <svg
                className={styles.columnCurve}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                preserveAspectRatio="none"
              >
                <path
                  fill="#c9a77c"
                  d="M47.7,-57.2C59.5,-45.9,65.8,-29.1,68.2,-12.1C70.6,4.9,69.1,22.1,60.9,35.8C52.7,49.5,37.9,59.7,21.8,65.3C5.7,70.9,-11.6,71.9,-27.4,66.5C-43.2,61.1,-57.5,49.3,-65.1,34.1C-72.7,18.9,-73.6,0.3,-68.8,-15.8C-64,-31.9,-53.5,-45.5,-40.4,-56.5C-27.3,-67.5,-11.6,-75.9,3.2,-79.7C18,-83.5,35.9,-82.7,47.7,-73.4C59.5,-64.1,71.2,-46.3,47.7,-57.2Z"
                  transform="translate(100 100)"
                />
              </svg>
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
              {/* Add curved decoration */}
              <svg
                className={styles.columnCurve}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                preserveAspectRatio="none"
              >
                <path
                  fill="#c9a77c"
                  d="M39.2,-48.1C51.8,-35.6,63.8,-24.8,67.7,-11.3C71.6,2.2,67.3,18.5,58.5,31.5C49.7,44.5,36.3,54.2,21.2,60.9C6.1,67.5,-10.7,71.1,-25.4,66.9C-40.1,62.7,-52.7,50.7,-60.9,36.2C-69.1,21.7,-72.9,4.7,-69.9,-11.1C-66.9,-26.9,-57.1,-41.5,-44.1,-53.8C-31.1,-66.1,-15.6,-76.1,-0.9,-75C13.7,-73.9,27.5,-61.7,39.2,-48.1Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2025 New Wave Restaurant. All rights reserved.</p>
          </div>
        </div>

        {/* Add curved separator at the bottom */}
        <svg
          className={styles.footerCurve}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#c9a77c"
            d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </footer>
    </div>
  );
}
