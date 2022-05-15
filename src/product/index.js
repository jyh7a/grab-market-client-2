import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://10f18e16-abca-4b19-8198-77df93803958.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error("에러발생", error);
      });
  }, [id]);

  if (product === null) {
    return <h1>상품 정보를 받고 있스니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} alt="img" />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt="img" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2020년 12월 7일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
