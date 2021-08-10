import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faShieldAlt, faGift, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import './Action.css'

const Action = () => {
  return (
    <div className="container orderAction">
      <div className="d-flex justify-content-around">

        <div className="productStatus">
            <div className="d-flex">
                <FontAwesomeIcon className="actionIcon" icon={faTruck} />
                <div>
                    <h4>FREE DELIVERY</h4>
                    <p>On order over &#2547; 20.00</p>
                </div>
            </div>
        </div>

        <div className="productStatus">
            <div className="d-flex">
                <FontAwesomeIcon className="actionIcon" icon={faShieldAlt} />
                <div>
                    <h4>ORDER PROTECTION</h4>
                    <p>Secured Information</p>
                </div>
            </div>
        </div>

        <div className="productStatus">
            <div className="d-flex">
                <FontAwesomeIcon className="actionIcon" icon={faGift} />
                <div>
                    <h4>PROMOTION GIFT</h4>
                    <p>Special Offers</p>
                </div>
            </div>
        </div>

        <div className="productStatus">
            <div className="d-flex">
                <FontAwesomeIcon className="actionIcon" icon={faMoneyBillAlt} />
                <div>
                    <h4>REFUND POLICY</h4>
                    <p>Return Over 7 days</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Action;
