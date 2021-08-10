import React from "react";
import axios from "axios";
import "./AddProduct.css";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
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
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

const AddProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.description,
      price: data.price,
      imageURL: imageURL,
    };
    console.log(eventData);
    const url = "https://aqueous-badlands-43926.herokuapp.com/addProduct"
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "11611fe5a6c9901dcabd5ce545e2663d");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        const imageLink = response.data.data.display_url;
          setImageURL(imageLink);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

        const [products, setLoadedProducts] = useState([])
        useEffect(() => {
          const url = ('https://aqueous-badlands-43926.herokuapp.com/products');
          fetch(url)
          .then(res => res.json())
          .then(data => setLoadedProducts(data))
        },[])

        // const [snacks, setSnack] = useState([])
        // useEffect(() => {
        //   fetch('https://aqueous-badlands-43926.herokuapp.com/snacks')
        //   .then(res =>  res.json())
        //   .then(data => setSnack(data))
        // },[])

    const handleDelete = id => {
      fetch(`https://aqueous-badlands-43926.herokuapp.com/deleteProduct/${id}`,{
          method:'DELETE',
      })
      .then(res =>res.json())
      .then(result => { console.log(result)})
      }
      // const { _id } = props?.snack;

  return (
    <div>
      <div className="header">
        <div className="container d-flex justify-content-between">
          <div className="socialIcon">
            <FontAwesomeIcon
              style={{ marginRight: "25px", fontSize: "20px" }}
              icon={faFacebook}
            />
            <FontAwesomeIcon
              style={{ marginRight: "25px", fontSize: "20px" }}
              icon={faInstagram}
            />
            <FontAwesomeIcon
              style={{ marginRight: "25px", fontSize: "20px" }}
              icon={faTwitter}
            />
            <FontAwesomeIcon
              style={{ marginRight: "25px", fontSize: "20px" }}
              icon={faYoutube}
            />
            <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faGoogle} />
          </div>
          <div className="sign-in">
            <p>
              <span> Sign in </span> or <span> Sign Up </span>
            </p>
          </div>
        </div>
      </div>

      <div className="myAccount container d-flex justify-content-between my-3">
        <div className="logo">
          <Link to="/">
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
            My Account
            <FontAwesomeIcon
              style={{ marginLeft: "5px" }}
              icon={faUserCircle}
            />
          </Button>
        </div>
      </div>

      <div className="sticky-top">
         <Navigation />
      </div>

      <div className="container d-flex my-3">
        <div className="col-md-3 addedProduct">
          <h2 className="text-center">Add Your Snack</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="description"
              type="text"
              className="form-control w-100 mb-2"
              placeholder="Snack Name"
              {...register("description", { required: true })}
            />
            <input
              name="price"
              type="number"
              className="form-control w-100 mb-2"
              placeholder="Snack Price"
              {...register("price", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              type="file"
              className="form-control-file pictureUpload w-100"
              onChange={handleImageUpload}
            />

            <input type="submit" className="btn w-100 btn-warning" />
          </form>
        </div>

        <div className="col-md-9 addProductMain">
          <h2 className="text-center">Added Snack List</h2>
          <div>
            {
              products.map(product => 
              <div className=" table snackItem d-flex justify-content-around align-items-center mb-3"> 
                    <img src={product.imageURL} alt={""} style={{"width": "100px", "height": "100px"}}/>
                    <p>{product.name}</p>
                    <p>{product.price} <b> &#2547;</b> </p>
                    <button className="btn btn-success">
                      <Link className="link" style={{ color: 'white' }} to={"/editProduct/" + product._id}> Edit </Link>
                    </button>
                    <button onClick={() => handleDelete(`${product._id}`)}  className="btn btn-danger">Delete</button>
              </div>)
            }
          </div>
          

        </div>
      </div>
      <Footer />
    </div>
  );
};


export default AddProduct;