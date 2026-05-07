import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import ResponsiveImage from "./ResponsiveImage";
import StarRating from "./StarRating";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <section className="page-section empty-state">
        <h1>Perfume not found</h1>
        <p>That fragrance may have left the collection.</p>
        <Link to="/" className="button primary-button">
          Back to shop
        </Link>
      </section>
    );
  }

  return (
    <section className="page-section">
      <Link to="/shop" className="back-link">
        <ArrowLeft size={18} />
        Back to shop
      </Link>

      <article className="product-detail">
        <div className="detail-image">
          <ResponsiveImage
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            fallbackText={product.name}
          />
        </div>

        <div className="detail-content">
          <p className="eyebrow">{product.brand}</p>
          <h1>{product.name}</h1>
          <StarRating rating={product.rating} showValue />
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="detail-description">{product.description}</p>

          <button
            className="button primary-button"
            type="button"
            onClick={() => addItem(product)}
          >
            <ShoppingBag size={20} />
            Add to Cart
          </button>
        </div>
      </article>
    </section>
  );
}
