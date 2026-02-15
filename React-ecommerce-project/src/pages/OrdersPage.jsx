import "./OrdersPage.css";
import "./header.css";

export function OrdersPage() {
  return (
    <>
      <title>orders</title>
      <div className="header">
        {" "}
        {/* Fixed: className instead of classname */}
        <div className="left-section">
          {" "}
          {/* Fixed */}
          <a href="/" className="header-link">
            {" "}
            {/* Fixed */}
            <img className="logo" src="images/logo-white.png" alt="logo" />{" "}
            {/* Fixed */}
            <img
              className="mobile-logo"
              src="images/mobile-logo-white.png"
              alt="mobile logo"
            />{" "}
            {/* Fixed */}
          </a>
        </div>
        <div className="middle-section">
          {" "}
          {/* Fixed */}
          <input className="search-bar" type="text" placeholder="search" />{" "}
          {/* Fixed */}
          <button className="search-button">
            {" "}
            {/* Fixed */}
            <img
              className="search-icon"
              src="images/icons/search-icon.png"
              alt="search"
            />{" "}
            {/* Fixed */}
          </button>
        </div>
        <div className="right-section">
          {" "}
          {/* Fixed */}
          <a className="orders-link header-link" href="/orders">
            {" "}
            {/* Fixed */}
            <span className="orders-text">orders</span> {/* Fixed */}
          </a>
          <a className="cart-link header-link" href="/checkout">
            {" "}
            {/* Fixed */}
            <img
              className="cart-icon"
              src="images/icons/cart-icon.png"
              alt="cart"
            />{" "}
            {/* Fixed */}
            <div className="cart-quantity">3</div> {/* Fixed */}
            <div className="cart-text">cart</div> {/* Fixed */}
          </a>
        </div>
      </div>

      {/* Rest of your orders page JSX remains the same */}
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          <div className="order-container">
            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>August 12</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>$35.06</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
              </div>
            </div>

            <div className="order-details-grid">
              <div className="product-image-container">
                <img src="images/products/athletic-cotton-socks-6-pairs.jpg" />
              </div>

              <div className="product-details">
                <div className="product-name">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div className="product-delivery-date">
                  Arriving on: August 15
                </div>
                <div className="product-quantity">Quantity: 1</div>
                <button className="buy-again-button button-primary">
                  <img
                    className="buy-again-icon"
                    src="images/icons/buy-again.png"
                  />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <a href="/tracking">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>

              <div className="product-image-container">
                <img src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" />
              </div>

              <div className="product-details">
                <div className="product-name">
                  Adults Plain Cotton T-Shirt - 2 Pack
                </div>
                <div className="product-delivery-date">
                  Arriving on: August 19
                </div>
                <div className="product-quantity">Quantity: 2</div>
                <button className="buy-again-button button-primary">
                  <img
                    className="buy-again-icon"
                    src="images/icons/buy-again.png"
                  />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <a href="/tracking">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="order-container">
            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>June 10</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>$41.90</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>b6b6c212-d30e-4d4a-805d-90b52ce6b37d</div>
              </div>
            </div>

            <div className="order-details-grid">
              <div className="product-image-container">
                <img src="images/products/intermediate-composite-basketball.jpg" />
              </div>

              <div className="product-details">
                <div className="product-name">Intermediate Size Basketball</div>
                <div className="product-delivery-date">
                  Arriving on: June 17
                </div>
                <div className="product-quantity">Quantity: 2</div>
                <button className="buy-again-button button-primary">
                  <img
                    className="buy-again-icon"
                    src="images/icons/buy-again.png"
                  />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <a href="/tracking">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
