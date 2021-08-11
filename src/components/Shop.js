import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((res) => res.json())
      .then(({ items }) => {
        setLoading(false);
        const goods = items.slice(0, 20);
        setGoods([...goods]);
      });
  }, []);

  return (
    <div className="shop">
      {loading ? (
        <Preloader />
      ) : goods.length ? (
        <GoodsList goods={goods} />
      ) : (
        <h2>Nothing not found...</h2>
      )}
    </div>
  );
};

export default Shop;
