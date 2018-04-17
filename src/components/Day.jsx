import React from "react";
import PropTypes from "prop-types";

function Day(props){
  return(
    <div>
      <h3><strong>{props.day}</strong></h3>
      <h4>{props.location}</h4>
      <h4>{props.hours}</h4>
      <h5>Booth: {props.booth}</h5>
      <hr/>
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;
