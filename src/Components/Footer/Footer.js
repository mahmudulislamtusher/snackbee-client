import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import './Footer.css'
import paymentMethod from'../images/paymentMethod.png'

const Footer = () => {
  return (
    <div className="mt-5">
        <div className="subscriptionArea">
            <div className="container d-flex justify-content-between">
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faPaperPlane} className="paperPlane"/>
                        <div className="ml-3">
                            <h4>Signup For Getting New Offer!!!</h4>
                            <p>We will never share your email address with a third-party</p>
                        </div>
                    </div>
                    <div className="subscriptionBar my-2">
                    <form className="subscriptionForm">
                        <input type="email" placeholder="Enter Your Email Address" name="search" />
                        <button type="submit"> Subscribe </button>
                    </form>
                    </div>
                </div>
        </div>
    
      <div className="container servicesArea d-flex justify-content-between my-5">
          <div className="contact">
                <h5>CONTACT US</h5>
                <p> <FontAwesomeIcon className="contactIcon" icon={faMapMarkerAlt}/> Somewhere of this universe</p>
                <p> <FontAwesomeIcon className="contactIcon" icon={faPhoneAlt}/> (+880)0181 000 0000</p>
                <p> <FontAwesomeIcon className="contactIcon" icon={faEnvelope}/> snackBee@info.com</p>
          </div>

          <div className="shops">
                <h5>OUR SHOPS</h5>
                <li>La Italia</li>
                <li>Best Inn</li>
                <li>Out Back Stack House</li>
                <li>State Of Food</li>
                <li>Fenian</li>
                <li>Test and Best</li>
          </div>

          <div className="information">
                <h5>OUR SHOPS</h5>
                <li>Layout</li>
                <li>features</li>
                <li>Shop</li>
                <li>Bonus Page</li>
                <li>Blog</li>
                <li>Contact Us</li>
          </div>

          <div className="catagories">
                <h5>CATAGORIES</h5>
                <li>Vegetable Items</li>
                <li>Chicken</li>
                <li>Steak</li>
                <li>Juice</li>
                <li>Sauce</li>
          </div>

          <div className="gallery">
                <h5>PHOTO GALLERY</h5>
          </div>

      </div>
      <div className="copyrightArea">
        <div className=" container d-flex justify-content-between">
            <p>&copy;  2021 SnackBee - Designed by Mahmudul Islam </p>
            <img src={paymentMethod} alt="Payment Method"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
