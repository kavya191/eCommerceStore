import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../Constants/constant";
import { Button } from "react-bootstrap";
import { addTocart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

const Viewsingle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/products/`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const products = product.find((i) => i.title == id);

  useEffect(() => {
    fetchProduct();
  }, [id]);
  return (
    <div>
      {products ? (
        <Card
          style={{
            width: "100%",
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            paddingTop: "10px",
          }}
        >
          <Card.Img
            variant="top"
            src={products.images}
            style={{
              width: "20rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <Card.Body>
            <Card.Title>{products.title}</Card.Title>
            <Card.Text>{products.description}</Card.Text>
            <Card.Text>Price : ${products.price}</Card.Text>
            <Button
              onClick={() => {
                dispatch(addTocart(products));
              }}
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Viewsingle;
