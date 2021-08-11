import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((res) => res.json())
      .then(({ items }) => {
        setLoading(false);
        const goods = items.slice(0, 10);
        setGoods([...goods]);
      });
  }, []);

  const addToCart = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (itemIndex === index) {
          return {
            ...orderItem, quantity: orderItem.quantity + 1
          }
        } else {
          return item;
        }
      });
      setOrder(newOrder);
    }
  }

  return (
    <div className="shop">
      <Cart quantity={order.length}/>
      {loading ? (
        <Preloader/>
      ) : goods.length ? (
        <GoodsList addToCart={addToCart} goods={goods}/>
      ) : (
        <h2>Nothing not found...</h2>
      )}
    </div>
  );
};

export default Shop;
