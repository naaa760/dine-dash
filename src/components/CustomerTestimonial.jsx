"use client";

import Image from "next/image";
import styles from "./CustomerTestimonial.module.css";

export default function CustomerTestimonial() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialContent}>
          <h3 className={styles.testimonialHeading}>OUR CUSTOMER SAYS</h3>
          <h2 className={styles.testimonialTitle}>
            Elegant Taste, Culinary Delight!
            <br />
            Encountering utmost emotion
          </h2>

          <div className={styles.testimonialQuote}>
            <div className={styles.quoteContent}>
              <p className={styles.quoteText}>
                The elegant environment, flawless hospitality. Each meal is a
                work of art, exquisitely displayed and filled with taste. A top
                suggestion for those pursuing a sample of gastronomic excellence
                within a luxurious atmosphere.
              </p>
              <p className={styles.customerName}>-- hamus anderson</p>
            </div>
          </div>
        </div>

        <div className={styles.foodImagesGrid}>
          <div className={styles.foodImageWrapper1}>
            <Image
              src="/ni.jpg"
              alt="Delicious food"
              fill
              className={styles.foodImage}
            />
          </div>
          <div className={styles.foodImageWrapper2}>
            <Image
              src="/ni2.jpg"
              alt="Exquisite dish"
              fill
              className={styles.foodImage}
            />
          </div>
          <div className={styles.foodImageWrapper3}>
            <Image
              src="/ni3.jpg"
              alt="Culinary creation"
              fill
              className={styles.foodImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
