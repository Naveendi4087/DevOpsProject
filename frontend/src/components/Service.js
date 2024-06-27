import React from "react";
import { FaEdit, FaCheckDouble, FaRegTrashAlt } from "react-icons/fa";
import { format } from "date-fns";

const Service = ({ service, index, deleteService, getSingleService }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "yyyy-MM-dd HH:mm");
  };

  return (
    <div>
      <p>
        <b>{index + 1}</b>
        {service.name}
        {service.bookedDate}
        {formatDate(service.from)}
        {formatDate(service.to)}
      </p>
      <div>
        <FaEdit
          color="purple"
          onClick={() => {
            getSingleService(service);
          }}
        />
        <FaRegTrashAlt
          color="red"
          onClick={() => {
            deleteService(service._id);
          }}
        />
      </div>
    </div>
  );
};

export default Service;
