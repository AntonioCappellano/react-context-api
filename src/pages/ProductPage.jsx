import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  function fetchProduct() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const productList = res.data;
      setProducts(productList);
    });
  }

  useEffect(fetchProduct, []);
  return (
    <div className="container">
      <h1>I Nostri Prodotti</h1>

      <div className="row g-3">
        {products.map((product) => (
          <div key={product.id} className="col-3">
            <div className="card h-100">
              <Link to={"/product/" + product.id}>
                <div className="p-3">
                  <img
                    src={product.image}
                    className="card-img-top product-img"
                    alt={product.title}
                    style={{ objectFit: "contain" }}
                  ></img>
                  <div className="card-body">
                    <h4>{product.title}</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
