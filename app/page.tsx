"use client"

import { useState } from "react"

const portrait = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-11-18_15-15-00-F5rQTodrl3D5CRddyNwGZcFOIp1Apf.jpg"

const values = [
  { number: "01", title: "Committed", text: "She brings genuine care and consistency to every opportunity, always giving her best." },
  { number: "02", title: "Hardworking", text: "A focused and dependable professional who takes pride in doing every task well." },
  { number: "03", title: "Respectful of time", text: "Punctual, organized, and thoughtful of the people and commitments around her." },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Home" onClick={closeMenu}><span className="mark">✳</span><span>HER STORY<small>PERSONAL PROFILE</small></span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </button>
        <nav id="primary-navigation" className={menuOpen ? "is-open" : ""} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a><a href="#about" onClick={closeMenu}>About</a><a href="#journey" onClick={closeMenu}>My journey</a><a href="#values" onClick={closeMenu}>Values</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Contact us <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> A story of purpose & possibility</p>
          <h1>Rooted in <em>grace.</em><br />Growing with <em>purpose.</em></h1>
          <p className="hero-intro">A warm spirit, a strong work ethic, and a journey that began in Ethiopia and continues to unfold in Dubai.</p>
          <a className="button button-dark" href="#about">Get to know her <span>↗</span></a>
          <div className="hero-note"><span className="note-dot" /> OPEN TO NEW OPPORTUNITIES</div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><img src={portrait} alt="Portrait of a woman with long natural curls, softly lit by afternoon sunlight" /></div>
          <div className="portrait-label glass"><span className="label-star">✳</span><span>ETHIOPIAN ROOTS<br /><b>DUBAI DREAMS</b></span></div>
          <div className="round-stamp" aria-hidden="true"><span>HER JOURNEY · HER JOURNEY · </span><b>✳</b></div>
        </div>
        <div className="hero-bottom"><span>BASED IN DUBAI, UAE</span><span>SCROLL TO DISCOVER <span className="down">↓</span></span></div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-kicker">A LITTLE ABOUT HER</div>
        <div className="intro-grid">
          <h2>Big dreams.<br /><em>Grounded values.</em></h2>
          <div className="intro-text"><p>She is a dedicated and caring professional whose story bridges the warmth of Ethiopia and the opportunity of Dubai. In her seven months working in Dubai, she has met each day with determination, curiosity, and a genuine desire to grow.</p><p>She believes that showing up with a positive attitude, respecting time, and putting in honest effort can make a difference—wherever the journey leads.</p><a className="text-link" href="#journey">Discover her journey <span>→</span></a></div>
        </div>
        <div className="quote-card glass"><span className="quote-mark">“</span><p>Every new beginning is a chance to show what you’re made of.</p><span className="quote-credit">A BELIEF SHE CARRIES WITH HER</span></div>
      </section>

      <section className="journey-section" id="journey">
        <div className="journey-image"><img src={portrait} alt="Her portrait, capturing her calm confidence and natural warmth" /><span className="image-caption glass">A NEW CHAPTER, EVERY DAY <span>✳</span></span></div>
        <div className="journey-copy"><div className="section-kicker">HER JOURNEY SO FAR</div><h2>From Ethiopia<br />to <em>Dubai.</em></h2><p className="journey-lead">A journey shaped by courage, and the quiet confidence to begin again somewhere new.</p><div className="timeline"><div className="timeline-item"><span className="timeline-point" /><span className="timeline-date">HER ROOTS</span><div><h3>Ethiopia</h3><p>Home, heritage, and the values that continue to guide her.</p></div></div><div className="timeline-item"><span className="timeline-point" /><span className="timeline-date">THE PRESENT</span><div><h3>Dubai · 7 months</h3><p>Building experience, embracing new opportunities, and growing with every day of work.</p></div></div></div><a className="button button-outline" href="#contact">Let’s connect <span>↗</span></a></div>
      </section>

      <section className="values-section" id="values"><div className="section-kicker">WHAT SHE BRINGS</div><h2>Good work starts <em>with good values.</em></h2><div className="values-grid">{values.map((item) => <article className="value-card" key={item.number}><span className="value-number">{item.number}</span><span className="value-icon">✳</span><h3>{item.title}</h3><p>{item.text}</p><span className="value-rule" /></article>)}</div></section>

      <section className="contact-section" id="contact"><div className="contact-orbit" aria-hidden="true">✳</div><div className="section-kicker">THE NEXT CHAPTER</div><h2>Let’s make it<br /><em>meaningful.</em></h2><p>For opportunities, introductions, or simply to say hello.</p><a className="button button-light" href="mailto:hello@example.com">Get in touch <span>↗</span></a><span className="contact-note">DUBAI, UNITED ARAB EMIRATES</span></section>

      <footer className="site-footer"><a className="wordmark footer-brand" href="#home"><span className="mark">✳</span><span>HER STORY<small>PERSONAL PROFILE</small></span></a><p>A journey of hard work, heart, and what comes next.</p><div className="footer-links"><a href="#about">About</a><a href="#journey">Journey</a><a href="#values">Values</a><a href="#contact">Contact</a></div><div className="footer-bottom"><span>© 2026 HER STORY · DUBAI, UAE</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    </main>
  )
}
