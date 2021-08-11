import GoodsItem from "./GoodsItem";
const GoodsList = ({ goods }) => {
  return (
    <div className="goods-list">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default GoodsList;
