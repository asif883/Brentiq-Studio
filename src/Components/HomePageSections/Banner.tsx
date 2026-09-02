"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const dots = Array.from({ length: 740 }, (_, index) => {
    const y = 1 - (index / 739) * 2;
    const radius = Math.sqrt(1 - y * y);
    const angle = index * Math.PI * (3 - Math.sqrt(5));
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const cx = Math.round((250 + x * 219) * 1000) / 1000;
    const cy = Math.round((250 + y * 219) * 1000) / 1000;
    const size = Math.round((0.72 + ((z + 1) / 2) * 0.82) * 1000) / 1000;
    const opacity = Math.round((0.14 + ((z + 1) / 2) * 0.5) * 1000) / 1000;

  return {
        cx,
        cy,
        size,
        opacity,
  };
});

function ParticleSphere() {
  return (
    <div className="ac-particle-sphere" aria-hidden="true">
            <svg viewBox="0 0 500 500" aria-hidden="true">
                <defs>
                    <radialGradient id="sphere-fade">
                        <stop offset="0" stopColor="white" stopOpacity=".95" />
                        <stop offset=".72" stopColor="white" stopOpacity=".62" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <mask id="sphere-mask">
                        <circle cx="250" cy="250" r="245" fill="url(#sphere-fade)" />
                    </mask>
                </defs>
                <g mask="url(#sphere-mask)">
                    {dots.map((dot, index) => (
                        <circle key={index} cx={dot.cx} cy={dot.cy} r={dot.size} fill="white" opacity={dot.opacity} />
                    ))}
                </g>
            </svg>
    </div>
  );
}


const LinkedInIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.14 3 3.25 3.9 3.25 5s.89 2 2 2 2-.9 2-2-.9-2-2-2ZM20.75 13.41c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.09-3.38 1.85V8.5H9.67V20h3.38v-6.4c0-1.69.32-3.33 2.42-3.33 2.07 0 2.1 1.94 2.1 3.44V20h3.38l-.2-6.59Z" />
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 21v-8h2.75l.41-3.13H13.5V7.87c0-.91.25-1.53 1.56-1.53h1.67V3.54c-.29-.04-1.28-.13-2.43-.13-2.41 0-4.06 1.47-4.06 4.17v2.29H7.5V13h2.74v8h3.26Z" />
  </svg>
);

