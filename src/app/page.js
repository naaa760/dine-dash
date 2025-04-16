"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
      });
    }
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
              WAVE
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
            <div className={styles.awardLogo}>
              <Image
                src="/travelers-choice.png"
                alt="Travelers' Choice"
                width={50}
                height={50}
              />
            </div>
            <span className={styles.awardYear}>2023</span>
          </div>
          <div className={styles.award}>
            <div className={styles.awardLogo}>
              <Image
                src="/michelin-guide.png"
                alt="Michelin Guide"
                width={50}
                height={50}
              />
            </div>
            <span className={styles.awardYear}>2023</span>
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

        {/* Made with Badge */}
        <div className={styles.madeWith}>
          <span>Made in Framer</span>
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
            New Wave is more than just food—it's a celebration of culinary
            passion, crafted from an inspiring journey.
          </p>
          <div className={styles.exquisiteButton}>LEARN MORE</div>
        </div>
      </section>
    </div>
  );
}
