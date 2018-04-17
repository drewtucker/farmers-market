import React, { Component } from "react";
import ReactDOM from "react-dom";
import veggies from "../assets/img/veggies.jpeg";
import PropTypes from 'prop-types'

function Header(){

  var headerStyles = {
    backgroundImage: `url(${veggies})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center',
    color: 'beige',
    borderStyle: 'solid'
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">

      <div className="jumbotron" style={headerStyles}>
        <h1>Avery's Organics</h1>
        <h3>Organic, Seasonal Fruits and Vegetables</h3>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Header;
