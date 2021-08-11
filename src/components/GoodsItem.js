const GoodsItem = (props) => {
  const {
    images,
    description,
    name,
    id,
    addToCartFunc,
    price
  } = props;

  const addToCart = (item) => {
    addToCartFunc(item);
  };

  return (
    <div className="goods-item">
      <div className="goods-item__image">
        {images && images.full_background && <img src={images.full_background} alt={description}/>}
      </div>
      <div className="goods-item__content">
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button" className="btn" onClick={() => addToCart({ id: id, name: name, price: price })}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default GoodsItem;
