import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BaseUrl } from "../Constants/constant";
import { useDispatch } from "react-redux";
import { addTocart } from "../Redux/cartSlice";

const SingleCategory = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/categories/${id}/products`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h1>Products in Category: {id}</h1>
      {loading ? (
        <p>loading.....</p>
      ) : (
        <Row>
          {products.length > 0 ? (
            products.map((product) => (
              <Col lg={4} md={4} key={product.id}>
                <Card
                  className="d-flex justify-content-center"
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    height: "500px",
                    marginBottom: "20px",
                  }}
                >
                  <Card.Img
                    style={{ width: "100%", height: "300px", padding: "20px" }}
                    variant="top"
                    src={
                      product.images && product.images.length > 0
                        ? product.images[1]
                        : ""
                    }
                    alt={product.title}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Title>${product.price}</Card.Title>
                    <Button
                      onClick={() => {
                        dispatch(addTocart(product));
                      }}
                    >
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </Row>
      )}
    </Container>
  );
};

export default SingleCategory;
