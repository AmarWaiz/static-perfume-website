import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="page-section contact-page">
      <Reveal className="contact-copy">
        <p className="eyebrow">Contact us</p>
        <h1>We would love to help you choose a scent.</h1>
        <p>
          Ask about notes, gifting, delivery, or building a small fragrance
          wardrobe. This form is frontend-only and ready to connect to a backend
          later.
        </p>
        <div className="contact-list">
          <span>
            <Mail size={18} />
            hello@luminaperfumes.com
          </span>
          <span>
            <Phone size={18} />
            +1 (555) 214-9082
          </span>
          <span>
            <MapPin size={18} />
            18 Atelier Lane, New York, NY
          </span>
        </div>
      </Reveal>

      <Reveal className="form-panel" delay={120}>
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea rows={6} placeholder="Tell us what you are looking for" />
        </label>
        <button className="button primary-button" type="button">
          Send Message
        </button>
      </Reveal>
    </section>
  );
}
