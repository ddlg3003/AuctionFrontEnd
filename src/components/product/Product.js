import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const Product = ({ product, col }) => {
  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
      <div className="card p-3 rounded">
        <img className="card-img-top mx-auto" src={product.images[0].url} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
          </div>
          <p className="card-text">${product.price}</p>
          <Link
            to={`/product/${product._id}`}
            id="view_btn"
            className="btn btn-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductCarousel = ({ product }) => {
  return (
    <Row className="pb-5" style={{ width: "100%", height: "800px" }}>
      <Col xs={11} md={7}>
        <Row>
          <span className="ml-5">{product.name}</span>
        </Row>
        <Row>
          <div className="ml-5">
            <Link
              to={`/product/${product._id}`}
              id="view_btn"
              className="btn btn-block"
            >
              Start exploring
            </Link>
          </div>
        </Row>
      </Col>
      <Col xs={7} md={5} className="justify-content-center">
        <img
          className="d-block w-100"
          src={product.images[0].url}
          alt="First slide"
        />
      </Col>
    </Row>
  );
};

export { ProductCarousel };
export default Product;
