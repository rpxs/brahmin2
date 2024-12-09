"use client";

import Image from "next/image";

const Footer = () => {
  return (
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
  );
};

export default Footer;
