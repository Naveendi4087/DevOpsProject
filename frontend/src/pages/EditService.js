import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { TimePicker } from "react-ios-time-picker";
import format from "date-fns/format";

const EditService = ({
  serviceImg,
  setServiceImg,
  selectedService,
  setSelectedService,
  user,
  serviceID,
  setServiceID,
  book
}) => {
  const [service, setService] = useState(book);
  const [serviceName, setServiceName] = useState(selectedService);
  const [bookedDate, setBookedDate] = useState(new Date(book.bookedDate));
  const [fromTime, setFromTime] = useState(book.from);
  const [toTime, setToTime] = useState(book.to);
  const navigate = useNavigate();


  const submit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: selectedService,
        bookedDate: bookedDate,
        user: user._id,
        from: fromTime,
        to: toTime,
      };
      await axios.put(
        `http://localhost:5000/service/${book._id}`,
        data
      );
      alert("Service updated");
      navigate("/services/myBooks");
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
            Update Service
          </button>
        </form>
        <br />
        <br />
      </div>
      <div className="rightSide"></div>
    </div>
  );
};

export default EditService;
