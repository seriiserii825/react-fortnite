import React from 'react';

function Cart({quantity}) {
  return (
    <div className="cart">
      <i className="material-icons">add_shopping_cart</i>
      <span>{quantity !== 0 && quantity}</span>
    </div>
  );
}

export default Cart;
