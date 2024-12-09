"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Process() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Our Process</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/process.css" />
      </Head>

      <Navbar />

      <section className="process-container">
        <h1 className="process-title">Our Farm to Table Approach</h1>
        <p className="process-subtitle">
          Discover how we bring the freshest, most authentic vegetarian dishes
          to your table.
        </p>

        <motion.div
          className="process-steps"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }, // Stagger the animations
            },
          }}
        >
          {[
            {
              icon: "🌱",
              title: "Sourcing Fresh Ingredients",
              description:
                "We partner with local farms to source the highest quality, organic produce, ensuring every ingredient is fresh and sustainable.",
            },
            {
              icon: "🌾",
              title: "Harvesting",
              description:
                "Our farmers carefully harvest produce at peak ripeness, preserving natural flavors and nutrients for an unparalleled dining experience.",
            },
            {
              icon: "🥘",
              title: "Preparation & Cooking",
              description:
                "Our chefs skillfully prepare each dish using traditional techniques, infusing each plate with authentic flavors and creativity.",
            },
            {
              icon: "🍽️",
              title: "Serving to Your Table",
              description:
                "We serve our dishes with care, bringing the farm-to-table philosophy to life and offering an unforgettable dining experience.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              variants={cardVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="step-icon">{step.icon}</div>
              <h2 className="step-title">{step.title}</h2>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
