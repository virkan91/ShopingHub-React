import React, { useEffect } from "react";
import "./CartPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, getCartTotal, clearCart } from "../../store/cartSlice";

import { formatPrice } from "../../utils/helpers";

const CartPage = () => {
  const dispatch = useDispatch();
  const {data: cartProducts, totalItems, totalAmount, deliveryCharge} = useSelector((state) => state.cart);


  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  const emptyCartMsg = <h4 className="text-red fw-6">No items found!</h4>
  return (
    <div className="cart-page">
      <div className="container">
        <div className="breadcrumb">
          <ul className="breadcrumb-items flex">
            <li className="breadcrumb-item">
              <Link to="/">
                <i className="fas fa-home"></i>
                <span className="breadcrumb-separator">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="bg-ghost-white py-5">
        <div className="container">
          <div className="section-title bg-ghost-white">
            <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
              My Cart
            </h3>
          </div>
          {
            cartProducts.length === 0 ? emptyCartMsg : (
            <div className="cart-content grid">
              <div className="cart-left">
                  <div className="cart-item grid">
                    {
                      cartProducts.map(cartProduct => (
                        <div className="cart-item grid" key={cartProduct.id}>
                          <div className="cart-item-img flex flex-column bg-white">
                            <img src={cartProduct.images[0]} alt={cartProduct.title} />
                            <button type="button" className="btn-square rmv-form-cart-btn">
                              <span className="btn-square-icon">
                                <i className="fas fa-trash"></i>
                              </span>
                            </button>
                          </div>
                          <div className="cart-item-info">
                            <h6 className="fs-16 tw-5 text-light-blue">
                              {cartProduct.title}
                            </h6>
                            <div className="qty flex">
                              <span className="text-light-blue qty-text">Qty:</span>
                            </div>
                            
                          </div>
                        </div>

                      ))
                    }
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
