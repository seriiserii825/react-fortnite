const GoodsItem = (props) => {
  const {
    images: { full_background },
    description,
    name
  } = props;
  return (
    <div className="goods-item">
      <div className="goods-item__image">
        <img src={full_background} alt={description} />
      </div>
      <div className="goods-item__content">
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button" className="btn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default GoodsItem;
