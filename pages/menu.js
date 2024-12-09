"use client";

import Head from "next/head";
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
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            {
              title: "Vegetarian Thali",
              description:
                "A rich combination of traditional Indian dishes served with rice and naan, garnished with a touch of love.",
              price: "$15.99",
              imgSrc:
                "https://t4.ftcdn.net/jpg/02/75/39/13/360_F_275391367_Hro3Ql1iFsCNtd86zWYuqa0Qe5cc7goE.jpg",
            },
            {
              title: "Spiced Lentil Soup",
              description:
                "A hearty, spiced lentil soup infused with cumin and coriander, perfect for warming up on a chilly day.",
              price: "$7.99",
              imgSrc:
                "https://challenge22.com/wp-content/uploads/Indian-Lentil-Soup-1.jpg",
            },
            {
              title: "Paneer Butter Masala",
              description:
                "Delicately spiced paneer cubes simmered in a creamy, tomato-based sauce with aromatic spices.",
              price: "$12.99",
              imgSrc:
                "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
            },
            {
              title: "Chole Bhature",
              description:
                "Spicy chickpea curry paired with fluffy, deep-fried bread, a classic favorite.",
              price: "$11.99",
              imgSrc:
                "https://i.ytimg.com/vi/wAv-mFU7eus/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD4QzhyIzsn3bEMvu2NXaXRKS7qgg",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="menu-card"
              style={{
                backgroundImage: `url(${item.imgSrc})`,
              }}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="card-content">
                <h2 className="menu-item-title">{item.title}</h2>
                <p className="menu-item-description">{item.description}</p>
                <p className="menu-item-price">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
