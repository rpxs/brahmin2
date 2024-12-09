"use client";

import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Reservation() {
  return (
    <>
      <Head>
        <title>Reservation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/Reservation.css" />
        <link rel="icon" href="/Brahmin.png" type="image/x-icon" />
      </Head>

      <Navbar />

      <section className="reservation-container">
        <h1 className="reservation-title">Make a Reservation</h1>
        <p className="reservation-subtitle">
          Plan your visit to Brahmin and enjoy an exceptional dining experience.
        </p>

        <div className="reservation-form-container">
          <form className="reservation-form">
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="123-456-7890"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" required />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests:</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                placeholder="2"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="special-request">Special Requests:</label>
              <textarea
                id="special-request"
                name="special-request"
                placeholder="Any dietary restrictions or special requests..."
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Reserve Your Table
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
