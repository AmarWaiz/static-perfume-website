import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { products } from "../data/products";

export default function ProductList() {
  return (
    <section className="page-section">
      <div className="shop-heading">
        <Reveal>
          <p className="eyebrow">Signature collection</p>
          <h1>Fine perfumes for every mood</h1>
        </Reveal>
        <Reveal delay={100}>
          Explore polished florals, warm woods, airy citrus, and deep amber
          blends from independent fragrance houses.
        </Reveal>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={index * 70}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
