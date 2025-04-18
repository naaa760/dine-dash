"use client";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./menu.module.css";

// Food component
function FoodItem({ style, content }) {
  return (
    <div className={styles.foodItem} style={style}>
      {content}
    </div>
  );
}

// Welcome Message component
function WelcomeMessage() {
  const welcomeText = "WELCOME TO THE MENU";
  const foodEmojis = [
    "🍔",
    "🧁",
    "🍰",
    "🍪",
    "🍩",
    "🥐",
    "🥧",
    "🍦",
    "🍕",
    "🍫",
    "🍮",
    "🍨",
    "🥞",
    "🧇",
    "🍬",
    "🍭",
  ];

  return (
    <div className={styles.welcomeMessage}>
      <div className={styles.welcomeText}>
        {welcomeText.split("").map((letter, index) => {
          // Skip spaces in animation but keep them for display
          if (letter === " ") {
            return <div key={index} style={{ width: "20px" }}></div>;
          }

          // Get a random emoji for each letter
          const randomEmoji =
            foodEmojis[Math.floor(Math.random() * foodEmojis.length)];

          return (
            <div
              key={index}
              className={styles.welcomeLetter}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.welcomeEmoji}>{randomEmoji}</div>
              {letter}
            </div>
          );
        })}
      </div>
      <div className={styles.welcomeSubtext}>
        Delicious delights await you...
      </div>
    </div>
  );
}

