import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand-link" aria-label="Lumina home" onClick={closeMenu}>
        <span className="brand-mark">L</span>
        <span>
          <span className="brand-name">Lumina</span>
          <span className="brand-subtitle">Perfume House</span>
        </span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav
        className={`nav-actions ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        <NavLink to="/" className="nav-link" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/shop" className="nav-link" onClick={closeMenu}>
          Shop
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
          Contact
        </NavLink>
        <NavLink to="/shop" className="nav-cta" onClick={closeMenu}>
          Shop Now
        </NavLink>
        <NavLink to="/cart" className="cart-link" aria-label="Open cart" onClick={closeMenu}>
          <ShoppingBag size={22} strokeWidth={1.8} />
          <span className="cart-count">{totalItems}</span>
        </NavLink>
      </nav>
    </header>
  );
}
