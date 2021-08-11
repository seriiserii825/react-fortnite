import GoodsItem from "./GoodsItem";
const GoodsList = ({ goods, addToCart }) => {
  return (
    <div className="goods-list">
      {goods.map((item) => (
        <GoodsItem addToCartFunc={addToCart}  key={item.id} {...item} />
      ))}
    </div>
  );
};

export default GoodsList;
