import {
  ArrowRight,
  BadgeCheck,
  Blend,
  Gift,
  HeartHandshake,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import HeroScene from "./HeroScene";
import ProductCard from "./ProductCard";
import ResponsiveImage from "./ResponsiveImage";
import Reveal from "./Reveal";
import { products } from "../data/products";

const featuredProducts = products.slice(0, 3);

const features = [
  {
    icon: Sparkles,
    title: "Curated formulas",
    text: "Balanced scents selected for character, longevity, and elegant wear.",
  },
  {
    icon: Truck,
    title: "Fast delivery",
    text: "A clean commerce flow with free delivery messaging and order clarity.",
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    text: "Checkout screens are polished and ready for payment integration.",
  },
];

const services = [
  "Personal scent discovery",
  "Gift-ready perfume sets",
  "Seasonal fragrance edits",
  "Boutique launch consultation",
];

const testimonials = [
  {
    name: "Maya R.",
    role: "Creative Director",
    text: "The site feels luxurious without being heavy. I found a scent, checked the notes, and added it to cart in seconds.",
  },
  {
    name: "Jon Bell",
    role: "Founder",
    text: "The shopping flow is smooth, responsive, and polished enough to feel like a real premium boutique.",
  },
  {
    name: "Ari Chen",
    role: "Retail Designer",
    text: "Beautiful spacing, strong product focus, and just enough motion to make the experience feel alive.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&w=900&q=80",
];

const faqs = [
  {
    question: "Can I save the cart?",
    answer:
      "Yes. The cart uses localStorage, so selected perfumes stay available after refresh on the same browser.",
  },
  {
    question: "Are payments connected?",
    answer:
      "This is a frontend-only checkout experience. It is structured so a payment provider can be connected later.",
  },
  {
    question: "Do images have fallbacks?",
    answer:
      "Yes. Product and page images use responsive loading and a placeholder if a remote image fails.",
  },
];

const pricing = [
  { name: "Discovery", price: 49, detail: "Mini scent edit with three samples." },
  { name: "Signature", price: 118, detail: "Full bottle with gift packaging." },
  { name: "Collector", price: 248, detail: "Three-bottle wardrobe for every mood." },
];

const team = [
  { name: "Elena Vale", role: "Founder" },
  { name: "Sam Noor", role: "Fragrance Curator" },
  { name: "Iris Blake", role: "Client Experience" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero premium-hero">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <Reveal className="saas-hero-copy">
          <p className="hero-pill">
            <Sparkles size={16} />
            Premium fragrance commerce
          </p>
          <h1>
            Build a scent wardrobe with a <span>luxury shopping flow.</span>
          </h1>
          <p>
            Browse refined perfumes, compare notes, save your cart, and checkout
            through a polished storefront built for modern boutique brands.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="button primary-button glow-button">
              Explore Collection
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="button hero-outline-button">
              See How It Works
            </Link>
          </div>
          <div className="hero-social-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>A</span>
              <span>M</span>
              <span>S</span>
            </div>
            <div>
              <strong>12k+ shoppers trust Lumina</strong>
              <span>4.8 rating across signature fragrances</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="saas-hero-visual" delay={140}>
          <div className="three-hero-shell">
            <HeroScene />
            <div className="three-hero-caption">
              <p className="eyebrow">Featured scent</p>
              <h2>Velvet Rose</h2>
              <span>Rose, peony, pink pepper, amber</span>
            </div>
          </div>

          <div className="floating-ui-card card-rating">
            <BadgeCheck size={18} />
            <div>
              <strong>4.8/5</strong>
              <span>Customer rating</span>
            </div>
          </div>
          <div className="floating-ui-card card-shipping">
            <PackageCheck size={18} />
            <div>
              <strong>Free delivery</strong>
              <span>On every order</span>
            </div>
          </div>
          <div className="floating-icon-card">
            <ShieldCheck size={24} />
          </div>
        </Reveal>
      </section>

      <section className="page-section feature-band premium-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} delay={index * 90}>
              <Icon size={25} />
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
            </Reveal>
          );
        })}
      </section>

      <section className="page-section split-section section-divider">
        <Reveal className="split-media">
          <ResponsiveImage
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1100&q=80"
            alt="Perfume boutique shelf"
            fallbackText="Lumina about"
          />
        </Reveal>
        <Reveal className="split-copy" delay={100}>
          <p className="eyebrow">About the house</p>
          <h1>Fragrance that feels personal, polished, and quietly magnetic.</h1>
          <p>
            Lumina blends boutique storytelling with a fast e-commerce interface:
            product browsing, detailed scent notes, cart persistence, and a
            checkout-ready flow.
          </p>
          <Link to="/about" className="text-link">
            Learn more
            <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal className="center-heading">
          <p className="eyebrow">Services</p>
          <h1>Everything a premium fragrance store needs.</h1>
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal className="service-card" key={service} delay={index * 80}>
              <Blend size={24} />
              <h2>{service}</h2>
              <p>
                A polished content block with soft shadows, motion, and
                responsive spacing for startup-grade presentation.
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <Reveal className="stats-grid">
          <div>
            <strong>
              <Counter end={12} suffix="k+" />
            </strong>
            <span>Happy shoppers</span>
          </div>
          <div>
            <strong>
              <Counter end={98} suffix="%" />
            </strong>
            <span>Satisfaction rate</span>
          </div>
          <div>
            <strong>
              <Counter end={6} suffix="+" />
            </strong>
            <span>Signature perfumes</span>
          </div>
          <div>
            <strong>
              <Counter end={4.8} decimals={1} />
            </strong>
            <span>Average rating</span>
          </div>
        </Reveal>
      </section>

      <section className="page-section">
        <div className="shop-heading">
          <Reveal>
            <p className="eyebrow">Featured perfumes</p>
            <h1>Best-loved bottles</h1>
          </Reveal>
          <Link to="/shop" className="text-link">
            View all products
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-section gallery-section section-divider">
        <Reveal className="center-heading">
          <p className="eyebrow">Gallery</p>
          <h1>Visual moments for a refined boutique.</h1>
        </Reveal>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <Reveal className="gallery-tile" key={image} delay={index * 70}>
              <ResponsiveImage
                src={image}
                alt={`Lumina perfume gallery ${index + 1}`}
                fallbackText="Lumina gallery"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-section">
        <Reveal className="center-heading">
          <p className="eyebrow">Testimonials</p>
          <h1>Premium UX, practical shopping flow.</h1>
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal className="testimonial-card" key={testimonial.name} delay={index * 90}>
              <p>{testimonial.text}</p>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-section pricing-section section-divider">
        <Reveal className="center-heading">
          <p className="eyebrow">Pricing</p>
          <h1>Simple fragrance plans for every kind of buyer.</h1>
        </Reveal>
        <div className="pricing-grid">
          {pricing.map((plan, index) => (
            <Reveal className="pricing-card" key={plan.name} delay={index * 90}>
              <Gift size={24} />
              <h2>{plan.name}</h2>
              <strong>${plan.price}</strong>
              <p>{plan.detail}</p>
              <Link to="/shop" className="button secondary-button">
                Choose
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-section team-section">
        <Reveal className="center-heading">
          <p className="eyebrow">Team</p>
          <h1>The people behind the scent experience.</h1>
        </Reveal>
        <div className="team-grid">
          {team.map((member, index) => (
            <Reveal className="team-card" key={member.name} delay={index * 90}>
              <div>{member.name.charAt(0)}</div>
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-section faq-section section-divider">
        <Reveal className="center-heading">
          <p className="eyebrow">FAQ</p>
          <h1>Answers before checkout.</h1>
        </Reveal>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 80}>
              <details>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-section cta-section">
        <Reveal className="cta-panel">
          <HeartHandshake size={28} />
          <h1>Ready to find your next signature scent?</h1>
          <p>
            Browse the collection, compare notes, and build a cart that persists
            while you explore.
          </p>
          <Link to="/shop" className="button primary-button glow-button">
            Start Shopping
            <ArrowRight size={19} />
          </Link>
        </Reveal>
      </section>

      <section className="newsletter-strip">
        <Reveal className="newsletter-inner">
          <div>
            <p className="eyebrow">Newsletter</p>
            <h1>Get the next scent edit first.</h1>
          </div>
          <form>
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button type="button">Subscribe</button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
