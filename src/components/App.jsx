import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Schedule from "./Schedule";
import AvailableProduce from "./AvailableProduce";

function App(){
  return(
    <div>
      <Header/>
      <div className="row">
        <Schedule/>
        <div className="col-md-2">

        </div>
        <AvailableProduce/>

      </div>
    </div>
  );
}

export default App;
