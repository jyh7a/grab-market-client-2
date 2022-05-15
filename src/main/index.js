import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div id="banner">
        <img src="/images/banners/banner1.png" alt="img" />
      </div>

      <h1>판매되는 상품들</h1>

      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <Link
              key={product.id}
              className="product-link"
              to={`/products/${product.id}`}
            >
              <div className="product-card">
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
