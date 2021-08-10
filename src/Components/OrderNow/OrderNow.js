import React from 'react';
import './OrderNow.css'
import { Link } from 'react-router-dom';

const OrderNow = ({snack}) => {

    return (
        <div className="container">
           
            <div className="orderedItem my-3 p-2 d-flex justify-content-around align-items-center">
                    <img className="orderImage" src={snack?.imageURL} alt="" />
                    <div> 
                    <p> Product Name : {snack?.name}</p>
                    <p> Product Price: {snack?.price} <span>&#2547;</span> </p>
                    </div>
                    <button className="btn btn-warning"> Remove </button>
                
           </div>
        {/* <Link to='/home'>Order Another Items</Link> */}
        </div>
    );
};

export default OrderNow;