import { Camera, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Cart", href: "/cart" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand-link" aria-label="Lumina home">
            <span className="brand-mark">L</span>
            <span>
              <span className="brand-name">Lumina</span>
              <span className="brand-subtitle">Perfume House</span>
            </span>
          </Link>
          <p>
            Premium fragrances, modern shopping flow, and a polished UI designed
            for boutiques that want to feel memorable online.
          </p>
          <div className="social-links" aria-label="Social media links">
            <a href="https://instagram.com" aria-label="Instagram">
              <Camera size={18} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <MessageCircle size={18} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Send size={18} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h2>Quick Links</h2>
          {quickLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <span>
            <Mail size={16} />
            hello@luminaperfumes.com
          </span>
          <span>
            <Phone size={16} />
            +1 (555) 214-9082
          </span>
          <span>
            <MapPin size={16} />
            18 Atelier Lane, New York
          </span>
        </div>

        <form className="footer-newsletter">
          <h2>Newsletter</h2>
          <p>Get scent edits, launch notes, and gifting ideas.</p>
          <div>
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button type="button">Subscribe</button>
          </div>
        </form>
      </div>
      <div className="footer-bottom">
        <span>Copyright 2026 Lumina Perfume House. All rights reserved.</span>
      </div>
    </footer>
  );
}
