import React from "react";
import "./SignUp.css";
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
import { Button } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import googleButton from "../images/googleButton.png";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../SignIn/firebase.config";
import { useContext } from "react";

import { useHistory, useLocation } from "react-router-dom";
import { CartContext, UserContext } from "../../App";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}else {
  firebase.app();
}

const SignUp = () => {
  const [newRegisteredUser, setRegisteredUser] = useState(false)

  const {user, setNewUser} = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: ""
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        const { displayName, photoURL, email } = result.user;
        const signedInUser = { name: displayName, email, photoURL };
        setLoggedInUser(signedInUser);
        console.log(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage);
      }); 
  };

  // Register Form Handler
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
      const newUser = {
        isSignedIn: true,
        name: data.name,
        email: data.email,
        password: data.password
      }
      const userStateUpdate = () => {
        const newRegisteredUser = {...newUser}
        newRegisteredUser.err = ""
        newRegisteredUser.success = true;
        setNewUser(newRegisteredUser)
        setLoggedInUser(newRegisteredUser)
      }
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
          userStateUpdate();
          // updateUserName(user.name)
      })
      .catch((error) => {
          console.log(error);   
      });
      console.log(newUser)
    }

  return (
    <div>
      <div className="header">
        <div className="container d-flex justify-content-between">
          <div className="socialIcon">
            <FontAwesomeIcon
              style={{
                marginRight: "25px",
                fontSize: "20px",
                color: "#4267B2",
              }}
              icon={faFacebook}
            />
            <FontAwesomeIcon
              style={{
                marginRight: "25px",
                fontSize: "20px",
                color: "#8a3ab9",
              }}
              icon={faInstagram}
            />
            <FontAwesomeIcon
              style={{
                marginRight: "25px",
                fontSize: "20px",
                color: "#1DA1F2",
              }}
              icon={faTwitter}
            />
            <FontAwesomeIcon
              style={{
                marginRight: "25px",
                fontSize: "20px",
                color: "#FF0000",
              }}
              icon={faYoutube}
            />
            <FontAwesomeIcon
              style={{ fontSize: "20px", color: "#DB4437" }}
              icon={faGoogle}
            />
          </div>
          <div className="sign-in">
            <p>
              <span>
                <Link
                  to="/signIn"
                  style={{ textDecoration: "none", color: "#ffac1d" }}
                >
                  Sign in{" "}
                </Link>
              </span>
              or
              <span>
                <Link
                  to="/signUp"
                  style={{ textDecoration: "none", color: "#ffac1d" }}
                >
                  {" "}
                  Sign Up
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
          <form className="searchItem">
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

      <Container>
        <div className="logInForm my-4">

          <form  onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control" placeholder="Name" {...register("name", { required: true})} />
            <br />
            <input className="form-control" placeholder="Email" {...register("email", { required: true})} />
            <br />
            <input className="form-control" placeholder="Password" type="password" {...register("password",{minLength: 6})}/>
            <button type="submit" className="btn btn-warning w-100 mt-3">Register</button>
          </form>   

          <p className="googleSignUp my-4">
            <span>Sign Up With Google</span>
          </p>
          <button className="btn btn-primary w-100" onClick={handleGoogleSignIn} >
            <img src={googleButton} alt="" className="googleButton" />
            Sign Up with Google
          </button>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default SignUp;
