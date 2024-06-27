import React from "react";
import { ServicesList } from "../helpers/ServicesList";
import ServicesItem from "../components/ServicesItem";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Services.css";

function Services({
  serviceImg,
  setServiceImg,
  setSelectedService,
  selectedService,
}) {
  const navigate = useNavigate();

  const handleServiceClick = async (serviceName, serviceImg) => {
    await setSelectedService(serviceName);
    setServiceImg(serviceImg);
    navigate("/book");
  };

  return (
    <div className="services">
      <h1 className="servicesTitle">Our Services</h1>
      <div className="servicesList">
        {ServicesList.map((servicesItem, key) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              onClick={() =>
                handleServiceClick(servicesItem.name, servicesItem.image)
              }
            >
              <ServicesItem
                key={key}
                image={servicesItem.image}
                name={servicesItem.name}
                price={servicesItem.price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
