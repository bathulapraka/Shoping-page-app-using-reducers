import React from "react";
import "../Cart/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../Auth/Auth";
export default function CartButton() {
  const dispatch = useDispatch();

  const ToggleCart = () => {
    dispatch(toggle());
  };
  return (
    <div className="cart-button" onClick={ToggleCart}>
      <button className="cart-button__btn">
        <span className="cart-button__text">My Cart</span>
        <span className="cart-button__count">1</span>
      </button>
    </div>
  );
}
