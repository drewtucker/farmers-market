import React from "react";
import PropTypes from "prop-types";
import Day from "./Day";

const marketSchedule = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];

var columnStyling = {
  borderStyle: 'solid',
  borderColor: 'beige',
  boxShadow: '1px 1px 5px 1px yellowgreen'
}

function Schedule(props){
  return (
    <div>

      <div className="col-md-2"></div>
    <div className="col-md-3" style={columnStyling}>
      <h2>Where to find us:</h2>
      <hr></hr>
      {marketSchedule.map((day, index) =>
      <Day day={day.day}
        location={day.location}
        hours={day.hours}
        booth={day.booth}
        key={index}/>
    )}
    </div>
  </div>
  );
}

export default Schedule;
