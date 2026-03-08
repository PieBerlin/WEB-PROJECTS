import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => deliveryOption.id === cartItem.deliveryOptionId,
          );
          const deleteCartItem = async () => {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          };
          //TODO create this function

          const updateCartItem = async (quantity) => {
            const input = prompt("Enter The new Qunatity: ", cartItem.quantity);

            if (input === null) return; //user cancelled
            quantity = parseInt(input);

            if (isNaN(quantity) || quantity < 0) {
              alert("Please enter a valid number.");
            }

            try {
              await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity,
              });
              await loadCart();
            } catch (error) {
              console.log("Error updating cart: ", error);
            }
          };

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{" "}
                {selectedDeliveryOption
                  ? dayjs(
                      selectedDeliveryOption.estimatedDeliveryTimeMs,
                    ).format("dddd, MMMM D")
                  : "Not selected"}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:{" "}
                      <span className="quantity-label">
                        {cartItem.quantity}
                      </span>
                    </span>
                    <span
                      className="update-quantity-link link-primary"
                      onClick={updateCartItem}
                    >
                      Update
                    </span>
                    <span
                      className="delete-quantity-link link-primary"
                      onClick={deleteCartItem}
                    >
                      Delete
                    </span>
                  </div>
                </div>

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
