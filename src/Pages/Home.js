import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/productSlice";
import { addTocart } from "../Redux/cartSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { allProduct } = useSelector((state) => state.productSlice);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {allProduct.length > 0 ? (
            allProduct.map((i) => (
              <Col lg={4} md={4}>
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
                      i.images ? i.images : "https://i.imgur.com/QkIa5tT.jpeg"
                    }
                    alt={i.title}
                  />
                  <Card.Body>
                    <Card.Title>{i.title}</Card.Title>

                    <Card.Text> ${i.price}</Card.Text>
                    <Button
                      variant="secondary"
                      className="me-4"
                      onClick={() => {
                        dispatch(addTocart(i));
                      }}
                    >
                      Add To cart
                    </Button>
                    <Link
                      to={`/single/${i.title}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="primary">Single View</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <h1>No product Found</h1>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
