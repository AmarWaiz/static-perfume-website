import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ResponsiveImage from "./ResponsiveImage";

export default function Cart() {
  const { items, totalPrice, removeItem, updateQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <section className="page-section empty-state">
        <h1>Your cart is empty</h1>
        <p>Find your next signature fragrance in the Lumina collection.</p>
        <Link to="/shop" className="button primary-button">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="page-section cart-page">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">Shopping cart</p>
          <h1>Your selected perfumes</h1>
        </div>
        <button className="text-button" type="button" onClick={clearCart}>
          Clear cart
        </button>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <ResponsiveImage
                src={item.image}
                alt={`${item.brand} ${item.name}`}
                fallbackText={item.name}
              />

              <div className="cart-item-info">
                <p className="eyebrow">{item.brand}</p>
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
              </div>

              <div className="quantity-control" aria-label="Quantity controls">
                <button
                  type="button"
                  aria-label={`Decrease ${item.name} quantity`}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus size={16} />
                </button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  aria-label={`Increase ${item.name} quantity`}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>

              <strong className="line-total">
                ${(item.price * item.quantity).toFixed(2)}
              </strong>

              <button
                className="icon-button"
                type="button"
                aria-label={`Remove ${item.name}`}
                onClick={() => removeItem(item.id)}
              >
                <Trash2 size={18} />
              </button>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong>Free</strong>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <Link to="/checkout" className="button primary-button">
            Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}
