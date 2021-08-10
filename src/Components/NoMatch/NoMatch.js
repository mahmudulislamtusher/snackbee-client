import React from 'react';
import { Link } from 'react-router-dom';
import noMatch from '../images/404.png';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className="container">
            <div className="errorMessage">
                <img  src={noMatch} alt={""}/>
                <center>
                <button className="btn btn-success">
                   <Link to="/home" className="link"> Go back friend, go back</Link>
                </button>
                </center>
            </div>
        </div>
    );
};

export default NoMatch;
