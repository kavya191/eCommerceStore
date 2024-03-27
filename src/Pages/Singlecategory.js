import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const SingleCategory = () => {
  const [allProduct, setAllProduct] = useState([]);
  const { id } = useParams(); // Extract category ID from URL

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
        setAllProduct(response.data);
        console.log('====================================');
        console.log(response.data);
        console.log(allProduct[id]);
        console.log('====================================');
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getAllProducts();
  }, [id]); 

  return (
    <div>
      <Container>
        <h1>Products in Category: {id}</h1> 
        <Row>
          {allProduct.length > 0 ? (
            allProduct.map((product) => (
              <Col lg={4} md={4} key={product.id}>
                <Card
                  className="d-flex justify-content-center"
                  style={{
                    width: '100%',
                    marginTop: '20px',
                    height: '500px',
                    marginBottom: '20px',
                  }}
                >
                  <Card.Img
                    style={{ width: '100%', height: '300px', padding: '20px' }}
                    variant="top"
                    src={product.images}
                    alt={product.title}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                  
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <h1>No Products Found</h1>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default SingleCategory;
