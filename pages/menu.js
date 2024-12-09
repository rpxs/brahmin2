"use client";

import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Menu() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Menu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/menu.css" />
        <link rel="icon" href="/Brahmin.png" type="image/x-icon" />
      </Head>

      <Navbar />

      <section className="menu-container">
        <h1 className="menu-title">Our Menu</h1>
        <p className="menu-subtitle">
          Experience the flavors and essence of vegetarian Indian cuisine.
        </p>

        <motion.div
          className="menu-grid"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }, // Stagger animations for cards
            },
          }}
        >
          {[
            {
              title: "Vegetarian Thali",
              description:
                "A rich combination of traditional Indian dishes served with rice and naan, garnished with a touch of love.",
              price: "$15.99",
              imgSrc: "icons/vegetarian-icon.svg",
              alt: "Vegetarian Icon",
            },
            {
              title: "Spiced Lentil Soup",
              description:
                "A hearty, spiced lentil soup infused with cumin and coriander, perfect for warming up on a chilly day.",
              price: "$7.99",
              imgSrc: "icons/soup-icon.svg",
              alt: "Soup Icon",
            },
            {
              title: "Paneer Butter Masala",
              description:
                "Delicately spiced paneer cubes simmered in a creamy, tomato-based sauce with aromatic spices.",
              price: "$12.99",
              imgSrc:
                "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
              alt: "Paneer Icon",
            },
            {
              title: "Chole Bhature",
              description:
                "Spicy chickpea curry paired with fluffy, deep-fried bread, a classic favorite.",
              price: "$11.99",
              imgSrc: "icons/chole-icon.svg",
              alt: "Chole Icon",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="menu-card"
              variants={cardVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="card-overlay"></div>
              <h2 className="menu-item-title">{item.title}</h2>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">{item.price}</p>
              <img
                src={item.imgSrc}
                alt={item.alt}
                width={50}
                height={50}
                className="menu-icon"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
