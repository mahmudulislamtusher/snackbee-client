import React from "react";
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
import "./Home.css";
import { Button } from 'react-bootstrap';
import Navigation from "../Navigation/Navigation";
import Slider from "../Slider/Slider";
import Action from "../Action/Action";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import BeatLoader from "react-spinners/BeatLoader";

import { useContext } from 'react';
import { CartContext, UserContext } from '../../App';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [snacks, setSnack] = useState([])
  const [cart, setCart] = useContext(CartContext);


  const addToCart = (snacks) => {
    console.log(snacks)
    const newCart = [...cart, snacks]
    setCart(newCart)
  }
  console.log("Cart From Home", cart)

  useEffect(() => {
    fetch('https://aqueous-badlands-43926.herokuapp.com/snacks')
    .then(res =>  res.json())
    .then(data => setSnack(data))
  },[])

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

      <Slider />
      <Action />

      <div className="container">
        <div className="row">
          {
            snacks.length === 0 && 
            <center>
              <BeatLoader 
              className="BeatLoader" 
              color={"#FFC107"} 
              loading={snacks} 
              size={150}
              />
            </center>

          }
          {
            snacks.map(snack => <Product 
              snack={snack}
              key={snack._id}
              addToCart = {addToCart}
              />)
          }
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
