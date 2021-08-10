import React from "react";
import {  Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Navigation.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import { useContext } from "react";




const Navigation = () => {
  const [cart, setCart] = useContext(CartContext);
  const total = cart.reduce((total,pd) => total+parseInt(pd.price),0)

  // console.log("Cart From Navigation", cart)
  
  return (
    <div className="textBold">
      <Navbar bg="warning">
        <div className="container">
          <Nav className="me-auto siteNavigation">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/product">Features</Nav.Link>
            <Nav.Link href="/addProduct">Add Product</Nav.Link>
          </Nav>

          <div className="cartItem">
              <Link className="link" to="/order"> 
               <FontAwesomeIcon icon={faShoppingCart} />  {cart.length} Item In My Cart -  <b> &#2547;</b> {total}
              </Link>
          </div>

        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
