"use client";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./menu.module.css";

// Create a client component that uses useSearchParams
function MenuContent() {
  const [activeTab, setActiveTab] = useState("drink");
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the hash from the URL (without the #)
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.menuContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>NEW WAVE</div>
          </div>
          <h1 className={styles.heroTitle}>Enjoy a Delicious</h1>
        </div>
      </div>

      {/* Menu Navigation */}
      <div className={styles.menuNav}>
        <Link
          href="#drink"
          className={`${styles.menuTab} ${
            activeTab === "drink" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("drink")}
        >
          Drink Menu
        </Link>
        <Link
          href="#main"
          className={`${styles.menuTab} ${
            activeTab === "main" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("main")}
        >
          Mains Menu
        </Link>
        <Link
          href="#desserts"
          className={`${styles.menuTab} ${
            activeTab === "desserts" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("desserts")}
        >
          Desserts Menu
        </Link>
        <Link
          href="#delivery"
          className={`${styles.menuTab} ${
            activeTab === "delivery" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("delivery")}
        >
          Delivery Menu
        </Link>
      </div>

      {/* Drink Menu */}
      <div
        className={`${styles.menuContent} ${
          activeTab === "drink" ? styles.active : ""
        }`}
        id="drink"
      >
        <div className={styles.menuSection}>
          <div className={styles.menuSideLabel}>Drink</div>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>The Wallace Martini</h3>
                <div className={styles.menuItemPrice}>$19</div>
              </div>
              <p className={styles.menuItemDescription}>
                Grey Goose Or Tanqueray N10, Dry Vermouth, Bitters
              </p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>Balka Martini</h3>
                <div className={styles.menuItemPrice}>$21</div>
              </div>
              <p className={styles.menuItemDescription}>
                Grey Goose, Olive Brine, Caviar
              </p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>House Smoked Manhattan</h3>
                <div className={styles.menuItemPrice}>$18</div>
              </div>
              <p className={styles.menuItemDescription}>
                Garnished with a luxardo cherry
              </p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>Martinez</h3>
                <div className={styles.menuItemPrice}>$20</div>
              </div>
              <p className={styles.menuItemDescription}>
                Tanqueray 10, Vermouth, Luxardo Maraschino, Bitters
              </p>
            </div>
          </div>
          <div className={styles.menuImage}>
            <Image
              src="/3.jpg"
              alt="Signature Cocktails"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div
        className={`${styles.menuContent} ${
          activeTab === "main" ? styles.active : ""
        }`}
        id="main"
      >
        <div className={styles.menuSection}>
          <div className={styles.menuSideLabel}>Main</div>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>
                  Wok Fried Lobster Mapo Tofu
                </h3>
                <div className={styles.menuItemPrice}>$45</div>
              </div>
              <p className={styles.menuItemDescription}>
                Spring Onions, Hot Bean Sauce
              </p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>Pan Seared Black Cod</h3>
                <div className={styles.menuItemPrice}>$49</div>
              </div>
              <p className={styles.menuItemDescription}>
                Wild Mushrooms, Foie Gras Sauce
              </p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>Seafood Fried Rice</h3>
                <div className={styles.menuItemPrice}>$25</div>
              </div>
              <p className={styles.menuItemDescription}>
                Shrimp, Scallops, Crab Roe
              </p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>
                  Canadian Clams with Garlic Millet Pepper
                </h3>
                <div className={styles.menuItemPrice}>$22</div>
              </div>
              <p className={styles.menuItemDescription}>
                Chinese Parsley, Chillies, White Pepper Sauce
              </p>
            </div>
          </div>
          <div className={styles.menuImage}>
            <Image src="/1.jpg" alt="Main Courses" width={400} height={500} />
          </div>
        </div>
      </div>

      {/* Desserts Menu */}
      <div
        className={`${styles.menuContent} ${
          activeTab === "desserts" ? styles.active : ""
        }`}
        id="desserts"
      >
        <div className={styles.menuSection}>
          <div className={styles.menuSideLabel}>Desserts</div>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>
                  Mao Shan Wang Durian Puff
                </h3>
                <div className={styles.menuItemPrice}>$22</div>
              </div>
              <p className={styles.menuItemDescription}>
                Choux Pastry, Mao Shan Wang Durian Mousse
              </p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>
                  Deep Fried Egg White Souffle
                </h3>
                <div className={styles.menuItemPrice}>$14</div>
              </div>
              <p className={styles.menuItemDescription}>
                Red Bean Paste, Bananas
              </p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>
                  Bird&apos;s Nest Egg Tart
                </h3>
                <div className={styles.menuItemPrice}>$16</div>
              </div>
              <p className={styles.menuItemDescription}>Baked Custard</p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>Martinez</h3>
                <div className={styles.menuItemPrice}>$18</div>
              </div>
              <p className={styles.menuItemDescription}>
                Lemongrass, Fruit Cocktail
              </p>
            </div>
          </div>
          <div className={styles.menuImage}>
            <Image src="/2.jpg" alt="Desserts" width={400} height={500} />
          </div>
        </div>
      </div>

      {/* Delivery Menu */}
      <div
        className={`${styles.menuContent} ${
          activeTab === "delivery" ? styles.active : ""
        }`}
        id="delivery"
      >
        <div className={styles.menuSection}>
          <div className={styles.menuSideLabel}>Delivery</div>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>Poached Chinese Cabbage</h3>
                <div className={styles.menuItemPrice}>$24</div>
              </div>
              <p className={styles.menuItemDescription}>
                Homemade Fish Beancurd, Dried Scallops
              </p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>
                  Deep Fried Butter King Prawns
                </h3>
                <div className={styles.menuItemPrice}>$19</div>
              </div>
              <p className={styles.menuItemDescription}>
                Egg Floss, Curry Leaves, Chillies, Garlic
              </p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>
                  Kung Po Scallops & Prawns
                </h3>
                <div className={styles.menuItemPrice}>$16</div>
              </div>
              <p className={styles.menuItemDescription}>
                Cashew Nuts, Mixed Spices, Dried Chillies
              </p>
            </div>

            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>
                  Spaghetti Seafood Marinara
                </h3>
                <div className={styles.menuItemPrice}>$30</div>
              </div>
              <p className={styles.menuItemDescription}>
                Clams, Mussels, Crab Meat, Prawns, Tomatoes, Basil, Garlic
              </p>
            </div>
          </div>
          <div className={styles.menuImage}>
            <Image
              src="/4.jpg"
              alt="Delivery Options"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className={styles.backToHome}>
        <Link href="/" className={styles.backButton}>
          Back to Home
        </Link>
      </div>

      {/* Made with Badge */}
      <div className={styles.madeWith}>
        <span>Made in Framer</span>
      </div>
    </div>
  );
}

// Loading fallback component
function MenuLoading() {
  return <div className={styles.loading}>Loading menu...</div>;
}

// Main page component with Suspense
export default function RestaurantMenu() {
  return (
    <div className={styles.menuPage}>
      <Suspense fallback={<MenuLoading />}>
        <MenuContent />
      </Suspense>
    </div>
  );
}
