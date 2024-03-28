import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BaseUrl } from '../Constants/constant';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/categories`);
        setCategories(response.data);
        console.log('====================================');
        console.log(response.data);
        console.log('====================================');
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container>
      <h1>Categories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row>
          {categories.length > 0 ? (
            categories.map(category => (
              <Col lg={4} md={4} key={category.id}>
                <Link to={`/singlecat/${category.id}`} style={{ textDecoration: "none" }}>
                  <Card className="d-flex justify-content-center" style={{ width: '100%', marginTop: "20px", height: "500px", marginBottom: "20px" }}>
                    <Card.Img style={{ width: "100%", height: "300px", padding: "20px" }} variant="top" src={category.image} alt={category.name} />
                    <Card.Body>
                      <Card.Title>{category.name}</Card.Title>
                      <Button variant="secondary">View More...</Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <p>No categories found.</p>
          )}
        </Row>
      )}
    </Container>
  );
};

export default Categories;
