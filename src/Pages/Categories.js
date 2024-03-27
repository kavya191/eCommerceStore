import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

  
    const getAllCategories = async () => {
      const result = await axios.get("https://api.escuelajs.co/api/v1/categories");
      // console.log(result.data);
      setCategories(result.data);
      // console.log(categories);
    };
    
  
    //to load all contact details while open home page
    useEffect(() => {
      getAllCategories();
    }, []);
  return (
    <div>
       <Container >
        <Row>
        {categories.length > 0 ? (
          categories.map((i) => (
            <Col lg={4} md={4}>
                 <Link key={i.id}
                to={`/singlecat/${i.id}`}
                style={{ textDecoration: "none" }}
              >
           <Card className='d-flex justify-content-center' style={{ width: '100%', marginTop:"20px",height:"500px",marginBottom:"20px" }}>
                    <Card.Img style={{width:"100%",height:"300px",padding:"20px"}} variant="top" src={i.image} />
                    <Card.Body>
                        <Card.Title>
                        {i.name}
                        </Card.Title>
                        
                        <Card.Text></Card.Text>
                       
                        <Button variant="primary" >Add To cart</Button>
                      
                        
                       
                    </Card.Body>
                </Card>
                </Link>
            </Col>
               ))
               ) : (
                 <h1>No product Found</h1>
               )}  
     
        </Row>
    </Container>
    </div>
  )
}

export default Categories
