import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";

function MainPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://10f18e16-abca-4b19-8198-77df93803958.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>

      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>

        <h1>판매되는 상품들</h1>

        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card" key={index}>
                <div>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-img"
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">
                    {product.price}원
                    <span className="product-seller">
                      <img
                        src="images/icons/avatar.png"
                        alt={product.name}
                        className="product-avatar"
                      />
                      <span>{product.seller}</span>
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
