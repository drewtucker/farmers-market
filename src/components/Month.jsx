import React from "react";
import PropTypes from "prop-types";

function Month(props){
  return(
    <div>
      <h3><strong>{props.month}</strong></h3>
      <h5>Produce Availabe:</h5>
      <ul>{props.selection.map((item, index) =>
          <li>{item}</li>
          )}</ul>
    </div>
  );
}


Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Month;
