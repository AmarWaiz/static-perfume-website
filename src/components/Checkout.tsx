import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Reveal from "./Reveal";

export default function Checkout() {
  const { items, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section className="page-section empty-state">
        <h1>No items to checkout</h1>
        <p>Add a perfume to your cart before starting checkout.</p>
        <Link to="/shop" className="button primary-button">
          Shop Perfumes
        </Link>
      </section>
    );
  }

  return (
    <section className="page-section checkout-page">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">Checkout</p>
          <h1>Complete your order</h1>
        </div>
      </div>

      <div className="checkout-layout">
        <Reveal className="form-panel checkout-form">
          <h2>Shipping details</h2>
          <div className="form-grid">
            <label>
              First name
              <input type="text" placeholder="Ava" />
            </label>
            <label>
              Last name
              <input type="text" placeholder="Morgan" />
            </label>
          </div>
          <label>
            Email
            <input type="email" placeholder="ava@example.com" />
          </label>
          <label>
            Address
            <input type="text" placeholder="Street address" />
          </label>
          <div className="form-grid">
            <label>
              City
              <input type="text" placeholder="New York" />
            </label>
            <label>
              ZIP code
              <input type="text" placeholder="10001" />
            </label>
          </div>
          <h2>Payment</h2>
          <label>
            Card number
            <input type="text" placeholder="4242 4242 4242 4242" />
          </label>
          <div className="form-grid">
            <label>
              Expiry
              <input type="text" placeholder="12/28" />
            </label>
            <label>
              CVC
              <input type="text" placeholder="123" />
            </label>
          </div>
          <button className="button primary-button" type="button">
            Place Order
          </button>
        </Reveal>

        <Reveal className="cart-summary" delay={120}>
          <h2>Order summary</h2>
          {items.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}
          <div className="summary-row">
            <span>Shipping</span>
            <strong>Free</strong>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
