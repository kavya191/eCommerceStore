import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

const Viewsingle = () => {
      //create state to hold output of api
  const [allProducts,setAllProducts]=useState([])
  //create object for useParams hook
  const {id}=useParams()
  //console.log(id);

  //create function to access all product details
   const getAllProductt=async()=>{
    const {data}=await axios.get('https://api.escuelajs.co/api/v1/products')
    //console.log(data);
    setContacts(data.contacts)
    
   }
   //allContacts arrayil ninnu find method use cheythu mobile number eduthu.mobile no params aayitt koduth id aayiitt equal aanengil contact details desplay cheyyum
   const contact=allContacts.find(i=>i.mobile==id)
    console.log(contact);
   
//
   useEffect(()=>{
    getAllContact()
   },[])
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Viewsingle
