import React, { useContext, useState } from "react";
import { CartContext, UserContext } from "../../App";
import OrderNow from "../OrderNow/OrderNow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faYoutube,
  faFacebook,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../images/SnackBee.png";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import './CartDetails.css';

const CartDetails = ({snack}) => {
    // const{name,imgUrl, price, _id} =props.snack;
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [cart, setCart] = useContext(CartContext);

  console.log(cart);

  const total = cart.reduce((total, snack) => total + parseInt(snack.price), 0)

  const removeProduct=(key)=>{
    console.log('remove product', key)
    const newCart = cart.filter(snack =>snack._id !== key)
    setCart(newCart)
}


  return (
    <div>
      <div className="header">
        <div className="container d-flex justify-content-between">
          <div className="socialIcon">
            <FontAwesomeIcon  style={{"marginRight": "25px", "fontSize": "20px", "color": "#4267B2"}}  icon={faFacebook} />
            <FontAwesomeIcon  style={{"marginRight": "25px", "fontSize": "20px", "color": "#8a3ab9"}}  icon={faInstagram} />
            <FontAwesomeIcon  style={{"marginRight": "25px", "fontSize": "20px", "color": "#1DA1F2"}}  icon={faTwitter} />
            <FontAwesomeIcon  style={{"marginRight": "25px", "fontSize": "20px", "color": "#FF0000"}}  icon={faYoutube} />
            <FontAwesomeIcon  style={{"fontSize": "20px", "color": "#DB4437"}}   icon={faGoogle} />
          </div>
          <div className="sign-in">
            <p>
              <span> 
                <Link to="/signIn" style={{"textDecoration": "none", "color": "#ffac1d"}}>
                  Sign in{" "}
                </Link>
              </span>
               or 
              <span>
              <Link to="/signUp" style={{"textDecoration": "none", "color": "#ffac1d"}}>
                  {" "}Sign Up
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="myAccount container d-flex justify-content-between my-3">
        <div className="logo">
          <Link to="/home">
              <img src={Logo} alt="SnackBee" className="logo" />
          </Link>
        </div>
        <div className="searchBar">
          <form className="searchItem" >
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>

        <div className="signInAccount">
               <Button variant="outline-warning" size="lg"> 
                    {
                      loggedInUser.email && loggedInUser.email ? 
                      <div>
                        <p>{loggedInUser.name} </p>
                        <img src={loggedInUser.photoURL} alt={""} style={{"width": "30px", "height": "30px", "borderRadius": "50%"}}/>
                      </div> 
                      : 
                      <p>
                        My Account 
                        <FontAwesomeIcon style={{"marginLeft": "5px"}} icon={faUserCircle} />
                      </p> 
                    }
               </Button>
          </div>
      </div>

      <div className="sticky-top">
         <Navigation />
      </div>

        <div className="container d-flex">
        <div className="col-md-8">
            {cart.map((snack) => (
                <OrderNow snack={snack} removeProduct={removeProduct}></OrderNow>
            ))}
        </div>

        <div className="orderSummary col-md-4 my-3">
          <h3>Order Summary</h3>
          <div className="d-flex justify-content-between">
            Items In Cart:
            <p>
              {cart.length} <span>&#2547;</span>
            </p>
          </div>

          <div className="d-flex justify-content-between">
            {" "}
            Tax + Vat:
            <p>
              {total / 10} <span>&#2547;</span>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            {" "}
            Shipping Charges:
            <p>
              {30} <span>&#2547;</span>
            </p>
          </div>

          <div className="d-flex justify-content-between">
            Total:
            <p>
              {total + total / 10 + 30}{" "}
              <span>&#2547;</span>
            </p>
          </div>
          <button className="btn btn-success w-100 my-3">Proceed Check Out</button>
        </div>
        
      </div>

          <Footer />
    </div>
  );
};

export default CartDetails;
