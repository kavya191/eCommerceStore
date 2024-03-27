import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const Viewsingle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const products = product.find((i) => i.title == id);
//   console.log(product);

  useEffect(() => {
    fetchProduct();
  }, [id]);
  return (
    <div>
      {products ? (
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={products.images} style={{ width: "20rem", display:"flex", alignItems:"center" }} />
          <Card.Body>
            <Card.Title>{products.title}</Card.Title>
            <Card.Text>{products.description}</Card.Text>
            <Card.Text>Price : ${products.price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Viewsingle;
