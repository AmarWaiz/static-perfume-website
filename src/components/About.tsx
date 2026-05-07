import Counter from "./Counter";
import ResponsiveImage from "./ResponsiveImage";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="page-section about-page">
      <Reveal className="about-image">
        <ResponsiveImage
          src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1100&q=80"
          alt="Perfume bottles arranged in a boutique"
          fallbackText="Lumina boutique"
        />
      </Reveal>
      <Reveal className="about-copy" delay={120}>
        <p className="eyebrow">About Lumina</p>
        <h1>Modern fragrance with an old-world sense of detail.</h1>
        <p>
          Lumina is a boutique perfume house built around expressive, wearable
          scent. Our collection brings together luminous florals, calm woods,
          warm amber, and crisp citrus for people who want fragrance to feel
          personal rather than loud.
        </p>
        <p>
          This frontend store is designed like a real commerce experience:
          browse the collection, inspect product details, add items to the cart,
          and complete a clean checkout flow.
        </p>
        <div className="stat-grid">
          <div>
            <strong>
              <Counter end={6} suffix="+" />
            </strong>
            <span>Signature scents</span>
          </div>
          <div>
            <strong>
              <Counter end={4.7} decimals={1} />
            </strong>
            <span>Average rating</span>
          </div>
          <div>
            <strong>
              <Counter end={24} suffix="h" />
            </strong>
            <span>Order handling</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
