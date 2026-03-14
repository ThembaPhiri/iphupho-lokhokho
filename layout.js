/* ============================================
   SHARED NAV + FOOTER
   ============================================ */

const NAV_HTML = `
<nav class="navbar page-nav" id="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <span class="brand-name">Iphupho Lokhokho</span>
      <span class="brand-sub">Shuttles & Car Rental</span>
    </a>

    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="fleet.html">Fleet</a>
      <a href="booking.html">Booking</a>
      <a href="faq.html">FAQ</a>
      <a href="contact.html">Contact</a>
    </div>

    <div class="nav-cta">
      <a href="tel:+27000000000" class="nav-call">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6.29 6.29l1.12-1.04a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +27 (0) 00 000 0000
      </a>
      <a href="booking.html" class="nav-book">Book Now</a>
    </div>

    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="about.html">About Us</a>
  <a href="services.html">Services</a>
  <a href="fleet.html">Fleet</a>
  <a href="booking.html">Booking</a>
  <a href="faq.html">FAQ</a>
  <a href="contact.html">Contact</a>
  <div class="mobile-btns">
    <a href="tel:+27000000000" class="btn btn-outline btn-sm">📞 Call Us</a>
    <a href="https://wa.me/27000000000" class="btn btn-whatsapp btn-sm" target="_blank">💬 WhatsApp</a>
    <a href="booking.html" class="btn btn-primary btn-sm">Book Now</a>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="brand-name">Iphupho Lokhokho</span>
        <span class="brand-tagline">Shuttles (PTY) Ltd</span>
        <p>Professional shuttle and car rental services across Durban and surrounding areas. Reliable drivers, clean vehicles, and on-time service — 24/7.</p>
        <div class="footer-socials">
          <a href="#" class="footer-social-btn" aria-label="Facebook">f</a>
          <a href="#" class="footer-social-btn" aria-label="Instagram">in</a>
          <a href="https://wa.me/27000000000" class="footer-social-btn" aria-label="WhatsApp">W</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="services.html">Services</a>
          <a href="fleet.html">Our Fleet</a>
          <a href="booking.html">Book Now</a>
          <a href="faq.html">FAQ</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Services</h4>
        <div class="footer-links">
          <a href="services.html#airport">Airport Transfers</a>
          <a href="services.html#corporate">Corporate Transport</a>
          <a href="services.html#private">Private Trips</a>
          <a href="services.html#events">Event Transport</a>
          <a href="services.html#rental">Car Rental</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-info">
          <div class="item">
            <span>📍</span>
            <span>Durban Central & Surrounding Areas, KwaZulu-Natal</span>
          </div>
          <div class="item">
            <span>📞</span>
            <span><a href="tel:+27000000000" style="color:inherit">+27 (0) 00 000 0000</a></span>
          </div>
          <div class="item">
            <span>✉️</span>
            <span><a href="mailto:info@iphupholokhokhoshuttles.co.za" style="color:inherit">info@iphupholokhokhoshuttles.co.za</a></span>
          </div>
          <div class="item">
            <span>⏰</span>
            <span>24/7 — Available All Week</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} Iphupho Lokhokho Shuttles (PTY) Ltd. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="terms.html">Terms & Conditions</a>
        <a href="privacy.html">Privacy Policy</a>
        <a href="rental-agreement.html">Rental Agreement</a>
      </div>
    </div>
  </div>
</footer>

<!-- Floating Buttons -->
<div class="float-buttons">
  <a href="https://wa.me/27000000000?text=Hello%2C%20I%20would%20like%20to%20book%20a%20shuttle" class="float-btn float-wa" title="WhatsApp" target="_blank">💬</a>
  <a href="tel:+27000000000" class="float-btn float-call" title="Call Us">📞</a>
</div>

<!-- Sticky Book Bar -->
<div class="sticky-book" id="stickyBook">
  <p>🚗 Ready to book your ride?</p>
  <a href="booking.html" class="btn btn-primary btn-sm">Book Now</a>
</div>

<div class="toast" id="toast"></div>
`;

// Inject nav + footer
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;
});
