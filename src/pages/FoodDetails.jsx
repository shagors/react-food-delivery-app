import React, { useState } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import "../styles/product-details.css";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);

  const { title, price, category, desc } = product;

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images ">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>

                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button className="addToCart__btn">Add to Cart</button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={`${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p className="">{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  {/* user feedback */}
                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon@gmail.com</p>
                    <p className="feedback__text">great food</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon@gmail.com</p>
                    <p className="feedback__text">great food</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon@gmail.com</p>
                    <p className="feedback__text">great food</p>
                  </div>

                  {/* main form for review submit */}
                  <form className="form">
                    <div className="form__group">
                      <input type="text" placeholder="Enter Your name" />
                    </div>
                    <div className="form__group">
                      <input type="text" placeholder="Enter Your Email" />
                    </div>
                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Enter Your Review"
                      />
                    </div>
                    <button type="submit" className="addToCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