export default function Banner() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
        <section id="home" className="ac-hero-section" aria-labelledby="hero-heading">
      <div className="ac-hero-stage">
        <div className="ac-hero-card">
          <Link className="ac-brand" href="#home" aria-label="Brentiq home">Brentiq<span>.</span></Link>
          <nav className={`ac-nav-shell${menuOpen ? " ac-nav-open" : ""}`} aria-label="Hero navigation">
            <div className="ac-nav-links">
              {navigation.map((item) => <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
            </div>
            <button className="ac-mobile-menu" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </nav>
          <Link className="ac-start-button" href="#contact"><span>Get Started</span><i><ArrowRight /></i></Link>
          <ParticleSphere />
          <div className="ac-hero-copy">
            <p className="ac-kicker">Crafting Ideas. Creating Impact.</p>
            <h1 id="hero-heading">We Build <em>Digital  Experiences</em> That Matter.</h1>
            <p>We craft modern digital experiences that turn ideas into impact, helping brands connect, grow, and stand out in a digital world.</p>
            <Link className="ac-hero-button" href="#contact"><span>Book a Call</span><i><ArrowRight /></i></Link>
          </div>
          <aside className="ac-contact-card" id="contact" aria-label="Contact details">
            <small>CONTACT US</small>
            <a className="ac-email" href="mailto:hello@brentiq.com">hello@brentiq.com</a>
            <div className="ac-socials">
                <a href="#linkedin" aria-label="LinkedIn"><LinkedInIcon /></a>
                <a href="#facebook" aria-label="Facebook"><FacebookIcon /></a>
                <a href="#instagram" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </aside>
          <div className="ac-stats">
            <div><strong>8+</strong><span>Countries<br />reached</span></div>
            <div><strong>120+</strong><span>Products<br />launched</span></div>
            <div><strong>4.9</strong><span>Average<br />rating</span></div>
          </div>
        </div>
      </div>
      <div className="split-overlay" aria-hidden="true"><div className="split-panel top" /><div className="split-panel bottom" /><div className="split-logo">Brentiq<span>.</span></div></div>
  
    <style>{`
    /* ========================================
        HERO SECTION
    ======================================== */

    .ac-hero-section {
        position: relative;
        width: 100%;
        height: 100dvh;
        min-height: 680px;
        overflow: hidden;
        background: #fff;
        font-family: Arial, Helvetica, sans-serif;
    }

    .ac-hero-stage {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }

    .ac-hero-card {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 24px;
        background:
        radial-gradient(
            circle at 14% 16%,
            rgba(255, 255, 255, 0.3),
            transparent 32%
        ),
        radial-gradient(
            circle at 73% 62%,
            rgba(139, 99, 220, 0.22),
            transparent 39%
        ),
        linear-gradient(
            108deg,
            #ddd3f4 0%,
            #a98bdf 28%,
            #7553c8 57%,
            #3b2c78 79%,
            #211b4d 100%
        );
        color: #fff;
        isolation: isolate;
    }


    /* ========================================
        BRAND
    ======================================== */

    .ac-brand {
        position: absolute;
        z-index: 5;
        top: 25px;
        left: 28px;

        color: #000;
        font-size: 32px;
        font-weight: 800;
        letter-spacing: -1.5px;
    }

    .ac-brand span,
    .split-logo span {
        color: #d9c9ff;
    }


    /* ========================================
        NAVIGATION
    ======================================== */

    .ac-nav-shell {
        position: absolute;
        z-index: 6;
        top: 0;
        left: 50%;

        display: flex;
        width: 51.5%;
        height: 67px;
        align-items: center;
        justify-content: center;

        border-radius: 0 0 21px 21px;
        background: #fff;

        transform: translateX(-50%);
    }

    .ac-nav-shell::before,
    .ac-nav-shell::after {
        position: absolute;
        top: 0;
        width: 28px;
        height: 28px;
        background: transparent;
        content: "";
    }

    .ac-nav-shell::before {
        right: 100%;
        border-radius: 0 18px 0 0;
        box-shadow: 12px -12px 0 12px #fff;
    }

    .ac-nav-shell::after {
        left: 100%;
        border-radius: 18px 0 0;
        box-shadow: -12px -12px 0 12px #fff;
    }

    .ac-nav-links {
        display: flex;
        width: 82%;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    .ac-nav-links a {
        color: #2d2458;
        font-size: 16px;
        font-weight: 600;
        white-space: nowrap;
        transition: color 0.2s ease;
    }

    .ac-nav-links a:hover {
        color: #7553c8;
    }

    .ac-mobile-menu {
        display: none;
    }


    /* ========================================
        BUTTONS
    ======================================== */

    .ac-start-button,
    .ac-hero-button {
        display: flex;
        width: 146px;
        height: 44px;
        align-items: center;
        justify-content: space-between;
        padding: 0 5px 0 16px;

        border-radius: 999px;
        background: linear-gradient(135deg, #7553c8 0%, #5c3ba6 100%);
        color: #ffffff;
        font-size: 13px;
        font-weight: 600;
        line-height: 1;
        text-decoration: none;

        box-shadow: 0 6px 20px rgba(47, 24, 112, 0.28);
    }

    .ac-start-button {
        position: absolute;
        z-index: 6;
        top: 16px;
        right: 25px;

    }

    .ac-start-button i,
    .ac-hero-button i {
        display: grid;
        place-items: center;

        border-radius: 50%;
        background: #fff;
        color: #7553c8;
    }

    .ac-start-button i {
        width: 32px;
        height: 32px;
    }

    .ac-hero-button i {
        width: 32px;
        height: 32px;
    }

    .ac-start-button svg,
    .ac-hero-button svg {
        width: 15px;
        height: 15px;
        stroke-width: 1.6;
    }


    /* ========================================
        PARTICLE SPHERE
    ======================================== */

    .ac-particle-sphere {
        position: absolute;
        z-index: 1;
        top: 49px;
        right: 15.5%;

        width: min(42vw, 520px);
        height: min(42vw, 520px);

        opacity: 0.68;
        pointer-events: none;

        animation: ac-sphere-drift 18s ease-in-out infinite alternate;
        will-change: transform;
    }

    .ac-particle-sphere svg {
        display: block;
        width: 100%;
        height: 100%;
        animation: ac-sphere-pulse 9s ease-in-out infinite;
        transform-origin: center;
    }


    /* ========================================
        HERO CONTENT
    ======================================== */

    .ac-hero-copy {
        position: absolute;
        z-index: 3;
        top: 25%;
        left: 50%;

        display: flex;
        width: min(860px, 80%);
        align-items: center;
        flex-direction: column;

        text-align: center;

        transform: translateX(-50%);
    }

    .ac-kicker {
        margin: 0 0 28px;
        font-size: 13px;
        font-weight: 500;
        border-radius: 999px;
        background: linear-gradient(135deg, #7553c8, #5c3ba6);
        color: #fff;
        padding: 6px 18px;
        box-shadow: 0 6px 20px rgba(47, 24, 112, 0.28);
    }

    .ac-hero-copy h1 {
        margin: 0;

        font-size: clamp(42px, 5vw, 72px);
        font-weight: 400;
        line-height: 1.08;
        letter-spacing: -3px;
    }

    .ac-hero-copy h1 em {
        font-family: Georgia, "Times New Roman", serif;
        font-weight: 700;
    }

    .ac-hero-copy > p:not(.ac-kicker) {
        max-width: 430px;
        margin: 24px 0 0;

        color: rgba(255, 255, 255, 0.86);
        font-size: 15px;
        line-height: 1.5;
    }

    .ac-hero-button {
        margin-top: 28px;
        background: linear-gradient(135deg, #8d6be3 0%, #7553c8 100%);
    }


    /* ========================================
        CONTACT CARD
    ======================================== */

    .ac-contact-card {
        position: absolute;
        z-index: 5;
        bottom: 0;
        left: 0;

        display: flex;
        width: 27%;
        height: 166px;
        padding: 29px 36px 24px;

        flex-direction: column;

        border-top: 5px solid #fff;
        border-right: 5px solid #fff;
        border-radius: 0 22px 0 0;

        background: linear-gradient(
        135deg,
        rgba(137, 106, 221, 0.8),
        rgba(59, 44, 120, 0.94)
        );
    }

    .ac-contact-card small {
        color: rgba(255, 255, 255, 0.72);
        font-size: 10px;
        letter-spacing: 0.4px;
    }

    .ac-email {
        width: max-content;
        margin-top: 15px;

        color: #fff;
        font-size: 18px;
    }

    .ac-socials {
        display: flex;
        margin-top: 19px;
        gap: 7px;
    }

    .ac-socials a {
        display: grid;
        width: 31px;
        height: 31px;
        place-items: center;

        border-radius: 50%;
        background: rgba(33, 27, 77, 0.82);
        color: #fff;
    }

    .ac-socials svg {
        width: 13px;
        height: 13px;
    }


    /* ========================================
        STATS
    ======================================== */

    .ac-stats {
        position: absolute;
        z-index: 4;
        right: 12%;
        bottom: 33px;

        display: grid;
        width: 48%;

        grid-template-columns: repeat(3, 1fr);

        text-align: center;
    }

    .ac-stats strong {
        display: block;

        font-size: 31px;
        font-weight: 400;
    }

    .ac-stats span {
        display: block;
        margin-top: 11px;

        color: rgba(255, 255, 255, 0.75);
        font-size: 10px;
        line-height: 1.3;
    }


    /* ========================================
        SPLIT INTRO OVERLAY
    ======================================== */

    .split-overlay {
        position: absolute;
        inset: 0;
        z-index: 100;

        overflow: hidden;
        pointer-events: none;
    }

    .split-panel {
        position: absolute;
        left: 0;

        width: 100%;
        height: calc(50% + 2px);

        background: #fff;

        animation-duration: 1.4s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1);
    }

    .split-panel.top {
        top: 0;
        animation-name: split-top;
    }

    .split-panel.bottom {
        bottom: 0;
        animation-name: split-bottom;
    }

    .split-logo {
        position: absolute;
        top: 50%;
        left: 50%;

        color: #181329;
        font-size: 30px;
        font-weight: 800;
        letter-spacing: -2px;

        transform: translate(-50%, -50%);

        animation: logo-fade 1.1s ease forwards;
        animation-delay: 0.2s;
    }


    /* ========================================
        ANIMATIONS
    ======================================== */

    @keyframes split-top {
        to {
        transform: translateY(-100%);
        }
    }

    @keyframes split-bottom {
        to {
        transform: translateY(100%);
        }
    }

    @keyframes logo-fade {
        to {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1.08);
        }
    }

    @keyframes ac-sphere-drift {
        from {
        transform: rotate(-1.5deg) translateY(-2px);
        }

        to {
        transform: rotate(1.5deg) translateY(3px);
        }
    }

    @keyframes ac-sphere-pulse {
        0%,
        100% {
        opacity: 0.82;
        transform: scale(0.98);
        }

        50% {
        opacity: 1;
        transform: scale(1.02);
        }
    }


    /* ========================================
        REDUCED MOTION
    ======================================== */

    @media (prefers-reduced-motion: reduce) {
        .split-panel {
        animation: none;
        }

        .split-logo {
        display: none;
        }

        .ac-particle-sphere {
        animation: none;
        }

        .ac-particle-sphere svg {
        animation: none;
        }
    }



    /* ========================================
        MOBILE RESPONSIVE
    ======================================== */

    @media (max-width: 767px) {

        .ac-hero-stage {
        padding: 10px;
        }

        .ac-hero-card {
        border-radius: 20px;
        }


        /* Brand */

        .ac-brand {
        top: 20px;
        left: 18px;

        font-size: 19px;
        }


        /* Navigation */

        .ac-nav-shell {
        width: 62px;
        height: 58px;
        }

        .ac-nav-shell::before,
        .ac-nav-shell::after {
        display: none;
        }

        .ac-nav-links {
        display: none;
        }

        .ac-nav-shell.ac-nav-open .ac-nav-links {
        position: absolute;
        top: 67px;

        display: flex;
        width: min(320px, calc(100vw - 32px));
        padding: 14px;

        flex-direction: column;
        gap: 4px;

        border: 1px solid rgba(117, 83, 200, 0.18);
        border-radius: 18px;

        background: rgba(255, 255, 255, 0.96);

        box-shadow: 0 18px 48px rgba(33, 27, 77, 0.24);
        }

        .ac-nav-shell.ac-nav-open .ac-nav-links a {
        display: flex;
        min-height: 42px;
        padding: 0 15px;

        align-items: center;

        border-radius: 11px;

        font-weight: 600;
        }

        .ac-mobile-menu {
        display: grid;
        width: 35px;
        height: 35px;
        place-items: center;

        border: 0;
        border-radius: 50%;

        background: #eee9fa;
        color: #3b2c78;
        }

        .ac-mobile-menu svg {
        width: 16px;
        }


        /* Start Button */

        .ac-start-button {
        top: 14px;
        right: 14px;

        width: 38px;
        height: 38px;
        padding: 3px;

        justify-content: center;
        }

        .ac-start-button span {
        display: none;
        }


        /* Particle Sphere */

        .ac-particle-sphere {
        top: 14%;
        right: -145px;

        width: 430px;
        height: 430px;
        }


        /* Hero Content */

        .ac-hero-copy {
        top: 25%;
        width: calc(100% - 30px);
        }

        .ac-kicker {
        margin-bottom: 20px;

        font-size: 12px;
        }

        .ac-hero-copy h1 {
        font-size: clamp(31px, 9vw, 44px);
        letter-spacing: -1.5px;
        }

        .ac-hero-copy > p:not(.ac-kicker) {
        max-width: 280px;

        font-size: 12px;
        }


        /* Stats */

        .ac-stats {
        right: 5%;
        bottom: 190px;

        width: 90%;
        }

        .ac-stats strong {
        font-size: 26px;
        }


        /* Contact Card */

        .ac-contact-card {
        width: 100%;
        height: 160px;
        padding: 26px 28px;

        border-right: 0;
        border-radius: 22px 22px 0 0;
        }
    }

    @media (max-width: 1024px) and (min-width: 768px) {
        .ac-hero-stage {
        padding: 12px;
        }

        .ac-nav-shell {
        width: 62%;
        }

        .ac-nav-links {
        width: 88%;
        gap: 12px;
        }

        .ac-nav-links a {
        font-size: 14px;
        }

        .ac-particle-sphere {
        top: 72px;
        right: 5%;
        width: min(48vw, 460px);
        height: min(48vw, 460px);
        }

        .ac-hero-copy {
        top: 24%;
        width: min(720px, 86%);
        }

        .ac-hero-copy h1 {
        font-size: clamp(42px, 6vw, 60px);
        }

        .ac-contact-card {
        width: 32%;
        padding-right: 24px;
        padding-left: 24px;
        }

        .ac-stats {
        right: 6%;
        width: 54%;
        }
    }

    @media (max-width: 420px) {
        .ac-hero-section {
        min-height: 720px;
        }

        .ac-hero-card {
        min-height: 700px;
        }

        .ac-brand {
        top: 20px;
        left: 18px;
        font-size: 18px;
        }

        .ac-hero-copy {
        top: 23%;
        width: calc(100% - 24px);
        }

        .ac-hero-copy h1 {
        font-size: clamp(28px, 8.4vw, 36px);
        line-height: 1.12;
        letter-spacing: -1px;
        }

        .ac-hero-copy > p:not(.ac-kicker) {
        max-width: 255px;
        margin-top: 18px;
        font-size: 11px;
        }

        .ac-hero-button {
        margin-top: 22px;
        }

        .ac-stats {
        bottom: 184px;
        }

        .ac-stats strong {
        font-size: 23px;
        }

        .ac-stats span {
        margin-top: 8px;
        font-size: 9px;
        }

        .ac-contact-card {
        height: 154px;
        padding: 23px 20px;
        }

        .ac-email {
        margin-top: 12px;
        font-size: 16px;
        }
    }
    `}</style>
      

    </section>
  );
}
