import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const fetchProduct = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  };
  useEffect(fetchProduct, []);

  if (!product) return <h1>Loading</h1>;

  return (
    <div className="container">
      <h1 className="my-3"> PRODOTTO NEL DETTAGLIO</h1>
      <h2 className="my-3">{product.title}</h2>
      <img src={product.image} alt={product.title}></img>
      <strong>
        <p>PREZZO: {product.price} euro</p>
      </strong>
      <p></p>
    </div>
  );
}
