import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { TimePicker } from "react-ios-time-picker";

const BookService = ({
  serviceImg,
  setServiceImg,
  selectedService,
  setSelectedService,
  user
}) => {
  const [serviceName, setServiceName] = useState(selectedService);
  const [bookedDate, setBookedDate] = useState("");
  const [fromTime, setFromTime] = useState("00:00");
  const [toTime, setToTime] = useState("00:00");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
     const data = {
      name: selectedService,
      bookedDate: bookedDate,
      user: user._id,
      from: fromTime,
      to: toTime
     }
     await axios.post("http://localhost:5000/service", data);
     alert('Service added')
     navigate('/services');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="login">
      <div className="leftSide">
        <h1>Book Service</h1>
        <h2>{serviceName}</h2>
        <form id="login-form" method="POST">
          <label htmlFor="bookedDate">Booked Date</label>
          <DatePicker
            name="bookedDate"
            selected={bookedDate}
            onChange={(date) => setBookedDate(date)}
          />
          <label htmlFor="fromTime">From Time</label>
          <TimePicker
            name="fromTime"
            value={fromTime}
            onChange={(time) => setFromTime(time)}
          />

          <label htmlFor="toTime">To Time</label>
          <TimePicker
            name="toTime"
            value={toTime}
            onChange={(time) => setToTime(time)}
          />

          <button type="submit" onClick={submit}>
            Book Service
          </button>
        </form>
        <br />
        <br />
      </div>
      <div className="rightSide"></div>
    </div>
  );
};

export default BookService;
