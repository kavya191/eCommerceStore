import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div >
    <nav class="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
<div class="container-fluid">
<a class="navbar-brand" href="#">eCommerce Store</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarColor01">
  <ul class="navbar-nav me-auto">
    <li class="nav-item">
     <Link to={""} style={{textDecoration:"none"}}>
      <a class="nav-link active" >Home
        <span class="visually-hidden">(current)</span>
      </a>
      </Link>
    
    </li>
  </ul>
   <Link to={"/category"} style={{textDecoration:"none"}}>
   <a class="nav-link active" >Categories
        <span class="visually-hidden">(current)</span>
      </a>
  </Link>

{/*
  <Link to={'/cart'}>
    <Button className="text-white  me-3" type="submit">
      <ShoppingCart></ShoppingCart>{" "}
      <b>{cartArray.length}</b>
      </Button>
    </Link> */}




</div>
</div>
</nav>
</div>
  )
}

export default Header
