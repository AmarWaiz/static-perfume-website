import { Link } from "react-router-dom";
import { Product } from "../data/products";
import ResponsiveImage from "./ResponsiveImage";
import StarRating from "./StarRating";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <ResponsiveImage
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          fallbackText={product.name}
        />
      </Link>

      <div className="product-card-body">
        <div>
          <p className="eyebrow">{product.brand}</p>
          <Link to={`/product/${product.id}`} className="product-title">
            {product.name}
          </Link>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-meta">
          <StarRating rating={product.rating} />
          <strong>${product.price.toFixed(2)}</strong>
        </div>
      </div>
    </article>
  );
}
