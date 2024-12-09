import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "@/components/FlipWords";
import { motion } from "framer-motion";

export default function Home() {
  const words = ["spoon", "bite", "morsel", "grain"];

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/Brahmin.png" type="image/x-icon" />
      </Head>

      <Navbar />

      <section className="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/video-placeholder.jpg"
          id="bg-video"
        >
          <source src="/Untitled video (1).mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h2 className="slogan font-gummy">Bringing Flavors from Home</h2>
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="description flex flex-row justify-center font-gummy">
              One <FlipWords words={words} /> at a time
            </div>
          </motion.div>
        </div>
      </section>

      <div className="quadrants">
        <Link href="/aboutus" className="linka">
          <div className="quadrant1">
            <h2 className="quadranttitle font-gummy">About Brahmin</h2>
            <p className="quadrant-text">
              Click here to learn more about Brahmin and who we are.
            </p>
          </div>
        </Link>
        <Link href="/resource" className="linka">
          <div className="quadrant2">
            <h2 className="quadranttitle font-gummy">
              Resources to learn more
            </h2>
            <p className="quadrant-text">
              Click here to learn more about where we get our ideas from, and
              our sources.
            </p>
          </div>
        </Link>
        <Link href="/process" className="linka">
          <div className="quadrant3">
            <h2 className="quadranttitle font-gummy">
              Our Farm to Table Process
            </h2>
            <p className="quadrant-text">
              Click here to learn more about how we hand pick our ingredients
              from farms and serve it right to your table.
            </p>
          </div>
        </Link>
        <Link href="/menu" className="linka">
          <div className="quadrant4">
            <h2 className="quadranttitle font-gummy">Menu</h2>
            <p className="quadrant-text">Click here to see our menu!</p>
          </div>
        </Link>
      </div>

      <footer className="footer-act">
        <div className="footer-content">
          <div className="footer-section-about">
            <h1 className="logo-text">Brahmin</h1>
            <p>
              At Brahmin, we celebrate the rich heritage of vegetarian Indian
              cuisine, blending tradition with modern tastes.
            </p>
            <Image
              src="/Brahmin.png"
              className="logof"
              alt="logo"
              width={50}
              height={50}
            />
            <p className="footer-credit">
              Bringing Flavors from Home, One Bite at a Time.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
