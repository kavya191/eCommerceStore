import React, { useEffect, useState } from 'react'

import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row,Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
const Home = () => {
    const [products, setProducts] = useState([]);
  //api call

  const getAllProducts = async () => {
    const result = await axios.get("https://api.escuelajs.co/api/v1/products");
    console.log(result.data);
    setProducts(result.data);
    console.log(products);
  };

  //to load all contact details while open home page
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
    <Container >
        <Row>
        {products.length > 0 ? (
          products.map((i) => (
            <Col lg={4} md={4}>
                 <Link
                to={`/single/${i.title}`}
                style={{ textDecoration: "none" }}
              >
           <Card className='d-flex justify-content-center' style={{ width: '100%', marginTop:"20px",height:"500px",marginBottom:"20px" }}>
                    <Card.Img style={{width:"100%",height:"300px",padding:"20px"}} variant="top" src={i.images} />
                    <Card.Body>
                        <Card.Title>
                        {i.title}
                        </Card.Title>
                        
                        <Card.Text>{i.price}</Card.Text>
                       
                        <Button variant="primary" >Add To cart</Button>
                      
                            {/* <Heart className='text-danger ms-3' onClick={()=>{dispatch(addTowishlist(item))}}></Heart> */}
                       
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

export default Home
