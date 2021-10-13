const Product = () => {
  return (
    <div className="product">
      <div className="product-header">
        <p>Bamboo Stand</p>
        <span className="text-primary text-xs">Pledge $25 or more</span>
      </div>
      <div className="product-detail text-gray">
        <p>
          You get and ergonomic stand made of natural bamboo. You've helped us
          launch or promotional campaign, and you'll be added to a special
          Backer member list.
        </p>
      </div>
      <div className="product-extras">
        <div className="flex items-center">
          <p>64</p>
          <span className="text-gray text-xs">left</span>
        </div>
        <button className="btn btn-default">Select Reward</button>
      </div>
    </div>
  );
};

export default Product;
