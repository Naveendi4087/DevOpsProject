import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import DataTable from "react-data-table-component";
import axios from "axios";
import Service from "../components/Service";
import "../styles/Navbar.css";
const { format , parseISO} = require("date-fns");

const MyBooks = ({ user, serviceId, setServiceID, setSelectedService , setBook}) => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  const getServices = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/services/${user._id}`
      );
      setServices(response.data); // Update here to set the response data
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  const deleteService = async (id) => {
    console.log(id);
    try {
      console.log(id);
      await axios.delete(`http://localhost:5000/service/${id}`);
      alert("Service deleted");
      getServices();
    } catch (err) {
      console.log(err.message);
    }
  };

  const getSingleService = (service) => {
    console.log(service._id);
    setServiceID(service._id);
    console.log(serviceId);
    setSelectedService(service.name);
    setBook(service);
    navigate("/service/edit");
  };

  const signOut = () => {
    navigate("/login");
  };

  return (
    <div>
      <div>
        <h2>Selected Services</h2>
      </div>

      <hr />
      {services.length === 0 ? (
        <p className="--py">No services added. Please add a service</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>service</th>
              <th>Booked Date</th>
              <th>From</th>
              <th>To</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((rowData) => (
              <tr>
                <td>{rowData.name}</td>
                <td>{format(parseISO(rowData.bookedDate), "dd-MM-yyyy")}</td>
                <td>{rowData.from}</td>
                <td>{rowData.to}</td>
                <td>
                  <FaEdit
                    className="edit"
                    onClick={() => {
                      getSingleService(rowData);
                    }}
                  />
                  <FaRegTrashAlt
                    onClick={() => deleteService(rowData._id)}
                    className="delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyBooks;
