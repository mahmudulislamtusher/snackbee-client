import React, { useState } from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../App";
import "./Product.css";

const Product = (props) => {
  const {name, price, imageURL, _id} = props.snack;
  console.log(_id)
 const [cart, setCart] = useContext(CartContext);
 
  // const snack = props.snack;

  // const addToCart = (snacks) => {
  //   console.log(snacks)
  //     const newCart = [...cart, snacks]
  //     setCart(newCart)
  // }

  return (
    <div className="container mt-5 col-md-3">
        <div className="card p-2 bgColor" style={{ width: "16rem", "marginLeft": "5px"}}>
          <img className="card-img-top" src={imageURL} alt="" style={{"height": "250px"}}/>
          <div className="card-body">
            <p className="card-title text-center">
              {name} {price} <p className="d-inline font-weight-bold"> <b> &#2547; </b> </p>
            </p>
          </div>
          <Button  onClick={() => props.addToCart(props.snack)} className="btn-warning p-2">Add to Cart</Button>
        </div>
    </div>
  );
};

export default Product;
