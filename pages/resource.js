"use client";

import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/resource.css" />
        <link rel="icon" href="/Brahmin.png" type="image/x-icon" />
      </Head>

      <Navbar />

      <div className="container">
        <h1>Resources for Brahmin Vegetarian Restaurant:</h1>

        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Welcome to our Brahmin Restaurant Resources Page. Here, you'll find
            a curated list of resources and tools we used to create our website.
          </p>
        </section>

        <section id="learning-materials">
          <h2>Work Logs/TSA Documents</h2>
          <ul>
            <li>
              <a
                href="https://drive.google.com/drive/folders/1G8Sf8GKLQvkIHAHU9qyY45cfUIqX2je7"
                className="tsadocs"
                target="_blank"
                rel="noopener noreferrer"
              >
                TSA Documents (work logs, copyright checklist)
              </a>
            </li>
          </ul>
        </section>

        <section id="interactive-tools">
          <h2>Sources</h2>
          <ul>
            <li>
              <a
                href="http://hhdenver.com/p/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Other Restaurants That Are Inspiration (Hyderabad House)
              </a>
            </li>
            <li>
              <a
                href="https://indiaskitchen1.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Another Restaurant Inspiration (India's Kitchen)
              </a>
            </li>
          </ul>
        </section>

        <section id="video-webinars">
          <h2>Summary of Resources:</h2>
          <p>All images are NON-COPYRIGHT stock images.</p>
          <p>All sources used in articles are cited above.</p>
        </section>
      </div>

      <Footer />
    </>
  );
}
