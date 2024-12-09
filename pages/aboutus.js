"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function AboutUs() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>About Us - Brahmin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/aboutus.css" />
        <link rel="icon" href="/Brahmin.png" type="image/x-icon" />
      </Head>

      <Navbar />

      <section className="about-us bg-gray-100">
        <div className="about-hero">
          <h1 className="text-black-important font-gummy">
            Welcome to Brahmin
          </h1>
          <p>Celebrating the Essence of Vegetarian Indian Cuisine</p>
        </div>

        <div className="about-content">
          <div className="content-text">
            <h2>Our Mission</h2>
            <p>
              At Brahmin, we bring together the rich heritage of Indian
              vegetarian cuisine with a modern approach. Our commitment is to
              provide authentic and sustainable dining experiences that delight
              our guests.
            </p>
            <p>
              We take pride in using only the freshest ingredients and
              traditional techniques, ensuring every dish tells a story of
              flavor and passion.
            </p>
            <p>
              Join us and immerse yourself in a dining experience that honors
              our roots and embraces the future.
            </p>
          </div>
          <div className="content-image">
            <Image
              src="/pexels-chanwalrus-941869.jpg"
              alt="Image of Indian dishes"
              width={600}
              height={400}
            />
          </div>
        </div>

        <motion.div
          className="cards-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            {
              title: "Our Values",
              text: "We commit to a farm-to-table approach to ensure the best quality ingredients.",
            },
            {
              title: "Authentic Recipes",
              text: "Traditional Indian recipes passed down through generations.",
            },
            {
              title: "Community Focus",
              text: "Supporting local farmers and the community through vibrant connections.",
            },
            {
              title: "Our Story",
              text: "We started as kids who wanted to share authentic South Indian foods with Parker.",
            },
          ].map((card, index) => (
            <motion.div className="card" variants={cardVariants} key={index}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="cards-extra-container flex md:flex-row flex-col">
        {[
          {
            title: "Our Heritage",
            text: "Inspired by South Indian heritage, we produce outstanding vegetarian dishes.",
          },
          {
            title: "Customer Experiences",
            text: 'Our guests love Brahmin. One guest said, "Brahmin is my go-to for Indian food!"',
          },
          {
            title: "Commitment to Sustainability",
            text: "We promise eco-friendly practices and farm-fresh ingredients.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="extra-card shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.text}</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}
