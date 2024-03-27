import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const Singlecategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/1/products`
      );
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [id]);
  return (
    <div>
      <Container>
        <Row>
          {category.length > 0 ? (
            category.map((i) => (
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
                    src={i.images}
                  />
                  <Card.Body>
                    <Card.Title>{i.title}</Card.Title>
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

export default Singlecategory;