function MenuContent() {
  const [activeTab, setActiveTab] = useState("main");
  const searchParams = useSearchParams();
  const [foodItems, setFoodItems] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 6000);

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveTab(hash);
    }

    const createFoodItems = () => {
      const newFoodItems = [];
      const numberOfItems = 50;
      const foodTypes = ["🍔", "🧁", "🍰", "🍪", "🍩", "🥐", "🥧", "🍦"];

      for (let i = 0; i < numberOfItems; i++) {
        const delay = Math.random() * 15;
        const initialLeft = Math.random() * 100;
        const size = Math.random() * 1 + 0.8 + "rem";
        const duration = Math.random() * 15 + 10;
        const xEnd = (Math.random() - 0.5) * 150;
        const rotation = Math.random() * 360 - 180;
        const wobbleDuration = Math.random() * 3 + 2;
        const foodType =
          foodTypes[Math.floor(Math.random() * foodTypes.length)];

        newFoodItems.push({
          id: i,
          content: foodType,
          style: {
            left: `${initialLeft}%`,
            opacity: Math.random() * 0.3 + 0.7, // Higher opacity
            animationDelay: `${delay}s`,
            "--fall-duration": `${duration}s`,
            "--x-end": `${xEnd}px`,
            "--rotation": `${rotation}deg`,
            "--size": size,
            "--wobble-duration": `${wobbleDuration}s`,
          },
        });
      }

      setFoodItems(newFoodItems);
    };

    createFoodItems();

    return () => clearTimeout(timer);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.menuContainer}>
      {showWelcome && <WelcomeMessage />}

      {/* Food Items */}
      {foodItems.map((item) => (
        <FoodItem key={item.id} style={item.style} content={item.content} />
      ))}

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>NEW WAVE</div>
          </div>
          <h1 className={styles.heroTitle}>Enjoy a Delicious</h1>
        </div>
      </div>

      <div className={styles.specialtySection}>
        <div className={styles.specialtyContent}>
          <h2 className={styles.specialtyTitle}>Our Specialty</h2>
          <p className={styles.specialtyDescription}>
            Experience the perfect blend of traditional flavors and modern
            culinary techniques. Each dish is crafted with passion and the
            finest ingredients to create an unforgettable dining experience.
          </p>
          <div className={styles.specialtyButton}>Explore Our Kitchen</div>
        </div>
        <div className={styles.specialtyImageContainer}>
          <Image
            src="/dishh.jpg"
            alt="Signature Dish"
            width={500}
            height={400}
            className={styles.specialtyImage}
          />
        </div>
      </div>

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

      <div className={styles.privateDiningSection}>
        <div className={styles.privateDiningImageContainer}>
          <Image
            src="/coo.jpg"
            alt="Private Dining Experience"
            width={600}
            height={500}
            className={styles.privateDiningImage}
          />
        </div>
        <div className={styles.privateDiningContent}>
          <h2 className={styles.privateDiningTitle}>
            Organize your unique event or personal dining occurrence with us
          </h2>
          <p className={styles.privateDiningDescription}>
            New Wave is conveniently located in the heart of the bustling city,
            offering an unrivalled experience of Paris in all its Garden City
            glory. Whether you are hosting a networking event, a business
            meeting or a birthday bash, a memorable experience awaits. Our
            restaurants are versatile to suit your needs, and you can be assured
            of excellent menu selections and personalised service.
          </p>
          <div className={styles.privateDiningButton}>ENQUIRE NOW</div>
        </div>
      </div>

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
            <div className={`${styles.menuItem} ${styles.beefWellington}`}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>Beef Wellington</h3>
                <div className={styles.menuItemPrice}>$58</div>
              </div>
              <p className={styles.menuItemDescription}>
                Foie Gras, Mushroom Duxelles, Red Wine Jus
              </p>
              <div className={styles.previewImage}>
                <Image
                  src="/ma1.jpg"
                  alt="Beef Wellington"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className={`${styles.menuItem} ${styles.lobsterThermidor}`}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>Lobster Thermidor</h3>
                <div className={styles.menuItemPrice}>$68</div>
              </div>
              <p className={styles.menuItemDescription}>
                Brandy Cream Sauce, Gruyère Cheese, Mustard
              </p>
              <div className={styles.previewImage}>
                <Image
                  src="/ma2.jpg"
                  alt="Lobster Thermidor"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className={`${styles.menuItem} ${styles.duckConfit}`}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>Duck Confit</h3>
                <div className={styles.menuItemPrice}>$42</div>
              </div>
              <p className={styles.menuItemDescription}>
                Crispy Skin, Orange Gastrique, Pomme Purée
              </p>
              <div className={styles.previewImage}>
                <Image
                  src="/ma3.jpg"
                  alt="Duck Confit"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className={`${styles.menuItem} ${styles.seaBass}`}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>Pan-Seared Sea Bass</h3>
                <div className={styles.menuItemPrice}>$46</div>
              </div>
              <p className={styles.menuItemDescription}>
                Saffron Risotto, Fennel Confit, Champagne Beurre Blanc
              </p>
              <div className={styles.previewImage}>
                <Image
                  src="/ma4.jpg"
                  alt="Pan-Seared Sea Bass"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
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
            <div className={`${styles.menuItem} ${styles.durianPuff}`}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>
                  Mao Shan Wang Durian Puff
                </h3>
                <div className={styles.menuItemPrice}>$22</div>
              </div>
              <p className={styles.menuItemDescription}>
                Choux Pastry, Mao Shan Wang Durian Mousse
              </p>
              <div className={styles.previewImage}>
                <Image
                  src="/cak1.jpg"
                  alt="Mao Shan Wang Durian Puff"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className={`${styles.menuItem} ${styles.eggTart}`}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>
                  Bird&apos;s Nest Egg Tart
                </h3>
                <div className={styles.menuItemPrice}>$16</div>
              </div>
              <p className={styles.menuItemDescription}>Baked Custard</p>
              <div className={styles.previewImage}>
                <Image
                  src="/cak2.jpg"
                  alt="Bird's Nest Egg Tart"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className={`${styles.menuItem} ${styles.matchaCheesecake}`}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>
                  Matcha Green Tea Cheesecake
                </h3>
                <div className={styles.menuItemPrice}>$18</div>
              </div>
              <p className={styles.menuItemDescription}>
                Azuki Red Bean, White Chocolate Ganache
              </p>
              <div className={styles.previewImage}>
                <Image
                  src="/cak3.jpg"
                  alt="Matcha Green Tea Cheesecake"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className={`${styles.menuItem} ${styles.chocolateSouffle}`}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.menuItemName}>Chocolate Soufflé</h3>
                <div className={styles.menuItemPrice}>$20</div>
              </div>
              <p className={styles.menuItemDescription}>
                Valrhona Chocolate, Vanilla Bean Ice Cream
              </p>
              <div className={styles.previewImage}>
                <Image
                  src="/cak4.jpg"
                  alt="Chocolate Soufflé"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
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
        <span>Made by Neha</span>
      </div>
    </div>
  );
}

// Loading fallback component
function MenuLoading() {
  return <div className={styles.loading}>Loading menu...</div>;
}

export default function RestaurantMenu() {
  return (
    <div className={styles.menuPage}>
      <Suspense fallback={<MenuLoading />}>
        <MenuContent />
      </Suspense>
    </div>
  );
}
